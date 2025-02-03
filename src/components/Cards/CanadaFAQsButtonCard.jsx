import React from 'react';
import { Box } from "@mui/material";
import MyButton from "../../components/Buttons/MyButton";

const CanadaFAQsButtonCard = () => {
    const buttons = [
      {
        label: "Admission",
        link: "#",
      },
      {
        label: "Courses",
        link: "#",
      },
      {
        label: "Fees",
        link: "#",
      },
      {
        label: "Scholarships",
        link: "#",
      },
      {
        label: "Colleges",
        link: "#",
      },
      {
        label: "Placements",
        link: "#",
      },
        ];
  return (
    <>
      <Box sx={{ margin: "0", marginBottom: "4rem", marginTop: "2rem", marginLeft: "1rem" }}>
        {buttons.map((button, index) => (
        <MyButton key={index} label={button.label} link={button.link} isAdmissionButton={button.label === "Admission"} />
        ))}
      </Box>
    </>
  )
}

export default CanadaFAQsButtonCard;
