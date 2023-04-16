import { getImgUrl, storeImage } from "./firebaseFn";
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

export const prepareArticleDataForUpload = async (newArticleData) => {
  const finalArticleData = {};

  for (let index = 0; index < newArticleData.length; index++) {
    const targetSection = newArticleData[index];
    const targetSectionName = targetSection.componentName;
    const sectionIsEmpty = !Object.keys(targetSection.data).length;

    if (sectionIsEmpty) {
      throw new Error("A section you try to upload is empty.");
    }

    if (targetSectionName.includes("image")) {
      if (targetSectionName.includes("gallery")) {
        const imagesArr = targetSection.data.images;
        const galleryFinalData = [];

        for (let i = 0; i < imagesArr.length; i++) {
          galleryFinalData.push(
            await handleImageUpload(imagesArr[i], "articles-images")
          );
        }

        finalArticleData[targetSectionName] = galleryFinalData;
      } else {
        finalArticleData[targetSectionName] = await handleImageUpload(
          newArticleData[0].data.image,
          "articles-images"
        );
      }
    } else {
      finalArticleData[targetSectionName] = targetSection.data;
    }
  }
  return finalArticleData;
};
