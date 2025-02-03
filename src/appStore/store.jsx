import { configureStore } from "@reduxjs/toolkit";
import storeReducer from "./storeSlice";
import regSlice from "./regSlice";
import allCollege from "./allCollege";
import jobseekerReducer from './JobseekerSlice';
import collegeSlice from './CollegeSlice';
import companyReducer from './CompanySlice';
import newuser from "./NewuserSlice";


export const store = configureStore({
  reducer: {
    store: storeReducer,
    register: regSlice,
    allCollege: allCollege,
    jobseeker:jobseekerReducer,
    college:collegeSlice,
    company: companyReducer,
    newuser:newuser,
  },
});
