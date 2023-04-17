import React, { useRef } from "react";
import styles from "./Toolbar.module.scss";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { InputText } from "primereact/inputtext";
import ArticleTitleInput from "./TitleInput";
import ArticleMainImageInput from "./ImageUpload";
import TextSection from "./TextSection";
import { Toolbar } from "primereact/toolbar";
import Container from "react-bootstrap/Container";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { errorActions } from "@/store/error";
import {
  getImgUrl,
  getLiveDatabase,
  storeImage,
  storeLiveDatabase,
} from "@/utils/firebaseFn";
import { images } from "../../../../next.config";
import {
  getFileFromBase64,
  prepareArticleDataForUpload,
} from "@/utils/helperFn";
const ArticleBuilderToolbar = ({ handleAddSection }) => {
  const dispatch = useDispatch();
  const addSectionRef = useRef();
  const saveSectionRef = useRef();
  const liftSelectedSection = (e) => {
    const targetLabel = e.item.label.toLowerCase();
    const targetComponent = addSectionItems.find((item) => {
      return item.label.toLowerCase() === targetLabel;
    }).component;
    handleAddSection(targetComponent);
  };
  const newArticleData = useSelector((state) => state.newArticle.sections);

  const handleSaveAndPublishArticle = async () => {
    const articleTitle = newArticleData.find((section) => {
      return section.componentName === "title";
    })?.data.title;
    if (!articleTitle) {
      dispatch(errorActions.setError("The article does not have a title."));
      return;
    }
    const titleAlreadyUsed = await getLiveDatabase(
      `published-articles/${articleTitle}`
    );
    if (titleAlreadyUsed) {
      dispatch(
        errorActions.setError("The title of your article is already used.")
      );
      return;
    }
    let finalArticleData;
    try {
      finalArticleData = await prepareArticleDataForUpload(newArticleData);
    } catch (error) {
      throw error;
      dispatch(errorActions.setError(error.message));
      return;
    }

    storeLiveDatabase(
      `articles/${finalArticleData.title.data.title}`,
      finalArticleData
    );
  };

  const addSectionItems = [
    {
      label: "Add Title",
      icon: "pi pi-pencil",
      component: "title",
      command: liftSelectedSection,
    },
    {
      label: "Add Main Image",
      icon: "pi pi-image",
      component: "image-main",
      command: liftSelectedSection,
    },
    {
      label: "Add Text Section",
      icon: "pi pi-pencil",
      component: "text-section",
      command: liftSelectedSection,
    },
    {
      label: "Add Image Section",
      icon: "pi pi-image",
      component: "image-regular",
      command: liftSelectedSection,
    },
    {
      label: "Add Gallery",
      icon: "pi pi-images",
      component: "image-gallery",
      command: liftSelectedSection,
    },
  ];
  const addSectionJSX = (
    <div>
      <Menu model={addSectionItems} popup ref={addSectionRef} />
      <Button
        label="Add Section"
        icon="pi pi-plus"
        onClick={(e) => addSectionRef.current.toggle(e)}
      />
    </div>
  );
  const saveSectionItems = [
    {
      label: "Save as draft",
      icon: "pi pi-book",
      component: "title",
      // command: liftSelectedSection,
    },
    {
      label: "Save and publish",
      icon: "pi pi-file-export",
      component: "image-main",
      command: handleSaveAndPublishArticle,
    },
    {
      label: "Save on computer",
      icon: "pi pi-download",
      component: "text-section",
      // command: liftSelectedSection,
    },
  ];
  const saveSectionJSX = (
    <div>
      <Menu model={saveSectionItems} popup ref={saveSectionRef} />
      <Button
        label="Save"
        icon="pi pi-save"
        onClick={(e) => saveSectionRef.current.toggle(e)}
      />
    </div>
  );
  const previewSectionJSX = <Button label="Preview" icon="pi pi-eye" />;
  return (
    <Container className={styles.container}>
      <Toolbar
        className={styles.toolbar}
        start={saveSectionJSX}
        center={previewSectionJSX}
        end={addSectionJSX}
      />
    </Container>
  );
};

export default ArticleBuilderToolbar;
