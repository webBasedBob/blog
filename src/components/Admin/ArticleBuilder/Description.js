import React from "react";
import styles from "./TextSection.module.scss";
import { Container } from "react-bootstrap";
import { InputTextarea } from "primereact/inputtextarea";
import { useDispatch, useSelector } from "react-redux";
import { newArticleActions } from "@/store/new-article";

const Description = ({ id }) => {
  const dispatch = useDispatch();
  const updateSectionData = async (...args) => {
    dispatch(newArticleActions.updateData(...args));
  };
  return (
    <Container className={styles.sectionContainer}>
      <h5 className={styles.sectionTitle}>Description:</h5>
      <InputTextarea
        placeholder="Section Content"
        onChange={(e) => {
          updateSectionData({
            componentName: "text-section",
            id: id,
            dataToUpdate: "content",
            newData: e.target.value,
          });
        }}
        className={styles.content}
      />
    </Container>
  );
};

export default Description;
