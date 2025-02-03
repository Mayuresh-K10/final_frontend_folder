import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";


const GrayButton = (props) => {

  const getLinkPath = (text) => {
    if (text === "Info") {
      return "info";
    } 
    else if (text.includes("Courses & Fees")) {
      return "course-fee";
    }
    
    return "";
  };

  return (
    <Button
      sx={{
        height: "35px",
        width: "fit-content",
        borderRadius: "10px",
        color: "#F05E23",
        padding: "1rem",
        textAlign: "center",
        justifyContent: "center",
        fontSize: "1rem",
        fontWeight: "600",
        textTransform: "none",
        border: "1px solid lightgrey",
        "&:hover": {
          border: "1px solid lightgrey",
          bgcolor: "#ffaf66",
        },
      }}
      component={Link}

      to={`/Institute-info/${props.id}/${getLinkPath(props.text)}`}
      style={{ textDecoration: "none" }}
    >
      {props.text}
    </Button>
  );
};

export default GrayButton;
