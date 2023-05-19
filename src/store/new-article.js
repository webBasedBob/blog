import { createSlice } from "@reduxjs/toolkit";
const createId = (sectionName, index) => {
  return sectionName + "index-" + index;
};

const mergeImagesNoDuplicates = (arr1, arr2) => {
  const imageNames = {};
  const mergedArr = [];
  arr1.forEach((element) => {
    if (!Object.hasOwn(imageNames, element.title)) {
      mergedArr.push(element);
      imageNames[element.name] = true;
    }
  });
  arr2.forEach((element) => {
    if (!Object.hasOwn(imageNames, element.title)) {
      mergedArr.push(element);
      imageNames[element.name] = true;
    }
  });
  return mergedArr;
};
export const newArticleStore = createSlice({
  name: "new-article",
  initialState: { sections: [], metaData: {} },
  reducers: {
    addSection(state, action) {
      const index = state.sections.length;
      const id = createId(action.payload, index);
      const sectionItem = {
        componentName: action.payload,
        props: { id: id, key: id },
        id: id,
        data: {},
      };

      state.sections.push(sectionItem);
    },

    updateData(state, action) {
      const {
        payload: { componentName, dataToUpdate, id, newData },
      } = action;
      const targetSection = state.sections.find((section) => {
        return section.id === id;
      }).data;
      targetSection[dataToUpdate] = newData;
    },

    updateImageData(state, action) {
      const {
        payload: { componentName, dataToUpdate, id, newData },
      } = action;
      const targetSection = state.sections.find((section) => {
        return section.id === id;
      }).data;

      const mustResetState = newData.length === 0;
      if (mustResetState) {
        targetSection[dataToUpdate] = [];
      }

      if (componentName === "image-gallery") {
        targetSection[dataToUpdate] = targetSection[dataToUpdate]
          ? mergeImagesNoDuplicates(targetSection[dataToUpdate], newData)
          : newData;
      } else {
        targetSection[dataToUpdate] = newData;
      }
    },
    addMetaData(state, action) {
      state.metaData = { ...state.metaData, ...action.payload };
    },

    addImage(state, action) {},

    addGallery(state, action) {},

    addTextSection(state, action) {},
  },
});
export const newArticleActions = newArticleStore.actions;
