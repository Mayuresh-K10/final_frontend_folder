import React from "react";
import { Box, Typography } from "@mui/material";

const TopCollegeHeading = (props) => {
  return (
    <Box>
      <Typography
        variant="h2"
        sx={{
          fontWeight: "700",
          fontSize: "2rem",
          textAlign: "left",
          color: "#004687",
        }}
      >
        {props.text}
      </Typography>
    </Box>
  );
};

export default TopCollegeHeading;
