import React from "react";
import styles from "./ArticleCardResults.module.scss";
import { Container, Row } from "react-bootstrap";
import { Button } from "primereact/button";
import ArticleSearchResult from "./ArticleSearchResult";
import { dateObjToStr, transormDataForArticleCard } from "@/utils/helperFn";
import PageWrapper from "../UI/PageWrapper";
const ArticleCardResults = ({
  articles,
  handleMoreResults,
  noMoreResults,
  className,
}) => {
  return (
    <PageWrapper>
      <Container className={className}>
        <Row style={{ justifyContent: "center" }}>
          {articles.map((article) => {
            const transformedArticle = transormDataForArticleCard(article);
            return (
              <ArticleSearchResult
                image={transformedArticle.image}
                title={transformedArticle.title}
                date={dateObjToStr(transformedArticle.date)}
                label={transformedArticle.label}
                key={transformedArticle.url}
                url={transformedArticle.url}
              />
            );
          })}
        </Row>
        <Row className={styles.buttonWrapper}>
          <Button
            className={styles.button}
            visible={!noMoreResults}
            label="Load More Results"
            onClick={() => {
              handleMoreResults();
            }}
          />
        </Row>
      </Container>
    </PageWrapper>
  );
};

export default ArticleCardResults;
