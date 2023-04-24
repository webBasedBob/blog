import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
export const usePaginatedSearchresults = () => {
  const [currentQuery, setCurrentQuery] = useState();
  const [isNewSearch, setIsNewSearch] = useState(true);
  const [lastFetchedElm, setLastFetchedElm] = useState();
  const [state, setState] = useState({
    articles: [],
  });

  const getNextBatch = async () => {
    try {
      const querySnapshot = await getDocs(currentQuery);
      setLastFetchedElm(querySnapshot.docs[querySnapshot.docs.length - 1]);
      const articlesArr = [];
      querySnapshot.forEach((doc) => {
        articlesArr.push(doc.data());
      });
      setState((prev) => {
        return {
          ...prev,
          articles: isNewSearch
            ? articlesArr
            : [...prev.articles, ...articlesArr],
        };
      });
      setIsNewSearch(false);
    } catch (error) {
      console.error(error);
    }
  };
  return {
    getNextBatch: getNextBatch,
    articles: state.articles,
    lastFetchedElm: lastFetchedElm,
    setCurrentQuery: setCurrentQuery,
    currentQuery: currentQuery,
    setIsNewSearch: setIsNewSearch,
  };
};
