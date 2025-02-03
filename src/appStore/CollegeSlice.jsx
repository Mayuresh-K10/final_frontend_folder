import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to handle college login
export const collegeLoginUser = createAsyncThunk(
    "college/loginUser",
    async ({ official_email, password }, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_DJANGO_URL}/login/university/`, // Adjust your endpoint as needed
                { official_email, password }, // Use the correct keys as per the API requirement
                { withCredentials: true }
            );

            // Store access token in local storage
            localStorage.setItem("collegeAccessToken", response.data.token);
            localStorage.setItem("collegeid", response.data.collegeid);
            localStorage.setItem("collegename", response.data.university_name);
            localStorage.setItem("collegeemail", response.data.official_email); // Adjust based on API response
            localStorage.setItem("CollegeNumber", response.data.phone);
            localStorage.setItem("CollegeModel", response.data.model);
            // console.log("College access token", response.data.token);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "An error occurred");
        }
    }
);

// Async thunk to handle college logout
export const collegeLogoutUser = createAsyncThunk(
    "college/logoutUser",
    async (_, { rejectWithValue }) => {
        try {
            const accessToken = localStorage.getItem("collegeAccessToken");
            // console.log("College Access Token during logout:", accessToken);

            if (!accessToken) {
                console.error("No access token found");
                return rejectWithValue(
                    "No access token found. Please log in again."
                );
            }

            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_DJANGO_URL}/logout/university/`, // Adjust your endpoint as needed
                { confirmation: true }, // Sending confirmation as raw JSON
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken}`,
                    },
                    withCredentials: true,
                }
            );

            return response.data; // return any relevant data if needed
        } catch (error) {
            console.error(
                "Logout error details:",
                error.response?.data || error.message
            );
            return rejectWithValue(error.response?.data || "Logout failed");
        }
    }
);

const CollegeSlice = createSlice({
    name: "college",
    initialState: {
        college: null,
        isAuthenticated: false,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Handle college login
            .addCase(collegeLoginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(collegeLoginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.college = action.payload;
                localStorage.setItem(
                    "collegeAccessToken",
                    action.payload.token
                );
                localStorage.setItem("collegeid", action.payload.collegeid);
                localStorage.setItem(
                    "collegename",
                    action.payload.university_name
                );
                localStorage.setItem(
                    "collegeemail",
                    action.payload.official_email
                );
                localStorage.setItem("CollegeNumber", action.payload.phone);
                localStorage.setItem("CollegeModel", action.payload.model);
            })
            .addCase(collegeLoginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Handle college logout
            .addCase(collegeLogoutUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(collegeLogoutUser.fulfilled, (state) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.college = null;
                localStorage.removeItem("collegeAccessToken"); // Clear token on logout
            })
            .addCase(collegeLogoutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default CollegeSlice.reducer;
