import React from "react";
import { Box, Typography } from "@mui/material";

const RegisterDetails = (props) => {
  return (
    <Box
      sx={{
        width: "150px",
        height: "120px",
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <img
        src={props.icon}
        alt=""
        width="80px"
        height="80px"
        style={{ marginBottom: "-15px" }}
      />
      <Typography
        sx={{
          fontStyle: "bold",
          fontWeight: "600",
          fontSize: "0.9rem",
          color: "#210366",
        }}
      >
        {props.heading}
      </Typography>
    </Box>
  );
};

export default RegisterDetails;
