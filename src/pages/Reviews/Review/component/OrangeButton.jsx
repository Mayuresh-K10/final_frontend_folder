import React from "react";
import { Button } from "@mui/material";

function GradientButton({ buttonName, onClick }) {
  return (
    <Button
      sx={{
        borderRadius: "10px",
        color: "#FFFFFF",
        backgroundImage: "linear-gradient(45deg, #FF6B00 30%, #FFD600 90%)",
        fontFamily: "Poppins",
        fontSize: "0.8rem",
        minWidth: "11.1875rem",
        fontWeight: "500",
        textTransform: "none",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        "&:hover": {
          backgroundImage: "linear-gradient(45deg, #E91E63 30%, #9C27B0 90%)",
          boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)",
        },
      }}
      onClick={onClick}
    >
      {buttonName}
    </Button>
  );
}

export default GradientButton;
