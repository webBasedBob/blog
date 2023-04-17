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
    setError(state, action) {
      state.errorMessage = action.payload;
    },
    resetState(state, action) {
      state.errorMessage = "";
    },
  },
});
export const errorActions = errorStore.actions;
