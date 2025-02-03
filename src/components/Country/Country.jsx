import React, { useLayoutEffect } from "react";
import Hero from "./Hero";

import TopPlaces from "./TopPlaces";
import TopColleges from "./TopColleges";
import Article from "./Article";
import AcademicCounsellor from "./AcademicCounsellor";

import FoundColleges from "./FoundColleges";
import CollegeRanking from "./CollegeRanking";
import ApplicationDates from "./ApplicationDates";
import PopularScholarship from "./PopularScholarship";
import Exams from "./Exams";

import { Container } from "@mui/material";

import ChooseYourFuture from "../../pages/StudyAbroad/ChooseYourFuture";
import AdSenseComponent from "../../utils/AdSenseComponent";

const Country = ({
    topPlaces,
    topCollages,
    Articles,
    Counsellor,
    CollageChoose,
    FC,
    Ranking,
    ApplicationDate,
    Scholarship,
    Exam,

    countryName,
}) => {
    useLayoutEffect(() => {
        // window.scrollTo(0, 0);
    });
    return (
        <>
            <Hero country={countryName} />
            <Container sx={{ marginY: "5rem" }}>
                <TopPlaces TopPlacesData={topPlaces} country={countryName} />

                <TopColleges
                    topCollegesCard={topCollages}
                    countryName={countryName}
                />

                <AcademicCounsellor AcadCounsellor={Counsellor} />

                <ChooseYourFuture CollegeChooseData={CollageChoose} />

                <FoundColleges FCCard={FC} country={countryName} />

                <CollegeRanking CollegeRankingData={Ranking} />

                <ApplicationDates ApplicationDatesData={ApplicationDate} />
                <AdSenseComponent />
                <PopularScholarship
                    PopularScholarshipData={Scholarship.ScholarshipData}
                    countryName={Scholarship.countryName}
                />

                <Article CollegeArticleData={Articles} />
                <Exams ExamsData={Exam} />
            </Container>
        </>
    );
};

export default Country;
