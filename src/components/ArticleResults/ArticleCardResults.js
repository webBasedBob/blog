import React from "react";
import styles from "./ArticleCardResults.module.scss";
import { Container, Row } from "react-bootstrap";
import { Button } from "primereact/button";
import ArticleSearchResult from "./ArticleSearchResult";
import {
  transformSearchInputString,
  transormDataForArticleCard,
} from "@/utils/helperFn";
import PageWrapper from "../UI/PageWrapper";
const ArticleCardResults = ({ articles, handleMoreResults, noMoreResults }) => {
  return (
    <PageWrapper>
      <Container>
        <Row>
          {articles.map((article) => {
            const transformedArticle = transormDataForArticleCard(article);
            return (
              <ArticleSearchResult
                image={transformedArticle.image}
                title={transformedArticle.title}
                date={transformedArticle.date}
                label={transformedArticle.label}
                key={transformedArticle.url}
                url={transformedArticle.url}
              />
            );
          })}
        </Row>
        <Row>
          <Button
            visible={!noMoreResults}
            label="See More"
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
