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

const CollegeSubmitJob = () => {
    const url = process.env.REACT_APP_BACKEND_DJANGO_URL;
    const collegeuser = useSelector((state) => state.college);

    const collegeid =
        collegeuser?.collegeid || localStorage.getItem("collegeid");
    const collegeemail =
        collegeuser?.official_email || localStorage.getItem("collegeemail");
    const collegename =
        collegeuser?.university_name || localStorage.getItem("collegename");
    const collegetoken =
        collegeuser?.token || localStorage.getItem("collegeAccessToken");

    const [jobtitle, setJobtitle] = useState("");
    const [companyName, setCompanyName] = useState(collegename || "");
    const [workplaceTypes, setWorkplaceTypes] = useState("Remote");
    const [location, setLocation] = useState("");
    const [jobtype, setJobtype] = useState("FullTime");
    const [source, setSource] = useState("");
    const [email, setEmail] = useState(collegeemail || "");
    const [requirements, setRequirements] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [id, setId] = useState("");
    const [description, setDescription] = useState("");
    const [experience, setExperience] = useState("");
    const [category, setCategory] = useState("");
    const [skills, setSkills] = useState("");
    const [experienceYr, setExperienceYr] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCollege = async () => {
            if (!collegeid) return;
            try {
                const response = await axios.get(
                    `${url}/colleges/${collegeid}/`,
                    {
                        headers: {
                            Authorization: `Bearer ${collegetoken}`,
                        },
                    }
                );

                //console.log("API Response:", response.data); // Log the response to confirm structure

                const collegeData = response.data?.colleges?.[0]; // Directly access the first element in the colleges array

                if (response.data.status === "success" && collegeData) {
                    setId(collegeData.id || "");
                    //console.log("College Data", collegeData);
                } else {
                    console.error("Data format unexpected:", response.data);
                }
            } catch (error) {
                console.error(
                    "Error fetching college data:",
                    error.response || error.message
                );
            }
        };

        fetchCollege();
    }, [collegeid, collegetoken]);

    const handleSubmit = () => {
        const jobData = {
            job_title: jobtitle,
            college: id,
            location,
            description,
            requirements,
            job_type: jobtype,
            experience,
            category,
            skills,
            experience_yr: experienceYr,
            workplaceTypes,
            questions: "",
            job_status: "active",
        };

        console.log(jobData);
        // console.log(collegetoken);

        axios
            .post(`${url}/college-create-job/${collegeid}/`, jobData, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${collegetoken}`,
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
        navigate("/job-portal/dashboard/college-dashboard/jobPost");
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
                                        value={jobtitle}
                                        onChange={(e) =>
                                            setJobtitle(e.target.value)
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
                                        College Name
                                    </Typography>
                                    <TextField
                                        type="text"
                                        value={companyName}
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
                                            value={jobtype}
                                            onChange={(e) =>
                                                setJobtype(e.target.value)
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
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
};

export default CollegeSubmitJob;

{
    /* 
  <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px', marginBottom: '20px' }}>
                <Typography sx={{ fontSize: '24px', fontWeight: '500', textAlign: 'left' }}>Description</Typography>
                <textarea
                  type='text'
                  rows={6}
                  placeholder='description...'
                  style={{ width: '100%', outline: 'none', borderRadius: '8px', border: '1px solid black', paddingLeft: '16px' }} />
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px', marginBottom: '20px' }}>
                <Typography sx={{ fontSize: '24px', fontWeight: '500', textAlign: 'left' }}>
                  Skills
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Add skill keywords (max 10) to make your job more visible to the right candidates.
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                  {skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      onDelete={handleDelete(skill)}
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Box>
                <input
                  type='text'
                  placeholder='Enter skill'
                  style={{ width: '100%', height: '3rem', outline: 'none', borderRadius: '16px', border: '1px solid black', paddingLeft: '16px' }}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleAddSkill()}
                />
              </Box>
  
  <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px', marginBottom: '20px' }}>
                <Typography sx={{ fontSize: '24px', fontWeight: '500', textAlign: 'left' }}>Screening questions</Typography>
                <Typography>We recommend adding 3 or more questions. Applicant must answer each question.</Typography>
                {questions.map((question, index) => (
                  <Box
                    key={index}
                    sx={{ width: '100%', height: "auto", borderRadius: '12px', overflow: 'hidden', margin: '20px 0', border: "1px solid lightgray" }}
                  >
                    <Box sx={{
                      width: '100%', background: '#f8fafd', justifyContent: "space-between", alignItems: 'center', display: 'flex', padding: '10px 16px'
                    }}>
                      <Box sx={{ textWrap: 'wrap', flexWrap: 'wrap', justifyContent: "flex-start", alignItems: 'center', display: 'flex', gap: '1rem' }}>
                        {index < 3
                          ? `How many years of work experience do you have with ${question.skill}?`
                          : question.questionPrompt
                        }
                        <Button sx={{ background: 'green', color: 'white', padding: "0.5rem 1rem 0.5rem 1rem", fontWeight: '600' }}>Recommended</Button>
                      </Box>
                      <IconButton
                        size="small"
                        onClick={() => deleteQuestion(index)}
                      >
                        <ClearIcon sx={{ color: 'black' }} />
                      </IconButton>
                    </Box>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-evenly', gap: '1.5rem', padding: '50px 20px' }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ color: 'lightgray' }}>Skill</Typography>
                        <input
                          type='text'
                          value={question.skill}
                          onChange={(e) => handleQuestionChange(index, "skill", e.target.value)}
                          placeholder=''
                          style={{ width: '200px', height: '3rem', border: '1px solid black', paddingLeft: '1rem', outline: 'none' }} />
                      </Box>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ color: 'lightgray' }}>Ideal Answer</Typography>
                        <input
                          type='text'
                          value={question.experience}
                          onChange={(e) => handleQuestionChange(index, "experience", e.target.value)}
                          placeholder=''
                          style={{ width: '200px', height: '3rem', border: '1px solid black', paddingLeft: '1rem', outline: 'none' }} />
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        <Checkbox
                          checked={question.mustHave}
                          onChange={(e) => handleQuestionChange(index, "mustHave", e.target.checked)}
                        />
                        <Typography>Must have qualification</Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}

                <Button variant="contained" onClick={() => addQuestion()} sx={{ mt: 2 }}>
                  Add Custom Screening Question
                </Button>

                <Typography variant="body2" sx={{ mt: 3 }}>
                  Add screening options:
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {Object.keys(predefinedQuestions).map((label, index) => (
                    <Chip key={index} label={label} clickable onClick={() => handleAddPredefinedQuestion(label)} />
                  ))}
                </Box>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px', marginBottom: '20px' }}>
                <Typography sx={{ fontSize: '24px', fontWeight: '500', textAlign: 'left' }}>Qualification setting</Typography>
                <Typography sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', textWrap: 'wrap', gap: '1rem', textAlign: 'left' }}>
                  <input type='checkbox' />
                  Filter out and send rejections to applicants who don't meet any must-have qualification
                </Typography>
                <Typography sx={{ marginTop: '20px' }}>Preview</Typography>
                <textarea
                  type='text'
                  placeholder='Thank you for your interest in the Human Resources Intern position at BharatTech in India. 
                        Unfortunately, BharatTech did not select your application to move forward in the hiring process.
                        Regards, BharatTech'
                  rows={6}
                  style={{ width: '100%', outline: 'none', borderRadius: '8px', border: '1px solid black', paddingLeft: '8px' }}>
                </textarea>
              </Box> */
}

///                {/* Render forms with conditional logic */}
///                <FormContext.Consumer>
///                  {({ currentStep }) => (
///                    <>
///                      {currentStep === 1 && <SubmitJobForm1 />}
///                      {currentStep === 2 && <SubmitJobForm2 />}
///                      {currentStep === 3 && <SubmitJobForm3 />}
///                      {/*currentStep === 4 && <SubmitJobForm4 /> */}
///                    </>
///                  )}
///                </FormContext.Consumer>
