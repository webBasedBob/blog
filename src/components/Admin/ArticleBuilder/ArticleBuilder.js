import React, { useRef } from "react";
import styles from "./ArticleBuilder.module.scss";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { Container } from "react-bootstrap";
import Navigation from "../../Layout/Navigation/Navigation";
import PageWrapper from "../../UI/PageWrapper";
import { InputText } from "primereact/inputtext";
import ArticleTitleInput from "./TitleInput";
import ArticleMainImageInput from "./ImageUpload";
import TextSection from "./TextSection";
const BlogPostEditor = () => {
  const items = [
    { label: "Add Title", icon: "pi pi-pencil" },
    { label: "Add Main Image", icon: "pi pi-image" },
    { label: "Add Text Section", icon: "pi pi-pencil" },
    { label: "Add Image Section", icon: "pi pi-image" },
    { label: "Add Gallery", icon: "pi pi-images" },
  ];
  const menuRef = useRef();
  return (
    <>
      <Navigation />
      <PageWrapper>
        <Container className={styles.articleContainer}>
          <ArticleTitleInput />
          <ArticleMainImageInput type="main" />
          <TextSection />
          <ArticleMainImageInput />
          <ArticleMainImageInput type="gallery" />
        </Container>
        <Menu model={items} popup ref={menuRef} />
        <Button
          className={styles.menuButton}
          label="Add Section"
          icon="pi pi-plus"
          onClick={(e) => menuRef.current.toggle(e)}
        />
      </PageWrapper>
    </>
  );
};

export default BlogPostEditor;
