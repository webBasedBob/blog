import {
  createSlice,
  createReducer,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { newArticle } from "./new-article";
const store = configureStore({
  reducer: { newArticle: newArticle.reducer },
});

export default store;
