import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dataUsers: null,
  login: localStorage.getItem("login") || null,
  password: localStorage.getItem("passowrd") || null,
  modalActive: false,
  auth: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setDataUsers: (state, action) => {
      state.dataUsers = action.payload;
    },
    setLogin: (state, action) => {
      state.login = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    removeUser: (state) => {
      state.login = null;
      state.password = null;
      localStorage.setItem("login", "");
      localStorage.setItem("password", "");
      localStorage.setItem("auth", "");
    },
    setModalActive: (state, action) => {
      state.modalActive = action.payload;
    },
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
  },
});

export const {
  setDataUsers,
  setLogin,
  setPassword,
  removeUser,
  setModalActive,
  setAuth,
} = userSlice.actions;

export default userSlice.reducer;
