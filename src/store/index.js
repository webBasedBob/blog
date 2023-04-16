import {
  createSlice,
  createReducer,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { newArticleStore } from "./new-article";
import { errorStore } from "./error";
const store = configureStore({
  reducer: { newArticle: newArticleStore.reducer, error: errorStore.reducer },
});

export default store;
