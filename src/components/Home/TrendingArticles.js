import React, { useState } from "react";
import styles from "./TrendingArticles.module.scss";
import Carousel from "react-bootstrap/Carousel";
import { Button, Container } from "react-bootstrap";
import Link from "next/link";

const TrendingArticles = ({ articles }) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const trendingArticlesData = [
    {
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title:
        "five reasons to give AgdsgI a chance, how it can change the way you do you're doing your job",
      url: "/",
      description:
        "find out about this shit and dont fall behind the trend with thisfind out about this shit and dont fall behind the trend with this find out about this shit and dont fall behind the trend with this find out about this shit and dont fall behind the trend with this find out about this shit and dont fall behind the trend with this ",
    },
    {
      image:
        "https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title:
        "five reasons to givegsd AI a chance, how it can change the way you do you're doing your job",
      url: "/",
      description:
        "find out about this shit and dont fall behind the trend with thisfind out about this shit and dont fall behind the trend with this find out about this shit and dont fall behind the trend with this find out about this shit and dont fall behind the trend with this find out about this shit and dont fall behind the trend with this ",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
      title:
        "five reasons tofda give AI a chance, how it can change the way you do you're doing your job",
      url: "/",
      description:
        "find out about this shit and dont fall behind the trend with thisfind out about this shit and dont fall behind the trend with this find out about this shit and dont fall behind the trend with this find out about this shit and dont fall behind the trend with this find out about this shit and dont fall behind the trend with this ",
    },
    {
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title:
        "five reasonsdd to give AI a chance, how it can change the way you do you're doing your job",
      url: "/",
      description:
        "find out about this shit and dont fall behind the trend with thisfind out about this shit and dont fall behind the trend with this find out about this shit and dont fall behind the trend with this find out about this shit and dont fall behind the trend with this find out about this shit and dont fall behind the trend with this ",
    },
    {
      image:
        "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1244&q=80",
      title:
        "five reasossns to give AI a chance, how it can change the way you do you're doing your job",
      url: "/",
      description:
        "find out about this shit and dont fall behind the trend with thisfind out about this shit and dont fall behind the trend with this find out about this shit and dont fall behind the trend with this find out about this shit and dont fall behind the trend with this find out about this shit and dont fall behind the trend with this ",
    },
  ];

  return (
    <Container fluid className={styles.container}>
      <Carousel
        className={styles.carousel}
        activeIndex={index}
        onSelect={handleSelect}
      >
        {articles.map((article) => {
          // debugger;
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
};

export default TrendingArticles;
