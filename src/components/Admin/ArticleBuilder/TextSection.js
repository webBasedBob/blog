import React, { useState } from "react";
import styles from "./TextSection.module.scss";
import { Container } from "react-bootstrap";
import { InputText } from "primereact/inputtext";

import { InputTextarea } from "primereact/inputtextarea";

const TextSection = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  return (
    <Container className={styles.sectionContainer}>
      <InputText
        placeholder="Section Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        className={styles.title}
      />
      <InputTextarea
        placeholder="Section Content"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        className={styles.content}
      />
    </Container>
  );
};

export default TextSection;
