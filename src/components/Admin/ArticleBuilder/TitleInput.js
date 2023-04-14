import React, { useState } from "react";
import styles from "./TitleInput.module.scss";
import { Container } from "react-bootstrap";
import { InputText } from "primereact/inputtext";
const ArticleTitleInput = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <Container className={styles.articleTitleInputContainer}>
      <InputText
        placeholder="Article Title"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        className={styles.articleTitleInput}
      />
    </Container>
  );
};

export default ArticleTitleInput;
