import React from "react";
import { Box } from "@mui/material";
import background from "../assets/loginbackground.png";

import AlreadyRegisterCard from "../PageCards/AlreadyRegisterCard";
const AlreadyRegister = () => {
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        borderRadius: "20px",
        width: "100vw",
        height: "100vh",
        position: "relative",
        "& *": {
          fontSize: "0.8rem important",
        },
      }}
    >
      <img
        src={background}
        alt="background"
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0",
          zIndex: "-1",
        }}
      />
      <AlreadyRegisterCard />
    </Box>
  );
};

export {AlreadyRegister};
