import React from "react";
import LowerCard from "./LowerCard";
import { Box } from "@mui/material";

const AllLowerCard = ({ Card2 }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",

          height: "auto",
          flexWrap: "wrap",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {Card2.map((item, index) => (
          <LowerCard key={index} {...item} />
        ))}
      </Box>
    </Box>
  );
};

export default AllLowerCard;
