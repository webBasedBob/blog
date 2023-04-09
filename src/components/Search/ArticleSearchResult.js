import React from "react";
import styles from "./ArticleSearchResult.module.scss";
import Card from "react-bootstrap/Card";

const ArticleSearchResult = ({ image, title, date }) => {
  return (
    <Card className={styles.card}>
      <div className={styles.image}>
        <Card.Img src={image} />
      </div>
      <Card.Body className={styles.body}>
        <Card.Title className={styles.title}>{title}</Card.Title>
        <Card.Text className={styles.date}>{date}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ArticleSearchResult;
