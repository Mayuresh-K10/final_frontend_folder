import React, { useState, useEffect } from "react";
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
import { useSelector } from "react-redux";

const CollegeDashboard = () => {
  const collegeuser = useSelector((state) => state.college);
  const collegeid = collegeuser?.collegeid || localStorage.getItem('collegeid');
  const collegetoken = collegeuser?.token || localStorage.getItem('collegeAccessToken');

  const [dashboardData, setDashboardData] = useState([
    { statu: "Total Visitor", quan: 0, icons: <PersonOutlinedIcon sx={{ color: "white", fontSize: "30px" }} /> },
    { statu: "Shortlisted", quan: 0, icons: <BookmarkBorderOutlinedIcon sx={{ color: "white", fontSize: "30px" }} /> },
    { statu: "Posted Job", quan: 0, icons: <BorderColorOutlinedIcon sx={{ color: "white", fontSize: "30px" }} /> },
    { statu: "Student Enquiry", quan: 0, icons: <BorderColorOutlinedIcon sx={{ color: "white", fontSize: "30px" }} /> },
  ]);

  const [jobsByMonth, setJobsByMonth] = useState([]);
  const [enquiriesByMonth, setEnquiriesByMonth] = useState([]);
  const [visitorsByMonth, setVisitorsByMonth] = useState([]);
  const [shortlistedByMonth, setShortlistedByMonth] = useState([]);

  // Fetching data from the API endpoint
  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_DJANGO_URL}/college_status_counts/${collegeid}/`,
          {
            headers: {
              Authorization: `Bearer ${collegetoken}`
            }
          }
        );
        const data = response.data;

        // Update the dashboardData with API data
        setDashboardData([
          { statu: "Total Visitor", quan: data.total_visitor_count, icons: <PersonOutlinedIcon sx={{ color: "white", fontSize: "30px" }} /> },
          { statu: "Shortlisted", quan: data.shortlisted_count, icons: <BookmarkBorderOutlinedIcon sx={{ color: "white", fontSize: "30px" }} /> },
          { statu: "Posted Job", quan: data.job_posted_count, icons: <BorderColorOutlinedIcon sx={{ color: "white", fontSize: "30px" }} /> },
          { statu: "Student Enquiry", quan: data.enquiry_count, icons: <BorderColorOutlinedIcon sx={{ color: "white", fontSize: "30px" }} /> },
        ]);

        // Process monthly data for charts
        setJobsByMonth(Object.entries(data.jobs_by_month).map(([month, count]) => ({ month, count })));
        setEnquiriesByMonth(Object.entries(data.enquiries_by_month).map(([month, count]) => ({ month, count })));
        setVisitorsByMonth(Object.entries(data.visitors_by_month).map(([month, count]) => ({ month, count })));
        setShortlistedByMonth(Object.entries(data.shortlisted_by_month).map(([month, count]) => ({ month, count })));
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <Box sx={{ width: "100%", minHeight: "100vh", background: "white", borderTopLeftRadius: "50px", "@media(max-width:1300px)": { borderTopRightRadius: "50px" } }}>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "32px", gap: "5rem" }}>
        
        {/* Dashboard Overview */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", flexWrap: "wrap", gap: "2rem" }}>
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
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                borderRadius: "28px",
                gap: "1rem",
                "@media(max-width:600px)": { width: "100%" },
              }}
              key={index}
            >
              <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start" }}>
                <Typography sx={{ fontSize: "40px", fontWeight: 600, color: "#313893" }}>{item.quan}</Typography>
                <Typography sx={{ fontSize: "16px" }}>{item.statu}</Typography>
              </Box>
              <Box sx={{ width: "60px", height: "60px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", background: "#313993", fontSize: "32px", color: "white" }}>
                {item.icons}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Job Posts Section 
        <Box sx={{ width: "100%" }}>
          <Typography variant="h5" sx={{ marginBottom: "16px", fontWeight: "bold", color: "#313893" }}>Job Posts</Typography>
          <Grid container spacing={2}>
            {jobPostData.length === 0 ? (
              <Typography>No job posts available</Typography>
            ) : (
              jobPostData.map((job, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card sx={{ boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)", borderRadius: "16px" }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>{job.title}</Typography>
                      <Typography sx={{ color: "gray" }}>{job.location}</Typography>
                      <Typography>Status: {job.status}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="contained" color={job.status === "Open" ? "success" : "error"}>
                        {job.status === "Open" ? "Apply Now" : "Closed"}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      */}
        {/* Available Courses Section 
        <Box sx={{ width: "100%", marginTop: "32px" }}>
          <Typography variant="h5" sx={{ marginBottom: "16px", fontWeight: "bold", color: "#313893" }}>Available Courses</Typography>
          <Grid container spacing={2}>
            {availableCourses.length === 0 ? (
              <Typography>No courses available</Typography>
            ) : (
              availableCourses.map((course, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card sx={{ boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)", borderRadius: "16px" }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>{course.courseName}</Typography>
                      <Typography sx={{ color: "gray" }}>Duration: {course.duration}</Typography>
                      <Typography>Seats Available: {course.seats}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            )}
          </Grid>
        </Box>
          */}
        {/* Student Inquiries Section 
        <Box sx={{ width: "100%", marginTop: "32px" }}>
          <Typography variant="h5" sx={{ marginBottom: "16px", fontWeight: "bold", color: "#313893" }}>Student Inquiries</Typography>
          <Grid container spacing={2}>
            {studentInquiries.length === 0 ? (
              <Typography>No inquiries available</Typography>
            ) : (
              studentInquiries.map((inquiry, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card sx={{ boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)", borderRadius: "16px" }}>
                    <CardContent>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>{inquiry.name}</Typography>
                      <Typography sx={{ color: "gray" }}>{inquiry.inquiry}</Typography>
                      <Typography>Course: {inquiry.course}</Typography>
                      <Typography>Status: {inquiry.status}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button variant="contained" color={inquiry.status === "Pending" ? "warning" : inquiry.status === "Reviewed" ? "info" : "success"}>
                        {inquiry.status}
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            )}
          </Grid>
        </Box>
      </Box>
      */}
      {/* Charts Section */}
      <Box sx={{ width: "100%", marginTop: "32px" }}>
          <Typography variant="h5" sx={{ marginBottom: "16px", fontWeight: "bold", color: "#313893" }}>Monthly Statistics</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Jobs Posted</Typography>
              <AreaChartComponent data={jobsByMonth} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Student Enquiries</Typography>
              <AreaChartComponent data={enquiriesByMonth} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Visitors</Typography>
              <BarChartComponent data={visitorsByMonth} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="subtitle1">Shortlisted Applications</Typography>
              <BarChartComponent data={shortlistedByMonth} />
            </Grid>
          </Grid>
        </Box>
        </Box>
    </Box>
  );
};

export default CollegeDashboard;
