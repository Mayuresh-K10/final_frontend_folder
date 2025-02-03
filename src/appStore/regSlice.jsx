import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: "regStore",
  initialState: {
    step1: {},
    step2: {},
    step3: {},
    step4: {},
    step5: {},
    step6: {},
    step7: {},
  },
  reducers: {
    updateStep1: (state, action) => {
      //   debugger
      state.step1 = { ...action.payload };
    },
    updateStep2: (state, action) => {
      state.step2 = { ...action.payload };
    },
    updateStep3: (state, action) => {
      state.step3 = { ...action.payload };
    },
    updateStep4: (state, action) => {
      state.step4 = { ...action.payload };
    },
    updateStep5: (state, action) => {
      state.step5 = { ...action.payload };
    },
    updateStep6: (state, action) => {
      state.step6 = { ...action.payload };
    },
    updateStep7: (state, action) => {
      state.step7 = { ...action.payload };
    },
    resetAllSteps:(state,action)=>{
      state.step1={};
      state.step2={};
      state.step3={};
      state.step4={};
      state.step5={};
      state.step6={};
      state.step7={};
    }
  },
});

export const actions = storeSlice.actions;

export default storeSlice.reducer;
