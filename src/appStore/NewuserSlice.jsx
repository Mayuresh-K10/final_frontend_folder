import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to handle login
export const newuserloginUser = createAsyncThunk(
    "user/loginUser",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_DJANGO_URL}/login`,
                { email, password },
                { withCredentials: true }
            );

            // Store access token in local storage
            localStorage.setItem("newaccessToken", response.data.unique_token);
            localStorage.setItem("newuseruserid", response.data.id);
            localStorage.setItem("newuseremail", response.data.email);
            localStorage.setItem("newusername", response.data.firstname);
            localStorage.setItem("newuserlastname", response.data.lastname);
            localStorage.setItem("newuserPhone", response.data.phone);
            localStorage.setItem("newuserModel", response.data.model);
            // console.log("access token",response.data)
            // Replace with the actual key based on your API response
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response?.data || "An error occurred");
        }
    }
);

// Async thunk to handle logout
// Async thunk to handle logout
// Async thunk to handle logout
export const newuserlogoutUser = createAsyncThunk(
    "user/logoutUser",
    async (_, { rejectWithValue }) => {
        try {
            const accessToken = localStorage.getItem("jobaccessToken");
            // console.log("College Access Token during logout:", accessToken);

            if (!accessToken) {
                console.error("No access token found");
                return rejectWithValue(
                    "No access token found. Please log in again."
                );
            }

            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_DJANGO_URL}/logout/student/`, // Adjust your endpoint as needed
                { confirmation: true }, // Sending confirmation as raw JSON
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${accessToken}`,
                    },
                    withCredentials: true,
                }
            );
            localStorage.removeItem("profileImg");

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

const newuserSlice = createSlice({
    name: "newuser",
    initialState: {
        newuser: null,
        isAuthenticated: false,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Handle login
            .addCase(newuserloginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(newuserloginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.newuser = action.payload;
                localStorage.setItem(
                    "newaccessToken",
                    action.payload.unique_token
                ); // Access token
                localStorage.setItem("newuseruserid", action.payload.id); // User ID
                localStorage.setItem("newuseremail", action.payload.email); // Email
                localStorage.setItem("newusername", action.payload.firstname);
                localStorage.setItem(
                    "newuserlastname",
                    action.payload.lastname
                );
                localStorage.setItem("newuserPhone", action.payload.phone);
                localStorage.setItem("newuserModel", action.payload.model);
            })
            .addCase(newuserloginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Handle logout
            .addCase(newuserlogoutUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(newuserlogoutUser.fulfilled, (state) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.newuser = null;
            })
            .addCase(newuserlogoutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default newuserSlice.reducer;
