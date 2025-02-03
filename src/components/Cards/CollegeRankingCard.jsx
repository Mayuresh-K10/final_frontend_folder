import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Image } from "../../utils/Image";

const CollegeRankingCard = ({ img, city }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Redirect to the top universities page with the selected city
    navigate(`/top-universities?city=${city}`);
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        width: "160px",
        height: "160px",
        backgroundColor: "white",
        boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.15);",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        padding: "1rem",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <Image src={img} alt={city} style={{ width: "100px", height: "100px" }} />
      <Typography
        sx={{
          color: "#210366",
          fontFamily: "Poppins",
          fontSize: "0.8rem",
          fontWeight: "900",
          lineHeight: "0.5rem",
          letterSpacing: "0.02rem",
          textAlign: "left",
          padding: "0.8rem 0 0 0.5rem",
        }}
      >
        {city}
      </Typography>
    </Box>
  );
};

export { CollegeRankingCard };
