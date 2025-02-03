import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const OrangeButton = (props) => {
  return (
    <Button
      sx={{
        height: "2rem",
        width: "10rem",
        borderRadius: "10px",
        color: "#FFFFFF",
        textAlign: "center",
        backgroundColor: "#FF7900",
        justifyContent: "center",
        fontFamily: "Poppins",
        fontSize: "0.8rem",
        fontWeight: "500",
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

export default OrangeButton;
