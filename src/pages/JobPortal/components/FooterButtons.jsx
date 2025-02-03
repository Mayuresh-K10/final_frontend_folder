import React from "react";
import { Button, Box, Typography } from "@mui/material";
import "../Assets/CSS/style.css";
import { Link } from "react-router-dom";
import laptoplady from "../Assets/laptoplady.png";
import waves from "../Assets/waves.svg";
import star1 from "../Assets/star1.svg";

const footerButtons = ({ isStarted = false }) => {
    return (
        <Box
            sx={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                padding: "0rem 0rem 5.938rem ",
                boxSizing: "border-box",
                maxWidth: "100%",
                textAlign: "left",
                fontSize: "2.25rem",
                color: "#fff",
                overflow: "hidden",
            }}
        >
            <Box
                sx={{
                    height: "36.688rem",
                    flex: "1",
                    position: "relative",
                    background:
                        "linear-gradient(180deg, rgba(243, 247, 250, 0.4), #f3f7fa)",
                    overflow: "hidden",
                    maxWidth: "100%",
                    "@media (max-width:600px)": {
                        height: "30rem",
                        width: "fit-content",
                        borderRadius: "24px",
                        marginRight: "1rem",
                    },
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        top: "3rem",
                        left: "5rem",
                        borderRadius: "24px",
                        background:
                            "linear-gradient(159.69deg, rgba(0, 56, 240, 0.94), rgba(41, 157, 242, 0.75) 84.73%)",
                        width: "68.25rem",
                        overflow: "hidden",
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "5rem 4.813rem 2.5rem 4rem",
                        boxSizing: "border-box",
                        gap: "10.188rem",
                        maxWidth: "100%",
                        "@media (max-width:600px)": {
                            width: "fit-content",
                            left: "1rem",
                            right: "1rem",
                            top: "1rem",
                        },
                    }}
                >
                    <Box
                        style={{
                            flex: "1",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                            justifyContent: "flex-start",
                            gap: "0.938rem",
                            maxWidth: "100%",
                        }}
                    >
                        <div
                            style={{
                                alignSelf: "stretch",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                gap: "2.5rem",
                                maxWidth: "100%",
                            }}
                        >
                            <div
                                style={{
                                    width: "34.5rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    gap: "1rem",
                                    maxWidth: "100%",
                                }}
                            >
                                <Typography
                                    sx={{
                                        margin: "0",
                                        width: "27.813rem",
                                        position: "relative",

                                        letterSpacing: "0.04em",
                                        fontSize: "45px",
                                        fontWeight: "300",
                                        fontFamily: "inherit",
                                        display: "flex",
                                        alignItems: "center",
                                        maxWidth: "100%",
                                        color: "white",
                                        "@media (max-width:600px)": {
                                            width: "fit-content",
                                            fontSize: "25px",
                                        },
                                    }}
                                >
                                    Explore New Jobs Now
                                </Typography>
                                <Box
                                    sx={{
                                        alignSelf: "stretch",
                                        position: "relative",
                                        fontSize: "1.125rem",
                                        letterSpacing: "0.04em",
                                        lineHeight: "1.5rem",
                                        fontWeight: "300",
                                        "@media (max-width:600px)": {
                                            fontSize: "0.75rem",
                                        },
                                    }}
                                >
                                    Unlock endless career possibilities with
                                    Collegecue! Our job section connects
                                    ambitious job seekers with the right
                                    opportunities tailored to their skills and
                                    aspirations. Whether you’re a student
                                    looking for internships or a professional
                                    aiming for your next big career move, we’ve
                                    got you covered.
                                </Box>
                            </div>
                            <div
                                style={{
                                    alignSelf: "stretch",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "flex-start",
                                    justifyContent: "space-between",
                                    gap: "1.25rem",
                                }}
                            >
                                <Button
                                    disableElevation={true}
                                    variant="contained"
                                    sx={{
                                        textTransform: "none",
                                        color: "#0146b1",
                                        fontSize: "18",
                                        background: "#fff",
                                        borderRadius: "8px",
                                        "&:hover": { background: "#fff" },
                                        width: "11.188rem",
                                        height: "3rem",
                                        "@media (max-width:600px)": {
                                            fontSize: "12px",
                                            width: "120px",
                                            height: "40px",
                                            top: "-20px",
                                        },
                                    }}
                                >
                                    {isStarted ? (
                                        <Link to="/job-portal/job">
                                            Get Started
                                        </Link>
                                    ) : (
                                        <Link to="/login">Get Started</Link>
                                    )}
                                </Button>
                                <div
                                    style={{
                                        width: "16.688rem",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        justifyContent: "flex-start",
                                        padding: "0.75rem 0rem 0rem",
                                        boxSizing: "border-box",
                                    }}
                                >
                                    <div
                                        style={{
                                            alignSelf: "stretch",
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "flex-start",
                                            justifyContent: "flex-start",
                                        }}
                                    >
                                        <div
                                            style={{
                                                flex: "1",
                                                position: "relative",
                                                left: "12.75rem",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "flex-start",
                                                justifyContent: "flex-start",
                                                zIndex: "1",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    alignSelf: "stretch",
                                                    height: "1.125rem",
                                                    position: "relative",
                                                }}
                                            >
                                                <img
                                                    style={{
                                                        position: "absolute",
                                                        top: "0rem",

                                                        width: "16.688rem",
                                                        height: "1.125rem",
                                                    }}
                                                    alt=""
                                                    src={waves}
                                                    className="wavee"
                                                />
                                                <img
                                                    style={{
                                                        position: "absolute",
                                                        top: "0rem",

                                                        width: "16.688rem",
                                                        height: "1.125rem",
                                                    }}
                                                    loading="lazy"
                                                    alt=""
                                                    src={waves}
                                                    className="wavee"
                                                />
                                            </div>
                                            <div
                                                style={{
                                                    alignSelf: "stretch",
                                                    height: "1.125rem",
                                                    position: "relative",
                                                }}
                                            >
                                                <img
                                                    style={{
                                                        position: "absolute",
                                                        top: "0rem",

                                                        width: "16.688rem",
                                                        height: "1.125rem",
                                                    }}
                                                    alt=""
                                                    src={waves}
                                                    className="wavee"
                                                />
                                                <img
                                                    style={{
                                                        position: "absolute",
                                                        top: "0rem",

                                                        width: "16.688rem",
                                                        height: "1.125rem",
                                                    }}
                                                    loading="lazy"
                                                    alt=""
                                                    src={waves}
                                                    className="wavee"
                                                />
                                            </div>
                                            <div
                                                style={{
                                                    alignSelf: "stretch",
                                                    height: "1.125rem",
                                                    position: "relative",
                                                }}
                                            >
                                                <img
                                                    style={{
                                                        position: "absolute",
                                                        top: "0rem",

                                                        width: "16.688rem",
                                                        height: "1.125rem",
                                                    }}
                                                    alt=""
                                                    src={waves}
                                                    className="wavee"
                                                />
                                                <img
                                                    style={{
                                                        position: "absolute",
                                                        top: "0rem",

                                                        width: "16.688rem",
                                                        height: "1.125rem",
                                                    }}
                                                    loading="lazy"
                                                    alt=""
                                                    src={waves}
                                                    className="wavee"
                                                />
                                            </div>
                                            <div
                                                style={{
                                                    alignSelf: "stretch",
                                                    height: "1.125rem",
                                                    position: "relative",
                                                }}
                                            >
                                                <img
                                                    style={{
                                                        position: "absolute",
                                                        top: "0rem",

                                                        width: "16.688rem",
                                                        height: "1.125rem",
                                                    }}
                                                    alt=""
                                                    src={waves}
                                                    className="wavee"
                                                />
                                                <img
                                                    style={{
                                                        position: "absolute",
                                                        top: "0rem",

                                                        width: "16.688rem",
                                                        height: "1.125rem",
                                                    }}
                                                    loading="lazy"
                                                    alt=""
                                                    src={waves}
                                                    className="wavee"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                width: "26.25rem",
                                height: "2.25rem",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-start",
                                justifyContent: "center",
                                padding: "0rem 1.25rem",
                                boxSizing: "border-box",
                                maxWidth: "100%",
                            }}
                        >
                            <img
                                style={{
                                    height: "2.25rem",
                                    width: "2.25rem",
                                    position: "relative",
                                    left: "13.1rem",
                                }}
                                loading="lazy"
                                alt=""
                                src={star1}
                                className="wavee"
                            />
                        </div>
                    </Box>
                    <div
                        style={{
                            height: "9.5rem",
                            position: "relative",
                            right: "5.5rem",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            padding: "0.875rem 0rem 0rem",
                            boxSizing: "border-box",
                        }}
                    >
                        <div
                            style={{
                                flex: "1",
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "flex-end",
                                justifyContent: "flex-start",
                                gap: "0.625rem",
                            }}
                        >
                            <div
                                style={{
                                    alignSelf: "stretch",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <img
                                    style={{
                                        width: "2.875rem",
                                        height: "2.875rem",
                                        position: "relative",
                                        left: "2.9rem",
                                    }}
                                    loading="lazy"
                                    alt=""
                                    src={star1}
                                    className="wavee"
                                />
                            </div>
                            <img
                                style={{
                                    height: "2.25rem",
                                    width: "2.25rem",
                                    position: "relative",
                                    left: "-2.9rem",
                                }}
                                loading="lazy"
                                alt=""
                                src={star1}
                                className="wavee"
                            />
                        </div>
                    </div>
                </Box>
                <img className="ladywithlaptop" alt="" src={laptoplady} />
            </Box>
        </Box>
    );
};

export default footerButtons;
