import { Box } from "@mui/material";
import React from "react";
import NextCard from "../PageCards/NextCard";
const Next = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100%",
        height: "100%",
        position: "relative",
        padding: "2.5rem",
        '@media (max-width:800px)': {
          padding : '1rem',
        }
      }}
    >
      
      <NextCard />
    </Box>
  );
};

export {Next};
