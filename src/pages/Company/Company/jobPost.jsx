import React, { useState, useEffect } from "react";
import {
    Card,
    Box,
    MenuItem,
    FormControl,
    InputLabel,
    Select,
    Button,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const JobPost = () => {
    const url = process.env.REACT_APP_BACKEND_DJANGO_URL;

    const companyuser = useSelector((state) => state.company);
    const companyid = companyuser?.id || localStorage.getItem("companyuserId");
    const companyemail =
        companyuser?.offical_mail || localStorage.getItem("companyEmail");
    const companytoken =
        companyuser?.token || localStorage.getItem("companyaccessToken");
    const companyname =
        companyuser?.company_name || localStorage.getItem("companyname");
    const [id, setId] = useState("");

    const [sortby, setSortby] = useState("");
    const [filter, setFilter] = useState("all"); // New state for job status filter
    const [sortAction] = useState([
        { value: "newest", sortBy: "Newest" },
        { value: "oldest", sortBy: "Oldest" },
    ]);
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleSortbyChange = (e) => {
        setSortby(e.target.value);
        sortJobs(e.target.value);
    };

    const sortJobs = (sortOption) => {
        const sortedJobs = [...jobs].sort((a, b) => {
            if (sortOption === "newest") {
                return new Date(b.published_at) - new Date(a.published_at);
            }
            if (sortOption === "oldest") {
                return new Date(a.published_at) - new Date(b.published_at);
            }
            return 0;
        });
        setJobs(sortedJobs);
    };

    const filteredJobs = jobs.filter((job) => {
        if (filter === "all") return true;
        return job.status === filter;
    });

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    useEffect(() => {
        const fetchJobs = async () => {
            if (!companyid) return; // Ensure both collegeid and id are available
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(
                    `${url}/jobs-by-company/${companyid}/?name=${companyname}`,
                    {
                        headers: {
                            Authorization: `Bearer ${companytoken}`,
                        },
                    }
                );
                //console.log("Fetched Jobs:", response.data); // Confirm structure

                if (Array.isArray(response.data)) {
                    setJobs(response.data); // Assuming jobs is an array in the response
                } else {
                    setError("Unexpected data format from the server");
                }
            } catch (error) {
                console.error("Error fetching jobs:", error.message);
                setError(error.response.data.message);
            } finally {
                setLoading(false);
            }
        };

        fetchJobs();
    }, [companyid, companyname, url, companytoken]);

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
                <Card
                    sx={{
                        borderRadius: "12px",
                        backgroundColor: "white",
                        padding: "2rem 3rem 5rem 3rem",
                        width: "100%",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            paddingTop: "0.25px",
                            paddingBottom: "0.25px",
                            display: "flex",
                            flexDirection: "column",
                            paddingLeft: "25px",
                            paddingRight: "25px",
                            "@media(max-width:600px)": { paddingTop: "25px" },
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                width: "100%",
                                flexWrap: "wrap",
                                justifyContent: "space-between",
                            }}
                        >
                            <Box
                                sx={{
                                    margin: "2rem 0rem 3rem 0rem",
                                    borderBottom: "1px solid lightgray",
                                    width: "100%",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "24px",
                                        fontWeight: "600",
                                        color: "#313893",
                                    }}
                                >
                                    JOB POST
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem",
                                    flexWrap: "wrap",
                                    "@media(max-width:600px)": {
                                        marginTop: "25px",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        flexWrap: "wrap",
                                        gap: "1rem",
                                    }}
                                >
                                    <Button
                                        onClick={() =>
                                            handleFilterChange("all")
                                        }
                                        sx={{
                                            color:
                                                filter === "all"
                                                    ? "black"
                                                    : "white",
                                            background:
                                                filter === "all"
                                                    ? "#d1d1d1"
                                                    : "#313893",
                                            "&:hover": { color: "black" },
                                            borderRadius: "16px",
                                            padding: "0rem 2rem",
                                            height: "2.5rem",
                                        }}
                                    >
                                        All
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            handleFilterChange("active")
                                        }
                                        sx={{
                                            color:
                                                filter === "active"
                                                    ? "black"
                                                    : "white",
                                            background:
                                                filter === "active"
                                                    ? "#d1d1d1"
                                                    : "#313893",
                                            "&:hover": { color: "black" },
                                            borderRadius: "16px",
                                            padding: "0rem 2rem",
                                            height: "2.5rem",
                                        }}
                                    >
                                        Active
                                    </Button>
                                    <Button
                                        onClick={() =>
                                            handleFilterChange("closed")
                                        }
                                        sx={{
                                            color:
                                                filter === "closed"
                                                    ? "black"
                                                    : "white",
                                            background:
                                                filter === "closed"
                                                    ? "#d1d1d1"
                                                    : "#313893",
                                            "&:hover": { color: "black" },
                                            borderRadius: "16px",
                                            padding: "0rem 2rem",
                                            height: "2.5rem",
                                        }}
                                    >
                                        Close
                                    </Button>
                                </Box>
                                <Box sx={{ minWidth: 120, marginTop: "25px" }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="sort-select-label">
                                            Sort By:
                                        </InputLabel>
                                        <Select
                                            labelId="sort-select-label"
                                            id="sort-select"
                                            value={sortby}
                                            label="Sort By"
                                            onChange={handleSortbyChange}
                                        >
                                            {sortAction.map((sortBy) => (
                                                <MenuItem
                                                    key={sortBy.value}
                                                    value={sortBy.value}
                                                >
                                                    {sortBy.sortBy}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Box>
                        </Box>
                        {loading ? (
                            <Typography>Loading job posts...</Typography>
                        ) : error ? (
                            <Typography color="error">{error}</Typography>
                        ) : filteredJobs.length ? (
                            filteredJobs.map((job, index) => (
                                <Box
                                    key={job.id || index}
                                    sx={{ width: "100%" }}
                                >
                                    <Card
                                        sx={{
                                            width: "600px",
                                            height: "auto",
                                            borderRadius: "20px",
                                            background: "white",
                                            margin: "20px 0",
                                            padding: "20px",
                                            "@media(max-width:940px)": {
                                                width: "100%",
                                            },
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: "100%",
                                                display: "flex",
                                                flexWrap: "wrap",
                                                alignItems: "flex-start",
                                                gap: "1rem",
                                            }}
                                        >
                                            <Box>
                                                <img
                                                    src="https://dummyimage.com/hd1080"
                                                    alt="job"
                                                    style={{
                                                        height: "64px",
                                                        width: "64px",
                                                        objectFit: "fill",
                                                        borderRadius: "50%",
                                                    }}
                                                />
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    gap: "0.5rem",
                                                }}
                                            >
                                                <Link
                                                    to={`/job-portal/dashboard/company-dashboard/jobPost/${companyid}/${job.id}`}
                                                >
                                                    <Typography
                                                        sx={{
                                                            fontSize: "24px",
                                                            fontWeight: "500",
                                                        }}
                                                    >
                                                        {job.job_title}
                                                    </Typography>
                                                </Link>
                                                <Typography>
                                                    {companyname}
                                                </Typography>
                                                <Typography>
                                                    {job.location}
                                                </Typography>
                                                <Typography>
                                                    Status: {job.status}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Card>
                                </Box>
                            ))
                        ) : (
                            <Typography>No job posts available</Typography>
                        )}
                    </Box>
                </Card>
            </Box>
        </Box>
    );
};

export default JobPost;
