import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    categories: [],
    brands: [],
    pricerange: { min: 0, max: 9999 },
    stocks: [],
  },
  reducers: {
    bycategory: (state, action) => {
      const category = action.payload;
      if (state.categories.includes(category)) {
        state.categories = state.categories.filter((c) => c !== category);
      } else {
        state.categories.push(category);
      }
    },
    bybrand: (state, action) => {
      const brand = action.payload;
      if (state.brands.includes(brand)) {
        state.brands = state.brands.filter((b) => b !== brand);
      } else {
        state.brands.push(brand);
      }
    },
    byprice: (state , action) => {
      state.pricerange.min = action.payload.min;
      state.pricerange.max = action.payload.max;
    },
    bystock: (state, action) => {
      const stock = action.payload;
      if (state.stocks.includes(stock)) {
        state.stocks = state.stocks.filter((s) => s !== stock);
      } else {
        state.stocks.push(stock);
      }
    },
  },
});

export const { bycategory, bybrand, byprice, bystock } = filterSlice.actions;
export default filterSlice.reducer;
