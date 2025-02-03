import { Box, Typography } from "@mui/material";
import React from "react";

import image from "../assets/image.png";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const WhySignUpCard = () => {
  const reasons = [
    {
      title: "Never miss Important deadlines",
      image: image,
    },
    {
      title: "Ask Questions to senior Counselors",
      image: image,
    },
    {
      title: "Shortlist and Apply to colleges",
      image: image,
    },
    {
      title: "Check Detailed Fees",
      image: image,
    },
    {
      title: "View College Brochures",
      image: image,
    },
  ];

  return (
    <Box
      sx={{
        padding: "0.5rem",
        background: "rgba(0,0,0,0.7)",
        borderRadius: "0.625rem",
        color: "#fff",
        maxWidth: "20rem",
        display: "flex",
        flexDirection: "column",
        fontSize: "1rem",
        fontWeight: "500",
        gap: "0.5rem",
      }}
    >
      <Typography sx={{ fontSize: "1.125rem", fontWeight: "600" }}>
        Why sign Up
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        {reasons.map(({ title, image }, index) => {
          return (
            <Box key={index} sx={{ position: "relative" }}>
              <Box
                sx={{
                  width: "90%",
                  position: "absolute",
                  top: "50%",
                  left: "0.625rem",
                  transform: "translateY(-50%)",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{ fontSize: "0.875rem" }}>{title}</Typography>
                <ChevronRightIcon />
              </Box>
              <img
                src={image}
                alt="img"
                style={{ width: "100%", objectFit: "contain" }}
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default WhySignUpCard;
