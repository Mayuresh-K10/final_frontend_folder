import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const FooterLink = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                justifyContent: "space-evenly",
                alightItems: "center",
                fontWeight: "bold",
                color: "white",
                width: "600px",
                paddingY: "1.5rem",
                "@media (max-width :770px)": {
                    flexDirection: "row",
                    justifyContent: "space-around",
                    marginX: "1rem",
                    width: "auto",
                    gap: "50px",
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        textTransform: "uppercase",
                        color: "#fff",
                        fontWeight: "bold",
                    }}
                >
                    About
                </Typography>
                <Box
                    sx={{
                        borderBottom: "3px solid #FF0000",
                        width: "20%",
                        margin: "1rem 0",
                    }}
                />
                <Link
                    to="/top-universities"
                    style={{
                        display: "block",
                        margin: "12px 0",
                        color: "#fff",
                        textDecoration: "none",
                        textAlign: "center",
                    }}
                    onClick={scrollToTop}
                >
                    <Typography variant="inherit">Top University</Typography>
                </Link>
                <Link
                    to="/entrance-exam"
                    style={{
                        display: "block",
                        margin: "12px 0",
                        color: "#fff",
                        textDecoration: "none",
                        textAlign: "center",
                    }}
                    onClick={scrollToTop}
                >
                    <Typography variant="inherit">Top Exam</Typography>
                </Link>
                <Link
                    to="/job-portal"
                    style={{
                        display: "block",
                        margin: "12px 0",
                        color: "#fff",
                        textDecoration: "none",
                        textAlign: "center",
                    }}
                    onClick={scrollToTop}
                >
                    <Typography variant="inherit">Job Portal</Typography>
                </Link>
                <Link
                    to="/study-abroad"
                    style={{
                        display: "block",
                        margin: "12px 0",
                        color: "#fff",
                        textDecoration: "none",
                        textAlign: "center",
                    }}
                    onClick={scrollToTop}
                >
                    <Typography variant="inherit">Study Abroad</Typography>
                </Link>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        textTransform: "uppercase",
                        color: "#fff",
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                >
                    OTHER LINKS
                </Typography>
                <Box
                    sx={{
                        borderBottom: "3px solid #FF0000",
                        width: "20%",
                        margin: "1rem 0",
                    }}
                />
                <Link
                    to="https://www.bharat-tech.org/career"
                    style={{
                        display: "block",
                        margin: "12px 0",
                        color: "#fff",
                        textDecoration: "none",
                        textAlign: "center",
                    }}
                    onClick={scrollToTop}
                >
                    Career
                </Link>
                <Link
                    to="/terms-conditions"
                    style={{
                        display: "block",
                        margin: "12px 0",
                        color: "#fff",
                        textDecoration: "none",
                        textAlign: "center",
                    }}
                    onClick={scrollToTop}
                >
                    Terms & Conditions
                </Link>
                <Link
                    to="/promotion"
                    style={{
                        display: "block",
                        margin: "12px 0",
                        color: "#fff",
                        textDecoration: "none",
                        textAlign: "center",
                    }}
                    onClick={scrollToTop}
                >
                    Promotion
                </Link>
                <Link
                    to="/contactUs"
                    style={{
                        display: "block",
                        margin: "12px 0",
                        color: "#fff",
                        textDecoration: "none",
                        textAlign: "center",
                    }}
                    onClick={scrollToTop}
                >
                    Contact Us
                </Link>
                <Link
                    to="/about"
                    style={{
                        display: "block",
                        margin: "12px 0",
                        color: "#fff",
                        textDecoration: "none",
                        textAlign: "center",
                    }}
                    onClick={scrollToTop}
                >
                    About Collegecue
                </Link>
            </Box>
        </Box>
    );
};

export default FooterLink;
