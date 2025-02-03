import React from "react";
import FilterComponent from "../../components/FilterComponent/FilterComponent";
import { Box } from "@mui/material";

const DropDown = ({ handleFilter, courses }) => {
  return (
    <Box sx={{ marginTop: "auto" }}>
      <FilterComponent courses={courses} handleFilter={handleFilter} />
    </Box>
  );
};

export default DropDown;
