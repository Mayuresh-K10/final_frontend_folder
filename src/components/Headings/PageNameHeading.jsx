import { Box, Typography } from "@mui/material";
import React from "react";

import PentagonRoundedIcon from "@mui/icons-material/PentagonRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
const PageNameHeading = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        color: "#7B90FF",
        alignItems: "center",
      }}
    >
      <PentagonRoundedIcon
        sx={{
          fontSize: "2rem",
        }}
      />
      <ChevronRightRoundedIcon />

      <Typography
        variant="h2"
        sx={{
          fontSize: "1rem",
          color: "#2F1370",
          fontWeight: "bold",
        }}
      >
        {children}
      </Typography>
    </Box>
  );
};

export default PageNameHeading;
