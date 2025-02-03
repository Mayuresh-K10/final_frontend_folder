import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import image from "../assets/otp.jpg";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const RegistrationButtons = () => {
  const buttons = [
    {
      title: "Register as a Company",
      to: "/Company-registration",
    },
    {
      title: "Register as a University/College",
      to: "/College-registration",
    },
    {
      title: "Register as a Consultant/Institute",
      to: "/consultant-registration",
    },
    {
      title:"Register for Job",
      to:"/jobseeker-registration",
    }
  ];

  return (
    <MotionBox
      sx={{
        padding: "1rem",
        background: "#ffffff",
        borderRadius: "1rem",
        color: "#333",
        maxWidth: "22rem",
        height: "570px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        margin:"1rem",
        boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
        "@media (max-width: 600px)": {
          order: -1,
        },
        marginLeft: "1rem", // Adjusted margin left
      }}
    >
      {/*<Typography
        sx={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          textAlign: "center",
          color: "#333",
        }}
      >
        Register as College Admin
      </Typography>*/}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {buttons.map(({ title, to }, index) => (
          <Button
            key={index}
            variant="contained"
            component={Link}
            to={to}
            sx={{
              textTransform: "none",
              borderRadius: "0.5rem",
              backgroundColor: "#F0F2F5",
              color: "#333",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s, transform 0.3s",

              "&:hover": {
                backgroundColor: "#D0D4DB",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                transform: "translateY(-2px)",
              },
            }}
          >
            {title}
          </Button>
        ))}
      </Box>
      <Box sx={{ textAlign: "center", mt: "1rem" }}>
        <img
          src={image}
          alt="Registration"
          style={{ maxWidth: "100%", height: "auto", borderRadius: "0.5rem" }}
        />
      </Box>
    </MotionBox>
  );
};

export default RegistrationButtons;
