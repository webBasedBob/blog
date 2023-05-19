import React, { useState } from "react";
import styles from "./TrendingArticles.module.scss";
import Carousel from "react-bootstrap/Carousel";
import { Container } from "react-bootstrap";
import Link from "next/link";

const TrendingArticles = React.forwardRef(({ articles }, ref) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container ref={ref} fluid className={styles.container}>
      <Carousel
        className={styles.carousel}
        activeIndex={index}
        onSelect={handleSelect}
      >
        {articles.map((article) => {
          return (
            <Carousel.Item key={article.title} className={styles.item}>
              <div className={styles.image}>
                <img loading="lazy" src={article.image} alt="First slide" />
              </div>
              <div className={styles.text}>
                <h3 className={styles.title}>{article.title}</h3>
                <p className={styles.description}>{article.description}</p>
                <Link className={styles.link} href={`/article/${article.url}`}>
                  Go to article &#8594;{" "}
                </Link>
              </div>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Container>
  );
});

export default TrendingArticles;
