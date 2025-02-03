import React, { useState, useEffect } from "react";
import { Box, Typography, Card, Button, Divider } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const CollegeApplicants = () => {
    const { collegeId, jobId, applicantId } = useParams();
    const url = process.env.REACT_APP_BACKEND_DJANGO_URL;
    const collegeuser = useSelector((state) => state.college);

    const collegeid =
        collegeuser?.collegeid || localStorage.getItem("collegeid");
    const collegetoken =
        collegeuser?.token || localStorage.getItem("collegeAccessToken");
    const collegename =
        collegeuser?.university_name || localStorage.getItem("collegename");

    const navigate = useNavigate();
    const [applicant, setApplicant] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApplicantDetails = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(
                    `${url}/college-job-applications/${collegeId}/${jobId}/`,
                    {
                        headers: { Authorization: `Bearer ${collegetoken}` },
                    }
                );
                const applicantData = response.data.applicants.find(
                    (a) => a.id === parseInt(applicantId)
                );
                console.log("Applicant Data", applicantData);
                setApplicant(applicantData);
            } catch (error) {
                setError("Error fetching applicant details.");
            } finally {
                setLoading(false);
            }
        };
        fetchApplicantDetails();
    }, [collegeId, jobId, applicantId, url, collegetoken]);

    const updateStatus = async (newStatus) => {
        try {
            await axios.patch(
                `${url}/update-college-application-status/${collegeId}/${applicantId}/`,
                { application_status: newStatus },
                {
                    headers: { Authorization: `Bearer ${collegetoken}` },
                }
            );
            setApplicant((prev) => ({ ...prev, status: newStatus }));
        } catch (error) {
            console.error("Error updating status:", error.message);
        }
    };

    if (loading) return <Typography>Loading applicant profile...</Typography>;
    if (error) return <Typography color="error">{error}</Typography>;

    const educationDetails = applicant.resume_details.education;
    const experienceDetails = applicant.resume_details.experience;

    const projectDetails = applicant.resume_details.projects;
    const referenceDetails = applicant.resume_details.references;
    const certificationDetails = applicant.resume_details.certifications;
    const achievementDetails = applicant.resume_details.achievements;
    const publicationDetails = applicant.resume_details.publications;
    const websiteDetails = applicant.resume_details.website_urls;

    const skills = applicant.resume_details.skills;
    const address = applicant.resume_details.address;

    // Trim any extra spaces and ensure the first letter of each word is capitalized
    const formattedSkills = skills
        .split(",") // Split the string by commas into an array
        .map((word) => word.trim()) // Trim each word to remove extra spaces
        .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ) // Capitalize the first letter
        .join(", "); // Join the words back with a comma and space

    const formattedAddress = address
        .split(",") // Split the string by commas into an array
        .map((word) => word.trim()) // Trim each word to remove extra spaces
        .map(
            (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        ) // Capitalize the first letter
        .join(", "); // Join the words back with a comma and space

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
                    <Box sx={{ p: 4, background: "#f4f6f8" }}>
                        <Card sx={{ p: 4, mb: 4 }}>
                            {/* Basic Applicant Info */}
                            <Typography
                                variant="h4"
                                sx={{ fontWeight: "bold", color: "#313893" }}
                            >
                                {applicant.first_name} {applicant.last_name}
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                {applicant.resume_details.bio}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: "gray", mb: 2 }}
                            >
                                {applicant.email}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "gray" }}>
                                Phone: {applicant.phone_number}
                            </Typography>

                            <Divider sx={{ my: 2 }} />

                            <Typography variant="h5" sx={{ mb: 2 }}>
                                Skills
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ color: "gray", mb: 2 }}
                            >
                                {formattedSkills}
                            </Typography>

                            {/* Education Section */}
                            <Box>
                                <Typography variant="h5" sx={{ mb: 2 }}>
                                    Education
                                </Typography>
                                {educationDetails.length > 0 ? (
                                    educationDetails.map((edu, index) => (
                                        <Box key={index} sx={{ mb: 2 }}>
                                            <Typography variant="body1">
                                                <strong>Course/Degree:</strong>{" "}
                                                {edu.course_or_degree}
                                            </Typography>
                                            <Typography variant="body1">
                                                <strong>
                                                    School/University:
                                                </strong>{" "}
                                                {edu.school_or_university}
                                            </Typography>
                                            <Typography variant="body1">
                                                <strong>Grade/CGPA:</strong>{" "}
                                                {edu.grade_or_cgpa}
                                            </Typography>
                                            <Typography variant="body1">
                                                <strong>Duration:</strong>{" "}
                                                {edu.start_date} -{" "}
                                                {edu.end_date}
                                            </Typography>
                                        </Box>
                                    ))
                                ) : (
                                    <Typography>
                                        No education details provided.
                                    </Typography>
                                )}
                            </Box>

                            {/* Experience Section */}
                            <Box>
                                <Typography variant="h5" sx={{ mb: 2 }}>
                                    {experienceDetails.length > 0 &&
                                        "Experience"}
                                </Typography>
                                {experienceDetails.length > 0 &&
                                    experienceDetails.map((exp, index) => (
                                        <Box key={index} sx={{ mb: 2 }}>
                                            <Typography variant="body1">
                                                <strong>Job Title:</strong>{" "}
                                                {exp.job_title ||
                                                    "Not provided"}
                                            </Typography>
                                            <Typography variant="body1">
                                                <strong>Company Name:</strong>{" "}
                                                {exp.company_name ||
                                                    "Not provided"}
                                            </Typography>
                                            <Typography variant="body1">
                                                <strong>Description:</strong>{" "}
                                                {exp.description ||
                                                    "Not provided"}
                                            </Typography>
                                            <Typography variant="body1">
                                                <strong>Duration:</strong>{" "}
                                                {exp.start_date || "N/A"} -{" "}
                                                {exp.end_date || "N/A"}
                                            </Typography>
                                        </Box>
                                    ))}
                            </Box>
                            {/* Project Details section */}
                            <Box>
                                <Typography variant="h5" sx={{ mb: 2 }}>
                                    {projectDetails.length > 0 && "Projects"}
                                </Typography>
                                {projectDetails.length > 0 &&
                                    projectDetails.map((proj, index) => (
                                        <Box key={index} sx={{ mb: 2 }}>
                                            <Typography variant="body1">
                                                <strong>Project Title:</strong>{" "}
                                                {proj.title || "Not provided"}
                                            </Typography>
                                            <Typography variant="body1">
                                                <strong>Description:</strong>{" "}
                                                {proj.description ||
                                                    "Not provided"}
                                            </Typography>
                                            <Typography variant="body1">
                                                <strong>Link:</strong>{" "}
                                                {proj.project_link ||
                                                    "Not provided"}
                                            </Typography>
                                        </Box>
                                    ))}
                            </Box>

                            {/* Reference Section */}
                            <Box>
                                <Typography variant="h5" sx={{ mb: 2 }}>
                                    {referenceDetails.length > 0 &&
                                        "References"}
                                </Typography>
                                {referenceDetails.length > 0 &&
                                    referenceDetails.map((ref, index) => (
                                        <Box key={index} sx={{ mb: 2 }}>
                                            <Typography variant="body1">
                                                <strong>Name:</strong>{" "}
                                                {ref.name || "Not provided"}
                                            </Typography>
                                            <Typography variant="body1">
                                                <strong>
                                                    Contact Information:
                                                </strong>{" "}
                                                {ref.contact_info ||
                                                    "Not provided"}
                                            </Typography>
                                            <Typography variant="body1">
                                                <strong>Relationship :</strong>{" "}
                                                {ref.relationship ||
                                                    "Not provided"}
                                            </Typography>
                                        </Box>
                                    ))}
                            </Box>

                            {/* CertificationDetails Section */}
                            <Box>
                                <Typography variant="h5" sx={{ mb: 2 }}>
                                    {certificationDetails.length > 0 &&
                                        "Certification"}
                                </Typography>
                                {certificationDetails.length > 0 &&
                                    certificationDetails.map((cer, index) => (
                                        <Box key={index} sx={{ mb: 2 }}>
                                            <Typography variant="body1">
                                                <strong>Name:</strong>{" "}
                                                {cer.name || "Not provided"}
                                            </Typography>
                                            <Typography variant="body1">
                                                <strong>End Date:</strong>{" "}
                                                {cer.start_date ||
                                                    "Not provided"}
                                            </Typography>
                                            <Typography variant="body1">
                                                <strong>Start Date :</strong>{" "}
                                                {cer.end_date || "Not provided"}
                                            </Typography>
                                        </Box>
                                    ))}
                            </Box>
                            {/* AchievementDetails Section  */}
                            <Box>
                                <Typography variant="h5" sx={{ mb: 2 }}>
                                    {achievementDetails.length > 0 &&
                                        "Certification"}
                                </Typography>
                                {achievementDetails.length > 0 &&
                                    achievementDetails.map((ach, index) => (
                                        <Box key={index} sx={{ mb: 2 }}>
                                            <Typography variant="body1">
                                                <strong>Title :</strong>{" "}
                                                {ach.title || "Not provided"}
                                            </Typography>
                                            <Typography variant="body1">
                                                <strong>Publisher:</strong>{" "}
                                                {ach.publisher ||
                                                    "Not provided"}
                                            </Typography>
                                            <Typography variant="body1">
                                                <strong>End Date:</strong>{" "}
                                                {ach.start_date ||
                                                    "Not provided"}
                                            </Typography>
                                            <Typography variant="body1">
                                                <strong>Start Date :</strong>{" "}
                                                {ach.end_date || "Not provided"}
                                            </Typography>
                                        </Box>
                                    ))}
                            </Box>

                            {/* Publication Section  */}
                            <Box>
                                <Typography variant="h5" sx={{ mb: 2 }}>
                                    {publicationDetails.length > 0 &&
                                        "Publication"}
                                </Typography>
                                {publicationDetails.length > 0 &&
                                    publicationDetails.map((pub, index) => (
                                        <Box key={index} sx={{ mb: 2 }}>
                                            <Typography variant="body1">
                                                <strong>Title :</strong>{" "}
                                                {pub.title || "Not provided"}
                                            </Typography>

                                            <Typography variant="body1">
                                                <strong>End Date:</strong>{" "}
                                                {pub.start_date ||
                                                    "Not provided"}
                                            </Typography>
                                            <Typography variant="body1">
                                                <strong>Start Date :</strong>{" "}
                                                {pub.end_date || "Not provided"}
                                            </Typography>
                                        </Box>
                                    ))}
                            </Box>
                            <Divider sx={{ my: 2 }} />

                            {/* Address Section */}
                            <Box>
                                <Typography variant="h5" sx={{ mb: 2 }}>
                                    Address
                                </Typography>
                                <Typography variant="body1">
                                    {formattedAddress}
                                </Typography>
                                <Typography variant="body1">
                                    <strong>City :</strong>{" "}
                                    {applicant.resume_details.city}{" "}
                                    <strong>State :</strong>
                                    {applicant.resume_details.state}{" "}
                                    <strong>Country :</strong>{" "}
                                    {applicant.resume_details.country}{" "}
                                    <strong>Zip Code :</strong>{" "}
                                    {applicant.resume_details.zipcode}{" "}
                                </Typography>
                            </Box>

                            <Box>
                                <Typography variant="h5" sx={{ mb: 2, mt: 2 }}>
                                    Additional
                                </Typography>
                                {websiteDetails.length > 0 &&
                                    websiteDetails.map((link, index) => (
                                        <Box key={index} sx={{ mb: 2 }}>
                                            <Typography variant="body1">
                                                <strong>Website Link :</strong>{" "}
                                                {link || "Not provided"}
                                            </Typography>
                                        </Box>
                                    ))}
                                {applicant.resume_details.date_of_birth && (
                                    <Typography variant="body1">
                                        <strong>Date-Of-Birth :</strong>{" "}
                                        {applicant.resume_details
                                            .date_of_birth || "Not provided"}
                                    </Typography>
                                )}
                                {applicant.resume_details.objective && (
                                    <Typography variant="body1">
                                        <strong>Objective :</strong>{" "}
                                        {applicant.resume_details.objective ||
                                            "Not provided"}
                                    </Typography>
                                )}
                                {applicant.resume_details.activities && (
                                    <Typography variant="body1">
                                        <strong>Co Curricular :</strong>{" "}
                                        {applicant.resume_details.activities ||
                                            "Not provided"}
                                    </Typography>
                                )}
                                {applicant.resume_details.interests && (
                                    <Typography variant="body1">
                                        <strong>Interests :</strong>{" "}
                                        {applicant.resume_details.interests ||
                                            "Not provided"}
                                    </Typography>
                                )}
                                {applicant.resume_details.languages && (
                                    <Typography variant="body1">
                                        <strong>Languages :</strong>{" "}
                                        {applicant.resume_details.languages ||
                                            "Not provided"}
                                    </Typography>
                                )}
                            </Box>

                            <Divider sx={{ my: 2 }} />
                            <Typography variant="body2" sx={{ color: "gray" }}>
                                Applied At:{" "}
                                {new Date(
                                    applicant.applied_at
                                ).toLocaleString()}
                            </Typography>
                            <Typography variant="body2" sx={{ color: "gray" }}>
                                Status: {applicant.status}
                            </Typography>

                            {/* Action Buttons */}
                            <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                                <Button
                                    variant="outlined"
                                    color="primary"
                                    onClick={() =>
                                        updateStatus("interview_scheduled")
                                    }
                                >
                                    Schedule Interview
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="success"
                                    onClick={() => updateStatus("selected")}
                                >
                                    Select
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="error"
                                    onClick={() => updateStatus("rejected")}
                                >
                                    Reject
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={() =>
                                        navigate(
                                            "/job-portal/dashboard/college-dashboard/collegemessage",
                                            {
                                                state: {
                                                    selectedEmail:
                                                        applicant.email,
                                                    selectedModel:
                                                        applicant.model_name,
                                                },
                                            }
                                        )
                                    }
                                >
                                    Message
                                </Button>
                            </Box>
                        </Card>
                    </Box>
                </Card>
            </Box>
        </Box>
    );
};

export default CollegeApplicants;
