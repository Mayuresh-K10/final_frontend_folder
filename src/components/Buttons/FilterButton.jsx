import React from "react";
import { Button } from "@mui/material";

const FilterButton = ({ children, onClick }) => {
  return (
    <Button
      sx={{
        display: "flex",
        textAlign: 'center',
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
          borderColor: "#FF7900",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.30)",
        },
      }}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default FilterButton;
