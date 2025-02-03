import React, { useState, useEffect } from "react";
import {
    Box,
    Typography,
    Button,
    Modal,
    Card,
    TextField,
    Grid,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
} from "@mui/material";
import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SubmitJob = () => {
    const url = process.env.REACT_APP_BACKEND_DJANGO_URL;
    const companyUser = useSelector((state) => state.company);

    const companyid = companyUser?.id || localStorage.getItem("companyuserId");
    const companyemail =
        companyUser?.offical_mail || localStorage.getItem("companyEmail");
    const companytoken =
        companyUser?.token || localStorage.getItem("companyaccessToken");
    const companyname =
        companyUser?.company_name || localStorage.getItem("companyname");

    const [jobTitle, setJobTitle] = useState("");
    const [workplaceTypes, setWorkplaceTypes] = useState("Remote");
    const [location, setLocation] = useState("");
    const [jobType, setJobType] = useState("FullTime");
    const [source, setSource] = useState("LinkedIn"); // Default as per backend
    const [email, setEmail] = useState(companyemail || "");
    const [requirements, setRequirements] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [description, setDescription] = useState("");
    const [experience, setExperience] = useState("");
    const [category, setCategory] = useState("");
    const [skills, setSkills] = useState("");
    const [experienceYr, setExperienceYr] = useState("");
    const navigate = useNavigate();

    const handleSubmit = () => {
        const jobData = {
            job_title: jobTitle,
            company: companyname,
            location,
            description,
            requirements,
            job_type: jobType,
            experience,
            category,
            skills,
            experience_yr: experienceYr,
            workplaceTypes,
            source,
            email,
            job_status: "active",
        };

        axios
            .post(`${url}/create-company-jobs/${companyid}/`, jobData, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${companytoken}`,
                },
            })
            .then((response) => {
                //console.log("Job posted successfully:", response.data);
                setIsModalOpen(true); // Open modal on success
            })
            .catch((error) => {
                console.error("Error posting job:", error);
            });
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        navigate("/job-portal/dashboard/company-dashboard/jobPost");
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
                <Card
                    sx={{
                        borderRadius: "12px",
                        backgroundColor: "white",
                        padding: "2rem 3rem 5rem 3rem",
                        width: "100%",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "32px",
                            fontWeight: "500",
                            color: "black",
                            textAlign: "left",
                        }}
                    >
                        Post a job for free
                    </Typography>
                    <Box sx={{ padding: "20px" }}>
                        <Grid container spacing={2}>
                            {/* Job Title */}
                            <Grid item xs={12} sm={6}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        marginTop: "20px",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            fontWeight: "400",
                                            color: "lightgray",
                                        }}
                                    >
                                        Job Title
                                    </Typography>
                                    <TextField
                                        type="text"
                                        placeholder="Enter job title"
                                        value={jobTitle}
                                        onChange={(e) =>
                                            setJobTitle(e.target.value)
                                        }
                                        sx={{ marginBottom: "16px" }}
                                    />
                                </Box>
                            </Grid>

                            {/* Company Name */}
                            <Grid item xs={12} sm={6}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        marginTop: "20px",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            fontWeight: "400",
                                            color: "lightgray",
                                        }}
                                    >
                                        Company Name
                                    </Typography>
                                    <TextField
                                        type="text"
                                        value={companyname}
                                        sx={{ marginBottom: "16px" }}
                                    />
                                </Box>
                            </Grid>

                            {/* Workplace Type */}
                            <Grid item xs={12} sm={4}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        marginTop: "20px",
                                    }}
                                >
                                    <FormControl
                                        fullWidth
                                        variant="outlined"
                                        sx={{ marginBottom: "16px" }}
                                    >
                                        <InputLabel>Work Place Type</InputLabel>
                                        <Select
                                            value={workplaceTypes}
                                            onChange={(e) =>
                                                setWorkplaceTypes(
                                                    e.target.value
                                                )
                                            }
                                            label="Work Place Type"
                                        >
                                            <MenuItem value="">
                                                Select Work Place Type
                                            </MenuItem>
                                            <MenuItem value="Remote">
                                                Remote
                                            </MenuItem>
                                            <MenuItem value="Hybrid">
                                                Hybrid
                                            </MenuItem>
                                            <MenuItem value="Onsite">
                                                Onsite
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>

                            {/* Job Type */}
                            <Grid item xs={12} sm={4}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        marginTop: "20px",
                                    }}
                                >
                                    <FormControl
                                        fullWidth
                                        variant="outlined"
                                        sx={{ marginBottom: "16px" }}
                                    >
                                        <InputLabel>Job Type</InputLabel>
                                        <Select
                                            value={jobType}
                                            onChange={(e) =>
                                                setJobType(e.target.value)
                                            }
                                            label="Job Type"
                                        >
                                            <MenuItem value="">
                                                Select Job Type
                                            </MenuItem>
                                            <MenuItem value="Internship">
                                                Internship
                                            </MenuItem>
                                            <MenuItem value="FullTime">
                                                Full Time
                                            </MenuItem>
                                            <MenuItem value="Contract">
                                                Contract
                                            </MenuItem>
                                            <MenuItem value="Freelance">
                                                Freelance
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>

                            {/* Source */}
                            <Grid item xs={12} sm={4}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        marginTop: "20px",
                                    }}
                                >
                                    <FormControl
                                        fullWidth
                                        variant="outlined"
                                        sx={{ marginBottom: "16px" }}
                                    >
                                        <InputLabel>Source</InputLabel>
                                        <Select
                                            value={source}
                                            onChange={(e) =>
                                                setSource(e.target.value)
                                            }
                                            label="Source"
                                        >
                                            <MenuItem value="">
                                                Select Source
                                            </MenuItem>
                                            <MenuItem value="Indeed">
                                                Indeed
                                            </MenuItem>
                                            <MenuItem value="LinkedIn">
                                                LinkedIn
                                            </MenuItem>
                                            <MenuItem value="Other">
                                                Other
                                            </MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>

                            {/* Location */}
                            <Grid item xs={12} sm={6}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        marginTop: "20px",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            fontWeight: "400",
                                            color: "lightgray",
                                        }}
                                    >
                                        Employee Location
                                    </Typography>
                                    <TextField
                                        type="text"
                                        placeholder="Enter Location"
                                        value={location}
                                        onChange={(e) =>
                                            setLocation(e.target.value)
                                        }
                                        sx={{ marginBottom: "16px" }}
                                    />
                                </Box>
                            </Grid>

                            {/* Email Field */}
                            <Grid item xs={12} sm={6}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "100%",
                                        marginTop: "20px",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            fontWeight: "400",
                                            color: "lightgray",
                                        }}
                                    >
                                        Email
                                    </Typography>
                                    <TextField
                                        type="text"
                                        value={email}
                                        placeholder="Email"
                                        sx={{ marginBottom: "16px" }}
                                    />
                                </Box>
                            </Grid>

                            {/*Experience Yr*/}
                            <Grid item xs={12} sm={4}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "100%",
                                        marginTop: "20px",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            fontWeight: "400",
                                            color: "lightgray",
                                        }}
                                    >
                                        Experience in Years
                                    </Typography>
                                    <TextField
                                        type="text"
                                        value={experienceYr}
                                        placeholder="2 - 3"
                                        sx={{ marginBottom: "16px" }}
                                        onChange={(e) =>
                                            setExperienceYr(e.target.value)
                                        }
                                    />
                                </Box>
                            </Grid>

                            {/*Category*/}
                            <Grid item xs={12} sm={4}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "100%",
                                        marginTop: "20px",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            fontWeight: "400",
                                            color: "lightgray",
                                        }}
                                    >
                                        Category
                                    </Typography>
                                    <TextField
                                        type="text"
                                        value={category}
                                        placeholder="Software Engineering"
                                        sx={{ marginBottom: "16px" }}
                                        onChange={(e) =>
                                            setCategory(e.target.value)
                                        }
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        width: "100%",
                                        marginTop: "20px",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "14px",
                                            fontWeight: "400",
                                            color: "lightgray",
                                        }}
                                    >
                                        Experience Level
                                    </Typography>
                                    <TextField
                                        type="text"
                                        value={experience}
                                        placeholder="Mid senior"
                                        sx={{ marginBottom: "16px" }}
                                        onChange={(e) =>
                                            setExperience(e.target.value)
                                        }
                                    />
                                </Box>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    width: "100%",
                                    marginTop: "20px",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: "400",
                                        color: "lightgray",
                                    }}
                                >
                                    Skills Required
                                </Typography>
                                <TextField
                                    type="text"
                                    value={skills}
                                    placeholder="html, c++, java"
                                    sx={{ marginBottom: "16px" }}
                                    onChange={(e) => setSkills(e.target.value)}
                                />
                            </Box>
                        </Grid>

                        {/* Description */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                width: "100%",
                                marginTop: "20px",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    color: "lightgray",
                                }}
                            >
                                Description
                            </Typography>
                            <TextField
                                type="text"
                                value={description}
                                placeholder="About company description"
                                multiline
                                onChange={(e) => setDescription(e.target.value)}
                                rows={4}
                                sx={{ marginBottom: "16px" }}
                            />
                        </Box>

                        {/* Requirements */}
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                width: "100%",
                                marginTop: "20px",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: "14px",
                                    fontWeight: "400",
                                    color: "lightgray",
                                }}
                            >
                                Requirements
                            </Typography>
                            <TextField
                                type="text"
                                value={requirements}
                                onChange={(e) =>
                                    setRequirements(e.target.value)
                                }
                                placeholder="About Job requirements"
                                multiline
                                rows={4}
                                sx={{ marginBottom: "16px" }}
                            />
                        </Box>

                        {/* Submit Button */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "flex-end",
                                marginTop: "20px",
                                marginBottom: "20px",
                                alignContent: "center",
                                gap: "1.5rem",
                            }}
                        >
                            <Button
                                onClick={handleSubmit}
                                sx={{
                                    borderRadius: "16px",
                                    background: "#0a66c2",
                                    color: "white",
                                    padding: "8px 20px",
                                    "&:hover": { background: "orange" },
                                }}
                            >
                                Submit
                            </Button>
                        </Box>

                        {/* Success Modal */}
                        <Modal open={isModalOpen} onClose={handleCloseModal}>
                            <Box sx={modalStyles}>
                                <Typography variant="h6">
                                    Job Submitted Successfully!
                                </Typography>
                                <Typography>
                                    Your job post has been submitted and will be
                                    promoted.
                                </Typography>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleCloseModal}
                                >
                                    OK
                                </Button>
                            </Box>
                        </Modal>
                    </Box>
                </Card>
            </Box>
        </Box>
    );
};

const modalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "8px",
};

export default SubmitJob;
