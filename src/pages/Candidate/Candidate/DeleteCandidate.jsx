import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const DeleteCandidate = ({ onClose }) => {
    const [deleteSuccess, setDeleteSuccess] = useState(false);
    const companyuser = useSelector((state) => state.jobseeker);

    const companytoken =
        companyuser?.token || localStorage.getItem("jobaccessToken");
    const navigate = useNavigate();

    const deleteAccount = async () => {
        try {
            const token = companytoken;
            //console.log("Token for delete", token);

            await axios.post(
                `${process.env.REACT_APP_BACKEND_DJANGO_URL}/job-seeker/delete-account/`, // Adjust your endpoint as needed
                { confirmation: true }, // Sending confirmation as raw JSON
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    withCredentials: true,
                }
            );

            setDeleteSuccess(true); // Show success message
            setTimeout(() => {
                setDeleteSuccess(false);
                navigate("/"); // Redirect to main page
            }, 2000); // Delay for 2 seconds
        } catch (error) {
            console.error(
                "Delete error details:",
                error.response?.data || error.message
            );
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: slight overlay for focus
            }}
        >
            <Box
                sx={{
                    width: 400,
                    backgroundColor: "#f0f5f3",
                    borderRadius: "8px",
                    padding: "20px",
                    textAlign: "center",
                    position: "relative",
                }}
            >
                <Button
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        color: "grey",
                        fontWeight: "bold",
                    }}
                >
                    ✕
                </Button>
                {!deleteSuccess ? (
                    <>
                        <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                            Are you sure?
                        </Typography>
                        <Typography sx={{ mb: 4 }}>
                            Are you sure you want to delete your account? All
                            data will be lost.
                        </Typography>
                        <Box display="flex" justifyContent="center" gap="16px">
                            <Button
                                onClick={deleteAccount}
                                variant="contained"
                                color="primary"
                            >
                                Yes
                            </Button>
                            <Button
                                onClick={onClose}
                                variant="contained"
                                color="secondary"
                            >
                                Cancel
                            </Button>
                        </Box>
                    </>
                ) : (
                    <Typography
                        variant="h6"
                        component="h2"
                        sx={{ mb: 2, color: "green" }}
                    >
                        Account deleted successfully!
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

export default DeleteCandidate;
