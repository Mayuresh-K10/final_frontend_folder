import React from "react";
import { Box } from "@mui/material";

const MyHeading = ({ headingName }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            fontSize: "2rem",
            fontWeight: 500,
            lineHeight: "3rem",
            letterSpacing: "0em",
            textAlign: "left",
            color: "#210366",
            display: "inline",
          }}
        >
          {headingName}
          <Box
            sx={{
              borderTop: "6px solid #7B90FF",
              borderRadius: "10px",
              display: "flex",
              width: "100%",
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
};

export default MyHeading;
