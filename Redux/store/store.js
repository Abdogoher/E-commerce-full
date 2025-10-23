"use client";
import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "../slices/ProductsSlice";
import userReducer from "../slices/userSlice";
import filterReducer from "../slices/filterSlice";
import cartReducer from "../slices/cartSlice";
import searchReducer from "../slices/searchSlice";

export const store = configureStore({
  reducer: {
    products: ProductsReducer,
    user: userReducer,
    filters: filterReducer,
    cart: cartReducer,
    search: searchReducer
  },
});
