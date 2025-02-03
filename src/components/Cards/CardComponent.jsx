import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const ComponentCard = (prop) => {
    const [isExpanded, setExpanded] = useState(false);

    const handleReadMore = () => {
        setExpanded(true);
    };

    const handleReadLess = () => {
        setExpanded(false);
    };
    return (
        <>
            <Box
                sx={{
                    backgroundColor: "#FFFFFF",
                    border: "2px solid lightgray",
                    borderRadius: "28px",
                    width: "370px",
                    height:'392px',
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "1.5rem",
                    transition: "All 0.5s",
                    '&:hover': {
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.30);",
                    }
                }}
            >
                <Box
                    sx={{
                        padding: "12px 12px",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "1.4rem",
                            fontWeight: 700,
                            lineHeight: "1.5rem",
                            letterSpacing: "0.03em",
                            textAlign: "center",
                            color: "#210366",
                            padding: "0px 0px 0.6rem",
                            display: "-webkit-box",
                            WebkitBoxOrient: "vertical",
                            WebkitLineClamp: 2, // Limit to 2 lines
                            overflow: "hidden", // Hide overflowing text
                            textOverflow: "ellipsis", // Add ellipsis when text overflows
                        }}
                    >
                        {prop.title}
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{
                            display: "block",
                            backgroundColor: "#7B90FF66",
                            color: "#210366",
                            '&:hover': {
                                color: "white",
                            },
                            fontSize: "0.8rem",
                            fontWeight: 600,
                            letterSpacing: "0.02em",
                            borderRadius: "7px",
                            padding: "0.2rem 1.5rem",
                            margin: "1rem auto",
                        }}
                    >
                        {prop.time}
                    </Button>
                </Box>

                <Box sx={{ borderTop: "1px solid #7F56DA4D", paddingTop: "1rem" }}></Box>

                <Box
                    sx={{
                        padding: "1.8rem 0.8rem",
                        backgroundColor: "#7B90FF66",
                        borderRadius: "28px",
                        textAlign: "center",
                        overflow: "hidden",
                        maxHeight: isExpanded ? 'none' : '21vh',
                    }}
                >
                    <Typography
                        sx={{
                            color: "#210366",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            lineHeight: "1.5rem",
                            letterSpacing: "0.02em",
                            textOverflow: "ellipsis",
                        }}
                    >
                        {isExpanded
                            ? prop.description
                            : (prop.description ? prop.description.slice(0, 100) + '...' : '')
                        }
                    </Typography>
                </Box>

                <Box sx={{ borderTop: "1px solid #7F56DA4D", margin: "1rem 0 0" }}></Box>

                {isExpanded ? (
                    <Button
                        onClick={handleReadLess}
                        sx={{
                            display: "block",
                            color: "#210366",
                            fontSize: "1rem",
                            fontWeight: 600,
                            lineHeight: "1.5rem",
                            letterSpacing: "0.02em",
                            textAlign: "center",
                            textTransform: "none",
                            margin: "0 auto",
                        }}
                    >
                        Read Less
                    </Button>
                ) : (
                    <Button
                        onClick={handleReadMore}
                        sx={{
                            display: "block",
                            color: "#210366",

                            fontSize: "1rem",
                            fontWeight: 600,
                            lineHeight: "1.5rem",
                            letterSpacing: "0.02em",
                            textAlign: "center",
                            textTransform: "none",
                            margin: "0 auto",
                        }}
                    >
                        Read More
                    </Button>
                )}

            </Box>
        </>
    );
};

export default ComponentCard;
