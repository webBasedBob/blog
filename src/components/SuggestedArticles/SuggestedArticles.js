import React from "react";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ArticleCard from "./ArticleCard";
const SuggestedArticles = ({ articles }) => {
  return (
    <div>
      <h4>Suggested Articles</h4>
      <Row lg={2} sm={1} xs={1}>
        {articles.map(({ text, image, title }) => {
          return (
            <Col key={title}>
              <ArticleCard text={text} image={image} title={title} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default SuggestedArticles;
