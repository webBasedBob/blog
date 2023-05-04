import { getDocs } from "firebase/firestore";
import { useState } from "react";
export const usePaginatedFirestoreArticles = (
  getInitialQuery,
  getNextBatchQuery
) => {
  const [state, setState] = useState({
    currentQuery: getInitialQuery(),
    articles: [],
    noMoreResults: false,
  });
  const getNextBatch = async (firstExecution) => {
    try {
      if (state.noMoreResults) {
        return;
      }
      const querySnapshot = await getDocs(state.currentQuery);
      const lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
      const nextBatchQuery = getNextBatchQuery(lastVisible);
      const articlesArr = [];
      querySnapshot.forEach((doc) => {
        articlesArr.push(doc.data());
      });
      if (firstExecution) {
        setState((prev) => {
          return {
            ...prev,
            currentQuery: nextBatchQuery,
            articles: articlesArr,
          };
        });
      } else {
        setState((prev) => {
          return {
            ...prev,
            currentQuery: nextBatchQuery,
            articles: [...prev.articles, ...articlesArr],
          };
        });
      }
    } catch (error) {
      // here i assumed that the code failed because there are no more results to be returned
      setState((prev) => {
        return { ...prev, noMoreResults: true };
      });
    }
  };

  return {
    getNextBatch: getNextBatch,
    articles: state.articles,
    noMoreResults: state.noMoreResults,
  };
};
