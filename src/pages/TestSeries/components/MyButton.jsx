import React from "react";
import Button from "@mui/material/Button";

const MyButton = ({ label, link }) => {
  return (
    <Button
      variant="text"
      sx={{
        fontSize: "1rem",
        textTransform: "none",
        fontWeight: 600,
        textAlign: "center",
        borderRadius: "1.3rem",
        padding: "0.2rem 1.5rem",
        margin: "1rem 0.4rem 0 0 ",
        borderColor: "#7B90FF",
        borderWidth: "0.1rem",
        borderStyle: "solid",
        color: "#210366",
        backgroundColor: "white",
        "&:hover": {
          backgroundColor: "#7B90FF",
          color: "white",
        },
      }}
      href={link}
    >
      {label}
    </Button>
  );
};

export default MyButton;
