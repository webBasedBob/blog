import React from "react";
import ArticleSearchResult from "../Search/ArticleSearchResult";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Carousel } from "primereact/carousel";
import styles from "./OurPicks.module.scss";
import PageWrapper from "../UI/PageWrapper";
const OurPicks = ({ articleResultsSection, hasBackground }) => {
  const responsiveOptions = [
    { breakpoint: "600px", numScroll: 1, numVisible: 1 },
    { breakpoint: "850px", numScroll: 1, numVisible: 2 },
    { breakpoint: "1200px", numScroll: 1, numVisible: 3 },
    { breakpoint: "5000px", numScroll: 1, numVisible: 4 },
  ];
  const wrapperClass = `${styles.wrapper} ${
    hasBackground ? styles.background : ""
  }`;
  return (
    <div className={wrapperClass}>
      {/* <h2 className={styles.sectionTitle}>
        Hot Articles - {articleResultsSection.title}
      </h2> */}
      <Carousel
        // autoplayInterval={3000}
        responsiveOptions={responsiveOptions}
        circular
        value={articleResultsSection.articles}
        numScroll={1}
        numVisible={3}
        itemTemplate={ArticleSearchResult}
        style={{
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      />
    </div>
  );
  return (
    <Container className={styles.container} as="section">
      <h4 style={{ marginBottom: 44 }}>{articleResultsSection.title}</h4>
      <Row lg={4} md={3} sm={2} xs={1}>
        {articleResultsSection.articles?.map(({ title, image, date }) => {
          return (
            <div key={title} className={styles.articleWrapper}>
              <ArticleSearchResult title={title} date={date} image={image} />
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
