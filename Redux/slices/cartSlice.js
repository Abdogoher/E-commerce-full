import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [], // المنتجات في السلة
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1; // لو موجود نزود الكمية
      } else {
        state.items.push({ ...product, quantity: 1 }); // أول مرة يدخل
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item.id === productId);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1; // قلل الكمية
        } else {
          state.items = state.items.filter((item) => item.id !== productId); // لو 0 يتحذف
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
