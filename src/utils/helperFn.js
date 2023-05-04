import {
  getArticle,
  getImgUrl,
  getLiveDatabase,
  storeImage,
} from "./firebaseFn";
export const debounce = (callBack, timeout = 500) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callBack.apply(this, args);
    }, timeout);
  };
};

export const throttle = (callBack, delay = 500) => {
  let wait = false;
  return (...args) => {
    if (wait) {
      return;
    }
    callBack(...args);
    wait = true;
    setTimeout(() => {
      wait = false;
    }, delay);
  };
};

export const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      resolve(reader.result);
    };
    reader.onerror = function (error) {
      reject(error);
    };
  });
};

export const getFileFromBase64 = async (base64, name = "palceholder-name") => {
  const someMagic = await fetch(base64);
  const blob = await someMagic.blob();
  const file = new File([blob], name, { type: "image/png" });
  file.objectURL = URL.createObjectURL(file);
  return file;
};

export const handleImageUpload = async (imageObj, path) => {
  let imageFile;
  try {
    imageFile = await getFileFromBase64(imageObj.base64Image, imageObj.title);
  } catch (error) {
    throw new Error("A image section does not contain any images");
  }
  await storeImage(imageFile, path);
  const imageUrl = await getImgUrl(imageFile.name, path);
  return { name: imageFile.name, url: imageUrl };
};

const getMetaData = () => {};

export const removeWhitespace = function (str) {
  const lowerCaseTrimmedStr = str.trim().toLowerCase();
  const trimmedCharArr = lowerCaseTrimmedStr.split("").filter((char, index) => {
    if (char !== " ") {
      return true;
    } else if (lowerCaseTrimmedStr[index - 1] == " ") {
      return false;
    } else {
      return true;
    }
  });
  return trimmedCharArr.join("");
};

export const clearTitle = function (title) {
  try {
    const cleanTitle = removeWhitespace(title);
    return cleanTitle;
  } catch (error) {
    throw new Error("The article does not have a title.");
  }
};

const createSearchData = (title, metadata) => {
  let searchDataArr = [];
  const titleWords = title.split(" ");
  const labelWords = metadata.label.split(" ");
  searchDataArr.push(
    ...[title, metadata.label, ...titleWords, ...metadata.tags, ...labelWords]
  );
  const finalSearchDataArr = searchDataArr.map((el) => {
    return el.toLowerCase();
  });
  return finalSearchDataArr;
};

export const prepareArticleDataForUpload = async (
  newArticleSections,
  newArticleMetaData
) => {
  const finalArticleData = {};
  let url;
  let title;
  for (let index = 0; index < newArticleSections.length; index++) {
    const targetSection = newArticleSections[index];
    const targetSectionName = targetSection.componentName;
    const sectionIsEmpty = !Object.keys(targetSection.data).length;

    if (sectionIsEmpty) {
      throw new Error("A section you try to upload is empty.");
    }
    if (targetSectionName.includes("image")) {
      if (targetSectionName.includes("gallery")) {
        const imagesArr = targetSection.data.images;
        const galleryFinalData = {};

        for (let i = 0; i < imagesArr.length; i++) {
          const imageDataObj = await handleImageUpload(
            imagesArr[i],
            "articles-images"
          );
          galleryFinalData.image = imageDataObj.url;
        }
        finalArticleData[targetSection.id] = {
          sectionName: targetSectionName,
          order: index,
          data: galleryFinalData,
        };
      } else {
        const imageDataObj = await handleImageUpload(
          targetSection.data.image[0],
          "articles-images"
        );

        finalArticleData[targetSection.id] = {
          sectionName: targetSectionName,
          order: index,
          data: {
            image: imageDataObj.url,
            caption: targetSection.data.caption || "",
          },
        };
      }
    } else if (targetSectionName === "title") {
      title = clearTitle(targetSection.data.title);
      finalArticleData[targetSection.id] = {
        sectionName: targetSectionName,
        order: index,
        data: { title: title },
      };
      url = encodeTitleToUrl(title);
    } else {
      finalArticleData[targetSection.id] = {
        sectionName: targetSectionName,
        order: index,
        data: targetSection.data,
      };
    }
  }
  const searchData = createSearchData(title, newArticleMetaData);
  newArticleMetaData = {
    ...newArticleMetaData,
    date: strToDateObj(newArticleMetaData.date),
  };

  return {
    content: finalArticleData,
    metaData: newArticleMetaData,
    url: url,
    searchData: searchData,
  };
};

