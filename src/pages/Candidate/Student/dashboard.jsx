import React, { useState, useEffect } from "react";
import {
    Box,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Button,
    Typography,
} from "@mui/material";
import AreaChartComponent from "../Charts/AreaChart";
import BarChartComponent from "../Charts/BarChart";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ScheduleSendIcon from "@mui/icons-material/ScheduleSend";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import axios from "axios";
import { useSelector } from "react-redux";

const StudentDashboard = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("");
    const [filterJobType, setFilterJobType] = useState("");
    const [sortType, setSortType] = useState("latest");
    const [sortOrder, setSortOrder] = useState("asc");
    const [jobStats, setJobStats] = useState({
        total_jobs_applied: 0,
        pending_count: 0,
        interview_scheduled: 0,
        rejected_count: 0,
        total_college_enquiries_count: 0,
    });
    const [jobData, setJobData] = useState([]);
    const [collegeData, setCollegeData] = useState([]);

    const user = useSelector((state) => state.newuser);
    const useremail = user?.email || localStorage.getItem("newuseremail");
    const uniqueToken =
        user?.unique_token || localStorage.getItem("newaccessToken");
    const studentId = user?.id || localStorage.getItem("newuseruserid");

    // Fetch data from the API when the component mounts
    useEffect(() => {
        const fetchJobData = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_BACKEND_DJANGO_URL}/user-application-status-counts/${studentId}/?email=${useremail}`,
                    {
                        headers: {
                            Authorization: `Bearer ${uniqueToken}`,
                        },
                    }
                );
                setJobStats(response.data);
            } catch (error) {
                console.error("Error fetching job data:", error);
            }
        };

        fetchJobData();
    }, [studentId, uniqueToken, useremail]);

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
                    `${process.env.REACT_APP_BACKEND_DJANGO_URL}/fetch-user-applied-jobs/${studentId}/?email=${useremail}`,
                    {
                        headers: {
                            Authorization: `Bearer ${uniqueToken}`,
                        },
                    }
                );
                setJobData(response.data);
            } catch (error) {
                console.error("Error fetching job data:", error);
            }
        };
        fetchappliedjob();
    }, [studentId, uniqueToken, useremail]);

    // Filter and Sort Jobs
    // const filteredJobs = jobData
    //   .filter(
    //     (job) =>
    //       (job.position?.toLowerCase() || "").includes(searchTerm.toLowerCase()) &&
    //       (filterStatus ? job.status === filterStatus : true) &&
    //       (filterJobType ? job.jobType === filterJobType : true)
    //   )
    //   .sort((a, b) => {
    //     if (sortType === "alphabetical") {
    //       return sortOrder === "asc"
    //         ? a.position.localeCompare(b.position)
    //         : b.position.localeCompare(a.position);
    //     } else if (sortType === "latest") {
    //       return sortOrder === "asc"
    //         ? new Date(a.dateApplied) - new Date(b.dateApplied)
    //         : new Date(b.dateApplied) - new Date(a.dateApplied);
    //     }
    //     return 0;
    //   });

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

    const status = [
        {
            statu: "Total Job Applied",
            quan: jobStats.total_jobs_applied,
            icons: <CloudDoneIcon />,
        },
        {
            statu: "Pending Job Application",
            quan: jobStats.pending_count,
            icons: <PendingActionsIcon />,
        },
        {
            statu: "Interview Scheduled",
            quan: jobStats.interview_scheduled,
            icons: <ScheduleSendIcon />,
        },
        {
            statu: "Job Rejection",
            quan: jobStats.rejected_count,
            icons: <ThumbDownIcon />,
        },
        {
            statu: "Total College Enquiries",
            quan: jobStats.total_college_enquiries_count,
            icons: <CloudDoneIcon />,
        },
    ];

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
                {/* Status Cards */}
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
                    {status.map((item, index) => (
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
                                    {item.statu}
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
                                    background: "#313993",
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
                        gap: "1.5rem",
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
                                    Part-time
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
            </Box>
        </Box>
    );
};

export default StudentDashboard;
