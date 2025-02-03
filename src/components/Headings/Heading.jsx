import { Box } from "@mui/material";
import React from "react";

const Heading = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            fontFamily: "Poppins",
            fontSize: "2rem",
            fontWeight: 500,
            lineHeight: "3rem",
            letterSpacing: "0em",
            textAlign: "left",
            color: "#210366",
            display: "inline",
          }}
        >
          {props.heading}
          <Box
            sx={{
              borderTop: "6px solid #7B90FF",
              borderRadius: "10px",
              marginBottom: "1rem",
              display: "flex",
              width: "100%",
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
};

export default Heading;
