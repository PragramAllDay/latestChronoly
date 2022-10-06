import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { counterSlice } from "../reducers/Hero1State";

export const store = configureStore({
  reducer: {
    stake: counterSlice.reducer,
  },
});
