import React from "react";
import { Box } from "@mui/material";

const ExamButton = ({ label, link }) => {
  return (
    <a
      href={link}
      style={{ textDecoration: "none" }}
    >
      <Box
        sx={{
          fontWeight: "600",
          fontSize: "16px",
          lineHeight: "16px",
          textTransform: "uppercase",
          color: "#210366",
          cursor: "pointer",
          whiteSpace :"nowrap",
          border : "1px solid #7B90FF",
          paddingX :"10px",
          paddingY :"9px",
          borderRadius :"18px"
        }}
      >
        {label}
      </Box>
    </a>
  );
};

export default ExamButton;
