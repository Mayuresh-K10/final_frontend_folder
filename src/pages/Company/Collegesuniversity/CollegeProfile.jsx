import { useState, useEffect } from "react";
import { Box, Card, Typography, TextField, Button } from "@mui/material";
import * as React from "react";
import { Grid, InputAdornment } from "@mui/material";
import { styled } from "@mui/material/styles";
import { OutlinedInput } from "@mui/material";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete"; // Import delete icon
import { useSelector } from "react-redux";
import axios from "axios";

const CollegeProfile = ({ onPhotoTaken }) => {
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

    const [college, setCollege] = useState(collegename || "");
    const [email, setEmail] = useState(collegeemail || "");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [website, setWebsite] = useState("");
    const [websiteUrls, setWebsiteUrls] = useState([]);
    const [attachment, setAttachment] = useState(null);
    const [deletephoto, setDeletephoto] = useState(false);
    const [establishdate, setEstablishdate] = useState("");
    const [universitytype, setUniversitytype] = useState("");
    const [aboutcollege, setAboutcollege] = useState("");
    const [attachmentUrl, setAttachmentUrl] = useState("");
    const [colid, setColid] = useState();

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

                const collegeData = response.data?.colleges[0]; // Directly access the first element in the colleges array

                // Check if the data structure is as expected
                if (response.data.status === "success" && collegeData) {
                    setCollege(collegeData.college_name || "");
                    setEmail(collegeData.email || "");
                    setPhone(collegeData.phone || "");
                    setAddress(collegeData.address || "");
                    setCity(collegeData.city || "");
                    setState(collegeData.state || "");
                    setCountry(collegeData.country || "");
                    setZipcode(collegeData.zipcode || "");
                    setWebsite(collegeData.website || "");
                    setEstablishdate(collegeData.founded_date || "");
                    setUniversitytype(collegeData.university_type || "");
                    setAboutcollege(collegeData.about_college || "");
                    setColid(collegeData.id);

                    // Parse website URLs if it's a JSON string, or use an empty array if parsing fails
                    if (typeof collegeData.website_urls === "string") {
                        try {
                            setWebsiteUrls(
                                JSON.parse(collegeData.website_urls) || []
                            );
                        } catch (e) {
                            console.error("Failed to parse website URLs:", e);
                            setWebsiteUrls([]);
                        }
                    } else {
                        setWebsiteUrls(collegeData.website_urls || []);
                    }

                    if (collegeData.attachment_url) {
                        setAttachmentUrl(collegeData.attachment_url);
                    }
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

    localStorage.setItem("CollegeId", colid);
    // console.log(
    //     "Collelge id from local stroage",
    //     localStorage.getItem("CollegeId")
    // );

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

    const addNewUrl = () => {
        setWebsiteUrls([...websiteUrls, ""]); // Append an empty string to allow for new input
    };

    // Update social media input fields
    const handleUrlChange = (index, value) => {
        const updatedUrls = [...websiteUrls]; // Copy the existing URLs
        updatedUrls[index] = value; // Update the specific index with the new value
        setWebsiteUrls(updatedUrls); // Set the updated array to state
    };

    const removeSocialLink = (index) => {
        const newLinks = websiteUrls.filter((_, i) => i !== index); // Filter out the link at the given index
        setWebsiteUrls(newLinks); // Update state with the new array
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

    const handleSaveProfile = async () => {
        const data = {
            college_name: college,
            email,
            phone,
            address,
            city,
            state,
            country,
            zipcode,
            website,
            website_urls: websiteUrls,
            about_college: aboutcollege,
            university_type: universitytype,
            founded_date: establishdate,
            is_deleted: deletephoto,
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
            const token = collegetoken; // Ensure the token is valid
            const response = await axios.post(
                `${url}/colleges/${collegeid}/`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const { college_id } = response.data;

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
                    gap: "5rem",
                    marginRight: "25px",
                    "@media(max-width:1300px)": {
                        marginRight: "25px",
                        marginLeft: "25px",
                    },
                }}
            >
                {/*------------------------------BASIC INFO-------------------------------------------------------------------------- */}
                <Card
                    sx={{
                        borderRadius: "12px",
                        backgroundColor: "white",
                        padding: "2rem 3rem 5rem 3rem",
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
                            BASIC INFO
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            gap: "16px",
                            alignItems: "center",
                            margin: "20px 0",
                        }}
                    >
                        {/* <Button
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

                        {attachmentUrl && (
                            <Box>
                                <a
                                    href={attachmentUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View uploaded attachment
                                </a>
                            </Box>
                        )}

                        {deletephoto && (
                            <Typography
                                variant="body2"
                                sx={{ marginTop: "10px", color: "red" }}
                            >
                                Photo has been deleted.
                            </Typography>
                        )} */}
                    </Box>

                    <Grid container spacing={3}>
                        <Grid
                            item
                            xs={12}
                            sm={3}
                            display="flex"
                            alignItems="center"
                        >
                            <CustomFormLabel
                                htmlFor="bi-company"
                                sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
                            >
                                College Name
                                <span style={{ color: "red" }}>*</span>
                            </CustomFormLabel>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                value={college}
                                onChange={(e) => setCollege(e.target.value)}
                                id="bi-company"
                                placeholder="ACME Inc."
                                fullWidth
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
                                htmlFor="bi-email"
                                sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
                            >
                                Email
                                <span style={{ color: "red" }}>*</span>
                            </CustomFormLabel>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                id="bi-email"
                                placeholder="john.deo"
                                fullWidth
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
                                htmlFor="bi-name"
                                sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
                            >
                                Website
                                <span style={{ color: "red" }}>*</span>
                            </CustomFormLabel>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                value={website}
                                onChange={(e) => setWebsite(e.target.value)}
                                id="bi-name"
                                placeholder="www.example.com"
                                fullWidth
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
                                Phone No
                                <span style={{ color: "red" }}>*</span>
                            </CustomFormLabel>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                                id="bi-phone"
                                placeholder="412 2150 451"
                                fullWidth
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
                                htmlFor="bi-name"
                                sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
                            >
                                Founded Date
                                <span style={{ color: "red" }}>*</span>
                            </CustomFormLabel>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                label="Founding Date"
                                type="date"
                                value={establishdate}
                                onChange={(e) =>
                                    setEstablishdate(e.target.value)
                                }
                                inputProps={{ max: today }}
                                InputLabelProps={{
                                    shrink: true, // Keeps the label shrunk when there is a value
                                }}
                                fullWidth
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
                                htmlFor="bi-name"
                                sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
                            >
                                University Type
                                <span style={{ color: "red" }}>*</span>
                            </CustomFormLabel>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                onChange={(e) =>
                                    setUniversitytype(e.target.value)
                                }
                                value={universitytype}
                                id="bi-name"
                                placeholder="John Deo"
                                fullWidth
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={3}
                            display="flex"
                            alignItems="flex-start"
                        >
                            <CustomFormLabel
                                htmlFor="bi-message"
                                sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
                            >
                                About Bio
                                <span style={{ color: "red" }}>*</span>
                            </CustomFormLabel>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                value={aboutcollege}
                                onChange={(e) =>
                                    setAboutcollege(e.target.value)
                                }
                                placeholder="Tell Something about your college....."
                                multiline
                                rows={4}
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </Card>
                {/*------------------------------SOCIAL MEDIA-------------------------------------------------------------------------- */}
                <Card
                    sx={{
                        borderRadius: "12px",
                        backgroundColor: "white",
                        padding: "20px",
                        width: "100%",
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
                            Social Media
                            <span style={{ color: "red" }}>*</span>
                        </Typography>
                    </Box>
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
                                        <span style={{ color: "red" }}>*</span>
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
                                        placeholder={`Enter URL ${index + 1}`}
                                        fullWidth
                                        variant="outlined"
                                    />
                                    <IconButton
                                        aria-label="delete"
                                        onClick={() => removeSocialLink(index)} // Use index for removal
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
                            </Button>
                        </Grid>
                    </Grid>
                </Card>
                {/*-----------------------------------------------------------------------------PRofile
        <Card
          sx={{
            borderRadius: '12px', backgroundColor: 'white', padding: '20px', width:'100%'
          }}>
          <Box sx={{ margin: '2rem 0rem 3rem 0rem', borderBottom: '1px solid lightgray', width: '100%' }}>
            <Typography sx={{ fontSize: '24px', fontWeight: '600', color: '#313893' }}>PROFILE</Typography>
          </Box>
          <Grid container spacing={3}>
              {relevantprofile.map((link) => (
                   <>
                  <Grid item xs={12} sm={3} display="flex" alignItems="center">
                    <CustomFormLabel htmlFor="bi-name" sx={{ mt: 0, mb: { xs: '-10px', sm: 0 } }}>
                      Network {link.id}
                    </CustomFormLabel>
                  </Grid>
                  <Grid item xs={12} sm={9}>
                    <TextField
                      id={`social-${link.id}`}
                      value={link.link}
                      onChange={(e) => handleSocialLinkChange(link.id, e.target.value)}
                      placeholder={`Enter social media link ${link.id}`}
                      fullWidth
                      variant="outlined"
                    />
                    <IconButton
                      aria-label="delete"
                      onClick={() => removeSocialLink(link.id)}
                      sx={{ color: 'red' }}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Grid>
                </>
              ))}
              </Grid>
            <Button
              variant="contained"
              onClick={addSocialLink}
              sx={{ marginTop: '20px', backgroundColor: '#313893', textTransform: 'none' }}
              startIcon={<AddIcon />}
            >
              Add more link
            </Button>
        </Card>
      --------------------------------------------------------*/}

                {/*------------------------------Address and Location-------------------------------------------------------------------------- */}
                <Card
                    sx={{
                        borderRadius: "12px",
                        backgroundColor: "white",
                        padding: "2rem 3rem 5rem 3rem",
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
                            ADDRESS AND LOCATION
                        </Typography>
                    </Box>
                    <Grid container spacing={3}>
                        <Grid
                            item
                            xs={12}
                            sm={3}
                            display="flex"
                            alignItems="center"
                        >
                            <CustomFormLabel
                                htmlFor="bi-company"
                                sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
                            >
                                Address
                                <span style={{ color: "red" }}>*</span>
                            </CustomFormLabel>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                id="bi-company"
                                placeholder="Bangalore, Karnataka"
                                fullWidth
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
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
                                htmlFor="bi-email"
                                sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
                            >
                                City
                                <span style={{ color: "red" }}>*</span>
                            </CustomFormLabel>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                id="bi-email"
                                placeholder="Bangalore"
                                fullWidth
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
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
                                htmlFor="bi-email"
                                sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
                            >
                                State
                                <span style={{ color: "red" }}>*</span>
                            </CustomFormLabel>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                id="bi-email"
                                placeholder="Bangalore"
                                fullWidth
                                value={state}
                                onChange={(e) => setState(e.target.value)}
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
                                htmlFor="bi-name"
                                sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
                            >
                                Country
                                <span style={{ color: "red" }}>*</span>
                            </CustomFormLabel>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                id="bi-name"
                                placeholder="India"
                                fullWidth
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
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
                                Zip Code
                                <span style={{ color: "red" }}>*</span>
                            </CustomFormLabel>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                value={zipcode}
                                onChange={(e) => setZipcode(e.target.value)}
                                id="bi-phone"
                                placeholder="XXXXXX"
                                fullWidth
                            />
                        </Grid>
                    </Grid>
                </Card>
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

export default CollegeProfile;
