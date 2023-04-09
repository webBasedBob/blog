import React from "react";
import styles from "./PageWrapper.module.scss";
import Container from "react-bootstrap/Container";
const PageWrapper = ({ children }) => {
  return <Container className={styles.wrapper}>{children}</Container>;
};

export default PageWrapper;
