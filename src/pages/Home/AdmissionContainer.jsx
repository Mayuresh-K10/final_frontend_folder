import React, { useEffect } from "react";
import { Box, Container } from "@mui/material";
import MyButton from "../../components/Buttons/MyButton";
import MyHeading from "../../components/Headings/MyHeading";
import CofCC from "../../Assets/HomePage/C-of-cc.webp";
import { Image } from "../../utils/Image";

const AdmissionContainer = () => {
    // console.log("AdmissionContainer render");

    const currentYear = new Date().getFullYear();

    const heading = `Admission ${currentYear}`;
    const buttons = [
        {
            label: "MBA",
            link: "/admission",
        },
        {
            label: "M.Tech/M.E",
            link: "/admission",
        },
        {
            label: "B.Tech/B.E",
            link: "/admission",
        },
        {
            label: "B.Ed",
            link: "/admission",
        },
        {
            label: "MBBS",
            link: "/admission",
        },
        {
            label: "Ph.D",
            link: "/admission",
        },
        {
            label: "BSc",
            link: "/admission",
        },
        {
            label: "B.Pharmacy",
            link: "/admission",
        },
        {
            label: "M.A",
            link: "/admission",
        },
        {
            label: "LLB",
            link: "/admission",
        },
        {
            label: "MCA",
            link: "/admission",
        },
        {
            label: "M.Com",
            link: "/admission",
        },
        {
            label: "BBA",
            link: "/admission",
        },
        {
            label: "B.Com",
            link: "/admission",
        },

        {
            label: "B.A",
            link: "/admission",
        },
    ];

    return (
        <>
            <Container
                maxWidth="xl"
                sx={{ marginBottom: "5rem", paddingY: "2rem" }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            margin: "0",
                            marginBottom: "2rem",
                            marginTop: "2rem",
                            width: "80%",
                        }}
                    >
                        <MyHeading headingName={heading} />
                        {buttons.map((button, index) => (
                            <MyButton
                                key={index}
                                label={button.label}
                                link={button.link}
                            />
                        ))}
                    </Box>
                    <Box>
                        <Image
                            src={CofCC}
                            alt="@BharatTech"
                            style={{
                                width: "200px",
                                height: "auto",
                                margin: "auto",
                                marginLeft: "1rem",
                            }}
                        />
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default AdmissionContainer;
