import React from "react";
import { Box } from "@mui/material";
import LeftCard from "../components/LeftCard";

import ConsultantRegistration from "../components/ConsultantRegistration";
const ConsultantRegistrationCard = () => {
  return (
    <Box
       sx={{
        display: "flex",
        maxWidth: "100%",
        padding: "10px",
        flexDirection: "row",
        borderRadius: "1rem",
        marginLeft: "80px",
        gap: "1rem",
        "@media (max-width: 770px)": {
          flexDirection: "column",
          alignItems: "center",
          justifyContent:'center',
          marginLeft:'0px',
        },
      }}
    >
      <LeftCard />
      <ConsultantRegistration />
    </Box>
  );
};

export default ConsultantRegistrationCard;
