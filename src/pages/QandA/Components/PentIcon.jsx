import { Box, Icon, Typography } from "@mui/material";
import React from "react";

import PentagonRoundedIcon from "@mui/icons-material/PentagonRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
const PentIcon = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        color: "#7B90FF",
        alignItems: "center",
        marginTop: "5rem",
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
      <Typography
        sx={{
          width: 115.94,
          color: "#41355D",
          fontSize: 15,
          fontFamily: "Roboto, sans-serif",
          fontWeight: "600",
          textTransform: "capitalize",
          wordWrap: "break-word",
        }}
      >
        Q&A
      </Typography>
    </Box>
  );
};

export default PentIcon;
