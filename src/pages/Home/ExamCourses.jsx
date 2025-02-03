import React from "react";
import Class12th from "./Class12th";
import Class10th from "./Class10th";
import TopCourses from "./TopCourses";
import { Box, Container } from "@mui/material";
import MyHeading from "../../components/Headings/MyHeading";

const ExamCourses = () => {
  // console.log("ExamCourses render");

  return (
    <Box>
      <Container maxWidth="xl" sx={{ marginBottom: "5rem" }}>
        <MyHeading headingName="Exams & Course" />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "15px",
            marginY: "2rem",
            "@media (max-width : 770px) ": {
              flexDirection: "column",
            },
          }}
        >
          <Class12th />
          <Class10th />
          <TopCourses />
        </Box>
      </Container>
    </Box>
  );
};

export default ExamCourses;
