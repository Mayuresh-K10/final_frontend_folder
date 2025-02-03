import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: "allCollege",
  initialState: {
    colleges: {},
   
  },
  reducers: {
    updateColleges: (state, action) => {
      //   debugger
      state.colleges = { ...action.payload };
    },
   
  },
});

export const actions = storeSlice.actions;

export default storeSlice.reducer;
