import { getImgUrl, getLiveDatabase, storeImage } from "./firebaseFn";
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
  const imageFile = await getFileFromBase64(
    imageObj.base64Image,
    imageObj.title
  );
  await storeImage(imageFile, path);
  const imageUrl = await getImgUrl(imageFile.name, path);
  return { name: imageFile.name, url: imageUrl };
};

const getMetaData = () => {};

export const prepareArticleDataForUpload = async (
  newArticleSections,
  newArticleMetaData
) => {
  const finalArticleData = {};
  debugger;
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
    } else {
      finalArticleData[targetSection.id] = {
        sectionName: targetSectionName,
        order: index,
        data: targetSection.data,
      };
    }
  }
  //adding metadata before returning

  return { content: finalArticleData, metaData: newArticleMetaData };
};

export const canUploadData = async (title, newArticleData) => {
  if (!title) {
    throw new Error("The article does not have a title.");
  }
  const titleAlreadyUsed = await getLiveDatabase(`articles/${title}`);
  if (titleAlreadyUsed) {
    throw new Error("The title of your article is already used.");
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
  return "";
};
