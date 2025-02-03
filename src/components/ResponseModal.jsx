import React from "react";
import {
    Modal,
    Box,
    Typography,
    Button,
    IconButton,
    Paper,
    Link,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SchoolIcon from "@mui/icons-material/School";
import StarIcon from "@mui/icons-material/Star";
import ApprovalIcon from "@mui/icons-material/Approval";
import LaunchIcon from "@mui/icons-material/Launch";
import { useNavigate } from "react-router-dom";

const ResponseModal = ({
    open,
    handleClose,
    messages,
    currentPage,
    totalPages,
    onPageChange,
}) => {
    const navigate = useNavigate();

    const handleNavigate = (id, type) => {
        if (type === "college") {
            navigate(`/college-info/${id}/info`);
        } else if (type === "institute") {
            if (typeof id === "object" && id.institute_id) {
                navigate(`/institute-info/${id.institute_id}/info`);
            } else {
                navigate(`/institute-info/${id}/info`);
            }
        }
        handleClose();
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    const handleCloseModal = () => {
        handleClose();
    };

    const itemsPerPage = 20;
    const startIndex = (currentPage - 1) * itemsPerPage;

    const renderStars = (rating) => {
        if (!rating) {
            return (
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    No ratings Available
                </Typography>
            );
        }

        const stars = [];
        const scaledRating = rating / 2;
        const fullStars = Math.floor(scaledRating);
        const halfStar = scaledRating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <StarIcon key={`full-${i}`} style={{ color: "gold" }} />
            );
        }
        if (halfStar) {
            stars.push(<StarIcon key="half" style={{ color: "gold" }} />);
        }

        return (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {stars}
                <Typography
                    variant="body1"
                    sx={{ color: "blue", fontWeight: "bold" }}
                >
                    {rating}
                </Typography>
            </Box>
        );
    };

    return (
        <Modal open={open} onClose={handleCloseModal}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "80%",
                    maxHeight: "80%",
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                    borderRadius: 2,
                    overflow: "auto",
                }}
            >
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ mb: 2, textAlign: "center" }}
                >
                    Search Results
                </Typography>
                {messages && messages.length > 0 ? (
                    <Box>
                        {messages.map((message, index) => (
                            <Paper
                                key={index}
                                elevation={3}
                                sx={{
                                    mb: 2,
                                    p: 2,
                                    transition: "background-color 0.3s",
                                    ":hover": {
                                        backgroundColor: "lightgrey",
                                        cursor: "pointer",
                                    },
                                }}
                                onClick={() =>
                                    handleNavigate(
                                        message.college_info_id ||
                                            message.institute_id,
                                        message.college_info_id
                                            ? "college"
                                            : "institute"
                                    )
                                }
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        flexWrap: "wrap",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1,
                                        }}
                                    >
                                        <SchoolIcon />
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: "blue",
                                                fontWeight: "bold",
                                                textDecoration: "none",
                                                fontFamily: "Arial, sans-serif",
                                                ":hover": {
                                                    textDecoration: "underline",
                                                },
                                            }}
                                        >
                                            {message.college_info_id
                                                ? `${message?.college_name}, ${message?.city}`
                                                : `${
                                                      message?.institute_name ||
                                                      message?.institute_id
                                                          ?.institute_name ||
                                                      "Not Avaliable"
                                                  }, ${
                                                      message.institute_centres ||
                                                      message?.institute_id
                                                          ?.institute_centres ||
                                                      "Not Avaliable"
                                                  }`}
                                        </Typography>
                                    </Box>
                                    {renderStars(
                                        message.college_info_id
                                            ? message.college_rating ||
                                                  "Not Available"
                                            : message.institute_rating ||
                                                  message?.institute_id
                                                      ?.institute_rating ||
                                                  "Not Available"
                                    )}
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        flexWrap: "wrap",
                                        mt: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1,
                                        }}
                                    >
                                        <ApprovalIcon />
                                        <Typography
                                            variant="body1"
                                            sx={{ fontWeight: "bold" }}
                                        >
                                            {message.college_info_id
                                                ? message.college_approval ||
                                                  "Not Available"
                                                : message.institute_type ||
                                                  message?.institute_id
                                                      ?.institute_type ||
                                                  "Not Available"}
                                        </Typography>
                                    </Box>
                                    <Link
                                        href="#"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleNavigate(
                                                message.college_info_id ||
                                                    message.institute_id,
                                                message.college_info_id
                                                    ? "college"
                                                    : "institute"
                                            );
                                        }}
                                        underline="hover"
                                        sx={{
                                            ml: "auto",
                                            fontSize: "1rem",
                                            fontWeight: "bold",
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1,
                                        }}
                                    >
                                        <LaunchIcon />
                                        Visit
                                    </Link>
                                </Box>
                            </Paper>
                        ))}
                    </Box>
                ) : (
                    <Typography
                        variant="body1"
                        sx={{
                            fontWeight: "bold",
                            fontSize: "1.5rem",
                            marginY: "2rem",
                            display: "flex",
                            justifyContent: "center",
                            alingSelf: "center",
                        }}
                    >
                        No results found
                    </Typography>
                )}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 2,
                    }}
                >
                    <IconButton
                        onClick={handlePreviousPage}
                        disabled={currentPage === 1}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="body2">
                        Page {currentPage} of {totalPages}
                    </Typography>
                    <IconButton
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                    >
                        <ArrowForwardIcon />
                    </IconButton>
                </Box>
                <Button
                    onClick={handleCloseModal}
                    sx={{ mt: 2, display: "block", mx: "auto" }}
                >
                    Close
                </Button>
            </Box>
        </Modal>
    );
};

export default ResponseModal;