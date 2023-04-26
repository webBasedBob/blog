import { usePaginatedFirestoreArticles } from "@/hooks/usePaginatedFirestoreArticles";
import React from "react";
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
import PageTitle from "@/components/UI/PageTitle";
import ArticleCardResults from "@/components/ArticleResults/ArticleCardResults";
import PageWrapper from "../UI/PageWrapper";

const ArticlesPage = ({ page }) => {
  const getQueryGetters = () => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const articlesRef = collection(db, "articles");
    const getInitialQuery = () => {
      const finalQuery = query(
        articlesRef,
        where("metaData.label", "==", page),
        limit(3)
      );
      return finalQuery;
    };
    const getNextBatchQuery = (lastProorResultVisible) => {
      const finalQuery = query(
        articlesRef,
        where("metaData.label", "==", page),
        limit(3),
        startAfter(lastProorResultVisible)
      );
      return finalQuery;
    };
    return [getInitialQuery, getNextBatchQuery];
  };

  const { getNextBatch, articles, noMoreResults } =
    usePaginatedFirestoreArticles(...getQueryGetters());
  return (
    <>
      <Navigation />
      <PageWrapper>
        <PageTitle>{page}</PageTitle>
        <ArticleCardResults
          articles={articles}
          handleMoreResults={getNextBatch}
          noMoreResults={noMoreResults}
        />
      </PageWrapper>
    </>
  );
};

export default ArticlesPage;
