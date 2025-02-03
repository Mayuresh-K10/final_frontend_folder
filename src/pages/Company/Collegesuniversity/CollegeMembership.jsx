import React, { useState, useEffect } from "react";
import {
    Grid,
    Typography,
    Card,
    CardContent,
    Button,
    Divider,
    Box,
    TextField,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
} from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const CollegeMembership = () => {
    const [openMembershipForm, setOpenMembershipForm] = useState(false);
    const [openAdvertisementForm, setOpenAdvertisementForm] = useState(false);

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

    const [name, setName] = useState("");
    const [email, setEmail] = useState(collegeemail || "");
    const [phone, setPhone] = useState("");
    const [course, setCourse] = useState("");
    const [quantity, setQuantity] = useState("");
    const [location, setLocation] = useState("");
    const [intake, setIntake] = useState("");

    const [adName, setAdName] = useState("");
    const [adEmail, setAdEmail] = useState(collegeemail || "");
    const [adContact, setAdContact] = useState("");
    const [adPlacement, setAdPlacement] = useState("");
    const [timeDuration, setTimeDuration] = useState("");
    const [investmentCost, setInvestmentCost] = useState("");
    const [targetAudience, setTargetAudience] = useState("");

    const pricingData = [
        {
            plan: "coming soon",
            price: "coming soon",
            posting: "coming soon",
            featuring: "coming soon",
            live: "coming soon",
            comingSoon: true,
        },
    ];

    // Handlers for dialog open and close
    const handleMembershipOpen = () => setOpenMembershipForm(true);
    const handleMembershipClose = () => setOpenMembershipForm(false);

    const handleAdvertisementOpen = () => setOpenAdvertisementForm(true);
    const handleAdvertisementClose = () => setOpenAdvertisementForm(false);

    const handleMembershipSubmit = async () => {
        const apiUrl = `${process.env.REACT_APP_BACKEND_DJANGO_URL}/college-membership/${collegeid}/`;

        const body = {
            name,
            email,
            mobile: phone,
            course_to_purchase: course,
            quantity_of_leads: quantity,
            location_for_leads: location,
            intake_year: intake,
        };

        try {
            const response = await axios.post(apiUrl, body, {
                headers: {
                    Authorization: `Bearer ${collegetoken}`,
                },
            });
            // Handle successful response (e.g., show a success message)
            // console.log('Membership created successfully:', response.data);
            handleMembershipClose(); // Close the dialog
        } catch (error) {
            console.error("Error creating membership:", error.response.data);
            // Handle error (e.g., show an error message)
        }
    };

    const handleAdvertisementSubmit = async () => {
        const apiUrl = `${process.env.REACT_APP_BACKEND_DJANGO_URL}/college-advertisement/${collegeid}/`;

        const adBody = {
            name: adName,
            email: adEmail,
            contact: adContact,
            advertisement_placement: adPlacement,
            time_duration: timeDuration,
            investment_cost: parseFloat(investmentCost), // Ensure it's a float
            target_audience: targetAudience,
        };

        try {
            const response = await axios.post(apiUrl, adBody, {
                headers: {
                    Authorization: `Bearer ${collegetoken}`, // Include your token for auth if necessary
                },
            });
            //console.log("Advertisement created successfully:", response.data);
            handleAdvertisementClose(); // Close the dialog
        } catch (error) {
            console.error("Error creating advertisement:", error.response.data);
        }
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
                            MEMBERSHIP
                        </Typography>
                    </Box>
                    {/* <Card sx={{ mb: 4, p: 2 }}>
                        <Button onClick={handleMembershipOpen}>
                            Membership
                        </Button>
                        <Button onClick={handleAdvertisementOpen}>
                            Advertisement
                        </Button>
                    </Card> */}
                    {/* Pricing Plans Section */}
                    <Grid container spacing={3}>
                        {pricingData.map((plan, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <Card
                                    sx={{
                                        p: 2,
                                        boxShadow: index === 1 ? 6 : 2,
                                        position: "relative",
                                    }}
                                >
                                    {plan.comingSoon && (
                                        <Typography
                                            variant="overline"
                                            sx={{
                                                position: "absolute",
                                                top: 16,
                                                right: 16,
                                                backgroundColor: "#FF5733",
                                                color: "white",
                                                padding: "4px 8px",
                                                borderRadius: "4px",
                                            }}
                                        >
                                            Coming Soon
                                        </Typography>
                                    )}
                                    {/* <CardContent>
                                        <Typography
                                            variant="h5"
                                            component="div"
                                        >
                                            {plan.plan}
                                        </Typography>
                                        <Typography
                                            variant="h4"
                                            component="div"
                                            sx={{ mt: 2 }}
                                        >
                                            {index !== 0 && <span></span>}
                                            {plan.price}
                                            {index !== 0 && <span></span>}
                                        </Typography>
                                        <Divider sx={{ my: 2 }} />
                                        <Typography variant="body1">
                                            {plan.posting}
                                        </Typography>
                                        <Typography variant="body1">
                                            {plan.featuring}
                                        </Typography>
                                        <Typography variant="body1">
                                            {plan.live}
                                        </Typography>
                                    </CardContent> */}
                                    <Link
                                        to="#"
                                        style={{ textDecoration: "none" }}
                                    >
                                        {/*  <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                      Choose Plan
                    </Button>*/}
                                    </Link>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Card>
            </Box>

            <Dialog open={openMembershipForm} onClose={handleMembershipClose}>
                <DialogTitle>Membership Form</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Name"
                        fullWidth
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                        label="Mobile"
                        type="tel"
                        fullWidth
                        margin="normal"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <TextField
                        label="Course to Purchase"
                        fullWidth
                        margin="normal"
                        value={course}
                        onChange={(e) => setCourse(e.target.value)}
                    />
                    <TextField
                        label="Quantity of Leads"
                        type="number"
                        fullWidth
                        margin="normal"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <TextField
                        label="Location for Leads"
                        fullWidth
                        margin="normal"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <TextField
                        label="Intake Year"
                        type="number"
                        fullWidth
                        margin="normal"
                        value={intake}
                        onChange={(e) => setIntake(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleMembershipClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        onClick={handleMembershipSubmit}
                        color="primary"
                        variant="contained"
                    >
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Advertisement Form */}

            <Dialog
                open={openAdvertisementForm}
                onClose={handleAdvertisementClose}
            >
                <DialogTitle>Advertisement Form</DialogTitle>
                <DialogContent>
                    <TextField
                        label="Name"
                        fullWidth
                        margin="normal"
                        value={adName}
                        onChange={(e) => setAdName(e.target.value)}
                    />
                    <TextField
                        label="Email"
                        type="email"
                        fullWidth
                        margin="normal"
                        value={adEmail}
                        onChange={(e) => setAdEmail(e.target.value)}
                    />
                    <TextField
                        label="Contact"
                        type="tel"
                        fullWidth
                        margin="normal"
                        value={adContact}
                        onChange={(e) => setAdContact(e.target.value)}
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Advertisement Placement</InputLabel>
                        <Select
                            value={adPlacement}
                            onChange={(e) => setAdPlacement(e.target.value)}
                        >
                            <MenuItem value="collegecue">
                                On CollegeCue
                            </MenuItem>
                            <MenuItem value="yourpage">On Your Page</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        label="Time Duration"
                        fullWidth
                        margin="normal"
                        placeholder="1 month"
                        value={timeDuration}
                        onChange={(e) => setTimeDuration(e.target.value)}
                    />
                    <TextField
                        label="Approximate Investment Cost"
                        type="number"
                        fullWidth
                        margin="normal"
                        value={investmentCost}
                        onChange={(e) => setInvestmentCost(e.target.value)}
                    />
                    <FormControl fullWidth margin="normal">
                        <InputLabel>Target Audience</InputLabel>
                        <Select
                            value={targetAudience}
                            onChange={(e) => setTargetAudience(e.target.value)}
                        >
                            <MenuItem value="student">Student</MenuItem>
                            <MenuItem value="consultant">Consultant</MenuItem>
                            <MenuItem value="other_college">
                                Other College
                            </MenuItem>
                            <MenuItem value="institute">Institute</MenuItem>
                        </Select>
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleAdvertisementClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={handleAdvertisementSubmit}
                    >
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default CollegeMembership;
