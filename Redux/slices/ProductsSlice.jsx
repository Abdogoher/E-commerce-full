import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// fetch data
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://dummyjson.com/products");
    const data = response.data;
    // لو المنتجات عبارة عن array جبها
    if (Array.isArray(data)) return data;
    // لو المنتجات object يجبلي القيمة اللي جواها
    if (data.products && typeof data.products === "object") {
      return Object.values(data.products);
    }
    // لو الداتا object يحولها
    if (data && typeof data === "object") {
      return [];
    }

    return console.log(data);
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
