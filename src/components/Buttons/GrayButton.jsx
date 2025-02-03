import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const GrayButton = (props) => {
  const getLinkPath = (text) => {
    if (text === "View Details") {
      return "info";
    } else if (text === "Placements") {
      return "placement";
    } else if (text.includes("Course & Fees")) {
      return "course-fee";
    }
    
    return "";
  };

  return (
    <Button
      variant="outlined"
      sx={{
        height: "auto",
        width: "fit-content",
        borderRadius: "12px",
        color: "#210366",
        textAlign: "center",
        backgroundColor: "#F6F6F6",
        justifyContent: "center",
        fontSize: "0.8rem",
        fontWeight: "700",
        textTransform: "none",
        "&:hover": {
          color: "#F6F6F6",
          backgroundColor: "#210366",
        },
        '@media (max-width : 770px)': {
          fontSize: "12px",
        },
      }}
      component={Link}
      to={`/college-info/${props.id}/${getLinkPath(props.text)}`}
      style={{ textDecoration: "none" }}
    >
      {props.text}
    </Button>
  );
};

export default GrayButton;
