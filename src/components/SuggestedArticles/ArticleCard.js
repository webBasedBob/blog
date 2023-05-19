import React from "react";
import styles from "./ArticleCard.module.scss";
import Card from "react-bootstrap/Card";
import Link from "next/link";
const SuggestedArticle = ({ image, title, text, url }) => {
  return (
    <Link href={url} className={styles.link}>
      <Card className={styles.card}>
        <div className={styles.image}>
          <Card.Img src={image} loading="lazy" />
        </div>
        <Card.Body className={styles.body}>
          <Card.Title className={styles.title}>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default SuggestedArticle;
