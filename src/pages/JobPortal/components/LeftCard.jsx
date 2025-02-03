import React from "react";
import { Box } from "@mui/material";
import { Typography, CardContent } from "@mui/material";

import JobFilterComponent from "../../../components/FilterComponent/jobFilterComponent";

const LeftCard = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "transparent",
        borderRadius: "12px",
        padding: "1%",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        boxShadow: " 0px 0px 40px 0px rgba(123, 144, 255, 0.15)",
        "@media (max-width:800px)": {
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        "@media (min-width:800px)": {
          marginTop: "15vh",
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h1"
          component="h2"
          sx={{
            fontFamily: "Poppins",
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "15px",
            textAlign: "left",
            color: "#210366",
          }}
        >
          Filter By
        </Typography>
      </CardContent>

      <JobFilterComponent />
    </Box>
  );
};

export default LeftCard;
