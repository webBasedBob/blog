import React, { useEffect, useState } from "react";
import Navigation from "@/components/Layout/Navigation/Navigation";
import ArticleCardResults from "@/components/ArticleResults/ArticleCardResults";
import SearchPanel from "@/components/SearchPage/SearchPanel";
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
import { useDispatch, useSelector } from "react-redux";
import { transformSearchInputString } from "@/utils/helperFn";
import { searchActions } from "@/store/search";
import { usePaginatedSearchresults } from "@/hooks/UsePaginatedSearchResults";
import PageWrapper from "@/components/UI/PageWrapper";
import styles from "./index.module.scss";
import { SEO } from "../../config/constants";
import { useRouter } from "next/router";
import SEOHeader from "@/components/SEO/SEOHeader";

const index = () => {
  const { asPath } = useRouter();
  const fullUrl = `https://hustlinginsights.com${asPath}`;
  const [noMoreResults, setNoMoreResults] = useState(false);
  const searchInput = useSelector((state) => state.search.searchInput);
  const mustPerformSearch = useSelector(
    (state) => state.search.mustPerformSearch
  );
  let {
    getNextBatch,
    articles,
    lastFetchedElm,
    setCurrentQuery,
    currentQuery,
    setIsNewSearch,
  } = usePaginatedSearchresults();

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const articlesRef = collection(db, "articles");
  const dispatch = useDispatch();

  useEffect(() => {
    if (mustPerformSearch) {
      setCurrentQuery(
        query(
          articlesRef,
          where(
            "searchData",
            "array-contains-any",
            transformSearchInputString(searchInput)
          ),
          limit(6)
        )
      );
      setIsNewSearch(true);
      dispatch(searchActions.setMustperformSearch(false));
      setNoMoreResults(false);
    }
  }, [mustPerformSearch]);

  useEffect(() => {
    if (currentQuery) {
      getNextBatch();
    }
  }, [currentQuery]);

  useEffect(() => {
    if (!articles.length) {
      setNoMoreResults(true);
    } else {
      setNoMoreResults(false);
    }
  }, [articles]);

  useEffect(() => {
    if (lastFetchedElm === undefined) {
      setNoMoreResults(true);
    }
  }, [lastFetchedElm]);

  const getMoreResults = () => {
    try {
      if (lastFetchedElm === undefined) {
        throw new Error();
      }
      const curQuery = query(
        articlesRef,
        where(
          "searchData",
          "array-contains-any",
          transformSearchInputString(searchInput)
        ),
        limit(6),
        startAfter(lastFetchedElm)
      );
      setCurrentQuery(curQuery);
    } catch (error) {
      // here i assumed that the code failed because there are no more results to be returned
      setNoMoreResults(true);
    }
  };

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
      <PageWrapper className={styles.wrapper}>
        <SearchPanel />
        <ArticleCardResults
          articles={articles}
          handleMoreResults={getMoreResults}
          noMoreResults={noMoreResults}
        />
      </PageWrapper>
    </>
  );
};
export default index;
