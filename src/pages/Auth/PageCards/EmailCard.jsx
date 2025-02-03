import React from "react";
import { Box } from "@mui/material";
import LeftCard from "../components/LeftCard";
import Email from "../components/Email";
const EmailCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "1000px",
        backgroundColor: "#fff",
        padding: "10px",
        flexDirection: "row",
        borderRadius: "1rem",
        gap: "1rem",
        "@media (max-width :770px)": {
          flexDirection: "column",
          justifyContent: 'center',
          alignItems: 'center',
        }
      }}
    >
      <LeftCard />
      <Email />
    </Box>
  );
};

export default EmailCard;
