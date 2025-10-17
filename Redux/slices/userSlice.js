import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user")) || null
      : null,
};

const userSlice = createSlice({
  name: "Users",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(action.payload));
      }
    },
    logout: (state) => {
      state.user = null;
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
      }
    },
    register: (state, action) => {
      if (typeof window !== "undefined") {
        const users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(action.payload);
        localStorage.setItem("users", JSON.stringify(users));

        state.user = action.payload;
        localStorage.setItem("newuser", JSON.stringify(action.payload));
      }
    },
    loaduser: (state) => {
      if (typeof window !== "undefined") {
        const savedUser = localStorage.getItem("newuser");
        if (savedUser) {
          state.user = JSON.parse(savedUser);
        }
      }
    },
  },
});

export const { login, logout, loaduser, register } = userSlice.actions;
export default userSlice.reducer;
