import React from "react";
import { Button } from "@mui/material";

const FilledButton = ({ color, children, handleclick, textColor }) => {
  return (
    <Button
      sx={{
        background:"#160048",
        color:  "#ff9e00",
        border:"1px solid white",
        borderRadius:"15px",
        padding: "15px 29px",
        fontWeight: "800",
        textTransform: "capitalize",
        width: "fit-content",
        display: "inline-flex",
        gap: "0.5rem",
        fontSize:"20px",
        alignItems: 'center',
        "&:hover": {
          color: "#cc5500",
          border:"1px solid #cc5500",
        },
      }}
      onClick={handleclick}
    >
      {children}
    </Button>
  );
};

export default FilledButton;
