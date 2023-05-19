import React, { useState } from "react";
import { Dropdown } from "primereact/dropdown";
import { useDispatch } from "react-redux";
import { newArticleActions } from "@/store/new-article";
import styles from "./MetaData.module.scss";
import { Calendar } from "primereact/calendar";
import { Chips } from "primereact/chips";
import { dateObjToStrAdmin } from "@/utils/helperFn";
export default function MetaData() {
  const dispatch = useDispatch();
  const articleLabels = [
    { label: "Entrepreneur Hustler" },
    { label: "Side Hustler" },
    { label: "Corporate Hustler" },
  ];
  const [label, setLabel] = useState();

  const [date, setDate] = useState(null);

  const [value, setValue] = useState([]);
  return (
    <div className={styles.container}>
      <div className="p-float-label">
        <Dropdown
          value={label}
          inputId="dd-label"
          onChange={(e) => {
            setLabel(e.value);
            dispatch(newArticleActions.addMetaData(e.value));
          }}
          options={articleLabels}
          optionLabel="label"
          className={styles.dropdown}
        />
        <label htmlFor="dd-label">Select a article category</label>
      </div>
      <div className="card p-fluid">
        <span className="p-float-label">
          <Chips
            id="tags"
            value={value}
            onChange={(e) => {
              dispatch(newArticleActions.addMetaData({ tags: e.value }));
              setValue(e.value);
            }}
          />
          <label htmlFor="tags">Tags</label>
        </span>
      </div>
      <div className="card flex justify-content-center">
        <Calendar
          value={date}
          onChange={(e) => {
            dispatch(
              newArticleActions.addMetaData({
                date: dateObjToStrAdmin(e.value),
              })
            );
            setDate(e.value);
          }}
          showIcon
        />
      </div>
    </div>
  );
}
