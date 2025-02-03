import React from "react";
import { Button } from "@mui/material";

const FilterButton = ({ children, onClick }) => {
  return (
    <Button
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        background: "#FFF",
        borderRadius: "1.5rem",
        color: "#2f1370",
        padding: "5px 19px",
        height: "2.5rem",
        fontWeight: "600",
        border: "2px solid #7B90FF",
        textTransform: "capitalize",

        "&:hover": {
          background: "#FF7900",
          borderColor: "#FF7900",
          color: "#fff",
          textDecorationColor: "#2f1370",
        },
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default FilterButton;