import { configureStore } from "@reduxjs/toolkit";
import { newArticleStore } from "./new-article";
import { errorStore } from "./error";
import { searchStore } from "./search";
import { animationStore } from "./home-animation";
const store = configureStore({
  reducer: {
    newArticle: newArticleStore.reducer,
    error: errorStore.reducer,
    search: searchStore.reducer,
    homeAnimation: animationStore.reducer,
  },
});

export default store;
