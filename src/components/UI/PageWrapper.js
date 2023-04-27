import React from "react";
import styles from "./PageWrapper.module.scss";
import Container from "react-bootstrap/Container";
import { resolve } from "styled-jsx/css";
const PageWrapper = ({ children, className }) => {
  const resolvedClass = `${styles.wrapper} ${className ? className : ""}`;
  return <Container className={resolvedClass}>{children}</Container>;
};

export default PageWrapper;
