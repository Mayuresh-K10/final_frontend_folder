import React from "react";
import { Button } from "@mui/material";

const FilledButton = ({ backgroundColor, children, handleclick, textColor ,textD }) => {
  return (
    <Button
     href="/step"
      sx={{
        backgroundColor: backgroundColor || "#7B90FF",
        borderRadius: "12px",
        color: textColor || "#fff",
        padding: "15px 29px",
        fontWeight: "800",
        textTransform: "capitalize",
        width: "fit-content",
        display: "inline-flex",
        gap: "0.5rem",
        fontSize:"20px",
        textDecoration:textD,
        alignItems: 'center',
        "&:hover": {
          color: "#2f1370",
          textDecorationColor: "#2f1370",
        },
      }}
      onClick={handleclick}
    >
      {children}
    </Button>
  );
};

export default FilledButton;
