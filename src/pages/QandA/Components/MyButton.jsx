// MyButton.js
import React from "react";
import Button from "@mui/material/Button";

const MyButton = ({ label, link, isActive, onClick }) => {
  return (
    <Button
      variant="text"
      sx={{
        fontSize: "15px",
        textTransform: "none",
        fontWeight: 400,
        textAlign: "center",
        borderRadius: "1rem",
        padding: "0.2rem 1.5rem",
        margin: "1rem 0.5rem 0 0",
        borderColor: isActive ? "#FF5733" : "#4285F4", // Change border color based on active state
        borderWidth: "2px",
        borderStyle: "solid",
        "&:hover": {
          backgroundColor: isActive ? "#FF6347" : "#4285F4", // Change background color based on active state
          color: "#FFFFFF",
        },
      }}
      href={link}
      onClick={onClick} // Pass the onClick handler
    >
      {label}
    </Button>
  );
};

export default MyButton;
