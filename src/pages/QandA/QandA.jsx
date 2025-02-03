import React from "react";
import { Box } from "@mui/material";
import RadioGroup from "../../components/RadioGroupRating";
import StudyAbroad from "./Components/StudyAbroad";
import GetAns from "./Components/GetAns";
import { Helmet } from "react-helmet";

function QandA() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Get answers to commonly asked questions about education, universities, courses, exams, admissions, and career prospects." />
        <meta name="google-adsense-account" content="ca-pub-3919517798801147"></meta>
      </Helmet>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "100%",
          overflow:'hidden'
        }}
      >
       <GetAns />
        <StudyAbroad />
        <Box sx={{ marginTop: "2rem" }}>
          <RadioGroup />
        </Box>
      </Box>
    </>
  );
}

export default QandA;
