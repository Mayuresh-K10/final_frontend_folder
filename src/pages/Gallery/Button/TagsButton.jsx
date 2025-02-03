import { Button } from "@mui/material";
import React, { useState } from "react";

function TagsButton({ title, num }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: "1.3rem",
        textTransform: "none",
        maxWidth: "14rem",
        borderColor: hovered ? "#7B90FF" : "transparent",
        borderWidth: "0.2rem",
        borderStyle: "solid",
        justifyContent: "center",
        textAlign: "center",
        margin: "1rem",
        fontFamily: "Poppins",
        fontSize: "1.125rem",
        fontWeight: num !== undefined ? "700" : "400",
        lineHeight: "1.375rem",
        letterSpacing: "0rem",
        color: hovered ? "white" : (num !== undefined ? "#210366" : "#7B90FF"),
        backgroundColor: hovered ? "#7B90FF" : "transparent",
        cursor: "pointer",
        transition: "background-color 0.3s, color 0.3s",
        "&:hover": {
          backgroundColor: "#7B90FF",
          color: "white",
          borderColor: "transparent",
        },
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {title} {num !== undefined && `(${num})`}
    </Button>
  );
}

export default TagsButton;
