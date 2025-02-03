import React, { useState } from "react";
import Register from "../../pages/Auth/components/Register";
import NextCard from "../../pages/Auth/PageCards/NextCard";
import { Box, IconButton, Modal, Button, Typography } from "@mui/material";
import DataTable from "../../pages/SBILoan/components/DataTable";
import { IoMdClose } from "react-icons/io";
import COllagecuelogo from "../../Assets/form-logo.svg";
import CompareTable from "../../pages/StudyAbroad/IIMBangalore/CompareTable";
import { Link } from "react-router-dom";

export const RegisterModal = ({
    handleClose,
    open,
    showCollegeInfo = false,
    collegeImage,
    collegeName,
    headingText = "To Apply",
}) => {
    const [showNextPopup, setShowNextPopup] = useState(false);
    const [showOtpPopup, setShowOtpPopup] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(true); // Initial state to show Register modal

    const handleNextClick = () => {
        setShowNextPopup(true);
        setShowOtpPopup(false); // Ensure only one modal is open at a time
        setShowRegisterModal(false); // Close Register modal
    };

    const handleOtpClick = () => {
        setShowOtpPopup(true);
        setShowNextPopup(false); // Ensure only one modal is open at a time
        setShowRegisterModal(false); // Close Register modal
    };

    const handleNextModalClose = () => {
        setShowNextPopup(false);
    };

    return (
        <>
            {showNextPopup && (
                <NextModal
                    onClose={handleNextModalClose}
                    handleOtpClick={handleOtpClick}
                    showCollegeInfo={showCollegeInfo}
                    collegeImage={collegeImage}
                    collegeName={collegeName}
                />
            )}
            <Modal
                open={open && showRegisterModal} // Show Register modal based on state
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                disableRestoreFocus
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "20px",
                    "@media(max-width:400px)": {
                        maxWidth: "90%",
                        height: "auto",
                        marginX: "auto",
                    },
                }}
            >
                <Box
                    sx={{
                        backgroundColor: "white",
                        padding: "1rem",
                        outline: "none",
                        overflowY: "auto",
                        width: "auto",
                        borderRadius: "20px",
                        "@media(max-width:400px)": {
                            maxWidth: "90%",
                            height: "auto",
                            marginX: "auto",
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            "@media(max-width:400px)": {
                                maxWidth: "90%",
                                height: "auto",
                                marginX: "auto",
                            },
                        }}
                    >
                        <img
                            src={COllagecuelogo}
                            alt="Collagecue.com"
                            style={{
                                width: "100px",
                                height: "auto",
                                padding: "0.1rem",
                            }}
                        />
                        <IconButton
                            sx={{
                                display: "none",
                                "@media(minWidth: 770px)": {
                                    display: "block",
                                },
                            }}
                            onClick={handleClose}
                        >
                            <IoMdClose />
                        </IconButton>
                    </Box>
                    <Register
                        showCollegeInfo={showCollegeInfo}
                        collegeImage={collegeImage}
                        collegeName={collegeName}
                        handleNextClick={handleNextClick}
                        headingText={headingText}
                    />
                </Box>
            </Modal>
        </>
    );
};

export const NextModal = ({
    showCollegeInfo,
    collegeImage,
    collegeName,
    onClose,
    handleOtpClick,
}) => {
    return (
        <Modal
            open={true} // Always open for NextModal
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20px",
            }}
        >
            <Box
                sx={{
                    backgroundColor: "white",
                    padding: "1rem",
                    outline: "none",
                    overflowY: "auto",
                    width: "100%",
                    borderRadius: "20px",
                    maxHeight: "90vh",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <IconButton onClick={onClose}>
                        <IoMdClose />
                    </IconButton>
                    <img
                        src={COllagecuelogo}
                        alt="Collagecue.com"
                        style={{
                            width: "150px",
                            height: "auto",
                            padding: "0.7rem",
                        }}
                    />
                </Box>
                <NextCard
                    handleOtpClick={handleOtpClick}
                    showCollegeInfo={showCollegeInfo}
                    collegeImage={collegeImage}
                    collegeName={collegeName}
                />
            </Box>
        </Modal>
    );
};

export const OtpModal = ({ onClose }) => {
    return (
        <Modal
            open={true} // Always open for OtpModal
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20px",
            }}
        >
            <Box
                sx={{
                    backgroundColor: "white",
                    padding: "1rem",
                    outline: "none",
                    overflowY: "auto",
                    width: "auto",
                    borderRadius: "20px",
                    maxHeight: "90vh",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <IconButton onClick={onClose}>
                        <IoMdClose />
                    </IconButton>
                    <img
                        src={COllagecuelogo}
                        alt="Collagecue.com"
                        style={{
                            width: "150px",
                            height: "auto",
                            padding: "0.7rem",
                        }}
                    />
                </Box>
            </Box>
        </Modal>
    );
};

export const BackModal = ({ open, handleClose }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20px",
            }}
        >
            <Box
                sx={{
                    backgroundColor: "white",
                    outline: "none",
                    width: "auto",
                    borderRadius: "20px",
                    overflowX: "auto", // Enable horizontal scrolling
                    maxWidth: "90vw", // Set a maximum width to prevent stretching
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <IconButton onClick={handleClose}>
                        <IoMdClose />
                    </IconButton>
                    <img
                        src={COllagecuelogo}
                        alt="Collagecue.com"
                        style={{
                            width: "150px",
                            height: "auto",
                            padding: "0.7rem",
                        }}
                    />
                </Box>
                <DataTable />
            </Box>
        </Modal>
    );
};

export const CompareModal = ({ open, handleClose }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "20px",
            }}
        >
            <Box
                sx={{
                    backgroundColor: "white",
                    outline: "none",
                    width: "auto",
                    borderRadius: "20px",
                    overflowX: "auto", // Enable horizontal scrolling
                    maxWidth: "90vw", // Set a maximum width to prevent stretching
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <img
                        src={COllagecuelogo}
                        alt="Collagecue.com"
                        style={{
                            width: "150px",
                            height: "auto",
                            padding: "0.65rem",
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-evenly",
                    }}
                >
                    <CompareTable />
                </Box>
            </Box>
        </Modal>
    );
};

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "10px",
    textAlign: "center",
};

export const ScoreModal = ({ open, handleClose, score, totalQuestions }) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="quiz-completed-title"
            aria-describedby="quiz-completed-description"
        >
            <Box sx={style}>
                <Typography
                    id="quiz-completed-title"
                    variant="h6"
                    component="h2"
                >
                    Quiz Completed
                </Typography>
                <Typography id="quiz-completed-description" sx={{ mt: 2 }}>
                    The exam is over. Your score is {score} out of{" "}
                    {totalQuestions}.
                </Typography>
                <Box
                    sx={{
                        textAlign: "center",
                        paddingY: "1rem",
                        marginY: "1.5rem",
                    }}
                >
                    <Button variant="contained">
                        <Link
                            to={"/login"}
                            style={{ textDecoration: "none", color: "white" }}
                        >
                            LogIn
                        </Link>
                    </Button>
                    <Typography sx={{ marginY: "1.5rem" }}>
                        For Solutions
                    </Typography>
                </Box>
                <Box sx={{ textAlign: "right" }}>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
};
