import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    Grid,
} from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import AreaChartComponent from "../../Candidate/Charts/AreaChart";
import BarChartComponent from "../../Candidate/Charts/BarChart";
import axios from "axios";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CollegeDashboard = () => {
    const url = process.env.REACT_APP_BACKEND_DJANGO_URL;
    //console.log(process.env.REACT_APP_BACKEND_DJANGO_URL); // Should output the base URL with a trailing slash

    const companyuser = useSelector((state) => state.company);
    const companyid = companyuser?.id || localStorage.getItem("companyuserId");
    const companyemail =
        companyuser?.offical_mail || localStorage.getItem("companyEmail");
    const companytoken =
        companyuser?.token || localStorage.getItem("companyaccessToken");
    const companyname =
        companyuser?.company_name || localStorage.getItem("companyname");
    // State to store fetched data
    const [dashboardData, setDashboardData] = useState([
        {
            statu: "Total Application",
            quan: 0,
            icons: (
                <PersonOutlinedIcon sx={{ color: "white", fontSize: "30px" }} />
            ),
        },
        {
            statu: "Shortlisted",
            quan: 0,
            icons: (
                <BookmarkBorderOutlinedIcon
                    sx={{ color: "white", fontSize: "30px" }}
                />
            ),
        },
        {
            statu: "Posted Job",
            quan: 0,
            icons: (
                <BorderColorOutlinedIcon
                    sx={{ color: "white", fontSize: "30px" }}
                />
            ),
        },
        {
            statu: "Total reject",
            quan: 0,
            icons: (
                <BorderColorOutlinedIcon
                    sx={{ color: "white", fontSize: "30px" }}
                />
            ),
        },
    ]);

    // State to handle loading or error
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const [jobs, setJobs] = useState([]);

    // Fetch data from API on mount
    useEffect(() => {
        const fetchDashboardData = async () => {
            const token = companytoken;
            // console.log("company token", token);
            // console.log(
            //     "url",
            //     `${url}/company-status-counts/${companyid}/?company_name=${companyname}`
            // );
            try {
                const response = await axios.get(
                    `${url}/company-status-counts/${companyid}/?company_name=${companyname}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                const data = response.data;
                //console.log("company Data", data);
                // Update the dashboard data with API response
                setDashboardData([
                    {
                        statu: "Total Application",
                        quan: data.total_applications,
                        icons: (
                            <PersonOutlinedIcon
                                sx={{ color: "white", fontSize: "30px" }}
                            />
                        ),
                    },
                    {
                        statu: "Shortlisted",
                        quan: data.shortlisted_count,
                        icons: (
                            <BookmarkBorderOutlinedIcon
                                sx={{ color: "white", fontSize: "30px" }}
                            />
                        ),
                    },
                    {
                        statu: "Posted Job",
                        quan: data.jobs_posted,
                        icons: (
                            <BorderColorOutlinedIcon
                                sx={{ color: "white", fontSize: "30px" }}
                            />
                        ),
                    },
                    {
                        statu: "Total reject",
                        quan: data.rejected_count,
                        icons: (
                            <BorderColorOutlinedIcon
                                sx={{ color: "white", fontSize: "30px" }}
                            />
                        ),
                    },
                ]);

                setLoading(false);
            } catch (err) {
                setError("Failed to load data");
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, []);

    useEffect(() => {
        const fetchJobs = async () => {
            if (!companyid) return; // Ensure both collegeid and id are available
            // setLoading(true);
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
                console.log("Fetched Jobs:", response.data); // Confirm structure

                if (Array.isArray(response.data)) {
                    setJobs(response.data); // Assuming jobs is an array in the response
                } else {
                    setError("Unexpected data format from the server");
                }
            } catch (error) {
                console.error("Error fetching jobs:", error.message);
                // setError("An error occurred while fetching job posts");
            } finally {
                // setLoading(false);
            }
        };

        fetchJobs();
    }, [companyid, companyname, url, companytoken]);

    console.log("company job", jobs);

    // Loading and error handling
    if (loading) return <Typography>Loading...</Typography>;
    if (error) return <Typography>{error}</Typography>;

    return (
        <Box
            sx={{
                width: "100%",
                minHeight: "100vh",
                background: "white",
                borderTopLeftRadius: "50px",
                borderTopRightRadius: { xs: "0", md: "50px" }, // Conditional styling for responsiveness
                padding: { xs: "16px", sm: "24px", lg: "32px" },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "4rem",
                }}
            >
                {/* Dashboard Overview */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        width: "100%",
                        gap: "2rem",
                    }}
                >
                    {dashboardData.map((item, index) => (
                        <Box
                            key={index}
                            sx={{
                                flex: "1 1 calc(25% - 2rem)", // Four cards per row, responsive
                                maxWidth: "220px",
                                height: "150px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                padding: "16px",
                                background: "white",
                                boxShadow:
                                    "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05)",
                                borderRadius: "28px",
                                "@media(max-width:600px)": {
                                    flex: "1 1 100%",
                                    maxWidth: "100%",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.5rem",
                                    justifyContent: "flex-start",
                                    alignItems: "flex-start",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "36px",
                                        fontWeight: 600,
                                        color: "#313893",
                                    }}
                                >
                                    {item.quan}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "16px",
                                        fontWeight: 400,
                                        color: "#666",
                                    }}
                                >
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
                                    background: "#313893",
                                    fontSize: "28px",
                                    color: "white",
                                }}
                            >
                                {item.icons}
                            </Box>
                        </Box>
                    ))}
                </Box>

                {/* Job Posts Section */}
                <Box sx={{ width: "100%" }}>
                    <Typography
                        variant="h5"
                        sx={{
                            marginBottom: "30px",
                            fontWeight: "bold",
                            color: "#313893",
                            marginLeft: "20px",
                        }}
                    >
                        Job Posts
                    </Typography>
                    <Grid container spacing={3}>
                        {loading ? (
                            <Typography>Loading job posts...</Typography>
                        ) : error ? (
                            <Typography color="error">{error}</Typography>
                        ) : jobs.length ? (
                            jobs.map((job, index) => (
                                <Grid
                                    item
                                    xs={12} // Full width on extra small screens
                                    sm={6} // Half width (2 cards per row) on small screens
                                    md={6} // Half width (2 cards per row) on medium screens
                                    key={job.id || index}
                                >
                                    <Card
                                        sx={{
                                            borderRadius: "20px",
                                            background: "white",
                                            boxShadow:
                                                "0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.05)",
                                            padding: "20px",
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "1rem",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "1rem",
                                            }}
                                        >
                                            <img
                                                src="https://dummyimage.com/hd1080"
                                                alt="job"
                                                style={{
                                                    height: "64px",
                                                    width: "64px",
                                                    objectFit: "cover",
                                                    borderRadius: "50%",
                                                }}
                                            />
                                            <Box>
                                                <Link
                                                    to={`/job-portal/dashboard/company-dashboard/jobPost/${companyid}/${job.id}`}
                                                >
                                                    <Typography
                                                        sx={{
                                                            fontSize: "20px",
                                                            fontWeight: 500,
                                                            color: "#313893",
                                                            "&:hover": {
                                                                textDecoration:
                                                                    "underline",
                                                            },
                                                        }}
                                                    >
                                                        {job.job_title}
                                                    </Typography>
                                                </Link>
                                                <Typography
                                                    sx={{ color: "#666" }}
                                                >
                                                    {companyname}
                                                </Typography>
                                                <Typography
                                                    sx={{ color: "#999" }}
                                                >
                                                    {job.location}
                                                </Typography>
                                                <Typography
                                                    sx={{ color: "#666" }}
                                                >
                                                    Status: {job.status}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Card>
                                </Grid>
                            ))
                        ) : (
                            <Typography sx={{ marginLeft: "20px" }}>
                                No job posts available
                            </Typography>
                        )}
                    </Grid>
                </Box>
            </Box>
        </Box>
    );

    // return (
    //     <Box
    //         sx={{
    //             width: "100%",
    //             minHeight: "100vh",
    //             background: "white",
    //             borderTopLeftRadius: "50px",
    //             "@media(max-width:1300px)": { borderTopRightRadius: "50px" },
    //         }}
    //     >
    //         <Box
    //             sx={{
    //                 display: "flex",
    //                 flexDirection: "column",
    //                 justifyContent: "center",
    //                 alignItems: "center",
    //                 padding: "32px",
    //                 gap: "5rem",
    //             }}
    //         >
    //             {/* Dashboard Overview */}
    //             <Box
    //                 sx={{
    //                     display: "flex",
    //                     justifyContent: "space-between",
    //                     alignItems: "center",
    //                     width: "100%",
    //                     flexWrap: "wrap",
    //                     gap: "2rem",
    //                 }}
    //             >
    //                 {dashboardData.map((item, index) => (
    //                     <Box
    //                         sx={{
    //                             width: "220px",
    //                             height: "150px",
    //                             display: "flex",
    //                             justifyContent: "center",
    //                             alignItems: "center",
    //                             padding: "16px",
    //                             background: "white",
    //                             boxShadow:
    //                                 "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    //                             borderRadius: "28px",
    //                             gap: "1rem",
    //                             "@media(max-width:600px)": { width: "100%" },
    //                         }}
    //                         key={index}
    //                     >
    //                         <Box
    //                             sx={{
    //                                 display: "flex",
    //                                 flexDirection: "column",
    //                                 justifyContent: "flex-start",
    //                                 alignItems: "flex-start",
    //                             }}
    //                         >
    //                             <Typography
    //                                 sx={{
    //                                     fontSize: "40px",
    //                                     fontWeight: 600,
    //                                     color: "#313893",
    //                                 }}
    //                             >
    //                                 {item.quan}
    //                             </Typography>
    //                             <Typography sx={{ fontSize: "16px" }}>
    //                                 {item.statu}
    //                             </Typography>
    //                         </Box>
    //                         <Box
    //                             sx={{
    //                                 width: "60px",
    //                                 height: "60px",
    //                                 display: "flex",
    //                                 justifyContent: "center",
    //                                 alignItems: "center",
    //                                 borderRadius: "50%",
    //                                 background: "#313993",
    //                                 fontSize: "32px",
    //                                 color: "white",
    //                             }}
    //                         >
    //                             {item.icons}
    //                         </Box>
    //                     </Box>
    //                 ))}
    //             </Box>

    //             {/* Job Posts Section */}
    //             <Box sx={{ width: "100%" }}>
    //                 <Typography
    //                     variant="h5"
    //                     sx={{
    //                         marginBottom: "16px",
    //                         fontWeight: "bold",
    //                         color: "#313893",
    //                     }}
    //                 >
    //                     Job Posts
    //                 </Typography>
    //                 <Grid container spacing={2}>
    //                     {loading ? (
    //                         <Typography>Loading job posts...</Typography>
    //                     ) : error ? (
    //                         <Typography color="error">{error}</Typography>
    //                     ) : jobs.length ? (
    //                         jobs.map((job, index) => (
    //                             <Box
    //                                 key={job.id || index}
    //                                 sx={{ width: "100%" }}
    //                             >
    //                                 <Card
    //                                     sx={{
    //                                         width: "400px",
    //                                         height: "auto",
    //                                         borderRadius: "20px",
    //                                         background: "white",
    //                                         margin: "20px 0",
    //                                         padding: "20px",
    //                                         "@media(max-width:940px)": {
    //                                             width: "100%",
    //                                         },
    //                                     }}
    //                                 >
    //                                     <Box
    //                                         sx={{
    //                                             width: "100%",
    //                                             display: "flex",
    //                                             flexWrap: "wrap",
    //                                             alignItems: "flex-start",
    //                                             gap: "1rem",
    //                                         }}
    //                                     >
    //                                         <Box>
    //                                             <img
    //                                                 src="https://dummyimage.com/hd1080"
    //                                                 alt="job"
    //                                                 style={{
    //                                                     height: "64px",
    //                                                     width: "64px",
    //                                                     objectFit: "fill",
    //                                                     borderRadius: "50%",
    //                                                 }}
    //                                             />
    //                                         </Box>
    //                                         <Box
    //                                             sx={{
    //                                                 display: "flex",
    //                                                 flexDirection: "column",
    //                                                 gap: "0.5rem",
    //                                             }}
    //                                         >
    //                                             <Link
    //                                                 to={`/job-portal/dashboard/company-dashboard/jobPost/${companyid}/${job.id}`}
    //                                             >
    //                                                 <Typography
    //                                                     sx={{
    //                                                         fontSize: "24px",
    //                                                         fontWeight: "500",
    //                                                     }}
    //                                                 >
    //                                                     {job.job_title}
    //                                                 </Typography>
    //                                             </Link>
    //                                             <Typography>
    //                                                 {companyname}
    //                                             </Typography>
    //                                             <Typography>
    //                                                 {job.location}
    //                                             </Typography>
    //                                             <Typography>
    //                                                 Status: {job.status}
    //                                             </Typography>
    //                                         </Box>
    //                                     </Box>
    //                                 </Card>
    //                             </Box>
    //                         ))
    //                     ) : (
    //                         <Typography>No job posts available</Typography>
    //                     )}
    //                 </Grid>
    //             </Box>

    //             {/* Student Inquiries Section */}
    //         </Box>

    //         {/* Charts Section */}
    //         {/* <Box>
    //             <Typography>For Number of Student Inquiries</Typography>
    //             <AreaChartComponent data={[]} />
    //             <BarChartComponent data={[]} />
    //         </Box> */}
    //     </Box>
    // );
};

export default CollegeDashboard;
