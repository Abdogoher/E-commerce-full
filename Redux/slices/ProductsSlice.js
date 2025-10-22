import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// fetch data
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://dummyjson.com/products");
    const data = response.data.products;
    return data;
  }
);

const ProductsSlice = createSlice({
  name: "Products",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload; // ← تخزين المنتجات في items
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ProductsSlice.reducer;
