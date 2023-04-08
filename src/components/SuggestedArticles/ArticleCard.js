import React from "react";
import styles from "./ArticleCard.module.scss";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
const SuggestedArticle = ({ image, title, text }) => {
  return (
    <Card className={styles.card}>
      <div className={styles.image}>
        <Card.Img src={image} />
      </div>
      <Card.Body className={styles.body}>
        <Card.Title className={styles.title}>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SuggestedArticle;
