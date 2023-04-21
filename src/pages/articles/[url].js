import Navigation from "@/components/Layout/Navigation/Navigation";
import Article from "@/components/Article/Article";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SuggestedArticles from "@/components/SuggestedArticles/SuggestedArticles";
import styles from "./index.module.scss";
import Head from "next/head";
import PageWrapper from "@/components/UI/PageWrapper";
import { useRouter } from "next/router";
import {
  getArticle,
  getFirestoreArticles,
  setFirestoreDoc,
} from "@/utils/firebaseFn";
import { useEffect, useInsertionEffect, useState } from "react";
export default function ArticlePage({ article, suggestedArticles }) {
  return (
    <>
      <Navigation />
      <PageWrapper>
        <Row>
          <Article article={article} />
        </Row>
        {/* <Row>
          <SuggestedArticles articles={articles}></SuggestedArticles>
        </Row> */}
      </PageWrapper>
    </>
  );
}

export async function getStaticPaths() {
  const allBlogPosts = await getFirestoreArticles();
  const paths = allBlogPosts.map((article) => {
    return { params: { url: article.url } };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const {
    params: { url },
  } = context;
  const article = await getArticle(url);
  return {
    props: { article: article, suggestedArticles: null },
  };
}
