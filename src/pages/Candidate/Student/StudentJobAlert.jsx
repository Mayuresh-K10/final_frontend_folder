import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Card,
    Box,
    Typography,
    Button,
    FormControl,
    Pagination,
    InputLabel,
    Select,
    MenuItem,
    Grid,
    IconButton,
} from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useSelector } from "react-redux";

const StudentJobAlert = () => {
    const [jobs, setJobs] = useState([]);
    const [savedJobs, setSavedJobs] = useState([]);
    const [sortby, setSortby] = useState("latest");
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 10;

    const student = useSelector((state) => state.newuser);

    const uniquetoken =
        student?.unique_token || localStorage.getItem("newaccessToken");
    const studentId = student?.id || localStorage.getItem("newuseruserid");
    const studentname =
        student?.firstname || localStorage.getItem("newusername");
    const studentmail = student?.email || localStorage.getItem("newuseremail");

    // Fetch job data from the API
    useEffect(() => {
        const fetchJobs = async () => {
            const token = uniquetoken;
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_BACKEND_DJANGO_URL}/fetch-user-skills-jobs/${studentId}/`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                        params: {
                            sort_order: sortby,
                        },
                    }
                );
                setJobs(response.data.jobs);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };
        fetchJobs();
    }, [sortby]);

    // Fetch saved jobs for the user
    useEffect(() => {
        const fetchSavedJobs = async () => {
            const token = uniquetoken;
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_BACKEND_DJANGO_URL}/fetch-saved-jobs-new-user/${studentId}/`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setSavedJobs(
                    response.data.saved_jobs.map(
                        (savedJob) => savedJob.job.job_id
                    )
                );
            } catch (error) {
                console.error("Error fetching saved jobs:", error);
            }
        };
        fetchSavedJobs();
    }, []);

    const handleSortbyChange = (e) => {
        setSortby(e.target.value);
        setCurrentPage(1); // Reset to first page on sort change
    };

    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob);

    const handleChangePage = (event, value) => {
        setCurrentPage(value);
    };

    const applyjob = async (jobId) => {
        const token = uniquetoken;
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BACKEND_DJANGO_URL}/user-apply-job/${jobId}/${studentId}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.status === 201) {
                alert("Successfully applied to job");
            } else {
                alert("Failed to apply to job, Please try again");
            }
        } catch (error) {
            console.error("Error applying for the job", error);
            alert(error.response.data.error);
        }
    };

    const saveJob = async (jobId) => {
        const token = uniquetoken;
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_DJANGO_URL}/save-job-new-user/`,
                { new_user_id: studentId, job_id: jobId },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.status === 201) {
                setSavedJobs((prevSavedJobs) => [...prevSavedJobs, jobId]);
                alert("Job saved successfully");
            }
        } catch (error) {
            console.error("Error saving job:", error);
            alert(`${error.response.data.error}`);
        }
    };

    const unsaveJob = async (jobId) => {
        const token = uniquetoken;
        try {
            const response = await axios.delete(
                `${process.env.REACT_APP_BACKEND_DJANGO_URL}/unsave-job-new-user/`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                    data: { new_user_id: studentId, job_id: jobId },
                }
            );
            if (response.status === 200) {
                setSavedJobs((prevSavedJobs) =>
                    prevSavedJobs.filter((id) => id !== jobId)
                );
                alert("Job unsaved successfully");
            }
        } catch (error) {
            console.error("Error unsaving job:", error);
            alert("An error occurred while unsaving the job");
        }
    };

    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh", // Ensure the container fills the screen
                background: "#313893",
                borderTopLeftRadius: "50px",
                marginBottom: "3rem",
                "@media(max-width:1300px)": { borderTopLeftRadius: "0px" },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "5rem",
                    px: 3, // Padding for responsiveness
                }}
            >
                <Box
                    sx={{
                        borderRadius: "50px",
                        backgroundColor: "#313893",
                        width: "100%",
                        height: "auto",
                        overflow: "auto", // Handle content overflow
                    }}
                >
                    <Card
                        sx={{
                            borderRadius: "50px",
                            backgroundColor: "white",
                            padding: "20px",
                            minHeight: "100vh", // Make it adapt to viewport height
                            display: "flex",
                            flexDirection: "column",
                            boxSizing: "border-box",
                        }}
                    >
                        <FormControl sx={{ mb: 2, minWidth: 120 }}>
                            {/* Sort Dropdown */}
                            <Select
                                value={sortby}
                                onChange={handleSortbyChange}
                            >
                                <MenuItem value="latest">Latest</MenuItem>
                                <MenuItem value="oldest">Oldest</MenuItem>
                            </Select>
                        </FormControl>
                        <Grid
                            container
                            spacing={3}
                            sx={{
                                width: "100%",
                                justifyContent: "center",
                            }}
                        >
                            {currentJobs.map((job, index) => (
                                <Grid item xs={12} sm={6} md={4} key={index}>
                                    <Card sx={{ p: 3, height: "100%" }}>
                                        <Typography variant="h6">
                                            {job.job_title}
                                        </Typography>
                                        <Typography variant="body2">
                                            {job?.company_name
                                                ? "Company"
                                                : "University"}
                                            : {job.company_name || job.college}
                                        </Typography>
                                        <Typography variant="body2">
                                            Location: {job.location}
                                        </Typography>
                                        <Typography variant="body2">
                                            Job Type: {job.job_type}
                                        </Typography>
                                        <Typography variant="body2">
                                            Job_ID : {job.job_id}
                                        </Typography>
                                        <Typography variant="body2">
                                            Posted:{" "}
                                            {new Date(
                                                job.job_posted_date
                                            ).toLocaleDateString()}
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            sx={{ mt: 2 }}
                                            onClick={() => applyjob(job.job_id)}
                                        >
                                            Apply
                                        </Button>
                                        {/* <IconButton
                                            sx={{ mt: 1 }}
                                            color="primary"
                                            onClick={() =>
                                                savedJobs.includes(job.job_id)
                                                    ? unsaveJob(job.job_id)
                                                    : saveJob(job.job_id)
                                            }
                                        >
                                            {savedJobs.includes(job.job_id) ? (
                                                <BookmarkIcon />
                                            ) : (
                                                <BookmarkBorderIcon />
                                            )}
                                        </IconButton> */}
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            sx={{ mt: 2, ml: 1 }}
                                            onClick={() => saveJob(job.job_id)}
                                        >
                                            Save Job
                                        </Button>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                        <Pagination
                            count={Math.ceil(jobs.length / jobsPerPage)}
                            page={currentPage}
                            onChange={handleChangePage}
                            color="primary"
                            sx={{
                                mt: 3,
                                display: "flex",
                                justifyContent: "center",
                            }}
                        />
                    </Card>
                </Box>
            </Box>
        </Box>
    );
};

export default StudentJobAlert;
