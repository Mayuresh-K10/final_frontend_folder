import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: "store",
  initialState: {
    user: {},
    formPopPup: {
      showAlreadyRegisterCard: false,

      showLogin: false,

      showNext: false,

      showRegister: true,

      showRequestOtp: false,
    },
  },
  reducers: {
    setPopPup: (state, action) => {
      state.formPopPup = action.payload;
    },
    setUser: (state, action) => {
      state.user = { ...action.payload, ...state.user };
    },
  },
});

export const { setPopPup, setUser } = storeSlice.actions;

export default storeSlice.reducer;
