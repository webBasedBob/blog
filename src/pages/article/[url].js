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
  getFirestoreRelatedArticles,
  setFirestoreDoc,
} from "@/utils/firebaseFn";
import { useEffect, useInsertionEffect, useState } from "react";
export default function ArticlePage({ article, suggestedArticles }) {
  const articleContent = Object.values(article.content);
  const title = articleContent.find((elm) => elm.sectionName === "title").data
    .title;
  const description =
    articleContent.find((elm) => elm.sectionName === "description")?.data
      .content || "";
  const image = articleContent.find(
    (elm) => elm.sectionName === "image-main"
  ).data;
  const mainImageCaption = image?.caption || "";
  const richGoogleResultData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: `${title}`,
    image: `${[image.image]}`,
    datePublished: `${dateObjToSeoStr(article.metaData.date)}T00:00:00+00:00`,
    dateModified: `${dateObjToSeoStr(article.metaData.date)}T00:00:00+00:00`,
    author: [
      {
        "@type": "Organization",
        name: "Hustling Insights",
        url: "https://hustlinginsights.com",
      },
    ],
  };
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
            description?.length < 200 ? description : description.slice(0, 195)
          }
        />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:image" content={image.image} />
        <meta
          property="twitter:image:alt"
          content={
            mainImageCaption.length < 420
              ? mainImageCaption
              : mainImageCaption.slice(0, 400)
          }
        />
        <meta property="twitter:card" content="article" />
        <meta property="" content="" />
        {/* rich google result - blog posting */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(richGoogleResultData),
          }}
          key="product-jsonld"
        />
      </Head>
      <Navigation />
      <PageWrapper>
        <Row>
          <Article article={article} />
        </Row>
        <Row>
          <SuggestedArticles articles={suggestedArticles}></SuggestedArticles>
        </Row>
      </PageWrapper>
    </>
  );
}
import fs from "fs";
import { EOL } from "os";
import { dateObjToSeoStr } from "@/utils/helperFn";
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
    fallback: "blocking",
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
  // article.metaData.date = article.metaData.date.seconds;
  const suggestedArticles = await getFirestoreRelatedArticles(
    article.metaData.label,
    article.metaData.tags,
    4
  );
  return {
    props: { article: article, suggestedArticles: suggestedArticles },
  };
}
