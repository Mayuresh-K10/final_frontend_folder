import {
    Box,
    Typography,
    Grid,
    MenuItem,
    Select,
    InputLabel,
} from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Input from "../components/Input";
import ToggleTextField from "../components/ToggleTextField";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../../appStore/regSlice";
import FormControl from "@mui/material/FormControl";

const StepOne = () => {
    const dispatch = useDispatch();
    const [countryCode, setCountryCode] = useState("+91");
    const [isFocused, setIsFocused] = useState(false);

    // redux
    const reduxStep1 = useSelector((state) => state.register.step1);
    // console.log(reduxStep1);
    /*const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };*/

    // Generate a list of years (e.g., from 1900 to current year)
    const currentYear = new Date().getFullYear();
    const years = Array.from(
        { length: currentYear - 1950 + 1 },
        (_, index) => currentYear - index
    );

    const handleApply = () => {
        // Handle apply button click, e.g., send data to backend or perform an action
        // console.log("Referral code:", reduxStep1.referral);
    };

    const handleReferral = (event) => {
        // setReferral(event.target.value);
        dispatch(
            actions.updateStep1({ ...reduxStep1, referral: event.target.value })
        );
    };

    const handleYearChange = (e) => {
        dispatch(
            actions.updateStep1({ ...reduxStep1, selectedYear: e.target.value })
        );
    };

    const handleCourseFees = (e) => {
        dispatch(
            actions.updateStep1({ ...reduxStep1, courseFees: e.target.value })
        );
    };
    const handleLinkedin = (e) => {
        dispatch(
            actions.updateStep1({ ...reduxStep1, linkedin: e.target.value })
        );
    };
    const handlePhoneNumberChange = (e) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 10) {
            value = value.slice(0, 10);
        }

        dispatch(actions.updateStep1({ ...reduxStep1, phoneNumber: value }));
    };

    const handleGender = (e) => {
        dispatch(
            actions.updateStep1({ ...reduxStep1, gender: e.target.value })
        );
    };
    const handleCountryCodeChange = (event) => {
        setCountryCode(event.target.value);
    };
    const handleCollegeNameChange = (e) => {
        dispatch(
            actions.updateStep1({ ...reduxStep1, college_name: e.target.value })
        );
    };
    const handleCourseNameChange = (e) => {
        dispatch(
            actions.updateStep1({ ...reduxStep1, courseName: e.target.value })
        );
    };
    const handleYourNameChange = (e) => {
        dispatch(
            actions.updateStep1({ ...reduxStep1, yourName: e.target.value })
        );
    };
    const handleCollegeEmailChange = (e) => {
        dispatch(
            actions.updateStep1({ ...reduxStep1, collegeEmail: e.target.value })
        );
    };

    return (
        <Box
            sx={{
                paddingX: "2rem",
                "@media(max-width:800px)": { paddingX: "1rem" },
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    color: "#7B90FF",
                    marginTop: "1rem",
                    textAlign: "center",
                    fontWeight: "600",
                }}
            >
                Start Filing Form to Submit your Review
            </Typography>

            <Grid container spacing={5} sx={{ marginTop: "2rem" }}>
                <Grid item xs={12} sm={6} md={3}>
                    <Input
                        label="College name"
                        value={reduxStep1.college_name || ""}
                        onChange={handleCollegeNameChange}
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Input
                        label="Course name"
                        value={reduxStep1.courseName || ""}
                        onChange={handleCourseNameChange}
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Input
                        label="Your name"
                        value={reduxStep1.yourName || ""}
                        onChange={handleYourNameChange}
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Input
                        type="email"
                        label="Email Address"
                        value={reduxStep1.collegeEmail || ""}
                        onChange={handleCollegeEmailChange}
                    />
                </Grid>

                {/* <Grid item xs={12} sm={6} md={3}>
                    <Select
                        value={countryCode}
                        onChange={handleCountryCodeChange}
                        sx={{
                            minWidth: "50px",
                            marginRight: "5px",
                            borderRadius: "12px",
                        }}
                    >
                        <MenuItem value="+1">+1</MenuItem>
                        <MenuItem value="+91">+91</MenuItem>
                        <MenuItem value="+61">+61</MenuItem>
                        <MenuItem value="+12">+12</MenuItem>
                        <MenuItem value="+81">+81</MenuItem>
                    </Select>
                    <input
                        label="Phone Number"
                        type="tel"
                        placeholder="Phone Number"
                        value={reduxStep1.phoneNumber || ""}
                        onChange={handlePhoneNumberChange}
                        style={{
                            padding: "10px",
                            width: "150px",
                            borderRadius: "12px",
                            fontSize: "1.2rem",
                            outline: isFocused
                                ? "1px solid #7B90FF"
                                : "1px solid #D0D0D0",
                            border: isFocused
                                ? "1px solid white"
                                : "1px solid #D0D0D0",
                            transition: "all 0.1s ease-in-out",
                        }}
                    />
                </Grid> */}
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    container
                    alignItems="center"
                    spacing={1}
                    sx={{
                        "@media(max-width:800px)": {
                            display: "grid",
                            gap: "10px",
                        },
                    }}
                >
                    <Grid item>
                        <Select
                            value={countryCode}
                            onChange={handleCountryCodeChange}
                            sx={{
                                minWidth: "70px",
                                marginRight: "10px",
                                borderRadius: "12px",
                                fontSize: "1rem",
                                height: "40px",
                                backgroundColor: "#fff",
                                border: "1px solid #D0D0D0",
                                "&:hover": {
                                    borderColor: "#7B90FF",
                                },
                                "& .MuiSelect-select": {
                                    padding: "8px",
                                },
                            }}
                        >
                            <MenuItem value="+1">+1</MenuItem>
                            <MenuItem value="+91">+91</MenuItem>
                            <MenuItem value="+61">+61</MenuItem>
                            <MenuItem value="+12">+12</MenuItem>
                            <MenuItem value="+81">+81</MenuItem>
                        </Select>
                    </Grid>
                    <Grid item>
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            value={reduxStep1.phoneNumber || ""}
                            onChange={handlePhoneNumberChange}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            style={{
                                padding: "10px",
                                width: "200px",
                                borderRadius: "12px",
                                fontSize: "1rem",
                                border: "1px solid",
                                borderColor: isFocused ? "#7B90FF" : "#D0D0D0",
                                outline: "none",
                                transition: "border-color 0.3s ease",
                            }}
                        />
                    </Grid>
                </Grid>

                {/* <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                    }}
                >
                    <FormControl
                        fullWidth
                        variant="outlined"
                        sx={{ width: "100%" }}
                    >
                        <InputLabel id="demo-simple-select-label">
                            Gender
                        </InputLabel>
                        <Select
                            value={reduxStep1.gender}
                            onChange={handleGender}
                            displayEmpty // This ensures the empty option is displayed
                            sx={{ width: "100%", borderRadius: "12px" }}
                        >
                            <MenuItem value="" disabled>
                                Select Gender
                            </MenuItem>
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                        </Select>
                    </FormControl>
                </Grid> */}

                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                    }}
                >
                    <FormControl
                        fullWidth
                        variant="outlined"
                        sx={{
                            width: "100%",
                        }}
                    >
                        <Select
                            value={reduxStep1.gender || ""} // Ensure empty value is handled
                            onChange={handleGender}
                            displayEmpty // Enables the display of the placeholder
                            sx={{
                                width: "100%",
                                borderRadius: "12px",
                            }}
                            inputProps={{
                                "aria-label": "Gender",
                            }}
                        >
                            <MenuItem value="" disabled>
                                <span style={{ color: "#9e9e9e" }}>
                                    Select Gender
                                </span>
                                {/* Placeholder styled in gray */}
                            </MenuItem>
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Input
                        label="LinkedinProfile"
                        value={reduxStep1.linkedin || ""}
                        onChange={handleLinkedin}
                    />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                    <Input
                        label="Course Fees"
                        value={reduxStep1.courseFees || ""}
                        onChange={handleCourseFees}
                    />
                </Grid>

                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                    }}
                >
                    <FormControl
                        fullWidth
                        variant="outlined"
                        sx={{
                            width: "100%",
                        }}
                    >
                        {/* <InputLabel>Year</InputLabel> */}
                        <Select
                            value={reduxStep1.selectedYear || ""}
                            onChange={handleYearChange}
                            displayEmpty
                            sx={{ width: "100%", borderRadius: "12px" }}
                            inputProps={{
                                "aria-label": "Select Year",
                            }}
                        >
                            <MenuItem value="" disabled>
                                {/* Select Year */}
                                <span style={{ color: "#9e9e9e" }}>
                                    Select Year
                                </span>
                            </MenuItem>
                            {years.map((year) => (
                                <MenuItem key={year} value={year}>
                                    {year}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                {/* <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    container
                    spacing={1}
                    alignItems="center"
                    sx={{
                        alignItems: "center",
                        "@media(max-width:800px)": {
                            display: "grid",
                            gridTemplateColumns: "1",
                        },
                    }}
                >
                    <Grid item xs={8}>
                        <input
                            label="Referral code"
                            value={reduxStep1.referral || ""}
                            placeholder="Referral code"
                            onChange={handleReferral}
                            fullWidth
                            style={{
                                padding: "10px",
                                width: "100%",
                                minWidth: "150px",
                                borderRadius: "12px",
                                fontSize: "1.2rem",
                                outline: isFocused
                                    ? "1px solid #7B90FF"
                                    : "1px solid white",
                                border: isFocused
                                    ? "1px solid white"
                                    : "1px solid",
                                transition: "all 0.1s ease-in-out",
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            variant="contained"
                            onClick={handleApply}
                            sx={{
                                // marginTop: "-4.5rem",
                                // marginRight: "-7.5rem",
                                "@media(max-width:800px)": {
                                    marginTop: "0rem",
                                },
                            }}
                        >
                            Apply
                        </Button>
                    </Grid>
                </Grid> */}
                <Grid
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    container
                    spacing={1}
                    alignItems="center"
                    sx={{
                        "@media(max-width:800px)": {
                            display: "grid",
                            gridTemplateColumns: "1fr",
                        },
                    }}
                >
                    <Grid item xs={8}>
                        <input
                            value={reduxStep1.referral || ""}
                            placeholder="Referral code"
                            onChange={handleReferral}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            style={{
                                padding: "10px",
                                width: "100%",
                                borderRadius: "12px",
                                fontSize: "1.2rem",
                                border: "1px solid",
                                borderColor: isFocused ? "#7B90FF" : "#ccc",
                                outline: "none",
                                transition: "border-color 0.3s ease",
                            }}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            variant="contained"
                            onClick={handleApply}
                            fullWidth
                            sx={{
                                "@media(max-width:800px)": {
                                    marginTop: "10px",
                                },
                            }}
                        >
                            Apply
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            {/* TextFiled Toggle */}
            <Grid container spacing={2} sx={{ marginTop: "2rem" }}>
                <Grid item xs={12} sm={6}>
                    <ToggleTextField
                        title="Did you Anvil Reservation Benefits?"
                        label="Give one"
                        initialValue={false}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ToggleTextField
                        title="Was there any GD/PI for the admission?"
                        label="What was the class Size"
                        initialValue={false}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ToggleTextField
                        title="Did you opt for hostel?"
                        label="Hostel fees"
                        initialValue={false}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <ToggleTextField
                        title="Does your college provide placements?"
                        label="Average Package"
                        initialValue={false}
                    />
                </Grid>
            </Grid>
            {/* bottom part for other collage */}
            <Box
                sx={{
                    marginY: "1rem",
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 600,
                        fontSize: "1.2rem",
                        marginY: "1rem",
                    }}
                >
                    Name the other colleges & courses you have applied
                </Typography>
                <Grid
                    container
                    spacing={5}
                    sx={{
                        marginBottom: "1rem",
                        "@media(max-width:800px)": {
                            display: "grid",
                            gridTemplateColumns: "1",
                        },
                    }}
                >
                    <Grid item xs={6}>
                        <Input
                            label="College / University name"
                            value={reduxStep1.courseName || ""}
                            onChange={handleCourseNameChange}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Input
                            label="Course name"
                            value={reduxStep1.courseName || ""}
                            onChange={handleCourseNameChange}
                        />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default StepOne;
