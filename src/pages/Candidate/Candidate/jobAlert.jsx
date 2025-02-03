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
} from "@mui/material";
import { useSelector } from "react-redux";

const JobAlert = () => {
    const [jobs, setJobs] = useState([]);
    const [sortby, setSortby] = useState("latest");
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 6;

    const user = useSelector((state) => state.jobseeker);

    const userid = user?.userid || localStorage.getItem("jobseekeruserid");
    const uniqueToken =
        user?.unique_token || localStorage.getItem("jobaccessToken");
    const userModel = user?.model || localStorage.getItem("JobseekerModel");

    // Fetch job data from the API
    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_BACKEND_DJANGO_URL}/fetch-jobs/${userid}/`,
                    {
                        headers: {
                            Authorization: `Bearer ${uniqueToken}`,
                        },
                        params: {
                            sort_order: sortby,
                        },
                    }
                );
                setJobs(response.data.jobs);
                //console.log("job Data",response.data)
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };
        fetchJobs();
    }, [sortby, uniqueToken, userid]);

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

    const applyJob = async (jobId) => {
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BACKEND_DJANGO_URL}/jobseeker-apply-job/${jobId}/${userid}`,
                {
                    headers: {
                        Authorization: `Bearer ${uniqueToken}`,
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
        try {
            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_DJANGO_URL}/save-job/`,
                {
                    jobseeker_id: userid, // Send jobseeker_id instead of user_id
                    job_id: jobId, // Assuming job_id is the correct ID here; adjust if necessary
                    // If you need job1_id instead, you can send job1_id based on the job type
                    // job1_id: job1Id   // Uncomment and use if required for specific job types
                },
                {
                    headers: {
                        Authorization: `Bearer ${uniqueToken}`,
                    },
                }
            );

            if (response.status === 201) {
                alert("Job saved successfully");
            } else {
                alert("Failed to save job. Please try again.");
            }
        } catch (error) {
            console.error("Error saving the job", error.response.data);
            alert(`${error.response.data.error}`);
        }
    };

    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
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
                    marginRight: "25px",
                    "@media(max-width:1300px)": {
                        marginRight: "25px",
                        marginLeft: "25px",
                    },
                }}
            >
                <Box
                    sx={{
                        borderRadius: "50px",
                        backgroundColor: "#313893",
                        width: "100%",
                        height: "auto",
                    }}
                >
                    <Card
                        sx={{
                            borderRadius: "50px",
                            backgroundColor: "white",
                            padding: "20px",
                            height: "800px",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <FormControl sx={{ mb: 2, minWidth: 120 }}>
                            <InputLabel>Sort By</InputLabel>
                            <Select
                                value={sortby}
                                onChange={handleSortbyChange}
                                label="Sort By"
                                sx={{
                                    borderRadius: "20px",
                                    outline: "none",
                                    height: "3rem",
                                }}
                            >
                                <MenuItem value="latest">Latest</MenuItem>
                                <MenuItem value="oldest">Oldest</MenuItem>
                            </Select>
                        </FormControl>
                        <Grid
                            container
                            spacing={3}
                            sx={{ width: "100%", justifyContent: "center" }}
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
                                            Posted:{" "}
                                            {new Date(
                                                job.job_posted_date
                                            ).toLocaleDateString()}
                                        </Typography>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            sx={{ mt: 2, mr: 1 }}
                                            onClick={() => applyJob(job.job_id)}
                                        >
                                            Apply
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            color="secondary"
                                            sx={{ mt: 2 }}
                                            onClick={() => saveJob(job.job_id)}
                                        >
                                            Save Job
                                        </Button>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Pagination
                                count={Math.ceil(jobs.length / jobsPerPage)}
                                page={currentPage}
                                onChange={handleChangePage}
                                color="primary"
                                sx={{ mt: 3 }}
                            />
                        </div>
                    </Card>
                </Box>
            </Box>
        </Box>
    );
};

export default JobAlert;
