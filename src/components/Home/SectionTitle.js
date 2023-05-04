import React from "react";
import styles from "./SectionTitle.module.scss";
const SectionTitle = ({ text }) => {
  return <h3 className={styles.text}>{text}</h3>;
};

export default SectionTitle;
