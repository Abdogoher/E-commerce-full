"use client";
import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from '../slices/ProductsSlice'
import userReducer from '../slices/userSlice'

export const store = configureStore({
    reducer: {
    Products: ProductsReducer,
      user: userReducer,
  },
});
