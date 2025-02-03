import React from "react";
import Box from "@mui/material/Box";
import ClassTen from "./../../components/Headings/ClassTen";
import ClassTwelve from "./../../components/Headings/ClassTwelve";
import CollegeCards from "./CollegeCards";
import CollegeCardstwo from "./CollegeCardstwo";
import ConceptRender from "./ConceptRender";
import Container from "@mui/material/Container";

import ExamCardRender from "./ExamCardRender";
import ExamJEEMainRender from "./ExamJEEMainRender";
import ExamNewsRender from "./ExamNewsRender";
import ExamNotificationsRender from "./ExamNotificationRender";
import ExamsCategory from "./ExamsCategory";
// import SearchBar from "../../components/Cards/SearchBar";
import UpcomingExamRender from "./UpcomingExamRender";
import Subscribe from "../../components/SubscribeNews/Subscribe";
import img1 from "./images/exam_hero.svg";

import { Typography } from "@mui/material";
import BoldHeading from "../../components/Headings/BoldHeading";
import ExamSyllabusCard from "./ExamSyllabusCard";
import Faq from "../../components/Faq/Faq";
import { FaqData } from "./accordianData";
import { Helmet } from "react-helmet";
import AdSenseComponent from "../../utils/AdSenseComponent";
const Exam = ({ setModal }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta
                    name="description"
                    content="Get information about entrance exams for various courses and universities, preparation tips, and study resources."
                />
                <meta
                    name="google-adsense-account"
                    content="ca-pub-3919517798801147"
                ></meta>
            </Helmet>
            <Container
                maxWidth="xl"
                sx={{
                    overflow: "hidden",
                    paddingTop: "4.5%",
                    "@media (max-width: 900px)": {
                        paddingTop: "12%",
                    },
                    "@media (max-width: 400px)": {
                        paddingTop: "14%",
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        flexDirection: "row",
                        justifyContent: "space-around",
                        marginX: "3rem",
                        "@media (max-width: 770px)": {
                            flexDirection: "column-reverse",
                            marginX: "auto",
                        },
                    }}
                >
                    <Box sx={{ flex: "1" }}>
                        <Typography
                            variant="h1"
                            sx={{
                                color: "#210366",
                                fontSize: "2.25rem",
                                paddingTop: "1rem",
                                fontWeight: 700,
                                paddingBottom: "5vh",
                                width: "auto",
                            }}
                        >
                            Entrance Exams In India
                        </Typography>

                        {/* <SearchBar placeholder="Search Entrance Exams" /> */}

                        <ExamsCategory />
                    </Box>
                    <Box
                        sx={{
                            flex: "1",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            "@media (max-width: 600px)": {
                                justifyContent: "center",
                            },
                        }}
                    >
                        <img
                            src={img1}
                            alt="img1"
                            style={{
                                width: "300px",
                                height: "300px",
                                objectFit: "contain",
                                aspectRatio: "video",
                            }}
                        />
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        alignContent: "center",
                        gap: "20px",
                        "@media (max-width: 1100px)": {
                            flexDirection: "column",
                            justifyContent: "center",
                            alignContent: "center",
                            gap: "20px",
                        },
                        "@media (max-width: 700px)": {
                            flexDirection: "column",
                            justifyContent: "center",
                            alignContent: "center",
                            gap: "20px",
                        },
                    }}
                >
                    <ExamCardRender setModal={setModal} />

                    <Box
                        sx={{
                            flex: "1",
                            marginX: "auto",
                            marginTop: "35px",
                            "@media (min-width: 740px)": {
                                paddingLeft: "0.5vw",
                            },
                        }}
                    >
                        <ExamNewsRender />
                        <Subscribe />
                        <ExamNotificationsRender />
                        <UpcomingExamRender />
                        <ExamSyllabusCard setModal={setModal} />
                        <AdSenseComponent />
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: "auto",
                    }}
                >
                    <ConceptRender />
                    <ClassTen />
                    <CollegeCards />
                    <ClassTwelve />
                    <CollegeCardstwo />
                    <ExamJEEMainRender />
                    <Box sx={{ marginY: "2rem" }}>
                        <BoldHeading textAlign="center" color="#1F305E">
                            Frequently Asked Questions (FAQs)
                        </BoldHeading>
                        <Faq faqs={FaqData} />
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export { Exam };
