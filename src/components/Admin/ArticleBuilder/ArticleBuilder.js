import React, { useRef, useState } from "react";
import styles from "./ArticleBuilder.module.scss";
import Menu from "./Menu";
import { Container } from "react-bootstrap";
import Navigation from "../../Layout/Navigation/Navigation";
import PageWrapper from "../../UI/PageWrapper";
import { InputText } from "primereact/inputtext";
import ArticleTitleInput from "./TitleInput";
import ArticleMainImageInput from "./ImageUpload";
import TextSection from "./TextSection";
import { useDispatch, useSelector } from "react-redux";
import { newArticleActions } from "@/store/new-article";

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
      <Navigation />
      <PageWrapper>
        <Container className={styles.articleContainer}>
          {sections.map((section) => {
            return getSectionComponent(section.componentName, section.props);
          })}
        </Container>
        <Menu handleAddSection={addSection} />
      </PageWrapper>
    </>
  );
};

export default BlogPostEditor;
