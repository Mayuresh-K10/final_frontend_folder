import React, { useLayoutEffect } from "react";
import SAHeroSection from "./SAHeroSection";
import BlogSection from "./BlogSection";
import StudyAbroadExams from "./StudyAbroadExams";
import ChooseYourFuture from "./ChooseYourFuture";

import ChooseAProgramToStudy from "./ChooseAProgramToStudy";

import FewFacts from "./FewFacts";
import HowDoWeWork from "./HowDoWeWork";
import MeetOurCounsellor from "./MeetOurCounsellor";
import CollegeWallahCounselling from "./CollegeWallahCounselling";
import OurStudentLovesUs from "./OurStudentLovesUs";
import ChooseYourStudy from "./ChooseYourStudy";
import TestToTake from "./TestToTake";
import { Box, Container } from "@mui/material";
import DestinationPlace from "./DestinationPlace";
import Universities from "./Universities";
import TopColleges from "./TopColleges";
import { CanadaFAQsData } from "../CanadaPage/Data";

import Faq from "../../components/Faq/Faq";
import AcademicCounsellor from "../UKPage/AcademicCounsellor";
import BoldHeading from "../CollegePredictor/Components/BoldHaeding";
import CountriesList from "./CountriesList";

const StudyAbroad = ({ openModal }) => {
    useLayoutEffect(() => {
        // window.scrollTo(0, 0);
    });
    return (
        <>
            <Box sx={{}}>
                <SAHeroSection />
                <Container
                    maxWidth="lg"
                    sx={{
                        overflow: "hidden",
                    }}
                >
                    <DestinationPlace />

                    <Universities openModal={openModal} />

                    <ChooseYourStudy />
                    <CountriesList />

                    <CollegeWallahCounselling />

                    <AcademicCounsellor />

                    <ChooseYourFuture />

                    <TopColleges />

                    <HowDoWeWork />
                    <MeetOurCounsellor />

                    <StudyAbroadExams />

                    <OurStudentLovesUs />

                    <FewFacts />
                    <BlogSection />

                    <ChooseAProgramToStudy />
                    <TestToTake />

                    <Box sx={{ marginBottom: "2rem" }}>
                        <BoldHeading textAlign="left" color="#1F305E">
                            Frequently Asked Questions (FAQs)
                        </BoldHeading>
                        <Faq faqs={CanadaFAQsData} />
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export { StudyAbroad };
