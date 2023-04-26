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
  // if (!article) {
  //   article = getFirestoreArticles();
  // }

  const articleContent = Object.values(article.content);
  const title = articleContent.find((elm) => elm.sectionName === "title").data
    .title;
  const description = articleContent.find(
    (elm) => elm.sectionName === "description"
  )?.data.content;
  const image = articleContent.find(
    (elm) => elm.sectionName === "image-main"
  )?.data;
  console.log(articleContent);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {/* open graph protocol headers - minimum required tags */}
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={article.fullUrl} />
        <meta property="og:image" content={image.image} />
        {/* additional/optional tags */}
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="HustlingInsights.com" />
        <meta property="og:image:alt" content={image.caption} />
        {/* twitter tags */}
        <meta
          property="twitter:description"
          content={
            description.length < 200 ? description : description.slice(0, 195)
          }
        />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:image" content={image.image} />
        <meta
          property="twitter:image:alt"
          content={
            image.caption.lengt < 420
              ? image.caption
              : image.caption.slice(0, 400)
          }
        />
        <meta property="twitter:card" content="article" />
        <meta property="" content="" />
      </Head>
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
import fs from "fs";
import { EOL } from "os";
export async function getStaticPaths() {
  //this creates the sitemap file with default links
  const constantLinks = [
    "https://hustlinginsights.com/",
    "https://hustlinginsights.com/about",
    "https://hustlinginsights.com/contact",
  ];
  fs.writeFile("./public/sitemap.txt", constantLinks.join(EOL), () => {});
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
  //this populates the sitemap file with the links of all the articles
  const fullUrl = `https://hustlinginsights.com/article/${url}`;
  fs.writeFile(
    "./public/sitemap.txt",
    fullUrl + EOL,
    {
      flag: "a+",
    },
    () => {}
  );

  const article = await getArticle(url);
  article.fullUrl = fullUrl;
  return {
    props: { article: article, suggestedArticles: null },
  };
}
