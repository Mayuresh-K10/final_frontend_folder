import React from "react";
import {  Box } from "@mui/material";


import Left from "./Left";

function AllSection({ collegeInfo }) {
  return (
    <Box>
      <Left collegeInfo={collegeInfo} />
    </Box>
  );
}

export default AllSection;
