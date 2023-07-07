import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "../features/covidSlice"

const store = configureStore({
  reducer: {
    covid: covidReducer
  }
});

export default store;