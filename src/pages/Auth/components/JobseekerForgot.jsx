import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import {
    Card,
    CardContent,
    Box,
    Typography,
    Button,
    CircularProgress,
    Backdrop,
} from "@mui/material";
import { styled } from "@mui/system";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import img from "../assets/reset.jpg"; // Import your image
import { useNavigate } from "react-router-dom"; // Import useNavigate

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const django_url = process.env.REACT_APP_BACKEND_DJANGO_URL;

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

const JobseekerForgot = () => {
    const [csrfToken, setCsrfToken] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const newPasswordRef = useRef(null);
    const navigate = useNavigate(); // Use useNavigate from react-router-dom
    const confirmPasswordRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const userEmail = localStorage.getItem("userEmail");

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
    }, []);

    useEffect(() => {
        newPasswordRef.current.focus();
    }, [newPassword]);

    useEffect(() => {
        confirmPasswordRef.current.focus();
    }, [confirmPassword]);

    useEffect(() => {
        const allCookies = document.cookie;
        console.log("All Cookies:", allCookies);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Validation checks
        const newErrors = {};

        if (!newPassword) {
            newErrors.newPassword = "New Password is required.<br />";
        } else if (
            !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}/.test(
                newPassword
            )
        ) {
            newErrors.newPassword =
                "Password must meet the following criteria:<br />" +
                "- At least 1 uppercase letter<br />" +
                "- At least 1 lowercase letter<br />" +
                "- At least 1 digit<br />" +
                "- At least 1 special character<br />" +
                "- Minimum 8 characters<br />";
        }

        if (!confirmPassword) {
            newErrors.confirmPassword =
                "Confirm New Password is required.<br />";
        } else if (newPassword !== confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.<br />";
        }

        setErrors(newErrors);

        //console.log(userEmail);

        if (Object.values(newErrors).every((error) => error === "")) {
            // If no errors, proceed with form submission
            if (newPassword) {
                try {
                    const response = await axios.post(
                        `${django_url}/jobseeker-reset-password/`,
                        {
                            password: newPassword,
                            confirm_password: confirmPassword,
                            // email: userEmail,
                        },
                        {
                            headers: {
                                "X-CSRFToken": csrfToken,
                                "Content-Type": "application/json",
                            },
                            withCredentials: true,
                        }
                    );
                    console.log("Response", response);
                    if (response.status === 200) {
                        toast.success("Password reset successful!");
                        navigate("/jobseeker-login");
                    } else {
                        toast.error(
                            "Password updation failed, Please Check Your Credentials!!"
                        );
                    }
                } catch (error) {
                    console.error("Error during Logging In: ", error);
                    toast.error(
                        "Oops, Something went wrong, Please try again!!"
                    );
                }
            } else {
                toast.info("Check Credentials, Please try again In a Moment!!");
            }
            // Clear input fields after submission
            setLoading(false);
            setNewPassword("");
            setConfirmPassword("");
        }
    };

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

    return (
        <>
            <ToastContainer />
            <Card
                sx={{
                    background: "#ffffff",
                    borderRadius: "20px",
                    padding: "1.5rem", // Increased padding for a slightly larger card
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
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
                    <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                            fontWeight: "bold",
                            fontSize: "1.5rem",
                            color: "#210366",
                        }}
                    >
                        Reset Your Password
                    </Typography>

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
                                type="password"
                                name="newPassword"
                                placeholder="New Password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                ref={newPasswordRef}
                                required
                            />
                            {errors.newPassword && (
                                <Typography
                                    variant="body2"
                                    color="error"
                                    dangerouslySetInnerHTML={{
                                        __html: errors.newPassword,
                                    }}
                                />
                            )}

                            <CustomInput
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm New Password"
                                value={confirmPassword}
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                ref={confirmPasswordRef}
                                required
                            />
                            {errors.confirmPassword && (
                                <Typography
                                    variant="body2"
                                    color="error"
                                    dangerouslySetInnerHTML={{
                                        __html: errors.confirmPassword,
                                    }}
                                />
                            )}
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
                            Reset Password
                        </AnimatedButton>
                    </form>
                    <Button
                        variant="text"
                        href="/jobseeker-login"
                        sx={{
                            alignSelf: "center",
                            color: "#210366",
                            textDecoration: "none",
                        }}
                    >
                        Back to Login
                    </Button>
                    <img
                        src={img}
                        alt="Reset"
                        style={{
                            width: "250px",
                            height: "auto",
                            marginTop: "-1rem",
                        }} // Adjust height to maintain aspect ratio
                    />
                </CardContent>
                <ToastContainer position="bottom-center" autoClose={2000} />
            </Card>
            <Backdrop
                sx={{
                    color: "#fff",
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={loading}
            >
                <CircularProgress color="inherit" />
                <Typography sx={{ marginLeft: "1rem" }}>
                    Please wait, we are verifying your details...
                </Typography>
            </Backdrop>
        </>
    );
};

export default JobseekerForgot;
