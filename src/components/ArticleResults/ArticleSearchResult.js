import React, { useRef } from "react";
import styles from "./ArticleSearchResult.module.scss";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import { dateObjToStr } from "@/utils/helperFn";
import { useInView } from "framer-motion";
const ArticleSearchResult = ({ image, title, date, label, url }) => {
  return (
    <Link href={`/article/${url}`} className={styles.link}>
      <Card className={styles.card}>
        <div className={styles.image}>
          <Card.Img src={image} loading="lazy" />
          {label && (
            <p className={`${styles.label} ${styles[label]}`}>{label}</p>
          )}
        </div>
        <Card.Body className={styles.body}>
          <Card.Title className={styles.title}>{title}</Card.Title>
          <Card.Text className={styles.date}>{date}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default ArticleSearchResult;
