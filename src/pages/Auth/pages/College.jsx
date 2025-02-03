import React from "react";

import { Box } from "@mui/material";

import CollegeRegisterCard from "../PageCards/CollegeRegisterCard";

const CollegeRegistration = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        height: "100%",
        position: "relative",
        paddingY: "2.5rem",
        backgroundColor: "#ffffff",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        borderRadius: "0px",
      }}
    >
      <CollegeRegisterCard />
    </Box>
  );
};

export {CollegeRegistration};
