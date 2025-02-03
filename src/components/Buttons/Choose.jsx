import { Button } from "@mui/material";
import React from "react";

const ChooseButton = (props) => {
  

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
     
      style={{ textDecoration: "none" }}
    >
      {props.text}
    </Button>
  );
};

export default ChooseButton;
