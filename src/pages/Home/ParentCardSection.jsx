import React from "react";
import CardSection from "../../components/Cards/CardSection";
import { Box } from "@mui/material";
import logo1 from "../../Assets/lucknowUniversity.webp";
import logo2 from "../../Assets/vit_logo.webp";
import logo3 from "../../Assets/iitRopar.webp";

const ParentCardSection = () => {
  const data = [
    {
      logo: logo1,
      heading: "Lucknow University Registration WIndow Closing in July",
      description:
        "Lucknow University is inviting applications for admission to its UG Programs for the academic session 2024-25. Interested candidates can apply through the official website till July 31, 2024.",
    },
    {
      logo: logo2,
      heading: "VITEEE 2024 Registration Window Closing in July",
      description:
        "The last date to apply for VITEEE 2024 is July 31, 2024. Candidates can apply for the exam at viteee.vit.ac.in.",
    },
    {
      logo: logo3,
      heading: "IIT Ropar MTech Admission 2024 Open Apply till August 24",
      description:
        "IIT Ropar is inviting application for admission in MTech program for the academic year 2024-25; Apply till Aug 24",
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