const encodeTitleToUrl = (title) => {
  const noSymbolsTitle = removeSymbols(title);
  let cleanUrl = removeWhitespace(noSymbolsTitle)
    .split("")
    .map((char) => {
      if (char === " ") {
        return "-";
      } else {
        return char;
      }
    })
    .join("");
  return cleanUrl;
};

const removeSymbols = (str) => {
  const noSymbolsStr = str
    .trim()
    .toLowerCase()
    .split("")
    .filter((char) => {
      if (
        (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) ||
        (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 57) ||
        char.charCodeAt(0) === 32
      ) {
        return true;
      } else {
        return false;
      }
    })
    .join("");
  return noSymbolsStr;
};

const decodeUrlToTitle = (url) => {
  return url.slpit("-").join(" ");
};

export const canUploadData = async (newArticleData) => {
  const rawTitle = newArticleData.sections.find((section) => {
    return section.componentName === "title";
  })?.data.title;

  let title = clearTitle(rawTitle);
  if (!title) {
    throw new Error("The article does not have a title.");
  }
  const url = encodeTitleToUrl(title);
  const titleAlreadyUsed = await getArticle(url);
  if (titleAlreadyUsed) {
    throw new Error(
      "The title of your article is already used or this is a duplicate article."
    );
  }
  const articleLabel = newArticleData.metaData.label;
  if (!articleLabel) {
    throw new Error("The article does not have a category.");
  }
  const articleDate = newArticleData.metaData.date;
  if (!articleDate) {
    throw new Error("The article does not have a date.");
  }
  const articleTags = newArticleData.metaData.tags;
  if (!articleTags?.length) {
    throw new Error("The article does not have any tags.");
  }
  const mainInage = newArticleData.sections.find((section) => {
    return section.componentName === "image-main";
  });
  if (!mainInage) {
    throw new Error("The article does not have a main image.");
  }
  return "";
};

export const transformSearchInputString = (str) => {
  const transformedStr = removeWhitespace(removeSymbols(str)).split(" ");
  return transformedStr;
};

export const transormDataForArticleCard = (article) => {
  const sections = Object.values(article.content);
  const image = sections.find((section) => section.sectionName === "image-main")
    .data.image;
  const title = sections.find((section) => section.sectionName === "title").data
    .title;
  const description = sections.find(
    (section) => section.sectionName === "description"
  ).data.content;
  const date = article.metaData.date;
  const label = article.metaData.label;
  const tags = article.metaData.tags;
  const url = article.url;
  return {
    image: image,
    title: title,
    date: date,
    label: label,
    tags: tags,
    url: url,
    description: description,
  };
};

export const strToDateObj = (str) => {
  const dateElements = str.split("/");
  const dateObj = new Date(
    dateElements[2],
    dateElements[1] - 1,
    dateElements[0]
  );
  return dateObj;
};
export const dateObjToStrAdmin = (dateObj) => {
  const str = new Intl.DateTimeFormat("en-UK").format(dateObj);
  return str;
};

export const dateObjToStr = (date) => {
  const dateObj = new Date(date.seconds * 1000);
  const str = new Intl.DateTimeFormat("en-UK").format(dateObj);
  return str;
};
export const dateObjToSeoStr = (date) => {
  const dateObj = new Date(date * 1000);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth();
  const day = dateObj.getDate();
  return `${year}-${month + 1}-${day}`;
};
