import React from "react";
import CardSection from "../../Cards/CardSection";
import { Box } from "@mui/material";
import logo1 from "../../../Assets/lucknowUniversity.webp";
import logo2 from "../../../Assets/vit_logo.webp";
import logo3 from "../../../Assets/iitRopar.webp";

const ParentCardSection = () => {
  const data = [
    {
      logo: logo1,
      heading: "Lucknow University Registration WIndow Closing in Mar",
      description:
        "Lucknow University is inviting applications for admission to its UG Programs for the academic session 2023-24. Interested candidates can apply through the official website till May 31, 2023.",
    },
    {
      logo: logo2,
      heading: "VITEEE 2023 Registration Window Closing in Mar",
      description:
        "The last date to apply for VITEEE 2023 is March 31, 2023. Candidates can apply for the exam at viteee.vit.ac.in.",
    },
    {
      logo: logo3,
      heading: "IIT Ropar MTech Admission 2023 Open Apply till April 23",
      description:
        "IIT Ropar is inviting application for admission in MTech program for the academic year 2023-24; Apply till April 23",
    },
  ];
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          rowGap: "1rem",
          alignItems: "start",
          height: "auto",
        }}
      >
        {data.map((item, index) => (
          <CardSection key={index} {...item} />
        ))}
      </Box>
    </>
  );
};

export default ParentCardSection;
