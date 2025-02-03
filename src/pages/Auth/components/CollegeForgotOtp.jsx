import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import image from "../assets/otp.svg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Typography, CircularProgress, Backdrop } from "@mui/material";
import Cookies from "js-cookie";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const django_url = process.env.REACT_APP_BACKEND_DJANGO_URL;

const CollegeForgotOtp = () => {
    const [csrfToken, setCsrfToken] = useState("");
    const navigate = useNavigate();
    const [otp, setOtp] = useState(["", "", "", ""]);
    const [loading, setLoading] = useState(false);
    const inputRefs = useRef([]);
    const [sessionId, setSessionId] = useState("");

    const userEmail = localStorage.getItem("userEmail");

    useEffect(() => {
        async function fetchCsrfToken() {
            try {
                const response = await axios.get(
                    `${django_url}/get-csrf-token`
                );
                const csrfToken = response.data.csrf_token;
                setCsrfToken(csrfToken);
            } catch (error) {
                console.error("Error fetching CSRF token:", error);
            }
        }

        if (!csrfToken) {
            fetchCsrfToken();
        }
    }, []);

    useEffect(() => {
        const allCookies = document.cookie;
        console.log("All Cookies:", allCookies);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const enteredOtp = otp.join("");

        // first we will verify otp and send them to home page
        if (csrfToken) {
            try {
                const response = await axios.post(
                    `${django_url}/college-verify-otp/`,
                    {
                        otp: enteredOtp,
                        // email: userEmail,
                    },
                    {
                        headers: {
                            "X-CSRFToken": csrfToken,
                            // sessionid: csrftoken,
                            "Content-Type": "application/json",
                        },
                        withCredentials: true,
                    }
                );
                if (response.data.message === "OTP verification successful") {
                    toast.success("Success, OTP verification successfull!!");
                    navigate(`/college-forgot-password`);
                } else {
                    toast.error(
                        "OTP Verification failed, Try Again in a Moment!!"
                    );
                }
            } catch (error) {
                // console.error('Error during Verification: ', error)
                toast.error("Invalid Otp, Please enter the correct otp!!");
            }
        } else {
            toast.error("Check Credentials, Please try again!!");
        }
        setLoading(false);
    };

    const handleResendOTP = async () => {
        setLoading(true);
        if (csrfToken) {
            try {
                const response = await axios.get(
                    `${django_url}/college-resend-otp/`,
                    {},
                    {
                        headers: {
                            "X-CSRFToken": csrfToken,
                            "Content-Type": "application/json",
                        },
                        withCredentials: true,
                    }
                );
                if (response.data.message === "New OTP sent successfully") {
                    toast.success("Success, OTP Generation Successfull!!");
                } else {
                    toast.error(
                        "OTP Generation failed, Please Try Again in a Moment!!"
                    );
                }
            } catch (error) {
                // console.error('Error during Regeneration: ', error)
                toast.error("Oops, something went wrong, Please try again!!");
            }
        } else {
            toast.error("Check Credentials, Please try again!!");
        }
        setLoading(false);
    };

    const handleInputChange = (index, value) => {
        if (!isNaN(value) && value !== "" && value.length === 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (index < otp.length - 1 && value !== "") {
                inputRefs.current[index + 1].focus();
            }
        } else if (value.length === 0) {
            const newOtp = [...otp];
            newOtp[index] = "";
            setOtp(newOtp);

            if (index > 0) {
                inputRefs.current[index - 1].focus();
            }
        }
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const paste = e.clipboardData.getData("text");
        if (/^\d+$/.test(paste) && paste.length <= 4) {
            const newOtp = [...otp];
            for (let i = 0; i < paste.length; i++) {
                if (i < otp.length) {
                    newOtp[i] = paste[i];
                }
            }
            setOtp(newOtp);
        }
    };

    return (
        <>
            <ToastContainer />
            <div
                style={{
                    maxWidth: "400px",
                    margin: "auto",
                    textAlign: "center",
                    boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
                    borderRadius: "16px",
                    backgroundColor: "#FFFFFF",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >
                <img
                    src={image}
                    alt="OTP"
                    style={{
                        width: "100%",
                        height: "300px", // Adjust the height as needed
                        objectFit: "contain",
                        borderTopLeftRadius: "16px",
                        borderTopRightRadius: "16px",
                        marginBottom: "8px",
                    }}
                />
                <div style={{ padding: "16px" }}>
                    <h2 style={{ fontSize: "1.5rem", marginBottom: "8px" }}>
                        Verify OTP
                    </h2>
                    <p style={{ fontSize: "1rem", marginBottom: "8px" }}>
                        An OTP has been sent to your email address. Please enter
                        the OTP below:
                    </p>
                    <form onSubmit={handleSubmit}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            {otp.map((digit, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    value={digit}
                                    onChange={(e) =>
                                        handleInputChange(index, e.target.value)
                                    }
                                    onPaste={handlePaste}
                                    ref={(el) =>
                                        (inputRefs.current[index] = el)
                                    }
                                    maxLength={1}
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "8px",
                                        border: "1px solid #ccc",
                                        marginBottom: "16px",
                                        marginRight: "10px",
                                        textAlign: "center",
                                        fontSize: "1rem",
                                        boxSizing: "border-box",
                                    }}
                                />
                            ))}
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <button
                                type="submit"
                                style={{
                                    backgroundColor: "#007bff",
                                    color: "#ffffff",
                                    borderRadius: "8px",
                                    padding: "10px 40px",
                                    border: "none",
                                    fontSize: "1rem",
                                    cursor: "pointer",
                                    transition: "background-color 0.3s",
                                    marginTop: "10px",
                                }}
                                onMouseOver={(e) =>
                                    (e.target.style.backgroundColor = "#0056b3")
                                }
                                onMouseOut={(e) =>
                                    (e.target.style.backgroundColor = "#007bff")
                                }
                            >
                                Verify
                            </button>
                        </div>
                    </form>
                    <p style={{ fontSize: "0.875rem", marginTop: "12px" }}>
                        Didn&apos;t receive the code?{" "}
                        <button
                            onClick={handleResendOTP}
                            style={{
                                cursor: "pointer",
                                margin: "auto",
                                fontWeight: "450",
                                textDecoration: "underline",
                                color: "#007bff",
                            }}
                        >
                            RESEND OTP
                        </button>
                    </p>
                </div>
            </div>
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

export default CollegeForgotOtp;
