import { Box } from "@mui/material";
import React from "react";
import LeftCard from "../components/LeftCard";
import AlreadyRegister from "../components/AlreadyRegister";

const AlreadyRegisterCard = () => {
  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: "900px",
        backgroundColor: "#fff",
        padding: "10px",
        borderRadius: "1rem",
        flexDirection: "row",
        gap: "1rem",
        "@media (max-width: 770px)": {
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      <LeftCard />
      <AlreadyRegister />
    </Box>
  );
};

export default AlreadyRegisterCard;
