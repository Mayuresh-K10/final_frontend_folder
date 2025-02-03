import { Box, Stack,  } from "@mui/material";
import React from "react";
import jobfilter from "../../pages/JobPortal/components/jobfilterdata";
import FilterComponentCard from "./FilterComponentCard";
import JobFilter from "./Jobfilter";


const JobFilterComponent = () => {
  return (
    <Stack
      sx={{
        "@media (max-width:800px)": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#ffffff", // Ensure white background
            borderRadius: "1rem",
            boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
            marginBottom: "1rem",
            padding: "1rem", // Added padding for better visibility
            border: "3px solid lightGray",
          }}
        >
          {jobfilter.map((Answer, index) => {
            return <JobFilter key={index} {...Answer}  />;
          })}
        </Box>
      </Stack>
    </Stack>
  );
};

export default JobFilterComponent;
