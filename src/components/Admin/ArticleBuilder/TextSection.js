import React, { useState } from "react";
import styles from "./TextSection.module.scss";
import { Container } from "react-bootstrap";
import { InputText } from "primereact/inputtext";

import { InputTextarea } from "primereact/inputtextarea";
import { debounce } from "@/utils/helperFn";
import { useDispatch, useSelector } from "react-redux";
import { newArticleActions } from "@/store/new-article";
import { getLiveDatabase } from "@/utils/firebaseFn";
const TextSection = ({ id }) => {
  const dispatch = useDispatch();
  const sectionData = useSelector((state) => {
    return state.newArticle.sections.find((section) => {
      return section.id === id;
    }).data;
  });

  const updateSectionData = async (...args) => {
    const pula = await getLiveDatabase("articles");
    dispatch(newArticleActions.updateData(...args));
  };
  return (
    <Container className={styles.sectionContainer}>
      <h5 className={styles.sectionTitle}>Text Section:</h5>
      <InputText
        placeholder="Section Title"
        value={sectionData.title ? sectionData.title : ""}
        onChange={(e) => {
          updateSectionData({
            componentName: "text-section",
            id: id,
            dataToUpdate: "title",
            newData: e.target.value,
          });
        }}
        className={styles.title}
      />
      <InputTextarea
        placeholder="Section Content"
        onChange={(e) => {
          let contentParagtaphs = e.target.value.split(/\r?\n/);
          updateSectionData({
            componentName: "text-section",
            id: id,
            dataToUpdate: "content",
            newData: contentParagtaphs,
          });
        }}
        className={styles.content}
      />
    </Container>
  );
};

export default TextSection;
