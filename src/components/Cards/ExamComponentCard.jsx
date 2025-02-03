import React from "react";
import { Avatar, Box, Divider, Typography, Button, Grid } from "@mui/material";
import { BiCalendar, BiDetail } from "react-icons/bi";
import { motion } from "framer-motion";
import { RegisterModal } from "../Modal/MultiModal";

const CardComponent = (props) => {
    const [open, setOpen] = React.useState(false);

    // const handleOpen = () => setOpen(true);
    const handleOpen = () => {
        setOpen(true);
        props.setModal(false);
    };
    const handleClose = () => setOpen(false);

    return (
        <Box
            sx={{
                padding: "15px",
                borderRadius: "20px",
                border: "1px solid black",
                margin: "1rem",
                width: "100%",
                "@media (max-width:770px)": {
                    marginY: "0.5rem",
                    marginX: "0rem",
                },
            }}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                exit={{ scale: 0.5, opacity: 0 }}
                sx={{
                    borderRadius: "10px",
                    textAlign: "left",
                    padding: "1rem",
                    minHeight: "300px",
                    fontSize: "16px",
                    lineHeight: "1.5",
                    border: "1px solid gray",
                    boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.1)",
                    "&:hover": {
                        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "10px",
                        }}
                    >
                        <Avatar
                            src={props.img}
                            sx={{
                                width: "60px",
                                height: "60px",
                                marginRight: "10px",
                            }}
                        />
                        <Box>
                            <Typography
                                variant="h6"
                                sx={{
                                    color: "#210366",
                                    fontWeight: 700,
                                    lineHeight: 1.2,
                                    wordBreak: "break-word",
                                }}
                            >
                                {props.name}
                            </Typography>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    color: "#210366",
                                    fontWeight: 500,
                                    fontSize: "15px",
                                    wordBreak: "break-word",
                                }}
                            >
                                {props.title}
                            </Typography>
                        </Box>
                    </Box>
                    <Divider
                        sx={{
                            backgroundColor: "rgba(123, 144, 255, 0.2)",
                            marginBottom: "10px",
                            width: "fit",
                        }}
                    />
                    <Typography
                        variant="h6"
                        sx={{
                            color: "#210366",
                            fontWeight: 700,
                            textAlign: "center",
                            marginBottom: "10px",
                        }}
                    >
                        {props.mode}
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Box sx={{ textAlign: "center" }}>
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        color: "#210366",
                                        fontWeight: 500,
                                        fontSize: "11px",
                                    }}
                                >
                                    Exam Date
                                    <br />
                                    {props.examDate}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box sx={{ textAlign: "center" }}>
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        color: "#210366",
                                        fontWeight: 500,
                                        fontSize: "11px",
                                    }}
                                >
                                    Application Form
                                    <br />
                                    {props.applicationDate}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={4}>
                            <Box sx={{ textAlign: "center" }}>
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        color: "#210366",
                                        fontWeight: 500,
                                        fontSize: "11px",
                                    }}
                                >
                                    Result Announce
                                    <br />
                                    {props.announceDate}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            paddingTop: "10px",
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            sx={{
                                paddingTop: "8px",
                                textAlign: "center",
                                color: "#210366",
                                fontWeight: "500",
                            }}
                        >
                            <Divider
                                sx={{
                                    margin: "0 auto",
                                    marginTop: "6px",
                                    backgroundColor: "rgba(123, 144, 255, 0.2)",
                                    width: "fit",
                                }}
                            />
                            Application Process{" "}
                            <svg
                                width="7"
                                height="11"
                                viewBox="0 0 7 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.5758 5.67382L1.86986 9.97663C1.57051 10.2505 1.08516 10.2505 0.785948 9.97663C0.486715 9.70302 0.486715 9.25925 0.785948 8.98567L4.94998 5.17834L0.786069 1.37114C0.486836 1.09742 0.486836 0.653702 0.786069 0.380094C1.0853 0.106375 1.57063 0.106375 1.86998 0.380094L6.57592 4.68297C6.72554 4.81984 6.80026 4.99903 6.80026 5.17832C6.80026 5.35769 6.72539 5.53702 6.5758 5.67382Z"
                                    fill="#210366"
                                />
                            </svg>
                        </Typography>
                        <Divider
                            sx={{
                                margin: "0 auto",
                                marginTop: "6px",
                                backgroundColor: "rgba(123, 144, 255, 0.2)",
                                width: "fit",
                            }}
                        />
                        <Typography
                            variant="subtitle1"
                            sx={{
                                paddingTop: "8px",
                                textAlign: "center",
                                color: "#210366",
                                fontWeight: "500",
                            }}
                        >
                            Previous Year Paper{" "}
                            <svg
                                width="7"
                                height="11"
                                viewBox="0 0 7 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.5758 5.67382L1.86986 9.97663C1.57051 10.2505 1.08516 10.2505 0.785948 9.97663C0.486715 9.70302 0.486715 9.25925 0.785948 8.98567L4.94998 5.17834L0.786069 1.37114C0.486836 1.09742 0.486836 0.653702 0.786069 0.380094C1.0853 0.106375 1.57063 0.106375 1.86998 0.380094L6.57592 4.68297C6.72554 4.81984 6.80026 4.99903 6.80026 5.17832C6.80026 5.35769 6.72539 5.53702 6.5758 5.67382Z"
                                    fill="#210366"
                                />
                            </svg>
                        </Typography>
                        <Divider
                            sx={{
                                margin: "0 auto",
                                marginTop: "6px",
                                backgroundColor: "rgba(123, 144, 255, 0.2)",
                                width: "fit",
                            }}
                        />
                        <Typography
                            variant="subtitle1"
                            sx={{
                                paddingTop: "8px",
                                textAlign: "center",
                                color: "#210366",
                                fontWeight: "500",
                            }}
                        >
                            Exam Pattern{" "}
                            <svg
                                width="7"
                                height="11"
                                viewBox="0 0 7 11"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.5758 5.67382L1.86986 9.97663C1.57051 10.2505 1.08516 10.2505 0.785948 9.97663C0.486715 9.70302 0.486715 9.25925 0.785948 8.98567L4.94998 5.17834L0.786069 1.37114C0.486836 1.09742 0.486836 0.653702 0.786069 0.380094C1.0853 0.106375 1.57063 0.106375 1.86998 0.380094L6.57592 4.68297C6.72554 4.81984 6.80026 4.99903 6.80026 5.17832C6.80026 5.35769 6.72539 5.53702 6.5758 5.67382Z"
                                    fill="#210366"
                                />
                            </svg>
                        </Typography>
                    </Box>

                    <Box sx={{ flexGrow: 1 }} />
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-around",
                            marginTop: "20px",
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: "10px",
                                backgroundColor: "#7B90FF",
                                color: "white",
                                textTransform: "none",
                                width: "45%",
                                "&:hover": {
                                    backgroundColor: "#FF8911",
                                },
                            }}
                            startIcon={<BiCalendar />}
                            onClick={handleOpen}
                        >
                            Apply Now
                        </Button>
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: "10px",
                                backgroundColor: "#7B90FF",
                                color: "white",
                                textTransform: "none",
                                width: "45%",
                                "&:hover": {
                                    backgroundColor: "#FF8911",
                                },
                            }}
                            startIcon={<BiDetail />}
                            onClick={handleOpen}
                        >
                            Get Details
                        </Button>
                    </Box>
                    <RegisterModal
                        open={open}
                        showCollegeInfo={true}
                        collegeImage={props.img}
                        collegeName={props.name}
                        handleClose={handleClose}
                    />
                </Box>
            </motion.div>
        </Box>
    );
};

export default CardComponent;
