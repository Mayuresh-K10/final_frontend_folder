import React, { useState } from "react";
import {
    Box,
    Card,
    Typography,
    CustomOutlinedInput,
    Button,
    OutlinedInput,
    TextField,
} from "@mui/material";
import { useSelector } from "react-redux";
import axios from "axios";

const CollegeAccountSettings = () => {
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

    const [oldpassword, setOldpassword] = useState("");
    const [newpassword, setNewpassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    const handleSaved = async () => {
        const data = {
            official_email: collegeemail,
            old_password: oldpassword,
            new_password: newpassword,
            confirm_password: confirmpassword,
        };
        try {
            const token = collegetoken;
            const response = await axios.post(
                `${url}/change-password-university/`,
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            alert("New Password saved successfully!");
        } catch (error) {
            console.error(
                "Error saving profile:",
                error.response || error.message
            );
            alert(
                `Error updating password : ${
                    error.response?.data?.error || error.message
                }`
            );
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
                            marginTop: "40px",
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{ color: "#313893", marginBottom: "20px" }}
                        >
                            Change Password
                        </Typography>
                        <Box sx={{ mb: "30px" }}>
                            <Typography variant="h6">Old Password*</Typography>
                            <TextField
                                fullWidth
                                type="password"
                                variant="outlined"
                                placeholder="Md James"
                                sx={{ mt: "8px", background: "white" }}
                                value={oldpassword}
                                onChange={(e) => setOldpassword(e.target.value)}
                            />
                        </Box>
                        <Box sx={{ mb: "30px" }}>
                            <Typography variant="h6">New Password*</Typography>
                            <TextField
                                type="password"
                                fullWidth
                                variant="outlined"
                                placeholder="Md James"
                                sx={{ mt: "8px", background: "white" }}
                                value={newpassword}
                                onChange={(e) => setNewpassword(e.target.value)}
                            />
                        </Box>
                        <Box sx={{ mb: "30px" }}>
                            <Typography variant="h6">
                                Confirm Password*
                            </Typography>
                            <TextField
                                type="password"
                                fullWidth
                                variant="outlined"
                                placeholder="Md James"
                                sx={{ mt: "8px", background: "white" }}
                                value={confirmpassword}
                                onChange={(e) =>
                                    setConfirmpassword(e.target.value)
                                }
                            />
                        </Box>
                        <Box
                            sx={{
                                width: "100%",
                                height: "auto",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "2rem",
                            }}
                        >
                            <Button
                                onClick={handleSaved}
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: "0.5rem 2rem 0.5rem 2rem",
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
                                Save
                            </Button>
                        </Box>
                    </Box>
                </Card>
            </Box>
        </Box>
    );
};

export default CollegeAccountSettings;
