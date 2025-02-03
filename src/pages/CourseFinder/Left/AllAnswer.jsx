import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import CourseFilterComponent from "../../../components/FilterComponent/courseFilterComponent";

const AllAnsSet = ({ onFilterChange }) => {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        marginY: "2rem",
      }}
    >
      <Box>
        <Typography
          sx={{
            color: "#210366",
            fontSize: 25,
            fontWeight: "600",
            wordWrap: "break-word",
            marginTop: "0.5rem",
            paddingBottom: "1rem",
          }}
        >
          Found 900+ Courses
        </Typography>
      </Box>
      <CourseFilterComponent onFilterChange={onFilterChange} />
    </Stack>
  );
};

export default AllAnsSet;
