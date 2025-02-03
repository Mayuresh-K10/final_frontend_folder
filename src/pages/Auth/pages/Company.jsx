import React from "react";

import { Box } from "@mui/material";

import CompanyRegisterCard from "../PageCards/CompanyRegisterCard";

const CompanyRegistration = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
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
      <CompanyRegisterCard/>
    </Box>
  );
};

export {CompanyRegistration};
