import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const searchProducts = createAsyncThunk(
  "search/searchProducts",
  async (query) => {
    const res = await axios.get(
      `https://dummyjson.com/products/search?q=${query}`
    );
    return res.data.products;
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    term: "",
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.term = action.payload;
    },
    clearSearch: (state) => {
      state.term = "";
      state.results = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setSearchTerm, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
