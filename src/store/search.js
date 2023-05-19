import {
  createSlice,
  createReducer,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const searchStore = createSlice({
  name: "search",
  initialState: { searchInput: "", mustPerformSearch: false },
  reducers: {
    setSearchInput(state, action) {
      state.searchInput = action.payload;
    },

    resetState(state, action) {
      state.searchInput = "";
    },

    forwardUtils(state, action) {},

    setMustperformSearch(state, action) {
      state.mustPerformSearch = action.payload;
    },
  },
});
export const searchActions = searchStore.actions;
