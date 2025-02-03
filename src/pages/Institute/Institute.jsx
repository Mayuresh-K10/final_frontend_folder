import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import CountryFilter from "./CountryFilter";
import AllRightCards from "./RightCard";
import TopCollegeHeading from "../../components/Headings/PageHeading";
import RatingFooter from "../../components/RadioGroupRating";

import { Helmet } from "react-helmet";

const Institute = () => {
    const [dataFromChild, setDataFromChild] = useState("");

    const handleDataFromChild = (data) => {
        const startIndex = data.indexOf("(");
        const cityName =
            startIndex !== -1
                ? data.substring(0, startIndex).trim()
                : data.trim();
        setDataFromChild(cityName);
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta
                    name="description"
                    content="Find information about educational institutes, colleges, and universities, including their history, programs, faculty, and facilities."
                />
                <meta
                    name="google-adsense-account"
                    content="ca-pub-3919517798801147"
                ></meta>
            </Helmet>
            <Container maxWidth="xl">
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem",
                        justifyContent: "center",
                        alignItems: "center",
                        marginX: "auto",
                        maxWidth: "100%",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "4rem",
                            width: "100%",
                            "@media (max-width:800px)": {
                                padding: "1rem",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                "@media (max-width:800px)": {
                                    paddingLeft: "3vw",
                                },
                            }}
                        >
                            <Typography
                                variant="h1"
                                sx={{
                                    fontWeight: "700",
                                    fontSize: "2rem",
                                    textAlign: "left",
                                    color: "#004687",
                                }}
                            >
                                List of Top Institute in Indian Based on 2025
                                Ranking
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                marginTop: "2rem",
                                marginBottom: "2rem",
                                "@media (max-width:800px)": {
                                    paddingLeft: "3vw",
                                },
                            }}
                        >
                            <CountryFilter onData={handleDataFromChild} />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                gap: "0.8rem",
                                justifyContent: "center",
                                "@media (max-width:800px)": {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                },
                            }}
                        >
                            <AllRightCards state={dataFromChild} />
                        </Box>
                    </Box>
                    <RatingFooter />
                </Box>
            </Container>
        </>
    );
};

export { Institute };
