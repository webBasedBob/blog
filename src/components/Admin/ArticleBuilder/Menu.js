import React, { useRef } from "react";
import styles from "./ArticleBuilder.module.scss";
import { Button } from "primereact/button";
import { Menu } from "primereact/menu";
import { InputText } from "primereact/inputtext";
import ArticleTitleInput from "./TitleInput";
import ArticleMainImageInput from "./ImageUpload";
import TextSection from "./TextSection";
const ArticleMenu = ({ handleAddSection }) => {
  const menuRef = useRef();
  const liftSelectedSection = (e) => {
    const targetLabel = e.item.label.toLowerCase();
    const targetComponent = items.find((item) => {
      return item.label.toLowerCase() === targetLabel;
    }).component;
    handleAddSection(targetComponent);
  };
  const items = [
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
  return (
    <div>
      {" "}
      <Menu model={items} popup ref={menuRef} />
      <Button
        className={styles.menuButton}
        label="Add Section"
        icon="pi pi-plus"
        onClick={(e) => menuRef.current.toggle(e)}
      />
    </div>
  );
};

export default ArticleMenu;
