"use client";
import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from '../slices/ProductsSlice'

export const store = configureStore({
    reducer: {
      Products: ProductsReducer
  },
});
