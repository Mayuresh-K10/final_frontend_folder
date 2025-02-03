import React from "react";

import { Box } from "@mui/material";

import ConsultantRegistrationCard from "../PageCards/ConsultantRegistrationCard";

const ConsultantRegistration = () => {
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
      <ConsultantRegistrationCard/>
    </Box>
  );
};

export {ConsultantRegistration};
