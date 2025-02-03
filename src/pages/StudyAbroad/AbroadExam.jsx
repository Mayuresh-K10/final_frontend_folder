import React from "react";
import Box from "@mui/material/Box";

import Container from "@mui/material/Container";

import ExamNotificationsRender from "../Exam/ExamNotificationRender";

// import SearchBar from "../../components/Cards/SearchBar";
import UpcomingExamRender from "../Exam/UpcomingExamRender";
import Subscribe from "../../components/SubscribeNews/Subscribe";
import img1 from "../Exam/images/exam_hero.svg";

import { Typography } from "@mui/material";

import { Helmet } from "react-helmet";

import AllExamsCard from "./AllExamsCard";

const AbroadExam = () => {
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
              variant="h5"
              sx={{
                color: "#210366",
                fontSize: "3.5rem",
                paddingTop: "5rem",
                fontWeight: 700,
                paddingBottom: "5rem",
                width: "auto",
                textAlign:"center"
              }}
            >
              Abroad Exams
            </Typography>

            {/* <SearchBar placeholder="Search Entrance Exams" /> */}
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
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            "@media (min-width: 740px)": {
              flexDirection: "row",
              justifyContent: "center",
              alignContent: "center",
              gap: "20px",
            },
          }}
        >
          <AllExamsCard isAbroadExam={true} />

          <Box
            sx={{
              flex: "1",
              marginX: "auto",
              marginTop: "2.5rem",
              "@media (min-width: 740px)": {
                paddingLeft: "0.5vw",
              },
            }}
          >
            <Subscribe />
            <ExamNotificationsRender />
            <UpcomingExamRender />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default AbroadExam;
