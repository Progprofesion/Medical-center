import { configureStore } from "@reduxjs/toolkit";

import user from "./slices/userSlice";
import { apiSlice } from "../components/api/apiSlice";

const store = configureStore({
  reducer: {
    user,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
