import React from "react";
import { Box, Typography } from "@mui/material";

const HowEarnCard = ({ img, way, amount, index }) => {
  return (
    <Box
      sx={{
        background: "#FFFFFF",
        boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.1)",
        borderRadius: "10px",
        padding: "1.5rem",
        textAlign: "center",
        maxWidth: "260px",
        fontWeight: "800 !important",
      }}
    >
      <Box sx={{ marginBottom: "1.5rem" }}>
        <img src={img} alt="tyyt" style={{ width: "70%" }} />
      </Box>
      <Box>
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif !important",

            fontSize: "1rem",
            lineHeight: "1.5rem",
            fontWeight: "700",
            marginBottom: "1.5rem",
          }}
        >
          {way}
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Poppins', sans-serif !important",

            fontSize: "1.5rem",
            lineHeight: "2rem",
            fontWeight: "800",
            color: `${index % 2 ? "#2F1370" : "orange"}`,
          }}
        >
          ₹ {amount}
        </Typography>
      </Box>
    </Box>
  );
};

export default HowEarnCard;
