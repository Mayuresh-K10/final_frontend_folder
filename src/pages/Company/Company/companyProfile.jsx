import { useState, useEffect } from "react";
import { Box, Card, Typography, TextField, Button } from "@mui/material";
import { Grid, InputAdornment } from "@mui/material";
import { styled } from "@mui/material/styles";
import { OutlinedInput } from "@mui/material";
import { IconButton } from "@mui/material";
import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete"; // Import delete icon
import { useSelector } from "react-redux";
import axios from "axios";

const CompanyProfile = () => {
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
    const companyphone =
        companyuser?.phone || localStorage.getItem("companyPhone");

    const [name, setName] = useState(companyname || "");
    const [email, setEmail] = useState(companyemail || "");
    const [phone, setPhone] = useState(companyphone || "");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [website, setWebsite] = useState("");
    const [websiteUrls, setWebsiteUrls] = useState([]);
    const [aboutcompany, setAboutcompany] = useState("");
    const [sectortype, setSectortype] = useState("");
    const [category, setCategory] = useState("");
    const [establishdate, setEstablishdate] = useState("");
    const [employeeSize, setEmployeeSize] = useState("");
    const [attachment, setAttachment] = useState(null);
    const [deletephoto, setDeletephoto] = useState(false);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        setAttachment(file); // Set the uploaded file as attachment
        setDeletephoto(false); // Reset delete flag since a new file is uploaded
    };

    // Handle file deletion
    const handleDeletePhoto = () => {
        setAttachment(null); // Clear the attachment
        setDeletephoto(true); // Mark photo as deleted
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

    const maxCharacters = 2000;

    // Calculate the number of characters entered and remaining
    const charactersEntered = aboutcompany.length;
    const charactersRemaining = maxCharacters - charactersEntered;

    // Handle input change
    const handleInputChange = (e) => {
        if (e.target.value.length <= maxCharacters) {
            setAboutcompany(e.target.value);
        }
    };

    // const handleSaveProfile = async () => {
    //     const data = {
    //         name: companyname,
    //         email: companyemail,
    //         phone: companyphone,
    //         address,
    //         city,
    //         state,
    //         country,
    //         zipcode,
    //         website,
    //         website_urls: websiteUrls,
    //         about_company: aboutcompany,
    //         sector_type: sectortype,
    //         category,
    //         established_date: establishdate,
    //         employee_size: employeeSize,
    //         is_deleted: deletephoto,
    //     };

    //     const formData = new FormData();
    //     Object.keys(data).forEach((key) => {
    //         if (Array.isArray(data[key])) {
    //             // Convert array to a string representation to send as a single item
    //             formData.append(key, JSON.stringify(data[key])); // Send the array as a JSON string
    //         } else {
    //             formData.append(key, data[key]);
    //         }
    //     });

    //     if (attachment) {
    //         formData.append("Attachment", attachment);
    //     }

    //     try {
    //         const token = companytoken; // Ensure the token is valid
    //         const response = await axios.post(
    //             `${url}/companies/${companyid}/`,
    //             formData,
    //             {
    //                 headers: {
    //                     "Content-Type": "multipart/form-data",
    //                     Authorization: `Bearer ${token}`,
    //                 },
    //             }
    //         );

    //         const { company_id } = response.data;
    //         //console.log(response.data);
    //         alert("Profile saved successfully!");
    //     } catch (error) {
    //         console.error(
    //             "Error saving profile:",
    //             error.response || error.message
    //         );
    //         alert(
    //             `Error saving profile: ${
    //                 error.response?.data?.message || error.message
    //             }`
    //         );
    //     }
    // };

    const handleSaveProfile = async () => {
        const data = {
            name: companyname,
            email: companyemail,
            phone: companyphone,
            address,
            city,
            state,
            country,
            zipcode,
            website,
            website_urls: websiteUrls,
            about_company: aboutcompany,
            sector_type: sectortype,
            category,
            established_date: establishdate,
            employee_size: employeeSize ? parseInt(employeeSize, 10) : null, // Ensure it's a number or null
            is_deleted: deletephoto,
        };

        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            if (Array.isArray(data[key])) {
                formData.append(key, JSON.stringify(data[key]));
            } else if (data[key] !== null && data[key] !== undefined) {
                formData.append(key, data[key]);
            }
        });

        if (attachment) {
            formData.append("Attachment", attachment);
        }

        try {
            const token = companytoken;
            const response = await axios.post(
                `${url}/companies/${companyid}/`,
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const { company_id } = response.data;
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

    useEffect(() => {
        const fetchCompanyData = async () => {
            if (!companyid) return;
            try {
                const response = await axios.get(
                    `${url}/companies/${companyid}/`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${companytoken}`,
                        },
                    }
                );

                const data = response.data.companies[0];
                //console.log(data); // Ensure the data is logged correctly

                if (data) {
                    setName(data.name || companyname);
                    setEmail(companyemail);
                    setPhone(companyphone || data.phone);
                    setAddress(data.address || "");
                    setCity(data.city || "");
                    setState(data.state || "");
                    setCountry(data.country || "");
                    setZipcode(data.zipcode || "");
                    setWebsite(data.website || "");
                    setWebsiteUrls(data.website_urls || []); // Directly setting the array
                    setAboutcompany(data.about_company || "");
                    setSectortype(data.sector_type || "");
                    setCategory(data.category || "");
                    setEstablishdate(data.established_date || "");
                    setEmployeeSize(data.employee_size || "");
                }
            } catch (error) {
                console.error(
                    "Error fetching company data:",
                    error.response || error.message
                );
            }
        };

        fetchCompanyData();
    }, [companyid, companytoken, companyemail, companyname, url]);

    const CustomFormLabel = styled((props) => (
        <Typography
            variant="subtitle1"
            fontWeight={600}
            {...props}
            component="label"
            htmlFor={props.htmlFor}
            value
            onChange
        />
    ))(() => ({
        marginBottom: "5px",
        marginTop: "25px",
        display: "block",
    }));

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
                                Company Name
                                <span style={{ color: "red" }}>*</span>
                            </CustomFormLabel>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                id="bi-company"
                                placeholder="ACME Inc."
                                fullWidth
                                value={name}
                                onChange={(e) => setName(e.target.value)}
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
                                id="bi-email"
                                placeholder="john.deo"
                                fullWidth
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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
                                id="bi-name"
                                placeholder="www.example.com"
                                fullWidth
                                value={website}
                                onChange={(e) => setWebsite(e.target.value)}
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
                                id="bi-phone"
                                placeholder="412 2150 451"
                                fullWidth
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
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
                                id="bi-name"
                                placeholder="YYYY-MM-DD"
                                type="date"
                                fullWidth
                                value={establishdate}
                                onChange={(e) =>
                                    setEstablishdate(e.target.value)
                                }
                                inputProps={{ max: today }}
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
                                Company Size
                            </CustomFormLabel>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                id="bi-name"
                                placeholder="123"
                                fullWidth
                                value={employeeSize}
                                onChange={(e) =>
                                    setEmployeeSize(e.target.value)
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
                                htmlFor="bi-name"
                                sx={{ mt: 0, mb: { xs: "-10px", sm: 0 } }}
                            >
                                Category
                                <span style={{ color: "red" }}>*</span>
                            </CustomFormLabel>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                id="bi-name"
                                placeholder="Private"
                                fullWidth
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
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
                                Sector Type
                                <span style={{ color: "red" }}>*</span>
                            </CustomFormLabel>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField
                                id="bi-name"
                                placeholder="IT Sector"
                                fullWidth
                                value={sectortype}
                                onChange={(e) => setSectortype(e.target.value)}
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
                                placeholder="Tell something about your company..."
                                multiline
                                rows={4}
                                fullWidth
                                value={aboutcompany}
                                onChange={handleInputChange}
                                error={charactersRemaining === 0}
                            />
                            <div
                                style={{
                                    marginTop: "8px",
                                    fontSize: "14px",
                                    color:
                                        charactersRemaining === 0
                                            ? "red"
                                            : "gray",
                                }}
                            >
                                {charactersRemaining === 0
                                    ? "Maximum character limit reached."
                                    : `Characters entered: ${charactersEntered} / ${maxCharacters}. Remaining: ${charactersRemaining}`}
                            </div>
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
                        </Typography>
                    </Box>
                    <Grid container spacing={3}>
                        {websiteUrls.map((link, index) => (
                            <React.Fragment key={index}>
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
                                    </CustomFormLabel>
                                </Grid>
                                <Grid item xs={12} sm={9}>
                                    <TextField
                                        value={websiteUrls[index]}
                                        onChange={(e) =>
                                            handleUrlChange(
                                                index,
                                                e.target.value
                                            )
                                        }
                                        placeholder={`Enter URL ${index + 1}`}
                                        fullWidth
                                        variant="outlined"
                                    />
                                    <IconButton
                                        aria-label="delete"
                                        onClick={() => removeSocialLink(index)}
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
                    </Grid>
                </Card>
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
                                placeholder="Karnataka"
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

export default CompanyProfile;
