import React, { Suspense } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import { HeroSection } from "./HeroSection";
import { Box, Container } from "@mui/material";
import Background2 from "./images/bg-2.jpg";
import Background1 from "../../Assets/Background/StudyBackground.jpg";
import FreeCourse from "./FreeCourse";
import { FreeCourseData } from "../../data/DataFile";
import Loader from "../Loader/Loader";

// Individual lazy-loaded components
const StudyGoals = React.lazy(() => import("./StudyGoals"));
const TopColleges = React.lazy(() => import("./TopColleges"));
const LetestNotification = React.lazy(() => import("./LetestNotification"));
const OurSuggestion = React.lazy(() => import("./OurSuggestion"));
const TopSection = React.lazy(() => import("./TopSection"));
const CollegeRanking = React.lazy(() => import("./CollegeRanking"));
const CollegeRankingContainer = React.lazy(() =>
  import("./CollegeRankingContainer")
);
const AdmissionContainer = React.lazy(() => import("./AdmissionContainer"));
const ExploreCourseContainer = React.lazy(() =>
  import("./ExploreCourseContainer")
);
const StudyAbrodContainer = React.lazy(() => import("./StudyAbrodContainer"));
const ExamCourses = React.lazy(() => import("./ExamCourses"));
const LatestNews = React.lazy(() => import("./LatestNews"));
const JobListing = React.lazy(() =>
  import("../JobPortal/components/JobListing")
);
const Testimonials = React.lazy(() => import("./Testimonials"));
const Footer = React.lazy(() => import("../../components/Navigation/Footer"));

const LoaderText = styled.div`
  margin-top: 0.6rem;
  margin-left: 20px;
  color: #313893;
  font-size: 1.4rem;
  font-weight: 600;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 0.875rem;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: relative;
  padding: 2rem;
`;

const HomePage = React.memo(() => {
  // console.log("Homepage render");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box sx={{ overflow: "hidden" }}>
      <HeroSection />
      <Container
        maxWidth="xl"
        sx={{ "@media (max-width:800px)": { margin: 0 } }}
      >
        <FreeCourse FreeCourseData={FreeCourseData} />
      </Container>
      <section ref={ref}>
        {inView ? (
          <Suspense fallback={<Loader />}>
            <Container
              maxWidth="xl"
              sx={{
                "@media (max-width:800px)": { margin: 0 },
                marginTop: "5rem",
              }}
            >
              <StudyGoals />
              <TopColleges />
              <Box
                sx={{
                  backgroundColor: "#fff6ee",
                  backgroundImage: `url(${Background1})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  paddingY: "2rem",
                  marginY: "5rem",
                }}
              >
                <LetestNotification />
                <OurSuggestion />
              </Box>
              <TopSection />
              <CollegeRanking />
              <CollegeRankingContainer />
              <Box
                sx={{
                  backgroundImage: `url(${Background2})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  marginY: "1rem",
                }}
              >
                <AdmissionContainer />
                <ExploreCourseContainer />
              </Box>
              <StudyAbrodContainer />
              <ExamCourses />
              <LatestNews />
              <JobListing isHome="true" />
              <Testimonials />
            </Container>
            <Box>
              <Footer />
            </Box>
          </Suspense>
        ) : (
          <TextWrapper>
            <LoaderText>Loading...</LoaderText>
          </TextWrapper>
        )}
      </section>
    </Box>
  );
});

export { HomePage };
