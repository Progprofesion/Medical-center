import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: localStorage.getItem("userEmail") || null,
  token: localStorage.getItem("accessToken") || null,
  id: localStorage.getItem("id") || null,
  modalActive: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser: (state) => {
      state.email = null;
      state.token = null;
      state.id = null;
      localStorage.setItem("userEmail", "");
      localStorage.setItem("accessToken", "");
      localStorage.setItem("id", "");
    },
    setModalActive: (state, action) => {
      state.modalActive = action.payload;
    },
  },
});

export const { setUser, removeUser, setModalActive } = userSlice.actions;

export default userSlice.reducer;
