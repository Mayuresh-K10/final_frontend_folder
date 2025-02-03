import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const GrayButton = (props) => {
  return (
    <Button
      variant="outlined"
      sx={{
        height: "2rem",
        width: "fit-content",
        borderRadius: "12px",
        color: "#210366",
        textAlign: "center",
        backgroundColor: "#F6F6F6",
        justifyContent: "center",
        fontFamily: "Poppins",
        fontSize: "0.8rem",
        fontWeight: "700",
        textTransform: "none",
        "&:hover": {
          color: "#F6F6F6",
          backgroundColor: "#210366",
        },
      }}
      component={Link}
      to={props.link}
      style={{ textDecoration: "none" }}
    >
      {props.text}
    </Button>
  );
};

export default GrayButton;
