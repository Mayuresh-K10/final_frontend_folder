import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    Grid,
    Select,
    FormControl,
    InputLabel,
    MenuItem,
} from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import { useSelector } from "react-redux";
import AreaChartComponent from "../Charts/AreaChart";
import BarChartComponent from "../Charts/BarChart";
import axios from "axios";

const JobSeekerdashboard = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("");
    const [filterJobType, setFilterJobType] = useState("");
    const [sortType, setSortType] = useState("latest");
    const [sortOrder, setSortOrder] = useState("asc");
    const [jobData, setJobData] = useState([]);

    // State to store the fetched data
    const jobuser = useSelector((state) => state.jobseeker);
    const jobemail =
        jobuser?.useremail || localStorage.getItem("jobseekeremail");
    const uniqueToken =
        jobuser?.unique_token || localStorage.getItem("jobaccessToken");
    const userid = jobuser?.userid || localStorage.getItem("jobseekeruserid");

    const [dashboardData, setDashboardData] = useState([
        {
            status: "Total Job Applied",
            quan: 0,
            icons: (
                <PersonOutlinedIcon sx={{ color: "white", fontSize: "30px" }} />
            ),
        },
        {
            status: "Interview Scheduled",
            quan: 0,
            icons: (
                <BookmarkBorderOutlinedIcon
                    sx={{ color: "white", fontSize: "30px" }}
                />
            ),
        },
        {
            status: "Rejected",
            quan: 0,
            icons: (
                <BorderColorOutlinedIcon
                    sx={{ color: "white", fontSize: "30px" }}
                />
            ),
        },
        {
            status: "Pending",
            quan: 0,
            icons: (
                <BorderColorOutlinedIcon
                    sx={{ color: "white", fontSize: "30px" }}
                />
            ),
        },
    ]);

    useEffect(() => {
        if (!jobemail || !uniqueToken) {
            console.warn("Job email or unique token is not available.");
            return;
        }

        fetch(
            `${process.env.REACT_APP_BACKEND_DJANGO_URL}/jobseeker-application-status-counts/${userid}/?email=${jobemail}`,
            {
                headers: {
                    Authorization: `Bearer ${uniqueToken}`,
                    "Content-Type": "application/json",
                },
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                // console.log("Fetched data candidate profile:", data); // Debugging
                setDashboardData([
                    {
                        status: "Total Job Applied",
                        quan: data.total_jobs_applied,
                        icons: (
                            <PersonOutlinedIcon
                                sx={{ color: "white", fontSize: "30px" }}
                            />
                        ),
                    },
                    {
                        status: "Interview Scheduled",
                        quan: data.interview_scheduled_count,
                        icons: (
                            <BookmarkBorderOutlinedIcon
                                sx={{ color: "white", fontSize: "30px" }}
                            />
                        ),
                    },
                    {
                        status: "Rejected",
                        quan: data.rejected_count,
                        icons: (
                            <BorderColorOutlinedIcon
                                sx={{ color: "white", fontSize: "30px" }}
                            />
                        ),
                    },
                    {
                        status: "Pending",
                        quan: data.pending_count,
                        icons: (
                            <BorderColorOutlinedIcon
                                sx={{ color: "white", fontSize: "30px" }}
                            />
                        ),
                    },
                ]);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, [jobemail, uniqueToken]);

    // Job post data set to zero
    const jobPostData = []; // No job posts

    // Student inquiry data set to zero
    const studentInquiries = []; // No inquiries

    // Available courses data set to zero
    const availableCourses = []; // No courses

    // Monthly applications set to zero
    const monthlyApplications = []; // No applications

    // Update the filter and sort functionality based on API response data
    const handleSearch = (e) => setSearchTerm(e.target.value);
    const handleFilterChange = (e) => setFilterStatus(e.target.value);
    const handleJobTypeChange = (e) => setFilterJobType(e.target.value);
    const handleSortChange = (e) => setSortType(e.target.value);

    // Filter and Sort Jobs
    useEffect(() => {
        const fetchappliedjob = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_BACKEND_DJANGO_URL}/fetch-jobseeker-applied-jobs/${userid}/?email=${jobemail}`,
                    {
                        headers: {
                            Authorization: `Bearer ${uniqueToken}`,
                        },
                    }
                );
                console.log("Dahboard data", response.data);
                setJobData(response.data);
            } catch (error) {
                console.error("Error fetching job data:", error);
            }
        };
        fetchappliedjob();
    }, [userid, uniqueToken, jobemail]);

    // Filter and Sort Jobs
    // const filteredJobs = jobData
    //     .filter(
    //         (job) =>
    //             (job.position?.toLowerCase() || "").includes(
    //                 searchTerm.toLowerCase()
    //             ) &&
    //             (filterStatus ? job.status === filterStatus : true) &&
    //             (filterJobType ? job.jobType === filterJobType : true)
    //     )
    //     .sort((a, b) => {
    //         if (sortType === "alphabetical") {
    //             return sortOrder === "asc"
    //                 ? a.position.localeCompare(b.position)
    //                 : b.position.localeCompare(a.position);
    //         } else if (sortType === "latest") {
    //             return sortOrder === "asc"
    //                 ? new Date(a.dateApplied) - new Date(b.dateApplied)
    //                 : new Date(b.dateApplied) - new Date(a.dateApplied);
    //         }
    //         return 0;
    //     });

    const filteredJobs = jobData
        .filter(
            (job) =>
                (job.job_title?.toLowerCase() || "").includes(
                    searchTerm.toLowerCase()
                ) &&
                (filterStatus ? job.status === filterStatus : true) &&
                (filterJobType ? job.job_type === filterJobType : true)
        )
        .sort((a, b) => {
            if (sortType === "alphabetical") {
                return sortOrder === "asc"
                    ? a.job_title.localeCompare(b.job_title)
                    : b.job_title.localeCompare(a.job_title);
            } else if (sortType === "latest") {
                // Sort by applied_at in descending order (newest first)
                return new Date(b.applied_at) - new Date(a.applied_at);
            } else if (sortType === "oldest") {
                // Sort by applied_at in ascending order (oldest first)
                return new Date(a.applied_at) - new Date(b.applied_at);
            }
            return 0;
        });

    // Count the number of filtered jobs
    const filteredJobCount = filteredJobs.length;

    const inputStyle = {
        width: "100%",
        maxWidth: "400px",
        padding: "10px",
        borderRadius: "20px",
        border: "1px solid #ccc",
        fontSize: "16px",
        boxSizing: "border-box",
        transition: "all 0.3s ease",
        height: "2.5rem",
        outline: "none",
    };

    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                background: "white",
                borderTopLeftRadius: "50px",
                "@media(max-width:1300px)": { borderTopRightRadius: "50px" },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "32px",
                    gap: "5rem",
                }}
            >
                {/* Dashboard Overview */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "100%",
                        flexWrap: "wrap",
                        gap: "2rem",
                    }}
                >
                    {dashboardData.map((item, index) => (
                        <Box
                            sx={{
                                width: "220px",
                                height: "150px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "16px",
                                background: "white",
                                boxShadow:
                                    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                                borderRadius: "28px",
                                gap: "1rem",
                                "@media(max-width:600px)": { width: "100%" },
                            }}
                            key={index}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    alignItems: "flex-start",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "40px",
                                        fontWeight: 600,
                                        color: "#313893",
                                    }}
                                >
                                    {item.quan}
                                </Typography>
                                <Typography sx={{ fontSize: "16px" }}>
                                    {item.status}
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    width: "60px",
                                    height: "60px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    borderRadius: "50%",
                                    background: "#313893",
                                    fontSize: "32px",
                                    color: "white",
                                }}
                            >
                                {item.icons}
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* Job List and Filters */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: "1.7rem",
                        width: "100%",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "1.5rem",
                        }}
                    >
                        <input
                            placeholder="Search Job Position"
                            value={searchTerm}
                            onChange={handleSearch}
                            style={inputStyle}
                        />
                        <FormControl>
                            <InputLabel>Status</InputLabel>
                            <Select
                                value={filterStatus}
                                onChange={handleFilterChange}
                                label="Status"
                                sx={{
                                    width: "170px",
                                    borderRadius: "20px",
                                    outline: "none",
                                    height: "3rem",
                                }}
                            >
                                <MenuItem value="">All</MenuItem>
                                <MenuItem value="pending">Pending</MenuItem>
                                <MenuItem value="interview_scheduled">
                                    Scheduled
                                </MenuItem>
                                <MenuItem value="rejected">Declined</MenuItem>
                                <MenuItem value="selected">Selected</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel>Job Type</InputLabel>
                            <Select
                                value={filterJobType}
                                onChange={handleJobTypeChange}
                                label="Job Type"
                                sx={{
                                    width: "170px",
                                    borderRadius: "20px",
                                    outline: "none",
                                    height: "3rem",
                                }}
                            >
                                <MenuItem value="">All</MenuItem>
                                <MenuItem value="FullTime">Full-time</MenuItem>
                                <MenuItem value="Internship">
                                    Internship
                                </MenuItem>
                                <MenuItem value="Contract">Contract</MenuItem>
                                <MenuItem value="Freelance">Freelance</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl>
                            <InputLabel>Sort By</InputLabel>
                            <Select
                                value={sortType}
                                onChange={handleSortChange}
                                label="Sort By"
                                sx={{
                                    width: "170px",
                                    borderRadius: "20px",
                                    outline: "none",
                                    height: "3rem",
                                }}
                            >
                                <MenuItem value="latest">Latest</MenuItem>
                                <MenuItem value="oldest">Oldest</MenuItem>
                                <MenuItem value="alphabetical">
                                    Alphabetically
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Typography sx={{ fontSize: "32px", fontWeight: 600 }}>
                        {filteredJobCount} Applied Jobs Found
                    </Typography>
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexWrap: "wrap",
                            justifyContent: "space-between",
                            alignItems: "center",
                            gap: "1.5rem",
                        }}
                    >
                        {filteredJobs.slice(0, 9).map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    width: "440px",
                                    height: "200px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: "24px",
                                    background: "white",
                                    boxShadow:
                                        "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                                    borderRadius: "16px",
                                    gap: "1rem",
                                    "@media(max-width:600px)": {
                                        width: "100%",
                                    },
                                }}
                            >
                                <Typography
                                    sx={{ fontSize: "20px", fontWeight: 600 }}
                                >
                                    {item.job_title}
                                </Typography>
                                <Typography sx={{ fontSize: "16px" }}>
                                    {item.university_in_charge || item.company}
                                </Typography>
                                <Typography
                                    sx={{ fontSize: "16px", color: "#555" }}
                                >
                                    {item.job_location}
                                </Typography>
                                <Typography
                                    sx={{ fontSize: "16px", color: "#777" }}
                                >
                                    {item.applied_at}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "16px",
                                        color:
                                            item.status === "rejected"
                                                ? "red"
                                                : "green",
                                    }}
                                >
                                    {item.status}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Job Posts Section */}
                {/* <Box sx={{ width: "100%" }}>
                    <Typography
                        variant="h5"
                        sx={{
                            marginBottom: "16px",
                            fontWeight: "bold",
                            color: "#313893",
                        }}
                    >
                        Job Posts
                    </Typography>
                    <Grid container spacing={2}>
                        {jobPostData.length === 0 ? (
                            <Typography>No job posts available</Typography>
                        ) : (
                            jobPostData.map((job, index) => (
                                <Grid item xs={12} md={4} key={index}>
                                    <Card
                                        sx={{
                                            boxShadow:
                                                "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                                            borderRadius: "16px",
                                        }}
                                    >
                                        <CardContent>
                                            <Typography
                                                variant="h6"
                                                sx={{ fontWeight: 600 }}
                                            >
                                                {job.title}
                                            </Typography>
                                            <Typography sx={{ color: "gray" }}>
                                                {job.location}
                                            </Typography>
                                            <Typography>
                                                Status: {job.status}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button
                                                variant="contained"
                                                color={
                                                    job.status === "Open"
                                                        ? "success"
                                                        : "error"
                                                }
                                            >
                                                {job.status === "Open"
                                                    ? "Apply Now"
                                                    : "Closed"}
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))
                        )}
                    </Grid>
                </Box> */}

                {/* Available Courses Section */}
                {/* You can implement this section similarly */}

                {/* Student Inquiries Section */}
                {/* You can implement this section similarly */}
            </Box>

            {/* Charts Section */}
            {/* <Box sx={{ padding: "32px" }}>
                <Typography
                    variant="h5"
                    sx={{
                        marginBottom: "16px",
                        fontWeight: "bold",
                        color: "#313893",
                    }}
                >
                    Number of Student Inquiries
                </Typography>
                <AreaChartComponent data={monthlyApplications} />
                <BarChartComponent data={monthlyApplications} />
            </Box> */}
        </Box>
    );
};

export default JobSeekerdashboard;
