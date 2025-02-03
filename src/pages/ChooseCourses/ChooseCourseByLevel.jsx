import React from "react";
import { Box } from "@mui/material";
import LevelHeading from "../../components/Headings/LevelHeading";
import LevelAllCards from "./LevelAllCards";
import AdSenseComponent from "../../utils/AdSenseComponent";

const ChooseCourseByLevel = () => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "5rem",
        maxWidth: "1536px",
        marginX: 'auto',
        display: 'flex',
      }}
    >
      <Box sx={{ width: '400px', minHeight: '100vh' }}>
        <AdSenseComponent />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <LevelHeading />
        <LevelAllCards />
      </Box>
      <Box sx={{ width: '400px', minHeight: '100vh' }}>
        <AdSenseComponent />
      </Box>
    </Box>
  );
};

export default ChooseCourseByLevel;
