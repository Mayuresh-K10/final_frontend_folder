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
    // Import IconButton
} from "@mui/material";
import { newuserloginUser } from "../../../appStore/NewuserSlice";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector, useDispatch } from "react-redux";

//axios.defaults.withCredentials = true;
//axios.defaults.xsrfCookieName = "csrftoken";
//axios.defaults.xsrfHeaderName = "X-CSRFToken";

const django_url = process.env.REACT_APP_BACKEND_DJANGO_URL;

const LoginCard = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [csrfToken, setCsrfToken] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const { loading, error, isAuthenticated } = useSelector(
        (state) => state.newuser
    );

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

    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(newuserloginUser({ email, password }));
    };

    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate("/job-portal/dashboard/student-dashboard/*");
        }
    }, [isAuthenticated, navigate]);

    //  const handleSubmit = async (e) => {
    //    e.preventDefault();
    //    setLoading(true);
    //    const email = e.target.email.value;
    //    const password = e.target.password.value;
    //
    //    if (email && password) {
    //      try {
    //        const response = await axios.post(
    //          `${django_url}/login`,
    //          {
    //            email: email,
    //            password: password,
    //          },
    //          {
    //            headers: {
    //              "X-CSRFToken": csrfToken,
    //              "Content-Type": "application/json",
    //            },
    //            withCredentials: true,
    //          }
    //        );
    //        if (response.data.message === "Login successful") {
    //          toast.success("Login Successfull, Happy Exploring!!");
    //          navigate("/job-portal/dashboard/student-dashboard/*");
    //        } else if(response.data.error === "Invalid Credentials") {
    //          toast.error("Login failed, Please Check Your Credentials!!");
    //        }
    //        else{
    //          toast.error("Invalid Credentails, Please Check Credentials again!!")
    //        }
    //      } catch (error) {
    //        console.error("Error during Logging In: ", error);
    //        toast.error("Oops, Something went wrong, Please try again!!");
    //      }
    //    } else {
    //      toast.info("Check Credentials, Please try again In a Moment!!");
    //    }
    //    setLoading(false);
    //
    //
    //    e.target.email.value = "";
    //    e.target.password.value = "";
    //  };

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
                    }}
                >
                    <Box
                        sx={{
                            textAlign: "center",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: "bold", marginTop: "-1rem" }}
                        >
                            Welcome back
                        </Typography>
                        <Typography component="p" sx={{ marginTop: "0.5rem" }}>
                            Stay update on your professional world
                        </Typography>
                    </Box>
                    <form
                        onSubmit={handleLogin}
                        style={{
                            width: "90%",
                            color: "#210366",
                            display: "flex",
                            flexDirection: "column",
                            gap: "0.7rem",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.5rem",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email"
                                    style={{
                                        border: "1px solid #7B90FF",
                                        width: "100%",
                                        borderRadius: "8px",
                                        padding: "10px 15px",
                                        paddingLeft: "5px",
                                        fontSize: "1rem",
                                        color: "#210366",
                                    }}
                                />
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "0.5rem",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                }}
                            >
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    placeholder="Password"
                                    style={{
                                        border: "1px solid #7B90FF",
                                        width: "100%",
                                        borderRadius: "8px",
                                        padding: "10px 15px",
                                        paddingLeft: "5px",
                                        fontSize: "1rem",
                                        color: "#210366",
                                    }}
                                />
                            </Box>
                            {error && (
                                <Typography
                                    color="error"
                                    sx={{ marginTop: "5px", fontSize: "15px" }}
                                >
                                    {error.error || "An error occurred"}
                                </Typography>
                            )}
                        </Box>

                        <RouterLink
                            to="/email"
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

                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
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
                            Log in
                        </Button>

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
                            }}
                        >
                            New to Collegecue?{" "}
                            <span style={{ textDecoration: "underline" }}>
                                JOIN NOW
                            </span>
                        </Link>
                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                borderRadius: "0.5rem",
                                backgroundColor: "#F0F2F5",
                                color: "#333",
                                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                                transition: "box-shadow 0.3s, transform 0.3s",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",

                                "&:hover": {
                                    backgroundColor: "#D0D4DB",
                                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                                    transform: "translateY(-2px)",
                                },
                            }}
                        >
                            <Link
                                href="/jobseeker-login"
                                sx={{
                                    marginTop: "0.5rem",
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
                                }}
                            >
                                Login as JobSeeker{" "}
                            </Link>
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                borderRadius: "0.5rem",
                                backgroundColor: "#F0F2F5",
                                color: "#333",
                                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                                transition: "box-shadow 0.3s, transform 0.3s",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",

                                "&:hover": {
                                    backgroundColor: "#D0D4DB",
                                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                                    transform: "translateY(-2px)",
                                },
                            }}
                        >
                            <Link
                                href="/college-login"
                                sx={{
                                    marginTop: "0.5rem",
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
                                }}
                            >
                                Login as College{" "}
                            </Link>
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                textTransform: "none",
                                borderRadius: "0.5rem",
                                backgroundColor: "#F0F2F5",
                                color: "#333",
                                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                                transition: "box-shadow 0.3s, transform 0.3s",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",

                                "&:hover": {
                                    backgroundColor: "#D0D4DB",
                                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                                    transform: "translateY(-2px)",
                                },
                            }}
                        >
                            <Link
                                href="/company-login"
                                sx={{
                                    marginTop: "0.5rem",
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
                                }}
                            >
                                Login as Company{" "}
                            </Link>
                        </Button>
                    </form>
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

export default LoginCard;
