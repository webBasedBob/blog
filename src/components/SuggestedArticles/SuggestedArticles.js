import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ArticleCard from "./ArticleCard";
const SuggestedArticles = ({ articles }) => {
  console.log(articles);
  return (
    <section>
      <h4 style={{ marginBottom: 44 }}>Suggested Articles</h4>
      <Row lg={2} sm={1} xs={1}>
        {articles.map(({ text, image, title, url }) => {
          return (
            <Col key={title}>
              <ArticleCard
                text={text}
                image={image}
                title={title}
                url={`/article/${url}`}
              />
            </Col>
          );
        })}
      </Row>
    </section>
  );
};

export default SuggestedArticles;
