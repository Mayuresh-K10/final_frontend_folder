import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    Card,
    CardContent,
    Box,
    Typography,
    Button,
    MenuItem,
    Select,
    CircularProgress,
    Backdrop,
} from "@mui/material";
import { styled } from "@mui/system";
import countryCodes from "./countryCode.json";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const CustomInput = styled("input")({
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "12px",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "inherit",
    fontSize: "1rem",
});

const FormBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
});

const AnimatedButton = styled(Button)({
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": {
        backgroundColor: "#FF7900",
        color: "#fff",
    },
});

const django_url = process.env.REACT_APP_BACKEND_DJANGO_URL;

const Register = ({
    collegeImage,
    collegeName,
    showCollegeInfo,
    handleNextClick,
    headingText,
}) => {
    const [csrfToken, setCsrfToken] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "",
        mobileNumber: "",
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchCsrfToken() {
            try {
                const response = await axios.get(
                    `${django_url}/get-csrf-token`
                );
                setCsrfToken(response.data.csrf_token);
            } catch (error) {
                console.error("Error fetching CSRF token:", error);
            }
        }

        fetchCsrfToken();
        setSelectedCountry(countryCodes[0].dial_code); // Default to the first country code
    }, []);

    const validatePassword = (pwd) => {
        const minLength = /.{8,}/;
        const specialChar = /[!@#$%^&*(),.?":{}|<>]/;
        const number = /[0-9]/;
        const upperCase = /[A-Z]/;
        const lowerCase = /[a-z]/;

        if (!minLength.test(pwd))
            return "Password must be at least 8 characters long.";
        if (!specialChar.test(pwd))
            return "Password must contain at least one special character.";
        if (!number.test(pwd))
            return "Password must contain at least one number.";
        if (!upperCase.test(pwd))
            return "Password must contain at least one uppercase letter.";
        if (!lowerCase.test(pwd))
            return "Password must contain at least one lowercase letter.";

        return "";
    };

    const handleChangeCountry = (event) => {
        setSelectedCountry(event.target.value);
    };

    const handleInputChange = (e) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 10) {
            value = value.slice(0, 10);
        }
        e.target.value = value;
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        const validationError = validatePassword(newPassword);
        setPasswordError(validationError);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const newErrors = {};
        if (!data.firstName) {
            newErrors.firstName = "First Name is required.";
        }

        if (!data.lastName) {
            newErrors.lastName = "Last Name is required.";
        }

        if (!data.email) {
            newErrors.email = "Email is required.";
        }

        if (!data.countryCode) {
            newErrors.countryCode = "Country Code is required.";
        }

        if (data.mobileNumber.length !== 10) {
            newErrors.mobileNumber = "Mobile number must be 10 digits long.";
        }

        if (passwordError) {
            toast.error(passwordError);
            setLoading(false);
            return;
        }

        setErrors(newErrors);

        if (Object.values(newErrors).every((error) => error === "")) {
            try {
                const response = await axios.post(
                    `${django_url}/register`,
                    {
                        firstname: data.firstName,
                        lastname: data.lastName,
                        email: data.email,
                        country_code: selectedCountry,
                        phonenumber: data.mobileNumber,
                        password: data.password,
                    },
                    {
                        headers: {
                            "X-CSRFToken": csrfToken,
                            "Content-Type": "application/json",
                        },
                        withCredentials: true,
                    }
                );

                if (response.data.message === "go to next page") {
                    toast.success("Successfully completed step 1!!");

                    // Save data to localStorage
                    localStorage.setItem("firstName", data.firstName);
                    localStorage.setItem("lastName", data.lastName);
                    localStorage.setItem("email", data.email);
                    localStorage.setItem("password", data.password);

                    if (showCollegeInfo) {
                        handleNextClick();
                    } else {
                        navigate("/next");
                    }
                } else {
                    toast.error(
                        "Registration unsuccessful, Please try Again!!"
                    );
                }
            } catch (error) {
                // console.error("Error during Registration: ", error);
                toast.error("Oops, something went wrong, Check Credentials!!");
            }
        } else {
            toast.info("Check Credentials, Please try again!!");
        }
        setLoading(false);
    };

    return (
        <>
            <Card
                sx={{
                    width: "330px",
                    background: "#f9f9f9",
                    borderRadius: "20px",
                    padding: "1rem",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                    "@media(max-width:400px)": {
                        maxWidth: "90%",
                        height: "auto",
                        marginX: "auto",
                    },
                }}
            >
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        padding: "0px",
                    }}
                >
                    {showCollegeInfo ? (
                        <>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    gap: "0.5rem",
                                    alignItems: "center",
                                }}
                            >
                                {collegeImage && (
                                    <img
                                        src={collegeImage}
                                        alt={collegeName}
                                        style={{
                                            width: "60px",
                                            borderRadius: "10px",
                                            height: "auto",
                                        }}
                                    />
                                )}
                                <Typography
                                    variant="h5"
                                    component="h2"
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: "1rem",
                                        color: "#210366",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontWeight: "normal",
                                            fontSize: "1rem",
                                            color: "#210366",
                                        }}
                                    >
                                        Apply Now for
                                    </span>{" "}
                                    {collegeName}
                                </Typography>
                            </Box>
                            <Typography
                                sx={{ fontWeight: "600", color: "#210366" }}
                            >
                                Get details and latest updates
                            </Typography>
                        </>
                    ) : (
                        <>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.5rem",
                                    alignItems: "center",
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    component="h2"
                                    sx={{
                                        fontWeight: "bold",
                                        fontSize: "1.5rem",
                                        color: "#210366",
                                    }}
                                >
                                    {/* Register Now To Apply */}
                                    {`Register Now ${headingText}`}
                                </Typography>
                                <Typography
                                    sx={{ fontWeight: "600", color: "#210366" }}
                                >
                                    Get details and latest updates
                                </Typography>
                            </Box>
                        </>
                    )}

                    <form
                        onSubmit={handleSubmit}
                        style={{
                            color: "#210366",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.5rem",
                        }}
                    >
                        <FormBox>
                            <CustomInput
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                required
                            />
                            {errors.firstName && (
                                <Typography variant="body2" color="error">
                                    {errors.firstName}
                                </Typography>
                            )}

                            <CustomInput
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                required
                            />
                            {errors.lastName && (
                                <Typography variant="body2" color="error">
                                    {errors.lastName}
                                </Typography>
                            )}

                            <CustomInput
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                            />
                            {errors.email && (
                                <Typography variant="body2" color="error">
                                    {errors.email}
                                </Typography>
                            )}
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: "1rem",
                                    alignItems: "flex-end",
                                }}
                            >
                                <Select
                                    name="countryCode"
                                    value={selectedCountry}
                                    onChange={handleChangeCountry}
                                    sx={{
                                        width: "100px",
                                        height: "45px",
                                        backgroundColor: "white",
                                        borderRadius: "12px",
                                    }}
                                    MenuProps={{
                                        PaperProps: {
                                            style: {
                                                maxHeight: 200,
                                            },
                                        },
                                    }}
                                >
                                    {countryCodes.map((country) => (
                                        <MenuItem
                                            key={country.code}
                                            value={country.dial_code}
                                        >
                                            {`${country.emoji} (${country.dial_code})`}
                                        </MenuItem>
                                    ))}
                                </Select>

                                <CustomInput
                                    type="tel"
                                    name="mobileNumber"
                                    placeholder="Mobile Number"
                                    required
                                    sx={{ flex: 1 }}
                                    onChange={handleInputChange}
                                />
                            </Box>
                            {errors.mobileNumber && (
                                <Typography variant="body2" color="error">
                                    {errors.mobileNumber}
                                </Typography>
                            )}

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "0.5rem",
                                }}
                            >
                                <CustomInput
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    required
                                    onChange={handlePasswordChange}
                                />
                                {passwordError && (
                                    <Typography
                                        variant="body2"
                                        color="error"
                                        sx={{
                                            marginTop: "-0.25rem",
                                            fontSize: "0.9rem",
                                        }}
                                    >
                                        {passwordError}
                                    </Typography>
                                )}
                            </Box>
                        </FormBox>

                        <AnimatedButton
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: "#FF7900",
                                borderRadius: "15px",
                                padding: "0.5rem 1.5rem",
                                color: "#fff",
                            }}
                        >
                            Submit
                        </AnimatedButton>

                        {!showCollegeInfo && (
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "1.5rem",
                                }}
                            >
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontSize: "0.875rem",
                                        textDecoration: "none",
                                        cursor: "pointer",
                                        fontWeight: "600",
                                        color: "#210366",
                                    }}
                                >
                                    Already registered?{" "}
                                    <Button
                                        component="a"
                                        href="/login"
                                        sx={{ fontSize: "0.875rem" }}
                                    >
                                        Sign in
                                    </Button>
                                </Typography>
                            </Box>
                        )}
                    </form>
                </CardContent>
            </Card>
            {/* Loading Spinner and Backdrop */}
            <Backdrop
                sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    display: "flex",
                    flexDirection: "column", // Change to column
                    alignItems: "center", // Center horizontally
                    justifyContent: "center", // Center vertically
                }}
                open={loading}
            >
                <CircularProgress color="inherit" />
                <Typography sx={{ mt: 2 }}>
                    Please wait, we are verifying your details...
                </Typography>
            </Backdrop>
        </>
    );
};

export default Register;
