import React from "react";
//import "../Assets/CSS/style.css";

import { Typography, Box } from "@mui/material";

import switchbtn from "../Assets/switchbtn.svg";
import grpProfile from "../Assets/group-1.svg";
import laptopgirl from "../Assets/laptopgirl.png";
import plusIcon from "../Assets/plus.svg";
import briefcase from "../Assets/briefcase.svg";
import wavesblack from "../Assets/blackwave.svg";
import star from "../Assets/star1.svg";

import "./CSS/JobPortal.css";
import "../components/CSS/JobPortal.css";

const HeroSection = () => {
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "inherit",
                padding: "5rem 0rem 0rem 10.25rem",
                boxSizing: "border-box",
                gap: "8.813rem",
                flexShrink: "0",
                //debugCommit: "f6aba90",
                textAlign: "left",
                fontSize: "1rem",
                color: "#131517", //marginTop:"50px",
                backgroundColor: "#f3f7fa",
                overflow: "hidden",
                "@media (max-width:600px)": {
                    padding: "1rem 0rem 0rem 1rem",
                    maxWidth: "100%",
                    width: "fit-content",
                    flexDirection: "column",
                    gap: "2rem",
                    fontSize: "24px",
                    overflow: "hidden",
                },
                "@media (max-width:1280px)": {
                    display: "flex",
                    gap: "8rem",
                    padding: "2.5rem 0rem 0rem 1rem",
                },
            }}
        >
            <Box
                sx={{
                    width: "28.688rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    gap: "2rem",
                    minWidth: "28.688rem",
                    flexShrink: "0",
                    debugCommit: "f6aba90",
                    marginTop: "40px",
                    "@media (max-width:1280px)": {
                        width: "30%",
                        minWidth: "0rem",
                    },
                    "@media (max-width:600px)": {
                        width: "fit-content",
                    },
                }}
            >
                <div
                    style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        gap: "1rem",
                    }}
                >
                    <div
                        style={{
                            height: "1.513rem",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "flex-start",
                            padding: "0rem 1.25rem 0rem 0rem",
                            boxSizing: "border-box",
                            gap: "1.188rem",
                        }}
                    >
                        <img className="switchbtn" alt="" src={switchbtn} />
                        <div
                            style={{
                                position: "relative",
                                letterSpacing: "0.04em",
                                lineHeight: "1.5rem",
                                fontWeight: "450",
                            }}
                        >
                            Find Your Dream Job
                        </div>
                    </div>
                    <Box
                        sx={{
                            alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "center",
                            gap: "1rem",
                            fontSize: "3rem",
                        }}
                    >
                        <Typography
                            sx={{
                                margin: "0",
                                alignSelf: "stretch",
                                position: "relative",
                                letterSpacing: "0.04em",
                                lineHeight: "3.188rem",
                                fontSize: "50px",
                                fontWeight: "300",
                                fontFamily: "inherit",
                                "@media (max-width:1280px)": {
                                    fontSize: "30px",
                                },
                                "@media (max-width:600px)": {
                                    fontSize: "22px",
                                },
                            }}
                        >
                            Find your job without any hassle.
                        </Typography>
                        <div
                            style={{
                                alignSelf: "stretch",
                                position: "relative",
                                fontSize: "25px",
                                fontWeight: "300",
                                letterSpacing: "0.04em",
                                color: "#24282d",
                            }}
                        >
                            Jobs &amp; Job search. Find jobs in global.
                            Executive jobs &amp; work.
                        </div>
                    </Box>
                </div>
                <div
                    style={{
                        width: "15rem",
                        height: "6rem",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        padding: "0rem 1.25rem 0rem 0rem",
                        boxSizing: "border-box",
                        gap: "1rem",
                    }}
                >
                    <img className="grpprofile" alt="" src={grpProfile} />
                    <div
                        style={{
                            alignSelf: "stretch",
                            position: "relative",
                            letterSpacing: "0.04em",
                            lineHeight: "1.5rem",
                            fontWeight: "600",
                        }}
                    >
                        <span>{`Over `}</span>
                        <span style={{ color: "#0146b1" }}>12800+</span>
                        <span> freelancers to complete your projects</span>
                    </div>
                </div>
            </Box>
            <Box
                sx={{
                    width: "44.188rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    padding: "7.75rem 0rem 0rem",
                    boxSizing: "border-box",
                    fontSize: "1.5rem",
                    "@margin (max-width:600px)": {
                        width: "50%",
                    },
                    "@media (max-width:1280px)": {
                        width: "50%",
                    },
                }}
            >
                <div
                    style={{
                        alignSelf: "stretch",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        justifyContent: "flex-start",
                        gap: "2.938rem",
                        flexShrink: "0",
                        debugCommit: "f6aba90",
                    }}
                >
                    <Box
                        sx={{
                            width: "34.813rem",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "center",
                            minWidth: "34.813rem",
                            padding: "0rem 1.25rem",
                            boxSizing: "border-box",
                            maxWidth: "100%",
                            "@media (max-width:600px)": {
                                maxWidth: "50%",
                                width: "50%",
                                minWidth: "fit-content",
                                marginRight: "-12rem",
                                marginTop: "-7rem",
                            },
                            "@media (max-width:1280px)": {
                                width: "50%",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                borderRadius: "12px",
                                backgroundColor: "#fff",
                                boxShadow:
                                    "2px 4px 32px rgba(1, 70, 177, 0.08)",
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                padding: "1rem 1.688rem 1.25rem 1.75rem",
                                gap: "1rem",
                                zIndex: "3",
                                "@media (max-width:600px)": {
                                    padding: "0.5rem 0.5rem 0.5rem 0.6rem",
                                    marginLeft: "-8rem",
                                },
                            }}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    padding: "0rem 1.188rem 0rem 1.063rem",
                                }}
                            >
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "flex-start",
                                        justifyContent: "flex-start",
                                        gap: "0.313rem",
                                    }}
                                >
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            alignItems: "flex-start",
                                            justifyContent: "flex-start",
                                        }}
                                    >
                                        <b
                                            style={{
                                                position: "relative",
                                                letterSpacing: "0.04em",
                                                display: "inline-block",
                                                minWidth: "2.875rem",
                                            }}
                                        >
                                            30K
                                        </b>
                                        <div
                                            style={{
                                                height: "1.406rem",
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "flex-start",
                                                justifyContent: "flex-start",
                                                padding: "0.406rem 0rem 0rem",
                                                boxSizing: "border-box",
                                            }}
                                        >
                                            <img
                                                className="plusicon"
                                                alt=""
                                                src={plusIcon}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        style={{
                                            height: "1.663rem",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "flex-start",
                                            justifyContent: "flex-start",
                                            padding: "0.15rem 0rem 0rem",
                                            boxSizing: "border-box",
                                        }}
                                    >
                                        <img
                                            style={{
                                                width: "1.563rem",
                                                height: "1.513rem",
                                                position: "relative",
                                            }}
                                            alt=""
                                            src={briefcase}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                style={{
                                    position: "relative",
                                    fontSize: "1rem",
                                    letterSpacing: "0.04em",
                                    lineHeight: "1.5rem",
                                    fontWeight: "600",
                                    textAlign: "center",
                                    display: "inline-block",
                                    minWidth: "8rem",
                                    whiteSpace: "nowrap",
                                }}
                            >
                                People got hired
                            </div>
                        </Box>
                    </Box>
                    <div
                        style={{
                            alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "center",
                            gap: "2.563rem",
                            maxWidth: "100%",
                        }}
                    >
                        <div
                            style={{
                                flex: "1",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                gap: "1.25rem",
                                minWidth: "18.313rem",
                                maxWidth: "100%",
                            }}
                        >
                            <div
                                style={{
                                    alignSelf: "stretch",
                                    height: "4.5rem",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                }}
                            >
                                <div
                                    style={{
                                        alignSelf: "stretch",
                                        flex: "1",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        justifyContent: "flex-start",
                                        position: "relative",
                                    }}
                                >
                                    <img
                                        className="waveimg"
                                        alt=""
                                        src={wavesblack}
                                    />
                                    <img
                                        className="waveimg"
                                        alt=""
                                        src={wavesblack}
                                    />
                                    <img
                                        className="waveimg"
                                        alt=""
                                        src={wavesblack}
                                    />
                                    <img
                                        className="waveimg"
                                        alt=""
                                        src={wavesblack}
                                    />
                                    <Box
                                        sx={{
                                            width: "20.875rem",
                                            height: "36.231rem",
                                            position: "absolute",
                                            margin: "0",
                                            top: "-19.187rem",
                                            right: "-7.125rem",
                                        }}
                                    >
                                        <img
                                            className="laptopgirl"
                                            alt=""
                                            src={laptopgirl}
                                        />
                                        <img
                                            style={{
                                                position: "absolute",
                                                top: "6.313rem",
                                                left: "18.625rem",
                                                width: "2.25rem",
                                                height: "2.25rem",
                                                zIndex: "4",
                                            }}
                                            alt=""
                                            src={star}
                                        />
                                    </Box>
                                </div>
                                <div
                                    style={{
                                        alignSelf: "stretch",
                                        flex: "1",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        justifyContent: "flex-start",
                                        zIndex: "1",
                                        marginLeft: "-5.187rem",
                                    }}
                                >
                                    <img
                                        className="waveimg"
                                        loading="lazy"
                                        alt=""
                                        src={wavesblack}
                                    />
                                    <img
                                        className="waveimg"
                                        loading="lazy"
                                        alt=""
                                        src={wavesblack}
                                    />
                                    <img
                                        className="waveimg"
                                        loading="lazy"
                                        alt=""
                                        src={wavesblack}
                                    />
                                    <img
                                        className="waveimg"
                                        loading="lazy"
                                        alt=""
                                        src={wavesblack}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    width: "27.375rem",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                    padding: "0rem 0.688rem",
                                    boxSizing: "border-box",
                                    maxWidth: "100%",
                                }}
                            >
                                <div
                                    style={{
                                        flex: "1",
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "flex-start",
                                        justifyContent: "space-between",
                                        maxWidth: "100%",
                                        gap: "1.25rem",
                                    }}
                                >
                                    <div
                                        style={{
                                            height: "2.563rem",
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "flex-start",
                                            justifyContent: "flex-start",
                                            padding: "0.313rem 0rem 0rem",
                                            boxSizing: "border-box",
                                        }}
                                    >
                                        <img
                                            style={{
                                                width: "2.25rem",
                                                height: "2.25rem",
                                                position: "relative",
                                                zIndex: "4",
                                            }}
                                            alt=""
                                            src={star}
                                        />
                                    </div>
                                    <img
                                        style={{
                                            height: "2.875rem",
                                            width: "2.875rem",
                                            position: "relative",
                                            zIndex: "4",
                                        }}
                                        alt=""
                                        src={star}
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                height: "17.188rem",
                                width: "13.438rem",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                                justifyContent: "flex-start",
                                padding: "3.75rem 0rem 0rem",
                                boxSizing: "border-box",
                                minWidth: "13.438rem",
                            }}
                        ></div>
                    </div>
                </div>
            </Box>
        </Box>
    );
};

export default HeroSection;
