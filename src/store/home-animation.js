import { createSlice } from "@reduxjs/toolkit";

export const animationStore = createSlice({
  name: "home-animation",
  initialState: {
    presentState: {
      X: 0,
      Y: 0,
      text: "side hustler",
      carouselHeight: 0,
      widthToFill: 0,
    },
    nextState: {
      X: 0,
      Y: 0,
      text: "side hustler",
      carouselHeight: 0,
      widthToFill: 0,
    },
  },
  reducers: {
    setPresentState(state, action) {
      state.presentState = action.payload;
    },
    setNextState(state, action) {
      state.nextState = action.payload;
    },
  },
});
export const animationActions = animationStore.actions;
