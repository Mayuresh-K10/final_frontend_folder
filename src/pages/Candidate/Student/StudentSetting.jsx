import React, { useState } from "react";
import { Box, Card, Typography, TextField, Button } from "@mui/material";
import axios from "axios";
import { useSelector } from "react-redux";

const StudentSetting = () => {
    const user = useSelector((state) => state.newuser);
    const userEmail = user?.email || localStorage.getItem("newuseremail");
    const uniqueToken =
        user?.unique_token || localStorage.getItem("newaccessToken");

    const [otpSent, setOtpSent] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Request OTP
    const requestOtp = async () => {
        try {
            await axios.post(
                `${process.env.REACT_APP_BACKEND_DJANGO_URL}/forgot`,
                { email: userEmail },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${uniqueToken}`,
                    },
                }
            );
            alert("OTP sent to your email!");
            setOtpSent(true);
        } catch (error) {
            console.error(
                "Error sending OTP:",
                error.response || error.message
            );
            alert(`Error: ${error.response?.data?.message || error.message}`);
        }
    };

    // Verify OTP
    const verifyOtp = async () => {
        try {
            await axios.post(
                `${process.env.REACT_APP_BACKEND_DJANGO_URL}/verify_otp1`,
                { otp: otp },
                {
                    headers: {
                        Authorization: `Bearer ${uniqueToken}`,
                    },
                }
            );
            alert("OTP verified successfully!");
            setOtpVerified(true);
        } catch (error) {
            console.error(
                "Error verifying OTP:",
                error.response || error.message
            );
            alert(`Error: ${error.response?.data?.message || error.message}`);
        }
    };

    // Save new password
    const saveNewPassword = async () => {
        try {
            await axios.post(
                `${process.env.REACT_APP_BACKEND_DJANGO_URL}/forgot2`,
                { password: newPassword, confirm_password: confirmPassword },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${uniqueToken}`,
                    },
                }
            );
            alert("Password changed successfully!");
        } catch (error) {
            console.error(
                "Error changing password:",
                error.response || error.message
            );
            alert(`Error: ${error.response?.data?.message || error.message}`);
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
                    <Box sx={{ marginTop: "40px" }}>
                        <Typography
                            variant="h4"
                            sx={{ color: "#313893", marginBottom: "20px" }}
                        >
                            Update Password
                        </Typography>
                        <Box sx={{ mb: "30px" }}>
                            <Typography variant="h6">
                                Step 1: Request OTP
                            </Typography>
                            <Button
                                onClick={requestOtp}
                                sx={{
                                    mt: "8px",
                                    color: "white",
                                    background: "#313893",
                                    fontSize: "16px",
                                    borderRadius: "20px",
                                    "&:hover": {
                                        background: "orange",
                                        color: "white",
                                    },
                                }}
                            >
                                Request OTP
                            </Button>
                        </Box>

                        {otpSent && (
                            <Box sx={{ mb: "30px" }}>
                                <Typography variant="h6">
                                    Step 2: Enter OTP
                                </Typography>
                                <TextField
                                    fullWidth
                                    variant="outlined"
                                    placeholder="Enter OTP"
                                    sx={{ mt: "8px", background: "white" }}
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                    disabled={otpVerified}
                                />
                                <Button
                                    onClick={verifyOtp}
                                    sx={{
                                        mt: "8px",
                                        color: "white",
                                        background: "#313893",
                                        fontSize: "16px",
                                        borderRadius: "20px",
                                        "&:hover": {
                                            background: "orange",
                                            color: "white",
                                        },
                                    }}
                                    disabled={otpVerified}
                                >
                                    Verify OTP
                                </Button>
                            </Box>
                        )}

                        {otpVerified && (
                            <>
                                <Box sx={{ mb: "30px" }}>
                                    <Typography variant="h6">
                                        Step 3: New Password
                                    </Typography>
                                    <TextField
                                        type="password"
                                        fullWidth
                                        variant="outlined"
                                        placeholder="New Password"
                                        sx={{ mt: "8px", background: "white" }}
                                        value={newPassword}
                                        onChange={(e) =>
                                            setNewPassword(e.target.value)
                                        }
                                    />
                                </Box>
                                <Box sx={{ mb: "30px" }}>
                                    <Typography variant="h6">
                                        Confirm New Password
                                    </Typography>
                                    <TextField
                                        type="password"
                                        fullWidth
                                        variant="outlined"
                                        placeholder="Confirm New Password"
                                        sx={{ mt: "8px", background: "white" }}
                                        value={confirmPassword}
                                        onChange={(e) =>
                                            setConfirmPassword(e.target.value)
                                        }
                                    />
                                </Box>
                                <Button
                                    onClick={saveNewPassword}
                                    sx={{
                                        color: "white",
                                        background: "#313893",
                                        fontSize: "16px",
                                        borderRadius: "20px",
                                        "&:hover": {
                                            background: "orange",
                                            color: "white",
                                        },
                                    }}
                                >
                                    Save New Password
                                </Button>
                            </>
                        )}
                    </Box>
                </Card>
            </Box>
        </Box>
    );
};

export default StudentSetting;
