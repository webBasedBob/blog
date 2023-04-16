import {
  createSlice,
  createReducer,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const errorStore = createSlice({
  name: "error",
  initialState: { errorMessage: "" },
  reducers: {
    setError(state, action) {},
    resetState(state, action) {},
  },
});
export const errorActions = errorStore.actions;
