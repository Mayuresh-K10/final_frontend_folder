import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const OrangeButton = (props) => {
  const handleClick = () => {
    // Call the onClick function passed as a prop
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <Button
      sx={{
        height: "35px",
        width: "150px",
        borderRadius: "10px",
        color: "white",
        padding: "1rem",
        textAlign: "center",
        backgroundColor: "#F05E23",
        justifyContent: "center",
        fontSize: "1rem",
        fontWeight: "600",
        border: "1px solid lightgrey",
        textTransform: "none",
        "&:hover": {
          bgcolor: "#FFFFFF",
          border: "1px solid lightgrey",
          color: "#F05E23",
        },
      }}
      onClick={handleClick} // Call the handleClick function on button click
      component={props.link ? Link : "button"} // Conditionally render Link component if link prop is provided
      to={props.link}
    >
      {props.text}
    </Button>
  );
};

export default OrangeButton;
