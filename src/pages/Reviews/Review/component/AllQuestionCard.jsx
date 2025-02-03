import React from "react";
import QuestionCard from "./QuestionCard";
import { Box } from "@mui/material";

export default function AllQuestionCard() {
  let data = [
    {
      ques: "Ques. How tough is the test for getting into fellowship program?",
      ans: "Unlike CAT, RAT (Research Aptitude Test) is not a unified exam. Evert College conducts its own admission process for FPM and thus the pattern of RAT varies from College to College. One of the patterns is termed as minorRead more RAT followed and at a few other IIMs. The RAT consists of different types of CAT questions including question",
      ansby: "● Top Answer By Siddant Mittal on 15 May 24",
    },
  ];

  return (
    <>
      <Box
        display=""
        sx={{
          width: "100%",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          "@media (max-width: 600px)": {
            padding: "8px",
            maxWidth: "100%",
          },
        }}
      >
        {data.map(({ ques, ans, ansby }, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
            }}
          >
            <QuestionCard ques={ques} ans={ans} ansby={ansby} />
          </Box>
        ))}
      </Box>
    </>
  );
}
