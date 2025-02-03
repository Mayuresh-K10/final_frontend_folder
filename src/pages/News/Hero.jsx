import React, { useState, useEffect } from "react";
import { Box, Typography, Link, Divider } from "@mui/material";
import { motion } from "framer-motion";

import image from "./images/img2.jpg";
import trend from "./images/increase.png";
import line from "./images/line-title.png";

import arrow from "./images/arrow.png";
import bulb1 from "./images/article.png";
import bulb2 from "./images/article2.png";

const Hero = () => {
    const [scholarshipData, setScholarshipData] = useState([]);
    const url = process.env.REACT_APP_NEWS_SERVER_URL;

    const fetchScholarshipData = async () => {
        try {
            const response = await fetch(`${url}/api/news/?type=course`);
            const data = await response.json();
            //  console.log("here section news",data)
            setScholarshipData(data);

            if (data.status === "ok") {
                const filteredData = data;
            } else {
                console.error("Error fetching data from API");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchScholarshipData();
    });

    const latestNews = [
        {
            title: "Empowering Progress with Every Update: Uncover Stories of Transformation, Innovation, and Success in the Dynamic World of Education",
            description:
                "Keeping You Ahead of the Learning Curve: Gain a Competitive Edge with Timely Updates, Resources, and Strategies for Educational Leadership",
            image: image,
        },
    ];
    const bigCard = latestNews[0];

    return (
        <Box
            className="hero-section"
            sx={{
                marginTop: "-2rem",
                backgroundColor: "black",
                maxWidth: "1420px",
                position: "relative",
                overflow: "hidden",
                background: "white",
                textAlign: "center",
                minHeight: "80vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginX: "auto",
            }}
        >
            <Box
                sx={{
                    borderRadius: "8px",
                    border: "0.5px solid #553CDD",
                    marginLeft: "55rem",
                    height: "70px",
                    width: "200px",
                    backgroundColor: "#f9f8ff",
                    marginTop: "20px",
                    marginBottom: "-65px",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "@media (max-width:1200px)": {
                        display: "none",
                    },
                }}
            >
                <img
                    src={bulb1}
                    alt="Bulb 1"
                    style={{
                        width: "50px",
                        height: "50px",
                        marginRight: "5px",
                    }}
                />
                <Box sx={{ marginLeft: "10px" }}>
                    <Typography
                        variant="body1"
                        sx={{ fontSize: "1rem", fontWeight: 600 }}
                    >
                        100+ Featured News
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ "@media (max-width:1200px)": { display: "none" } }}>
                <motion.img
                    src={trend}
                    alt="Trend"
                    style={{
                        position: "absolute",
                        top: "30px",
                        left: "calc(50% - 70px)",
                        zIndex: 2,
                        width: "100px",
                        height: "auto",
                    }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                />
            </Box>
            <Box
                className="container"
                sx={{
                    width: "100%",
                    maxWidth: "1200px",
                    position: "relative",
                    zIndex: 1,
                    margin: "0 auto",
                }}
            >
                <Box
                    className="hero-content"
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        justifyContent: "space-around",
                        alignItems: "flex-start",
                        marginBottom: "2rem",
                        "@media (max-width:800px)": {
                            justifyContent: "center",
                        },
                    }}
                >
                    <Box
                        sx={{
                            position: "absolute",
                            top: "calc(50% - 10px)",
                            left: "calc(50% - 200px)",
                            zIndex: 2,
                            "@media (max-width:1200px)": {
                                display: "none",
                            },
                        }}
                    >
                        <img
                            src={arrow}
                            alt="Arrow"
                            style={{
                                width: "50px",
                                height: "auto",
                                marginTop: "10rem",
                            }}
                        />
                    </Box>

                    <Box
                        className="big-news-card"
                        sx={{
                            marginTop: "20rem",
                            padding: "20px",
                            width: { xs: "100%", md: "50%" },
                            margin: "0 0 20px 0",
                            height: "450px",
                            overflow: "hidden",
                            position: "relative",
                            zIndex: 1,
                        }}
                    >
                        <Box
                            sx={{
                                "@media (max-width:1200px)": {
                                    display: "none",
                                },
                            }}
                        >
                            <img
                                src={line}
                                alt="Line"
                                style={{
                                    width: "250px",
                                    marginBottom: "10px",
                                    marginLeft: "15rem",
                                    height: "100px",
                                }}
                            />
                        </Box>
                        <Typography
                            variant="h3"
                            className="news-title"
                            sx={{
                                fontSize: "2.1rem",
                                fontWeight: 700,
                                color: "#313893",
                                marginBottom: "1rem",
                            }}
                        >
                            {bigCard.title}
                        </Typography>
                        <Typography
                            variant="body1"
                            className="news-description"
                            sx={{
                                fontSize: "1.2rem",
                                color: "#666",
                                "@media screen and (max-width: 600px)": {
                                    display: "none",
                                },
                            }}
                        >
                            {bigCard.description}
                        </Typography>
                    </Box>

                    <Box
                        className="trending-card"
                        sx={{
                            backgroundColor: "#fff",
                            borderRadius: "15px",
                            padding: "20px",

                            boxShadow:
                                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                            width: { xs: "100%", md: "25%" },
                            height: "450px",
                            overflowY: "auto",
                            marginLeft: { xs: 0, md: "20px" },
                            "@media (max-width: 600px)": {
                                maxWidth: "100%",
                                maxginX: "auto",
                            },
                        }}
                    >
                        <Typography
                            variant="h3"
                            className="trending-title"
                            sx={{
                                fontSize: "2rem",
                                fontWeight: 600,
                                color: "#333",
                                marginBottom: "1rem",
                            }}
                        >
                            The Big Stories
                        </Typography>
                        <Box>
                            {scholarshipData
                                .slice(0, 10)
                                .map((article, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            marginBottom: "1rem",
                                        }}
                                    >
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: "rgb(29,156,253)",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            <Link
                                                href={article.url}
                                                underline="none"
                                                target="_blank"
                                            >
                                                {article.title}
                                            </Link>
                                        </Typography>
                                        <Typography
                                            variant="caption"
                                            sx={{
                                                color: "#777",
                                                fontStyle: "italic",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            {new Date(
                                                article.publishedAt
                                                    ? article.publishedAt
                                                    : "2024-04-03T09:25:02Z"
                                            ).toGMTString()}
                                        </Typography>
                                        {index !==
                                            scholarshipData.length - 1 && (
                                            <Divider
                                                sx={{ margin: "1rem 0" }}
                                            />
                                        )}
                                    </Box>
                                ))}
                        </Box>
                    </Box>

                    <Box
                        className="trending-card"
                        sx={{
                            marginTop: "5rem",
                            backgroundColor: "#fff",
                            borderRadius: "15px",
                            padding: "20px",
                            boxShadow:
                                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                            width: { xs: "100%", md: "25%" },
                            height: "450px",
                            overflowY: "auto",
                            marginLeft: { xs: 0, md: "20px" },
                            "@media (max-width: 600px)": {
                                maxWidth: "100%",
                                maxginX: "auto",
                            },
                        }}
                    >
                        <Typography
                            variant="h3"
                            className="trending-title"
                            sx={{
                                fontSize: "2rem",
                                fontWeight: 600,
                                color: "#333",
                                marginBottom: "1rem",
                            }}
                        >
                            Featured News
                        </Typography>
                        <Box>
                            {scholarshipData.slice(11).map((article, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        marginBottom: "1rem",
                                    }}
                                >
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: "rgb(29,156,253)",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        <Link
                                            href={article.url}
                                            underline="none"
                                            target="_blank"
                                        >
                                            {article.title}
                                        </Link>
                                    </Typography>
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: "#777",
                                            fontStyle: "italic",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        {new Date(
                                            article.publishedAt
                                                ? article.publishedAt
                                                : "2024-04-03T09:25:02Z"
                                        ).toGMTString()}
                                    </Typography>
                                    {index !== scholarshipData.length - 1 && (
                                        <Divider sx={{ margin: "1rem 0" }} />
                                    )}
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    marginTop: "-5rem",
                    marginLeft: "10rem",
                    borderRadius: "8px",
                    border: "0.5px solid #553CDD",
                    position: "absolute",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    height: "70px",
                    width: "200px",
                    backgroundColor: "#f9f8ff",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "@media (max-width:1200px)": {
                        display: "none",
                    },
                }}
            >
                <img
                    src={bulb2}
                    alt="Bulb 2"
                    style={{ width: "50px", height: "50px", marginLeft: "5px" }}
                />
                <Box sx={{ marginLeft: "10px" }}>
                    <Typography
                        variant="body1"
                        sx={{ fontSize: "1rem", fontWeight: 600 }}
                    >
                        100+ Top Stories
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Hero;
