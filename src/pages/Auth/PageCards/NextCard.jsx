import { Box } from "@mui/material";
import React from "react";
import LeftCard from "../components/LeftCard";
import Next from "../components/Next";
const NextCard = (
  { handleOtpClick,
    showCollegeInfo,
    collegeImage,
    collegeName }
) => {
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "100%",
        backgroundColor: "#fff",
        padding: "10px",
        borderRadius: "1rem",
        gap: "1rem",
        '@media (max-width:812px)': {
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '0',
          width: '100%',
        }
      }}
    >
       {showCollegeInfo ? null : <LeftCard />}
      <Next
        handleOtpClick={handleOtpClick}
        showCollegeInfo={showCollegeInfo}
        collegeImage={collegeImage}
        collegeName={collegeName}
      />
    </Box>
  );
};

export default NextCard;
