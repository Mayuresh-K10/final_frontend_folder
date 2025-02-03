import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link as RouterLink } from "react-router-dom"; // Renamed to RouterLink
import {
    Card,
    CardContent,
    Button,
    Typography,
    Link,
    Box,
    CircularProgress,
    Backdrop,
    TextField,
    // Import IconButton
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { collegeLoginUser } from "../../../appStore/CollegeSlice";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const django_url = process.env.REACT_APP_BACKEND_DJANGO_URL;

const CollegeLoginCard = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [csrfToken, setCsrfToken] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const { loading, error, isAuthenticated } = useSelector(
        (state) => state.college
    );

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(collegeLoginUser({ official_email: email, password }));
    };

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/job-portal/dashboard/college-dashboard/");
        }
    }, [isAuthenticated, navigate]);

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

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <ToastContainer />
            <Card
                sx={{
                    width: "22rem",
                    height: "570px",
                    borderRadius: "1rem",
                    fontStyle: "normal",
                    background: "#ffffff",
                    color: "#210366 ",
                    fontSize: "1rem",
                    padding: "1rem",
                    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
                    margin: "1rem",
                    "@media (max-width: 600px)": {
                        height: "auto",
                        width: "90%",
                        padding: "0.5rem",
                        borderRadius: "5px",
                    },
                }}
            >
                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100%",
                        gap: "1.5rem",
                        marginTop: "-1.2rem",
                    }}
                >
                    <Box
                        sx={{
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                            Welcome back
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: "bold", textAlign: "center" }}
                        >
                            College Login
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            maxWidth: "400px",
                        }}
                    >
                        <form onSubmit={handleLogin}>
                            <input
                                fullWidth
                                label="Email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                required
                                style={{
                                    border: "1px solid #7B90FF",
                                    width: "100%",
                                    borderRadius: "8px",
                                    padding: "10px 15px",
                                    paddingLeft: "5px",
                                    fontSize: "1rem",
                                    color: "#210366",
                                    marginBottom: "10px",
                                    paddingLeft: "15px",
                                }}
                            />
                            <input
                                fullWidth
                                label="Password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password"
                                required
                                style={{
                                    border: "1px solid #7B90FF",
                                    width: "100%",
                                    borderRadius: "8px",
                                    padding: "10px 15px",
                                    paddingLeft: "5px",
                                    fontSize: "1rem",
                                    color: "#210366",
                                    marginBottom: "10px",
                                    paddingLeft: "15px",
                                }}
                            />

                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                fullWidth
                                disabled={loading}
                                sx={{
                                    width: "100%",
                                    background: "#7B90FF",
                                    borderRadius: "8px",
                                    color: "#fff",
                                    padding: "10px 19px",
                                    fontWeight: "600",
                                    "&:hover": {
                                        background: "#210366",
                                    },
                                }}
                            >
                                {loading ? (
                                    <CircularProgress
                                        size={24}
                                        color="inherit"
                                    />
                                ) : (
                                    "Login"
                                )}
                            </Button>

                            {error && (
                                <Typography
                                    color="error"
                                    sx={{ marginTop: "1rem" }}
                                >
                                    {error.error || "An error occurred"}
                                </Typography>
                            )}

                            {isAuthenticated && (
                                <Typography
                                    color="primary"
                                    sx={{ marginTop: "1rem" }}
                                >
                                    Logged in successfully!
                                </Typography>
                            )}
                        </form>
                    </Box>
                    <RouterLink
                        to="/college-email"
                        sx={{
                            marginTop: "0.5rem",
                            alignSelf: "flex-start",
                            fontWeight: "bold",
                            fontSize: "16px !important",
                            color: "#210366",
                            cursor: "pointer",
                            "&:hover": {
                                textDecoration: "underline",
                            },
                        }}
                    >
                        Forgot password
                    </RouterLink>
                    <Link
                        href="/register"
                        sx={{
                            marginTop: "0.5rem",
                            alignSelf: "flex-start",
                            fontWeight: "bold",
                            fontSize: "16px !important",
                            color: "#210366",
                            cursor: "pointer",
                            textDecoration: "none",
                            margin: "auto",
                        }}
                    >
                        New to Collegecue?{" "}
                        <span style={{ textDecoration: "underline" }}>
                            JOIN NOW
                        </span>
                    </Link>
                    <Link
                        href="/login"
                        sx={{
                            textTransform: "none",
                            backgroundColor: "#F0F2F5",
                            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                            transition: "box-shadow 0.3s, transform 0.3s",

                            // marginTop: "0.5rem",
                            alignSelf: "center",
                            fontWeight: "bold",
                            fontSize: "16px !important",
                            color: "#210366",
                            cursor: "pointer",
                            textDecoration: "none",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "40px",
                            borderRadius: "8px",

                            "&:hover": {
                                backgroundColor: "#D0D4DB",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                                transform: "translateY(-2px)",
                            },
                        }}
                    >
                        Login as Student{" "}
                    </Link>
                    <Link
                        href="/jobseeker-login"
                        sx={{
                            textTransform: "none",
                            backgroundColor: "#F0F2F5",
                            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                            transition: "box-shadow 0.3s, transform 0.3s",

                            // marginTop: "0.5rem",
                            alignSelf: "center",
                            fontWeight: "bold",
                            fontSize: "16px !important",
                            color: "#210366",
                            cursor: "pointer",
                            textDecoration: "none",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "40px",
                            borderRadius: "8px",

                            "&:hover": {
                                backgroundColor: "#D0D4DB",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                                transform: "translateY(-2px)",
                            },
                        }}
                    >
                        Login as JobSeeker{" "}
                    </Link>
                    <Link
                        href="/company-login"
                        sx={{
                            textTransform: "none",
                            backgroundColor: "#F0F2F5",
                            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                            transition: "box-shadow 0.3s, transform 0.3s",

                            // marginBottom: "4rem",
                            alignSelf: "center",
                            fontWeight: "bold",
                            fontSize: "16px !important",
                            color: "#210366",
                            cursor: "pointer",
                            textDecoration: "none",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "40px",
                            borderRadius: "8px",
                            "&:hover": {
                                backgroundColor: "#D0D4DB",
                                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                                transform: "translateY(-2px)",
                            },
                        }}
                    >
                        Login as Company{" "}
                    </Link>
                </CardContent>
            </Card>
            {/* Loading Spinner and Backdrop */}
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

export default CollegeLoginCard;
