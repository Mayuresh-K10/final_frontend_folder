import { Box, Stack } from "@mui/material";
import React from "react";
import TopCollegeHeading from "../../components/Headings/PageHeading";
import DropDown from "./DropDown";
import Colleges from "./Colleges";
import TopCollage from "../../Assets/Top-collages.svg";
import FoundCollegeHeading from "../../components/Headings/FoundCollegeHeading";

const CpResult = () => {
  const Exam_name = "Exam";

  return (
    <Box>
      <Box
        alignItems={{ xs: "center", sm: "center" }}
        style={{
          display: "flex",
          flexDirection: " column",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row ",
            alignItems: "center",
            gap: "2rem",
            "@media (max-width: 770px)": {
              flexDirection: "column",
              justifyContent: "center",
              paddingY: "2rem",
              gap: "1rem",
            },
          }}
        >
          <Box>
            <TopCollegeHeading text={`List of Colleges ${Exam_name}`} />
          </Box>
          <img
            src={TopCollage}
            alt="@BharatTech"
            style={{ width: "25vw", height: "auto" }}
          />
        </Box>
        <FoundCollegeHeading />
        <Stack
          direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
          justifyContent="space-evenly"
          alignItems={{
            xs: "center",
            sm: "center",
            md: "flex-start",
            lg: "flex-start",
          }}
          spacing={{ xs: "0", sm: "0", md: "1", lg: "1" }}
          sx={{
            marginY: "1.5rem",
          }}
        >
          <DropDown />
          <Colleges />
        </Stack>
      </Box>
    </Box>
  );
};

export default CpResult;
