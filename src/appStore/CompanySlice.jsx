import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to handle login
export const companyloginUser = createAsyncThunk(
    "user/loginUser",
    async ({ official_email, password }, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_DJANGO_URL}/login/company/`,
                { official_email, password },
                { withCredentials: true }
            );

            localStorage.setItem("companyaccessToken", response.data.token);
            localStorage.setItem("companyuserId", response.data.id);
            localStorage.setItem("companyEmail", response.data.official_email);
            localStorage.setItem("companyname", response.data.company_name);
            localStorage.setItem("model", response.data.model);
            localStorage.setItem("companyPhone", response.data.phone);
            // console.log("access token",response.data)
            return response.data;
        } catch (error) {
            // console.log("Error", error);
            return rejectWithValue(error.response?.data || "An error occurred");
        }
    }
);

export const companylogoutUser = createAsyncThunk(
    "user/logoutUser",
    async (_, { rejectWithValue }) => {
        try {
            const accessToken = localStorage.getItem("companyaccessToken");
            // console.log("Company Access Token during logout:", accessToken);

            if (!accessToken) {
                console.error("No access token found");
                return rejectWithValue(
                    "No access token found. Please log in again."
                );
            }

            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_DJANGO_URL}/logout/company/`,
                { confirmation: true },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken}`,
                    },
                    withCredentials: true,
                }
            );

            return response.data;
        } catch (error) {
            console.error(
                "Logout error details:",
                error.response?.data || error.message
            );
            return rejectWithValue(error.response?.data || "Logout failed");
        }
    }
);

const companySlice = createSlice({
    name: "company",
    initialState: {
        company: null,
        isAuthenticated: false,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Handle login
            .addCase(companyloginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(companyloginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.company = action.payload;

                localStorage.setItem(
                    "companyaccessToken",
                    action.payload.token
                );
                localStorage.setItem("companyuserId", action.payload.id);
                localStorage.setItem(
                    "companyEmail",
                    action.payload.official_email
                );
                localStorage.setItem(
                    "companyname",
                    action.payload.company_name
                );
                localStorage.setItem("model", action.payload.model);
                localStorage.setItem("companyPhone", action.payload.phone);
            })
            .addCase(companyloginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Handle logout
            .addCase(companylogoutUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(companylogoutUser.fulfilled, (state) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.company = null;
            })
            .addCase(companylogoutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default companySlice.reducer;
