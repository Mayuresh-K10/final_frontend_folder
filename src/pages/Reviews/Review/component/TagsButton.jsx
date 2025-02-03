import React from "react";
import { Button } from "@mui/material";

function TagsButton({ title, num, bg }) {
  let setNum = false;
  if (num !== undefined) {
    setNum = true;
  }
  function bFont() {
    if (setNum || bg !== undefined) return "700";
    else return "400";
  }
  function bColor() {
    if (setNum || bg !== undefined) return "#210366";
    else return "#7B90FF";
  }
  return (
    <Button
      variant="contained"
      sx={{
        borderRadius: "1rem",
        textTransform: "none",

        borderColor: "#7B90FF",
        borderWidth: "0.1rem",
        borderStyle: "solid",
        textAlign: "center",
        margin: "0.2rem 0.2rem",
        fontSize: "1rem",
        fontWeight: bFont(),
        letterSpacing: "0rem",
        color: bColor(),
        backgroundColor: "transparent",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "#7B90FF",
          color: "white",
        },
      }}
    >
      {title}
      {setNum > 0 ? "(" : ""}
      {num}
      {setNum ? ")" : ""}
    </Button>
  );
}

export default TagsButton;
