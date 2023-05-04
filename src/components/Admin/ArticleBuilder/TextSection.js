import React, { useRef, useState } from "react";
import { Editor } from "primereact/editor";
import { useDispatch, useSelector } from "react-redux";
import { newArticleActions } from "@/store/new-article";
const TextSection = ({ id }) => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const updateSectionData = (...args) => {
    dispatch(newArticleActions.updateData(...args));
  };

  return (
    <Editor
      value={text}
      onTextChange={(e) => {
        setText(e.htmlValue);
        updateSectionData({
          componentName: "text-section",
          id: id,
          dataToUpdate: "content",
          newData: e.htmlValue,
        });
      }}
      style={{ height: "500px" }}
    />
  );
};

export default TextSection;
