import React from "react";
import ArticleSearchResult from "../Search/ArticleSearchResult";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
let articles = [
  {
    date: "afla cum m-am cacat pe mine",
    title:
      "afla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
    image:
      "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
  },
  {
    date: "afla cum m-am cacat pe mine",
    title:
      "afla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
    image:
      "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
  },
  {
    date: "afla cum m-am cacat pe mine",
    title:
      "afla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
    image:
      "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
  },
  {
    date: "afla cum m-am cacat pe mine",
    title:
      "afla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
    image:
      "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
  },
  {
    date: "afla cum m-am cacat pe mine",
    title:
      "afla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
    image:
      "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
  },
  {
    date: "afla cum m-am cacat pe mine",
    title:
      "afla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
    image:
      "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
  },
  {
    date: "afla cum m-am cacat pe mine",
    title:
      "afla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
    image:
      "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
  },
  {
    date: "afla cum m-am cacat pe mine",
    title:
      "afla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
    image:
      "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
  },
  {
    date: "afla cum m-am cacat pe mine",
    title:
      "afla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mineafla cum m-am cacat pe mine",
    image:
      "https://firebasestorage.googleapis.com/v0/b/blog-test-45680.appspot.com/o/hero-thumbnail.jpeg?alt=media&token=d9c31047-f6bd-4ff2-9da7-a48e38399ee3",
  },
];
import styles from "./OurPicks.module.scss";
import PageWrapper from "../UI/PageWrapper";
const OurPicks = () => {
  return (
    <Container className={styles.container} as="section">
      {/* <h4 style={{ marginBottom: 44 }}>Suggested Articles</h4> */}
      <Row lg={4} md={3} sm={2} xs={1}>
        {articles.map(({ title, image, date }) => {
          return (
            <div style={{ padding: "1rem 0" }}>
              <ArticleSearchResult
                key={title}
                title={title}
                date={date}
                image={image}
              />
            </div>
          );
        })}
      </Row>
    </Container>
  );

  return (
    <div>
      {articles.map((article) => {
        return (
          <ArticleSearchResult
            title={article.title}
            date={article.date}
            image={article.image}
          />
        );
      })}
    </div>
  );
};

export default OurPicks;
