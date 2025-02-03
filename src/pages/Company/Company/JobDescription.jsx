import React, { useState, useEffect } from "react";
import { Box, Typography, Card, Button, Divider } from "@mui/material";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const JobDescription = () => {
    const { companyId, jobId } = useParams(); // companyId and jobId from route
    const url = process.env.REACT_APP_BACKEND_DJANGO_URL;
    const companyuser = useSelector((state) => state.company);
    const companytoken =
        companyuser?.token || localStorage.getItem("companyaccessToken");
    //console.log(companyId, jobId);
    // Convert the id from string to integer for comparison
    const [jobDetails, setJobDetails] = useState(null);
    const [applicants, setApplicants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchJobDetails = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(
                    `${url}/company-job-applications/${companyId}/${jobId}/`,
                    {
                        headers: {
                            Authorization: `Bearer ${companytoken}`,
                        },
                    }
                );
                setJobDetails(response.data.jobdetails);
                setApplicants(response.data.applicants);
            } catch (error) {
                console.error("Error fetching job details:", error.message);
                setError("An error occurred while fetching job details.");
            } finally {
                setLoading(false);
            }
        };

        fetchJobDetails();
    }, [companyId, jobId, url, companytoken]);

    if (loading) return <Typography>Loading job details...</Typography>;
    if (error) return <Typography color="error">{error}</Typography>;

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
                            minHeight: "100vh",
                            background: "#f4f6f8",
                            p: 4,
                        }}
                    >
                        <Card sx={{ p: 4, mb: 4 }}>
                            <Typography
                                variant="h4"
                                sx={{
                                    fontWeight: "bold",
                                    color: "#313893",
                                    mb: 2,
                                }}
                            >
                                {jobDetails.job_title}
                            </Typography>
                            <Typography variant="subtitle1" sx={{ mb: 1 }}>
                                {jobDetails.company}
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 1 }}>
                                {jobDetails.location}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ mb: 1, color: "gray" }}
                            >
                                Posted on:{" "}
                                {new Date(
                                    jobDetails.published_at
                                ).toLocaleDateString()}
                            </Typography>
                            <Divider sx={{ my: 2 }} />
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: "medium" }}
                            >
                                Description:
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                {jobDetails.description}
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: "medium" }}
                            >
                                Requirements:
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                {jobDetails.requirements}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "gray" }}>
                                Experience: {jobDetails.experience_yr}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "gray" }}>
                                Job Type: {jobDetails.job_type}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "gray" }}>
                                Workplace Type: {jobDetails.workplaceTypes}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "gray" }}>
                                Skills: {jobDetails.skills}
                            </Typography>
                        </Card>

                        <Card sx={{ p: 4 }}>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: "bold",
                                    color: "#313893",
                                    mb: 3,
                                }}
                            >
                                Applicants
                            </Typography>
                            {applicants.length ? (
                                applicants.map((applicant, index) => (
                                    <Card
                                        key={index}
                                        sx={{
                                            p: 2,
                                            mb: 2,
                                            backgroundColor: "#f9f9f9",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                                mb: 1,
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                sx={{ fontWeight: "medium" }}
                                            >
                                                {applicant.first_name}{" "}
                                                {applicant.last_name}
                                            </Typography>
                                            <Button
                                                variant="outlined"
                                                sx={{ textTransform: "none" }}
                                                onClick={() =>
                                                    navigate(
                                                        `/job-portal/dashboard/company-dashboard/jobPost/${companyId}/${jobId}/${applicant.id}`
                                                    )
                                                }
                                            >
                                                View Profile
                                            </Button>
                                        </Box>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: "gray", mb: 1 }}
                                        >
                                            {applicant.email}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ mb: 1 }}
                                        >
                                            {applicant.bio}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: "gray", mb: 1 }}
                                        >
                                            Status: {applicant.status}
                                        </Typography>
                                        <Divider />
                                    </Card>
                                ))
                            ) : (
                                <Typography>No applicants available</Typography>
                            )}
                        </Card>
                    </Box>
                </Card>
            </Box>
        </Box>
    );
};

export default JobDescription;
