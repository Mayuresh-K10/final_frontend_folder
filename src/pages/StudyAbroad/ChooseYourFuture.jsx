import { Box, Typography } from "@mui/material";
import React from "react";
import HeadText from "../../components/Headings/HeadText";
import AllSquareBtn from "./AllSquareBtn";

const ChooseYourFuture = () => {
  return (
    <Box sx={{paddingY:"3.5rem"}}>
      <HeadText headText="Choose your future" />
      <Typography
        sx={{
          color: "#210366",
          fontWeight: 600,
          marginY: "1rem",
        }}
      >
        CollegeCue.com is an extensive search engine for the students, parents,
        and education industry players who are seeking information
      </Typography>

      <AllSquareBtn />
    </Box>
  );
};

export default ChooseYourFuture;

