import React from "react";
import { Button } from "@mui/material";

const BlueButton = (props) => {
  return (
    <Button
      sx={{
        height: "35px",
        width: "fit-content",
        borderRadius: "10px",
        color: "#5A4FCF",
        padding: "1rem",
        textAlign: "center",
        backgroundColor: props.isActive ? "#FFC87C" : "white", // Change background color based on isActive prop
        justifyContent: "center",
        fontSize: "0.8rem",
        fontWeight: "600",
        textTransform: "none",
        border: "1px solid #B0C4DE",
        "&:hover": {
          color: "#CC7711",
          backgroundColor: "#FFC87C", // Keep same color on hover when active
          border: "none",
        },
      }}
      onClick={props.onClick} // Pass onClick prop to handle click events
      style={{ textDecoration: "none" }}
    >
      {props.text}
    </Button>
  );
};

export default BlueButton;
