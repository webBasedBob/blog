import React, { useRef, useState } from "react";
import styles from "./ArticleBuilder.module.scss";
import Toolbar from "./Toolbar";
import { Container } from "react-bootstrap";
import Navigation from "../../Layout/Navigation/Navigation";
import PageWrapper from "../../UI/PageWrapper";
import { InputText } from "primereact/inputtext";
import ArticleTitleInput from "./TitleInput";
import ArticleMainImageInput from "./ImageUpload";
import TextSection from "./TextSection";
import { useDispatch, useSelector } from "react-redux";
import { newArticleActions } from "@/store/new-article";
import ErrorModal from "@/components/ErrorModal/ErrorModal";
import LabelDropdown from "./MetaData";

const getSectionComponent = (componentName, props) => {
  const components = {
    title: <ArticleTitleInput {...props} />,
    "image-main": <ArticleMainImageInput type="main" {...props} />,
    "text-section": <TextSection {...props} />,
    "image-regular": <ArticleMainImageInput {...props} />,
    "image-gallery": <ArticleMainImageInput type="gallery" {...props} />,
  };
  return components[componentName];
};
const BlogPostEditor = () => {
  const dispatch = useDispatch();
  const sections = useSelector((state) => state.newArticle.sections);

  const addSection = (sectionName) => {
    dispatch(newArticleActions.addSection(sectionName));
  };

  return (
    <>
      <ErrorModal />
      <Navigation />
      <PageWrapper>
        <Container className={styles.articleContainer}>
          <LabelDropdown />
          {sections.map((section) => {
            return getSectionComponent(section.componentName, section.props);
          })}
        </Container>
        <Toolbar handleAddSection={addSection} />
      </PageWrapper>
    </>
  );
};

export default BlogPostEditor;
