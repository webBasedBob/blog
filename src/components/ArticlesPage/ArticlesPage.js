import { usePaginatedFirestoreArticles } from "@/hooks/usePaginatedFirestoreArticles";
import React, { useEffect } from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  limit,
  startAfter,
} from "firebase/firestore";
import { firebaseConfig } from "@/config/firebase";
import { initializeApp } from "firebase/app";
import Navigation from "@/components/Layout/Navigation/Navigation";
import PageTitle from "./PageTitle";
import ArticleCardResults from "@/components/ArticleResults/ArticleCardResults";
import PageWrapper from "../UI/PageWrapper";
import styles from "./ArticlesPage.module.scss";
import SEOHeader from "@/components/SEO/SEOHeader";
import { SEO } from "../../config/constants";
import { useRouter } from "next/router";
const ArticlesPage = ({ page }) => {
  const getQueryGetters = () => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const articlesRef = collection(db, "articles");
    const getInitialQuery = () => {
      const finalQuery = query(
        articlesRef,
        where("metaData.label", "==", page),
        limit(6)
      );
      return finalQuery;
    };
    const getNextBatchQuery = (lastProorResultVisible) => {
      const finalQuery = query(
        articlesRef,
        where("metaData.label", "==", page),
        limit(6),
        startAfter(lastProorResultVisible)
      );
      return finalQuery;
    };
    return [getInitialQuery, getNextBatchQuery];
  };

  const { getNextBatch, articles, noMoreResults } =
    usePaginatedFirestoreArticles(...getQueryGetters());
  useEffect(() => {
    getNextBatch(true);
  }, []);
  const { asPath } = useRouter();
  const fullUrl = `https://hustlinginsights.com${asPath}`;
  return (
    <>
      <SEOHeader
        title={SEO.title}
        description={SEO.description}
        fullUrl={fullUrl}
        image={SEO.image}
        caption={SEO.caption}
        linkType="website"
      />
      <Navigation />
      <PageTitle>{page} Articles</PageTitle>
      <PageWrapper>
        <ArticleCardResults
          articles={articles}
          handleMoreResults={getNextBatch}
          noMoreResults={noMoreResults}
          className={styles.contentWrapper}
        />
      </PageWrapper>
    </>
  );
};

export default ArticlesPage;
