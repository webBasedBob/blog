import React from "react";
import styles from "./Icon.module.scss";

const Icon = ({ children, className }) => {
  const resolvedClass = `${styles.icon} ${className ? className : ""}`;

  return <div className={resolvedClass}>{children}</div>;
};

export default Icon;
