import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
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
import img from "../assets/reset.jpg"; // Import your image
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const django_url = process.env.REACT_APP_BACKEND_DJANGO_URL;

const Email = () => {
    const [csrfToken, setCsrfToken] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});
    const emailRef = useRef(null);
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
    }, []);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSendOTP = async (e) => {
        e.preventDefault();
        setLoading(true);
        const newErrors = {};

        if (!email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Invalid email address.";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            if (csrfToken) {
                try {
                    const response = await axios.post(
                        `${django_url}/forgot`,
                        { email },
                        {
                            headers: {
                                "X-CSRFToken": csrfToken,
                                "Content-Type": "application/json",
                            },
                            withCredentials: true,
                        }
                    );
                    if (response.data.message === "OTP sent successfully") {
                        localStorage.setItem("userEmail", email);
                        // toast.success("Success! You will be redirected soon!");
                        navigate("/forgot-otp");
                    } else {
                        toast.error(
                            "Email verification failed. Please check your credentials."
                        );
                    }
                } catch (error) {
                    console.error("Error during verification:", error);
                    toast.error(
                        "Oops, something went wrong. Please try again."
                    );
                }
            } else {
                toast.info("Check credentials. Please try again in a moment.");
            }
            setLoading(false);
            setEmail("");
        }
    };

    return (
        <>
            <ToastContainer />
            <Card
                sx={{
                    background: "#ffffff",
                    borderRadius: "20px",
                    padding: "1.5rem",
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
                        onSubmit={handleSendOTP}
                        style={{
                            color: "#210366",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.5rem",
                        }}
                    >
                        <Box>
                            <CustomInput
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                onChange={handleEmailChange}
                                required
                            />
                        </Box>

                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: "#FF7900",
                                borderRadius: "15px",
                                padding: "0.5rem 1.5rem",
                                color: "#fff",
                            }}
                        >
                            Send OTP
                        </Button>
                    </form>

                    <a
                        href="/login"
                        style={{
                            alignSelf: "center",
                            color: "#210366",
                            textDecoration: "none",
                        }}
                    >
                        Back to Login
                    </a>

                    <img
                        src={img}
                        alt="Reset"
                        style={{
                            width: "250px",
                            height: "auto",
                            marginTop: "3rem",
                        }}
                    />
                </CardContent>
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

export default Email;
