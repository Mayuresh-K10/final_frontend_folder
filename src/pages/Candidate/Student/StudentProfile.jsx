import { useState, useEffect } from "react";
import {
    Box,
    Card,
    Typography,
    TextField,
    Button,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import { Grid, InputAdornment } from "@mui/material";
import { styled } from "@mui/material/styles";
import { OutlinedInput } from "@mui/material";
import { IconButton } from "@mui/material";
import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete"; // Import delete icon
import AddIcon from "@mui/icons-material/Add";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import axios from "axios";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useSelector } from "react-redux";

const StudentProfile = () => {
    const student = useSelector((state) => state.newuser);

    const uniquetoken =
        student?.unique_token || localStorage.getItem("newaccessToken");
    const studentId = student?.id || localStorage.getItem("newuseruserid");
    const studentname =
        student?.firstname || localStorage.getItem("newusername");
    const studentmail = student?.email || localStorage.getItem("newuseremail");

    const [firstname, setFirstname] = useState(studentname || "");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState(studentmail || "");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [dob, setDob] = useState("");
    const [bio, setBio] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [activities, setActivities] = useState("");
    const [skills, setSkills] = useState([]);
    const [attachment, setAttachment] = useState(null);
    const [deletephoto, setDeletephoto] = useState(false);
    const [interests, setInterests] = useState("");
    const [languages, setLanguages] = useState("");
    const [objective, setObjective] = useState({ text: "" });
    const [attachmentUrl, setAttachmentUrl] = useState("");

    const handleObjectiveChange = (e) => {
        setObjective({ text: e.target.value });
    };

    const [zipcode, setZipcode] = useState("");
    const [resumeId, setResumeId] = useState(""); // Handle file upload
    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setAttachment(file);
        setDeletephoto(false);
    };

    const handleDeletePhoto = () => {
        setAttachment(null);
        setAttachmentUrl(""); // Clear the URL if the attachment is deleted
        setDeletephoto(true);
    };

    const CustomFormLabel = styled((props) => (
        <Typography
            variant="subtitle1"
            fontWeight={600}
            {...props}
            component="label"
            htmlFor={props.htmlFor}
        />
    ))(() => ({
        marginBottom: "5px",
        marginTop: "25px",
        display: "block",
    }));

    // Social media links
    const [websiteUrls, setWebsiteUrls] = useState([]);

    // Add more social media fields
    const addNewUrl = () => {
        setWebsiteUrls([...websiteUrls, ""]); // Append an empty string to allow for new input
    };

    // Update social media input fields
    const handleUrlChange = (index, value) => {
        const updatedUrls = [...websiteUrls]; // Copy the existing URLs
        updatedUrls[index] = value; // Update the specific index with the new value
        setWebsiteUrls(updatedUrls); // Set the updated array to state
    };

    // Remove social media link
    const removeSocialLink = (index) => {
        const newLinks = websiteUrls.filter((_, i) => i !== index); // Filter out the link at the given index
        setWebsiteUrls(newLinks); // Update state with the new array
    };

    const [education, setEducation] = useState([
        {
            course_or_degree: "",
            school_or_university: "",
            grade_or_cgpa: "",
            start_date: "",
            end_date: "",
            description: "",
        },
    ]);

    const [experience, setExperience] = useState([
        {
            job_title: "",
            company_name: "",
            start_date: "",
            end_date: "",
            description: "",
        },
    ]);

    const [projects, setProjects] = useState([
        {
            title: "",
            description: "",
            project_link: "",
        },
    ]);

    const [references, setReferences] = useState([
        {
            name: "",
            contact_info: "",
            relationship: "",
        },
    ]);

    const [certifications, setCertifications] = useState([
        {
            name: "",
            start_date: "",
            end_date: "",
        },
    ]);

    const [achievements, setAchievements] = useState([
        {
            title: "",
            publisher: "",
            start_date: "",
            end_date: "",
        },
    ]);

    const [publications, setPublications] = useState([
        {
            title: "",
            start_date: "",
            end_date: "",
        },
    ]);

    // Update education entry based on index and field
    const handleEducationChange = (index, field, value) => {
        const updatedEducation = education.map(
            (edu, i) => (i === index ? { ...edu, [field]: value } : edu) // Update specific index
        );
        setEducation(updatedEducation);
    };

    const handleExperienceChange = (index, field, value) => {
        const updateExperience = experience.map((exp, i) =>
            i === index ? { ...exp, [field]: value } : exp
        );
        setExperience(updateExperience);
    };

    const handleProjectChange = (index, field, value) => {
        const updateproject = projects.map((pro, i) =>
            i === index ? { ...pro, [field]: value } : pro
        );
        setProjects(updateproject);
    };

    const handleReferenceChange = (index, field, value) => {
        const updateref = references.map((ref, i) =>
            i === index ? { ...ref, [field]: value } : ref
        );
        setReferences(updateref);
    };

    const handleCertificationChange = (index, field, value) => {
        const updatecer = certifications.map((cer, i) =>
            i === index ? { ...cer, [field]: value } : cer
        );
        setCertifications(updatecer);
    };

    const handleAchievementChange = (index, field, value) => {
        const updateach = achievements.map((ach, i) =>
            i === index ? { ...ach, [field]: value } : ach
        );
        setAchievements(updateach);
    };

    const handlePublicationChange = (index, field, value) => {
        const updatepub = publications.map((pub, i) =>
            i === index ? { ...pub, [field]: value } : pub
        );
        setPublications(updatepub);
    };

    // Add a new education entry
    const handleAddEducation = () => {
        setEducation([
            ...education,
            {
                course_or_degree: "",
                school_or_university: "",
                grade_or_cgpa: "",
                start_date: "",
                end_date: "",
                description: "",
            },
        ]);
    };

    const handleAddProject = () => {
        setProjects([
            ...projects,
            {
                title: "",
                description: "",
                project_link: "",
            },
        ]);
    };

    const handleAddExperience = () => {
        setExperience([
            ...experience,
            {
                job_title: "",
                company_name: "",
                start_date: "",
                end_date: "",
                description: "",
            },
        ]);
    };

    const handleAddReference = () => {
        setReferences([
            ...references,
            {
                name: "",
                contact_info: "",
                relationship: "",
            },
        ]);
    };

    const handleAddCertification = () => {
        setCertifications([
            ...certifications,
            {
                name: "",
                start_date: "",
                end_date: "",
            },
        ]);
    };

    const handleAddAchievement = () => {
        setAchievements([
            ...achievements,
            {
                title: "",
                publisher: "",
                start_date: "",
                end_date: "",
            },
        ]);
    };

    const handleAddPublication = () => {
        setPublications([
            ...publications,
            {
                title: "",
                start_date: "",
                end_date: "",
            },
        ]);
    };

    // Remove an education entry
    const handleRemoveEducation = (index) => {
        const updatedEducation = education.filter((_, i) => i !== index);
        setEducation(updatedEducation);
    };

    const handleRemoveExperience = (index) => {
        const updateexp = experience.filter((_, i) => i !== index);
        setExperience(updateexp);
    };

    const handleRemoveProject = (index) => {
        const updatepro = projects.filter((_, i) => i !== index);
        setProjects(updatepro);
    };

    const handleRemoveReference = (index) => {
        const updateref = references.filter((_, i) => i !== index);
        setReferences(updateref);
    };

    const handleRemoveCertification = (index) => {
        const updatecer = certifications.filter((_, i) => i !== index);
        setCertifications(updatecer);
    };

    const handleRemoveAchievement = (index) => {
        const updateach = achievements.filter((_, i) => i !== index);
        setAchievements(updateach);
    };

    const handleRemovePublication = (index) => {
        const updatepub = publications.filter((_, i) => i !== index);
        setPublications(updatepub);
    };

    const handleSkillsChange = (e) => {
        setSkills(e.target.value.split(",").map((skill) => skill.trim())); // Convert input string to array
    };

    useEffect(() => {
        const fetchResumeData = async () => {
            const token = uniquetoken;
            if (!studentId) return;
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_BACKEND_DJANGO_URL}/resume/${studentId}/`,
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                );

                const data = response.data;
                //console.log("show my resume", data);

                const fullAttachmentUrl = `${process.env.REACT_APP_BACKEND_DJANGO_URL}${data.attachments}`;
                if (data.attachments) {
                    localStorage.setItem("profileImg", fullAttachmentUrl);
                }

                // Load data into state
                setFirstname(data.first_name || "");
                setLastname(data.last_name || "");
                setEmail(data.email || "");
                setPhone(data.phone || "");
                setAddress(data.address || "");
                setDob(data.date_of_birth || "");
                setBio(data.bio || "");
                setCity(data.city || "");
                setCountry(data.country || "");
                setState(data.state || "");
                setActivities(data.activities || "");
                setSkills(data.skills ? data.skills.split(", ") : []);
                setAttachmentUrl(data.attachment || "");
                setWebsiteUrls(data.website_urls || []);
                setInterests(data.interests || "");
                setLanguages(data.languages || "");
                setObjective({ text: data.objective || "" });
                setZipcode(data.zipcode || "");
                setEducation(data.education || []);
                setExperience(data.experience || []);
                setProjects(data.projects || []);
                setReferences(data.references || []);
                setCertifications(data.certifications || []);
                setAchievements(data.achievements || []);
                setPublications(data.publications || []);
                if (data.attachments) {
                    setAttachmentUrl(fullAttachmentUrl);
                }
            } catch (error) {
                console.error(
                    "Error fetching resume data:",
                    error.response || error.message
                );
            }
        };

        fetchResumeData();
    }, [resumeId, studentId, uniquetoken]);

    // Function to handle profile save
    const handleSaveProfile = async () => {
        const data = {
            first_name: firstname,
            last_name: lastname,
            email,
            phone,
            address,
            date_of_birth: dob,
            bio,
            city,
            country,
            state,
            activities,
            skills: skills.join(", "),
            interests,
            languages,
            objective: JSON.stringify(objective),
            zipcode,
            website_urls: websiteUrls, // This is still an array
            delete: deletephoto,
            education,
            experience,
            projects,
            references,
            certifications,
            achievements,
            publications,
        };

        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            if (Array.isArray(data[key])) {
                // Convert array to a string representation to send as a single item
                formData.append(key, JSON.stringify(data[key])); // Send the array as a JSON string
            } else {
                formData.append(key, data[key]);
            }
        });

        if (attachment) {
            formData.append("Attachment", attachment);
        }

        try {
            const token = uniquetoken; // Ensure the token is valid
            const response = await axios.post(
                `${process.env.REACT_APP_BACKEND_DJANGO_URL}/create_resume/${studentId}/`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const { resume_id } = response.data;

            alert("Profile saved successfully!");
        } catch (error) {
            console.error(
                "Error saving profile:",
                error.response || error.message
            );
            alert(
                `Error saving profile: ${
                    error.response?.data?.message || error.message
                }`
            );
        }
    };

    const validateDateRange = (startDate, endDate) => {
        if (new Date(startDate) > new Date(endDate)) {
            return false; // Invalid if start_date is after end_date
        }
        return true; // Valid otherwise
    };
    const today = new Date().toISOString().split("T")[0];

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
                    gap: "2rem",
                    marginRight: "25px",
                    "@media(max-width:1300px)": {
                        marginRight: "25px",
                        marginLeft: "25px",
                    },
                }}
            >
                {/*------------------------------BASIC INFO-------------------------------------------------------------------------- */}
                <Accordion
                    sx={{
                        margin: "2rem 0rem 3rem 0rem",
                        borderBottom: "1px solid lightgray",
                        width: "100%",
                        borderRadius: "12px",
                        backgroundColor: "white",
                        padding: "2rem 3rem 2rem 3rem",
                        "@media(max-width:600px)": {
                            padding: "2rem 1rem 2rem 1rem",
                        },
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel-content`}
                    >
                        <Typography
                            sx={{
                                fontSize: "24px",
                                fontWeight: "600",
                                color: "#313893",
                            }}
                        >
                            BASIC INFO
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {/* <Box
                            sx={{
                                display: "flex",
                                gap: "16px",
                                alignItems: "center",
                                margin: "20px 0",
                            }}
                        >
                            <Button
                                variant="contained"
                                component="label"
                                sx={{
                                    padding: "8px 16px",
                                    backgroundColor: "orange",
                                    borderRadius: "20px",
                                    textTransform: "none",
                                }}
                            >
                                Upload new photo
                                <input
                                    type="file"
                                    hidden
                                    onChange={handleFileUpload}
                                    accept=".jpg,.jpeg,.png"
                                />
                            </Button>
                            <Button
                                variant="outlined"
                                sx={{
                                    borderRadius: "20px",
                                    textTransform: "none",
                                    padding: "8px 16px",
                                    marginLeft: "16px",
                                }}
                                onClick={handleDeletePhoto}
                            >
                                Delete
                            </Button>

                            {attachment && (
                                <Typography
                                    variant="body2"
                                    sx={{ marginTop: "10px" }}
                                >
                                    Current file: {attachment.name}
                                </Typography>
                            )}

                            {deletephoto && (
                                <Typography
                                    variant="body2"
                                    sx={{ marginTop: "10px", color: "red" }}
                                >
                                    Photo has been deleted.
                                </Typography>
                            )}
                        </Box> */}

                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={3}>
                                <CustomFormLabel htmlFor="bi-firstname">
                                    First Name
                                    <span style={{ color: "red" }}>*</span>
                                </CustomFormLabel>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <TextField
                                    id="bi-firstname"
                                    placeholder="John"
                                    fullWidth
                                    value={firstname}
                                    onChange={(e) =>
                                        setFirstname(e.target.value)
                                    }
                                />
                            </Grid>

                            <Grid item xs={12} sm={3}>
                                <CustomFormLabel htmlFor="bi-lastname">
                                    Last Name
                                    <span style={{ color: "red" }}>*</span>
                                </CustomFormLabel>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <TextField
                                    id="bi-lastname"
                                    placeholder="Doe"
                                    fullWidth
                                    value={lastname}
                                    onChange={(e) =>
                                        setLastname(e.target.value)
                                    }
                                />
                            </Grid>

                            <Grid item xs={12} sm={3}>
                                <CustomFormLabel htmlFor="bi-email">
                                    E-Mail
                                    <span style={{ color: "red" }}>*</span>
                                </CustomFormLabel>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <TextField
                                    id="bi-email"
                                    placeholder="example@gmail.com"
                                    fullWidth
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12} sm={3}>
                                <CustomFormLabel htmlFor="bi-phone">
                                    Phone No
                                    <span style={{ color: "red" }}>*</span>
                                </CustomFormLabel>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <TextField
                                    id="bi-phone"
                                    placeholder="412 2150 451"
                                    fullWidth
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12} sm={3}>
                                <CustomFormLabel htmlFor="bi-dob">
                                    Date-Of-Birth
                                    <span style={{ color: "red" }}>*</span>
                                </CustomFormLabel>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <TextField
                                    id="bi-dob"
                                    placeholder="412 2150 451"
                                    type="date"
                                    fullWidth
                                    value={dob}
                                    onChange={(e) => setDob(e.target.value)}
                                    inputProps={{ max: today }}
                                />
                            </Grid>

                            <Grid item xs={12} sm={3}>
                                <CustomFormLabel htmlFor="bi-bio">
                                    About Bio
                                </CustomFormLabel>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <TextField
                                    id="bi-bio"
                                    value={bio}
                                    placeholder="Tell Something about yourself..."
                                    multiline
                                    rows={4}
                                    fullWidth
                                    onChange={(e) => setBio(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12} sm={3}>
                                <CustomFormLabel htmlFor="bi-address">
                                    Address
                                    <span style={{ color: "red" }}>*</span>
                                </CustomFormLabel>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <TextField
                                    id="bi-address"
                                    placeholder="G 24 Akbar Road"
                                    fullWidth
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12} sm={3}>
                                <CustomFormLabel htmlFor="bi-city">
                                    City
                                    <span style={{ color: "red" }}>*</span>
                                </CustomFormLabel>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <TextField
                                    id="bi-city"
                                    placeholder="Bangalore"
                                    fullWidth
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12} sm={3}>
                                <CustomFormLabel htmlFor="bi-state">
                                    State
                                    <span style={{ color: "red" }}>*</span>
                                </CustomFormLabel>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <TextField
                                    id="bi-state"
                                    placeholder="Karnataka"
                                    fullWidth
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12} sm={3}>
                                <CustomFormLabel htmlFor="bi-country">
                                    Country
                                    <span style={{ color: "red" }}>*</span>
                                </CustomFormLabel>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <TextField
                                    id="bi-country"
                                    placeholder="India"
                                    fullWidth
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12} sm={3}>
                                <CustomFormLabel htmlFor="bi-zipcode">
                                    Zip Code
                                    <span style={{ color: "red" }}>*</span>
                                </CustomFormLabel>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <TextField
                                    id="bi-zipcode"
                                    placeholder="XXXXXX"
                                    fullWidth
                                    value={zipcode}
                                    onChange={(e) => setZipcode(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                {/*-------------------------------------------------ADDITIONAL---------------------------------------------------------------*/}
                <Accordion
                    sx={{
                        margin: "2rem 0rem 3rem 0rem",
                        borderBottom: "1px solid lightgray",
                        width: "100%",
                        borderRadius: "12px",
                        backgroundColor: "white",
                        padding: "2rem 3rem 2rem 3rem",
                        "@media(max-width:600px)": {
                            padding: "2rem 1rem 2rem 1rem",
                        },
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel-content`}
                    >
                        <Typography
                            sx={{
                                fontSize: "24px",
                                fontWeight: "600",
                                color: "#313893",
                            }}
                        >
                            ADDITIONAL
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={3}>
                            {websiteUrls.map((link, index) => (
                                <React.Fragment key={index}>
                                    {" "}
                                    {/* Use index as a key */}
                                    <Grid
                                        item
                                        xs={12}
                                        sm={3}
                                        display="flex"
                                        alignItems="center"
                                    >
                                        <CustomFormLabel
                                            htmlFor={`social-${index}`}
                                            sx={{
                                                mt: 0,
                                                mb: { xs: "-10px", sm: 0 },
                                            }}
                                        >
                                            Network {index + 1}
                                            <span style={{ color: "red" }}>
                                                *
                                            </span>
                                            {/* Display index + 1 for user-friendly labeling */}
                                        </CustomFormLabel>
                                    </Grid>
                                    <Grid item xs={12} sm={9}>
                                        <TextField
                                            key={index}
                                            value={websiteUrls[index]} // Bind value to the specific URL at the current index
                                            onChange={(e) =>
                                                handleUrlChange(
                                                    index,
                                                    e.target.value
                                                )
                                            } // Handle change for this index
                                            placeholder={`Enter URL ${
                                                index + 1
                                            }`}
                                            fullWidth
                                            variant="outlined"
                                        />
                                        <IconButton
                                            aria-label="delete"
                                            onClick={() =>
                                                removeSocialLink(index)
                                            } // Use index for removal
                                            sx={{ color: "red" }}
                                        >
                                            <DeleteIcon />
                                        </IconButton>
                                    </Grid>
                                </React.Fragment>
                            ))}
                            {/* Add a button to add more social links */}
                            <Grid item xs={12}>
                                <Button
                                    variant="outlined"
                                    onClick={addNewUrl} // Add a new empty link
                                >
                                    Add Social Link
                                    <span style={{ color: "red" }}>*</span>
                                </Button>
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={3}
                                display="flex"
                                alignItems="center"
                            >
                                <CustomFormLabel
                                    htmlFor="bi-phone"
                                    sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
                                >
                                    Objective
                                </CustomFormLabel>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <TextField
                                    id="bi-phone"
                                    placeholder="whats your objective"
                                    fullWidth
                                    onChange={handleObjectiveChange}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={3}
                                display="flex"
                                alignItems="center"
                            >
                                <CustomFormLabel
                                    htmlFor="bi-phone"
                                    sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
                                >
                                    Co Curricular
                                </CustomFormLabel>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <TextField
                                    id="bi-phone"
                                    placeholder="Volunteer at GDSC"
                                    fullWidth
                                    value={activities}
                                    onChange={(e) =>
                                        setActivities(e.target.value)
                                    }
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={3}
                                display="flex"
                                alignItems="center"
                            >
                                <CustomFormLabel
                                    htmlFor="bi-phone"
                                    sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
                                >
                                    Skills
                                    <span style={{ color: "red" }}>*</span>
                                </CustomFormLabel>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <TextField
                                    id="bi-phone"
                                    placeholder="java,c++, react"
                                    fullWidth
                                    value={skills.join(", ")} // Display as a string
                                    onChange={handleSkillsChange}
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={3}
                                display="flex"
                                alignItems="center"
                            >
                                <CustomFormLabel
                                    htmlFor="bi-phone"
                                    sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
                                >
                                    Interests
                                </CustomFormLabel>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <TextField
                                    id="bi-phone"
                                    placeholder="photography, cooking"
                                    fullWidth
                                    value={interests}
                                    onChange={(e) =>
                                        setInterests(e.target.value)
                                    }
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={3}
                                display="flex"
                                alignItems="center"
                            >
                                <CustomFormLabel
                                    htmlFor="bi-phone"
                                    sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
                                >
                                    Languages
                                </CustomFormLabel>
                            </Grid>
                            <Grid item xs={12} sm={9}>
                                <TextField
                                    id="bi-phone"
                                    placeholder="english , hindi"
                                    fullWidth
                                    value={languages}
                                    onChange={(e) =>
                                        setLanguages(e.target.value)
                                    }
                                />
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </Accordion>
                {/*-------------------------------------------------EDUCATION---------------------------------------------------------------*/}
                <Accordion
                    sx={{
                        margin: "2rem 0rem 3rem 0rem",
                        borderBottom: "1px solid lightgray",
                        width: "100%",
                        borderRadius: "12px",
                        backgroundColor: "white",
                        padding: "2rem 2rem 2rem 2rem",
                        "@media(max-width:600px)": {
                            padding: "2rem 1rem 2rem 1rem",
                        },
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel-content`}
                    >
                        <Typography
                            sx={{
                                fontSize: "24px",
                                fontWeight: "600",
                                color: "#313893",
                            }}
                        >
                            EDUCATION
                            <span style={{ color: "red" }}>*</span>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            {education.map((edu, index) => (
                                <Box
                                    key={index} // Adding key to ensure unique identification for each education entry
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "1.5rem",
                                        width: "100%",
                                    }}
                                >
                                    <Grid container spacing={2}>
                                        {/* Course/Degree */}
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Course/Degree*"
                                                placeholder="e.g., B.Tech"
                                                type="string"
                                                value={edu.course_or_degree}
                                                onChange={(e) =>
                                                    handleEducationChange(
                                                        index,
                                                        "course_or_degree",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </Grid>
                                        {/* University/School */}
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="University/School*"
                                                placeholder="e.g., XYZ University"
                                                type="string"
                                                value={edu.school_or_university}
                                                onChange={(e) =>
                                                    handleEducationChange(
                                                        index,
                                                        "school_or_university",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </Grid>
                                        {/* Grade/CGPA */}
                                        <Grid item xs={12} sm={4}>
                                            <TextField
                                                fullWidth
                                                label="Grade/CGPA*"
                                                placeholder="e.g., 8.5"
                                                type=""
                                                value={edu.grade_or_cgpa}
                                                onChange={(e) =>
                                                    handleEducationChange(
                                                        index,
                                                        "grade_or_cgpa",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </Grid>

                                        {/* Start Date */}
                                        <Grid item xs={12} sm={4}>
                                            <TextField
                                                fullWidth
                                                label="Start Date*"
                                                type="date"
                                                value={edu.start_date}
                                                onChange={(e) => {
                                                    const startDate =
                                                        e.target.value;
                                                    if (
                                                        !edu.end_date ||
                                                        new Date(startDate) <=
                                                            new Date(
                                                                edu.end_date
                                                            )
                                                    ) {
                                                        handleEducationChange(
                                                            index,
                                                            "start_date",
                                                            startDate
                                                        );
                                                    }
                                                }}
                                                InputLabelProps={{
                                                    shrink: true, // Ensure the label shrinks properly when date is selected
                                                }}
                                                inputProps={{
                                                    max:
                                                        edu.end_date ||
                                                        undefined, // Set max as end date
                                                }}
                                            />
                                        </Grid>

                                        {/* End Date */}
                                        <Grid item xs={12} sm={4}>
                                            <TextField
                                                fullWidth
                                                label="End Date*"
                                                type="date"
                                                value={edu.end_date}
                                                onChange={(e) => {
                                                    const endDate =
                                                        e.target.value;
                                                    if (
                                                        !edu.start_date ||
                                                        new Date(endDate) >=
                                                            new Date(
                                                                edu.start_date
                                                            )
                                                    ) {
                                                        handleEducationChange(
                                                            index,
                                                            "end_date",
                                                            endDate
                                                        );
                                                    }
                                                }}
                                                InputLabelProps={{
                                                    shrink: true, // Ensure the label shrinks properly when date is selected
                                                }}
                                                inputProps={{
                                                    min:
                                                        edu.start_date ||
                                                        undefined, // Set min as start date
                                                }}
                                            />
                                        </Grid>

                                        {/* Description */}
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Description*"
                                                placeholder="Add details about your course or achievements"
                                                multiline
                                                value={edu.description}
                                                onChange={(e) =>
                                                    handleEducationChange(
                                                        index,
                                                        "description",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </Grid>
                                        {/* Remove Button */}
                                        <Grid
                                            item
                                            xs={12}
                                            sx={{
                                                display: "flex",
                                                justifyContent: "flex-end",
                                            }}
                                        >
                                            <IconButton
                                                color="error"
                                                onClick={() =>
                                                    handleRemoveEducation(index)
                                                }
                                            >
                                                <RemoveCircleIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Box>
                            ))}
                            <Button
                                variant="contained"
                                startIcon={<AddCircleIcon />}
                                onClick={handleAddEducation}
                                sx={{ mt: "1rem" }} // Added margin-top for better spacing from last entry
                            >
                                Add Education
                            </Button>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                {/*-------------------------------------------------EXPERIENCE---------------------------------------------------------------*/}
                <Accordion
                    sx={{
                        margin: "2rem 0rem 3rem 0rem",
                        borderBottom: "1px solid lightgray",
                        width: "100%",
                        borderRadius: "12px",
                        backgroundColor: "white",
                        padding: "2rem",
                        "@media(max-width:600px)": {
                            padding: "2rem 1rem",
                        },
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel-content`}
                    >
                        <Typography
                            sx={{
                                fontSize: "24px",
                                fontWeight: "600",
                                color: "#313893",
                            }}
                        >
                            WORK EXPERIENCE
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            {experience.map((exp, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "1.5rem",
                                        width: "100%",
                                    }}
                                >
                                    <Grid container spacing={2}>
                                        {/* Job Title */}
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Job Title"
                                                placeholder="e.g., React Developer"
                                                type="string"
                                                value={exp.job_title}
                                                onChange={(e) =>
                                                    handleExperienceChange(
                                                        index,
                                                        "job_title",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </Grid>
                                        {/* Company Name */}
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Company Name"
                                                placeholder="e.g., ABC Tech"
                                                type="string"
                                                value={exp.company_name}
                                                onChange={(e) =>
                                                    handleExperienceChange(
                                                        index,
                                                        "company_name",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </Grid>
                                        {/* Start Date */}
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="Start Date"
                                                type="date"
                                                value={exp.start_date}
                                                onChange={(e) => {
                                                    const startDate =
                                                        e.target.value;
                                                    if (
                                                        !exp.end_date ||
                                                        new Date(startDate) <=
                                                            new Date(
                                                                exp.end_date
                                                            )
                                                    ) {
                                                        handleExperienceChange(
                                                            index,
                                                            "start_date",
                                                            startDate
                                                        );
                                                    }
                                                }}
                                                InputLabelProps={{
                                                    shrink: true, // Ensure the label shrinks properly when date is selected
                                                }}
                                                inputProps={{
                                                    max:
                                                        exp.end_date ||
                                                        undefined, // Set max as end date
                                                }}
                                            />
                                        </Grid>

                                        {/* End Date */}
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                fullWidth
                                                label="End Date"
                                                type="date"
                                                value={exp.end_date}
                                                onChange={(e) => {
                                                    const endDate =
                                                        e.target.value;
                                                    if (
                                                        !exp.start_date ||
                                                        new Date(endDate) >=
                                                            new Date(
                                                                exp.start_date
                                                            )
                                                    ) {
                                                        handleExperienceChange(
                                                            index,
                                                            "end_date",
                                                            endDate
                                                        );
                                                    }
                                                }}
                                                InputLabelProps={{
                                                    shrink: true, // Ensure the label shrinks properly when date is selected
                                                }}
                                                inputProps={{
                                                    min:
                                                        exp.start_date ||
                                                        undefined, // Set min as start date
                                                }}
                                            />
                                        </Grid>

                                        {/* Currently Working Checkbox */}
                                        <Grid item xs={12}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox
                                                        checked={
                                                            exp.currently_working
                                                        }
                                                        onChange={(e) => {
                                                            const isChecked =
                                                                e.target
                                                                    .checked;
                                                            const currentDate =
                                                                isChecked
                                                                    ? new Date()
                                                                          .toISOString()
                                                                          .slice(
                                                                              0,
                                                                              10
                                                                          )
                                                                    : "";
                                                            handleExperienceChange(
                                                                index,
                                                                "currently_working",
                                                                isChecked
                                                            );
                                                            handleExperienceChange(
                                                                index,
                                                                "end_date",
                                                                currentDate
                                                            );
                                                        }}
                                                    />
                                                }
                                                label="Currently Working"
                                            />
                                        </Grid>
                                        {/* Description */}
                                        <Grid item xs={12}>
                                            <TextField
                                                fullWidth
                                                label="Description"
                                                placeholder="Describe your role and achievements"
                                                multiline
                                                value={exp.description}
                                                onChange={(e) =>
                                                    handleExperienceChange(
                                                        index,
                                                        "description",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </Grid>
                                        {/* Remove Button */}
                                        <Grid
                                            item
                                            xs={12}
                                            sx={{
                                                display: "flex",
                                                justifyContent: "flex-end",
                                            }}
                                        >
                                            <IconButton
                                                color="error"
                                                onClick={() =>
                                                    handleRemoveExperience(
                                                        index
                                                    )
                                                }
                                            >
                                                <RemoveCircleIcon />
                                            </IconButton>
                                        </Grid>
                                    </Grid>
                                </Box>
                            ))}
                            <Button
                                variant="contained"
                                startIcon={<AddCircleIcon />}
                                onClick={handleAddExperience}
                                sx={{ mt: "1rem" }}
                            >
                                Add Work Experience
                            </Button>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                {/*-------------------------------------------------PROJECT---------------------------------------------------------------*/}
                <Accordion
                    sx={{
                        margin: "2rem 0rem 3rem 0rem",
                        borderBottom: "1px solid lightgray",
                        width: "100%",
                        borderRadius: "12px",
                        backgroundColor: "white",
                        padding: "2rem 2rem 2rem 2rem",
                        "@media(max-width:600px)": {
                            padding: "2rem 1rem 2rem 1rem",
                        },
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="projects-panel-content"
                    >
                        <Typography
                            sx={{
                                fontSize: "24px",
                                fontWeight: "600",
                                color: "#313893",
                            }}
                        >
                            PROJECTS
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            {projects.map((project, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "1.5rem",
                                        width: "100%",
                                    }}
                                >
                                    <TextField
                                        fullWidth
                                        label="Project Title"
                                        placeholder="e.g., E-commerce Platform"
                                        type="string"
                                        value={project.title}
                                        onChange={(e) =>
                                            handleProjectChange(
                                                index,
                                                "title",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <TextField
                                        fullWidth
                                        label="Project Description"
                                        placeholder="Describe the project"
                                        multiline
                                        value={project.description}
                                        onChange={(e) =>
                                            handleProjectChange(
                                                index,
                                                "description",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <TextField
                                        fullWidth
                                        label="Project Link"
                                        placeholder="e.g., https://github.com/yourproject"
                                        type="string"
                                        value={project.project_link}
                                        onChange={(e) =>
                                            handleProjectChange(
                                                index,
                                                "project_link",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <Grid item xs={12} sm={1}>
                                        <IconButton
                                            onClick={() =>
                                                handleRemoveProject(index)
                                            }
                                        >
                                            <RemoveCircleIcon color="error" />
                                        </IconButton>
                                    </Grid>
                                </Box>
                            ))}
                            <Button
                                variant="contained"
                                startIcon={<AddCircleIcon />}
                                onClick={handleAddProject}
                            >
                                Add Project
                            </Button>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                {/*-------------------------------------------------REFERENCES---------------------------------------------------------------*/}
                <Accordion
                    sx={{
                        margin: "2rem 0rem 3rem 0rem",
                        borderBottom: "1px solid lightgray",
                        width: "100%",
                        borderRadius: "12px",
                        backgroundColor: "white",
                        padding: "2rem 2rem 2rem 2rem",
                        "@media(max-width:600px)": {
                            padding: "2rem 1rem 2rem 1rem",
                        },
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="references-panel-content"
                    >
                        <Typography
                            sx={{
                                fontSize: "24px",
                                fontWeight: "600",
                                color: "#313893",
                            }}
                        >
                            REFERENCES
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            {references.map((reference, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "1.5rem",
                                        width: "100%",
                                    }}
                                >
                                    <TextField
                                        fullWidth
                                        label="Name"
                                        placeholder="e.g., Jane Smith"
                                        type="string"
                                        value={reference.name}
                                        onChange={(e) =>
                                            handleReferenceChange(
                                                index,
                                                "name",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <TextField
                                        fullWidth
                                        label="Contact Information"
                                        placeholder="e.g., jane.smith@example.com"
                                        type=""
                                        value={reference.contact_info}
                                        onChange={(e) =>
                                            handleReferenceChange(
                                                index,
                                                "contact_info",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <TextField
                                        fullWidth
                                        label="Relationship"
                                        placeholder="e.g., Former Manager"
                                        type="string"
                                        value={reference.relationship}
                                        onChange={(e) =>
                                            handleReferenceChange(
                                                index,
                                                "relationship",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <Grid item xs={12} sm={1}>
                                        <IconButton
                                            onClick={() =>
                                                handleRemoveReference(index)
                                            }
                                        >
                                            <RemoveCircleIcon color="error" />
                                        </IconButton>
                                    </Grid>
                                </Box>
                            ))}
                            <Button
                                variant="contained"
                                startIcon={<AddCircleIcon />}
                                onClick={handleAddReference}
                            >
                                Add Reference
                            </Button>
                        </Box>
                    </AccordionDetails>
                </Accordion>

                {/*-------------------------------------------------CERTIFICATION---------------------------------------------------------------*/}
                <Accordion
                    sx={{
                        margin: "2rem 0rem 3rem 0rem",
                        borderBottom: "1px solid lightgray",
                        width: "100%",
                        borderRadius: "12px",
                        backgroundColor: "white",
                        padding: "2rem 2rem 2rem 2rem",
                        "@media(max-width:600px)": {
                            padding: "2rem 1rem 2rem 1rem",
                        },
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="certifications-panel-content"
                    >
                        <Typography
                            sx={{
                                fontSize: "24px",
                                fontWeight: "600",
                                color: "#313893",
                            }}
                        >
                            CERTIFICATIONS
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            {certifications.map((cert, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "1.5rem",
                                        width: "100%",
                                    }}
                                >
                                    <TextField
                                        fullWidth
                                        label="Certification Name"
                                        placeholder="e.g., AWS Certified"
                                        type="string"
                                        value={cert.name}
                                        onChange={(e) =>
                                            handleCertificationChange(
                                                index,
                                                "name",
                                                e.target.value
                                            )
                                        }
                                    />

                                    {/* Date Section */}
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="Start Date"
                                                type="date"
                                                value={cert.start_date}
                                                onChange={(e) => {
                                                    const startDate =
                                                        e.target.value;
                                                    if (
                                                        !cert.end_date ||
                                                        new Date(startDate) <=
                                                            new Date(
                                                                cert.end_date
                                                            )
                                                    ) {
                                                        handleCertificationChange(
                                                            index,
                                                            "start_date",
                                                            startDate
                                                        );
                                                    }
                                                }}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                inputProps={{
                                                    max:
                                                        cert.end_date ||
                                                        undefined, // Set max as end date
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="End Date"
                                                type="date"
                                                value={cert.end_date}
                                                onChange={(e) => {
                                                    const endDate =
                                                        e.target.value;
                                                    if (
                                                        !cert.start_date ||
                                                        new Date(endDate) >=
                                                            new Date(
                                                                cert.start_date
                                                            )
                                                    ) {
                                                        handleCertificationChange(
                                                            index,
                                                            "end_date",
                                                            endDate
                                                        );
                                                    }
                                                }}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                inputProps={{
                                                    min:
                                                        cert.start_date ||
                                                        undefined, // Set min as start date
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={1}>
                                        <IconButton
                                            onClick={() =>
                                                handleRemoveCertification(index)
                                            }
                                        >
                                            <RemoveCircleIcon color="error" />
                                        </IconButton>
                                    </Grid>
                                </Box>
                            ))}
                            <Button
                                variant="contained"
                                startIcon={<AddCircleIcon />}
                                onClick={handleAddCertification}
                            >
                                Add Certification
                            </Button>
                        </Box>
                    </AccordionDetails>
                </Accordion>

                {/*-------------------------------------------------ACHEIVEMENTS---------------------------------------------------------------*/}
                <Accordion
                    sx={{
                        margin: "2rem 0rem 3rem 0rem",
                        borderBottom: "1px solid lightgray",
                        width: "100%",
                        borderRadius: "12px",
                        backgroundColor: "white",
                        padding: "2rem 2rem 2rem 2rem",
                        "@media(max-width:600px)": {
                            padding: "2rem 1rem 2rem 1rem",
                        },
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="achievements-panel-content"
                    >
                        <Typography
                            sx={{
                                fontSize: "24px",
                                fontWeight: "600",
                                color: "#313893",
                            }}
                        >
                            ACHIEVEMENTS
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            {achievements.map((achievement, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "1.5rem",
                                        width: "100%",
                                    }}
                                >
                                    <TextField
                                        fullWidth
                                        label="Achievement Title"
                                        placeholder="e.g., Top Performer Award"
                                        type="string"
                                        value={achievement.title}
                                        onChange={(e) =>
                                            handleAchievementChange(
                                                index,
                                                "title",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <TextField
                                        fullWidth
                                        label="Publisher"
                                        placeholder="e.g., Tech Corp"
                                        type="string"
                                        value={achievement.publisher}
                                        onChange={(e) =>
                                            handleAchievementChange(
                                                index,
                                                "publisher",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="Start Date"
                                                type="date"
                                                value={achievement.start_date}
                                                onChange={(e) => {
                                                    const startDate =
                                                        e.target.value;
                                                    if (
                                                        !achievement.end_date ||
                                                        new Date(startDate) <=
                                                            new Date(
                                                                achievement.end_date
                                                            )
                                                    ) {
                                                        handleAchievementChange(
                                                            index,
                                                            "start_date",
                                                            startDate
                                                        );
                                                    }
                                                }}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                inputProps={{
                                                    max:
                                                        achievement.end_date ||
                                                        undefined, // Set max as end date
                                                }}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="End Date"
                                                type="date"
                                                value={achievement.end_date}
                                                onChange={(e) => {
                                                    const endDate =
                                                        e.target.value;
                                                    if (
                                                        !achievement.start_date ||
                                                        new Date(endDate) >=
                                                            new Date(
                                                                achievement.start_date
                                                            )
                                                    ) {
                                                        handleAchievementChange(
                                                            index,
                                                            "end_date",
                                                            endDate
                                                        );
                                                    }
                                                }}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                inputProps={{
                                                    min:
                                                        achievement.start_date ||
                                                        undefined, // Set min as start date
                                                }}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12} sm={1}>
                                        <IconButton
                                            onClick={() =>
                                                handleRemoveAchievement(index)
                                            }
                                        >
                                            <RemoveCircleIcon color="error" />
                                        </IconButton>
                                    </Grid>
                                </Box>
                            ))}
                            <Button
                                variant="contained"
                                startIcon={<AddCircleIcon />}
                                onClick={handleAddAchievement}
                            >
                                Add Achievement
                            </Button>
                        </Box>
                    </AccordionDetails>
                </Accordion>

                {/*-----------------------------------------------------------Publications-----------------------------------------------------*/}
                <Accordion
                    sx={{
                        margin: "2rem 0rem 3rem 0rem",
                        borderBottom: "1px solid lightgray",
                        width: "100%",
                        borderRadius: "12px",
                        backgroundColor: "white",
                        padding: "2rem 2rem 2rem 2rem",
                        "@media(max-width:600px)": {
                            padding: "2rem 1rem 2rem 1rem",
                        },
                    }}
                >
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="publications-panel-content"
                    >
                        <Typography
                            sx={{
                                fontSize: "24px",
                                fontWeight: "600",
                                color: "#313893",
                            }}
                        >
                            PUBLICATIONS
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Box>
                            {publications.map((publication, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "1.5rem",
                                        width: "100%",
                                    }}
                                >
                                    <TextField
                                        fullWidth
                                        label="Publication Title"
                                        placeholder="e.g., AI in Healthcare"
                                        type="string"
                                        value={publication.title}
                                        onChange={(e) =>
                                            handlePublicationChange(
                                                index,
                                                "title",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <Grid container spacing={2}>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="Start Date"
                                                type="date"
                                                value={publication.start_date}
                                                onChange={(e) => {
                                                    const startDate =
                                                        e.target.value;
                                                    if (
                                                        !publication.end_date ||
                                                        new Date(startDate) <=
                                                            new Date(
                                                                publication.end_date
                                                            )
                                                    ) {
                                                        handlePublicationChange(
                                                            index,
                                                            "start_date",
                                                            startDate
                                                        );
                                                    }
                                                }}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                inputProps={{
                                                    max:
                                                        publication.end_date ||
                                                        undefined, // Set max as end date
                                                }}
                                            />
                                        </Grid>

                                        <Grid item xs={6}>
                                            <TextField
                                                label="End Date"
                                                type="date"
                                                value={publication.end_date}
                                                onChange={(e) => {
                                                    const endDate =
                                                        e.target.value;
                                                    if (
                                                        !publication.start_date ||
                                                        new Date(endDate) >=
                                                            new Date(
                                                                publication.start_date
                                                            )
                                                    ) {
                                                        handlePublicationChange(
                                                            index,
                                                            "end_date",
                                                            endDate
                                                        );
                                                    }
                                                }}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                inputProps={{
                                                    min:
                                                        publication.start_date ||
                                                        undefined, // Set min as start date
                                                }}
                                            />
                                        </Grid>
                                    </Grid>

                                    <Grid item xs={12} sm={1}>
                                        <IconButton
                                            onClick={() =>
                                                handleRemovePublication(index)
                                            }
                                        >
                                            <RemoveCircleIcon color="error" />
                                        </IconButton>
                                    </Grid>
                                </Box>
                            ))}
                            <Button
                                variant="contained"
                                startIcon={<AddCircleIcon />}
                                onClick={handleAddPublication}
                            >
                                Add Publication
                            </Button>
                        </Box>
                    </AccordionDetails>
                </Accordion>
                {/*-------------------------------------------------------------------------------------------------------------------------------------------------*/}
                <Box
                    sx={{
                        borderRadius: "50px",
                        backgroundColor: "#313893",
                        width: "100%",
                        height: "auto",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "2rem",
                    }}
                >
                    <Button
                        onClick={handleSaveProfile}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "0.5rem 2rem 0.5rem 2rem",
                            color: "#313893",
                            background: "white",
                            fontSize: "16px",
                            borderRadius: "20px",
                            "&:hover": { background: "orange", color: "white" },
                        }}
                    >
                        Save
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default StudentProfile;
