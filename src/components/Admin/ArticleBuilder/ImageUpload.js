import React, { useEffect, useRef, useState } from "react";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import { ProgressBar } from "primereact/progressbar";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import { Tag } from "primereact/tag";
import { Container } from "react-bootstrap";
import styles from "./ImageUpload.module.scss";
import { InputTextarea } from "primereact/inputtextarea";
import { debounce, getBase64, getFileFromBase64 } from "@/utils/helperFn";
import { useDispatch, useSelector } from "react-redux";
import { newArticleActions } from "@/store/new-article";
export default function ArticleMainImageInput({ type = "regular", id }) {
  const dispatch = useDispatch();

  const updateSectionImage = (dataConfigObj) => {
    dispatch(newArticleActions.updateImageData(dataConfigObj));
  };
  const updateSectionCaption = (...args) => {
    dispatch(newArticleActions.updateData(...args));
  };
  const sectionCaption = useSelector((state) => {
    return state.newArticle.sections.find((section) => {
      return section.id === id;
    }).data.caption;
  });
  const resetState = () => {
    dispatch(
      newArticleActions.updateImageData({
        componentName: `image-${type}`,
        id: id,
        dataToUpdate: type === "gallery" ? "images" : "image",
        newData: [],
      })
    );
  };

  const handleOnSelect = async (e) => {
    let data = Array.from(e.files);
    let transformedData = [];
    for (let index = 0; index < data.length; index++) {
      const imageName = data[index].name;
      const base64Image = await getBase64(data[index]);
      transformedData.push({
        title: imageName,
        base64Image: base64Image,
      });
    }
    updateSectionImage({
      componentName: `image-${type}`,
      id: id,
      dataToUpdate: type === "gallery" ? "images" : "image",
      newData: transformedData,
    });
  };

  const fileUploadRef = useRef(null);
  const toast = useRef(null);

  const headerTemplate = (options) => {
    const { className, chooseButton, cancelButton } = options;
    return (
      <div
        className={className}
        style={{
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
        }}
      >
        {chooseButton}
        {cancelButton}
      </div>
    );
  };

  const itemTemplate = (file) => {
    return (
      <div
        className={`${
          type === "gallery" ? styles.uploadedGallery : styles.uploadedImage
        }`}
      >
        <img alt={file.name} role="presentation" src={file.objectURL} />
      </div>
    );
  };

  const emptyTemplate = () => {
    return (
      <div className={styles.imagePlaceholderContainer}>
        <i
          className={`pi ${type === "gallery" ? "pi-images" : "pi-image"}  ${
            styles.imagePlaceholder
          }`}
        ></i>
        <span
          style={{ fontSize: "1.2em", color: "var(--text-color-secondary)" }}
        >
          Drag and Drop {type === "gallery" ? "Images" : "Image"} Here
        </span>
      </div>
    );
  };

  const chooseOptions = {
    icon: "pi pi-fw pi-images",
    iconOnly: true,
    className: "custom-choose-btn p-button-rounded p-button-outlined",
  };
  const uploadOptions = {
    icon: "pi pi-fw pi-cloud-upload",
    iconOnly: true,
    className:
      "custom-upload-btn p-button-success p-button-rounded p-button-outlined",
  };
  const cancelOptions = {
    icon: "pi pi-fw pi-times",
    iconOnly: true,
    className:
      "custom-cancel-btn p-button-danger p-button-rounded p-button-outlined",
  };

  return (
    <Container
      className={`${styles.mainImageUploadContainer} ${
        type === "gallery" ? styles.gallery : ""
      }`}
    >
      <Toast ref={toast}></Toast>

      <Tooltip target=".custom-choose-btn" content="Choose" position="bottom" />
      <Tooltip target=".custom-upload-btn" content="Upload" position="bottom" />
      <Tooltip target=".custom-cancel-btn" content="Clear" position="bottom" />
      <h5 className={styles.sectionTitle}>
        {type === "main"
          ? "Main Image"
          : type === "gallery"
          ? "Gallery"
          : "Image"}
        :
      </h5>
      <FileUpload
        ref={fileUploadRef}
        name="demo[]"
        multiple={type === "gallery"}
        accept="image/*"
        maxFileSize={1000000000}
        headerTemplate={headerTemplate}
        itemTemplate={itemTemplate}
        emptyTemplate={emptyTemplate}
        chooseOptions={chooseOptions}
        uploadOptions={uploadOptions}
        cancelOptions={cancelOptions}
        onSelect={handleOnSelect}
        onClear={resetState}
      />
      {type !== "gallery" && (
        <InputTextarea
          className={styles.caption}
          value={sectionCaption ? sectionCaption : ""}
          onChange={(e) => {
            updateSectionCaption({
              componentName: `image-${type}`,
              id: id,
              dataToUpdate: "caption",
              newData: e.target.value,
            });
          }}
          placeholder="Image Caption"
        />
      )}
    </Container>
  );
}
