import React from "react";
import styles from "./ArticleCard.module.scss";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
const SuggestedArticle = ({ image, title, text }) => {
  return (
    <Card className={styles.card}>
      <Card.Img src={image} className={styles.image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SuggestedArticle;
