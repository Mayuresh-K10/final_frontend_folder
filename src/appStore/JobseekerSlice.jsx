import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to handle login
export const jobseekerloginUser = createAsyncThunk(
    "user/loginUser",
    async ({ email, password }, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_DJANGO_URL}/login/job_seeker/`,
                { email, password },
                { withCredentials: true }
            );

            // console.log("jobseeker-response", response);

            // Store access token in local storage
            localStorage.setItem("jobaccessToken", response.data.unique_token);
            localStorage.setItem("jobseekeruserid", response.data.userid);
            localStorage.setItem("jobseekeremail", response.data.useremail);
            localStorage.setItem("jobseekername", response.data.first_name);
            localStorage.setItem("jobseekerLastname", response.data.last_name);
            localStorage.setItem("JobSeekerNumber", response.data.phone);
            localStorage.setItem("JobseekerModel", response.data.model);
            // console.log("access token", response.data);
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
export const jobseekerlogoutUser = createAsyncThunk(
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

            // console.log("Request headers:", {
            //     "Content-Type": "application/json",
            //     Authorization: `Bearer ${accessToken}`,
            // });

            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_DJANGO_URL}/logout/job-seeker/`, // Adjust your endpoint as needed
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

const JobseekerSlice = createSlice({
    name: "jobseeker",
    initialState: {
        jobseeker: null,
        isAuthenticated: false,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Handle login
            .addCase(jobseekerloginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(jobseekerloginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthenticated = true;
                state.jobseeker = action.payload;
                localStorage.setItem(
                    "jobaccessToken",
                    action.payload.unique_token
                ); // Access token
                localStorage.setItem("jobseekeruserid", action.payload.userid); // User ID
                localStorage.setItem(
                    "jobseekeremail",
                    action.payload.useremail
                ); // Email
                localStorage.setItem(
                    "jobseekername",
                    action.payload.first_name
                );
                localStorage.setItem(
                    "jobseekerLastname",
                    action.payload.last_name
                );
                localStorage.setItem("JobSeekerNumber", action.payload.phone);
                localStorage.setItem("JobseekerModel", action.payload.model);
            })
            .addCase(jobseekerloginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // Handle logout
            .addCase(jobseekerlogoutUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(jobseekerlogoutUser.fulfilled, (state) => {
                state.loading = false;
                state.isAuthenticated = false;
                state.jobseeker = null;
            })
            .addCase(jobseekerlogoutUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default JobseekerSlice.reducer;
