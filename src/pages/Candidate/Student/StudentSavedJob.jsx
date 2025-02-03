import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Box, Typography, Button, Grid } from "@mui/material";
import { useSelector } from "react-redux";

const StudentSavedJobs = () => {
    const [savedJobs, setSavedJobs] = useState([]);
    const student = useSelector((state) => state.newuser);

    const [flag, setFlag] = useState(false);

    const uniqueToken =
        student?.unique_token || localStorage.getItem("newaccessToken");
    const studentId = student?.id || localStorage.getItem("newuseruserid");
    const studentname =
        student?.firstname || localStorage.getItem("newusername");
    const studentmail = student?.email || localStorage.getItem("newuseremail");

    // Fetch saved jobs from the backend
    useEffect(() => {
        const fetchSavedJobs = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_BACKEND_DJANGO_URL}/fetch-saved-jobs-new-user/${studentId}/`,
                    {
                        headers: {
                            Authorization: `Bearer ${uniqueToken}`,
                        },
                    }
                );
                if (response.status === 200) {
                    // Ensure the response is an array
                    setSavedJobs(
                        Array.isArray(response.data.saved_jobs)
                            ? response.data.saved_jobs
                            : []
                    );
                    // console.log("Saved jobs", response.data);
                } else {
                    alert("No saved jobs found.");
                    setSavedJobs([]); // Fallback if no jobs found
                }
            } catch (error) {
                console.error("Error fetching saved jobs", error);
                alert("An error occurred while fetching saved jobs");
                setSavedJobs([]); // Fallback on error
            }
        };

        fetchSavedJobs();
    }, [studentId, uniqueToken]);

    // Remove job from saved jobs
    const removeSavedJob = async (jobId, job1Id) => {
        try {
            // Prepare the data to be sent based on the provided job or job1 ID
            const data = {};
            if (jobId) data.job_id = jobId; // If job_id is provided
            if (job1Id) data.job_id = job1Id; // If job1_id is provided

            const response = await axios.delete(
                `${process.env.REACT_APP_BACKEND_DJANGO_URL}/unsave-job-new-user/`,
                {
                    headers: {
                        Authorization: `Bearer ${uniqueToken}`,
                    },
                    data: {
                        user_id: studentId,
                        ...data, // Include either job_id or job1_id
                    },
                }
            );

            if (response.status === 200) {
                alert("Job removed successfully");
                // Update state to reflect removal in frontend
                setSavedJobs(
                    savedJobs.filter(
                        (job) =>
                            (job.job && job.job.job_id !== jobId) ||
                            (job.job1 && job.job1.job1_id !== job1Id)
                    )
                ); // Remove the job from savedJobs list
                setFlag(true);
            }
        } catch (error) {
            console.error("Error removing saved job:", error);
            alert("An error occurred while removing the job");
        }
    };

    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                background: "#f4f4f4",
                padding: "20px",
            }}
        >
            <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
                Saved Jobs
            </Typography>
            <Grid container spacing={3}>
                {savedJobs.length === 0 ? (
                    <Typography
                        variant="h6"
                        sx={{ textAlign: "center", width: "100%" }}
                    >
                        No saved jobs found.
                    </Typography>
                ) : (
                    savedJobs.map((job, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{ p: 3 }}>
                                <Typography variant="h6">
                                    {job.job
                                        ? job.job.job_title
                                        : job.job1.job_title}
                                </Typography>
                                <Typography variant="body2">
                                    {job?.job?.company
                                        ? "Company"
                                        : "University"}
                                    :{" "}
                                    {job.job
                                        ? job.job.company
                                        : job.job1.university}
                                </Typography>
                                <Typography variant="body2">
                                    Location:{" "}
                                    {job.job
                                        ? job.job.location
                                        : job.job1.location}
                                </Typography>
                                <Typography variant="body2">
                                    Job Type:{" "}
                                    {job.job
                                        ? job.job.job_type
                                        : job.job1.job_type}
                                </Typography>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    sx={{ mt: 2 }}
                                    onClick={() => {
                                        const jobId = job.job
                                            ? job.job.job_id
                                            : null;
                                        const job1Id = job.job1
                                            ? job.job1.job1_id
                                            : null;
                                        removeSavedJob(jobId, job1Id); // Pass the appropriate ID
                                    }}
                                >
                                    Remove
                                </Button>
                            </Card>
                        </Grid>
                    ))
                )}
            </Grid>
        </Box>
    );
};

export default StudentSavedJobs;
