import React from "react";
import styles from "./TitleInput.module.scss";
import { Container } from "react-bootstrap";
import { InputText } from "primereact/inputtext";
import { useDispatch, useSelector } from "react-redux";
import { newArticleActions } from "@/store/new-article";
const ArticleTitleInput = ({ id }) => {
  const dispatch = useDispatch();
  const sectionData = useSelector((state) => {
    return state.newArticle.sections.find((section) => {
      return section.id === id;
    }).data;
  });

  const updateSectionData = (...args) => {
    dispatch(newArticleActions.updateData(...args));
  };
  return (
    <Container className={styles.articleTitleInputContainer}>
      <h5 className={styles.sectionTitle}>Title:</h5>
      <InputText
        placeholder="Article Title"
        value={sectionData.title ? sectionData.title : ""}
        onChange={(e) => {
          updateSectionData({
            componentName: "title",
            id: id,
            dataToUpdate: "title",
            newData: e.target.value,
          });
        }}
        className={styles.articleTitleInput}
      />
    </Container>
  );
};

export default ArticleTitleInput;
