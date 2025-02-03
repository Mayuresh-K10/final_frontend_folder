import React from "react";
import { Button } from "@mui/material";

const CountryFilterButton = ({ name, isActive, onClick }) => {
  return (
    <Button
      sx={{
        background: isActive ? "#FF5733" : "#E1EBEE",
        borderRadius: "8px",
        color: isActive ? "white" : "#545AA7",
        padding: "5px 19px",
        fontWeight: "600",
        border: "1px solid lightgrey",
        "&:hover": {
          bgcolor: "white",
          textDecoration: "underline",
          color: isActive ? "#FF5733" : "#545AA7",
        },
      }}
      onClick={() => onClick(name)} // Pass the name to the onClick handler
    >
      {name}
    </Button>
  );
};

export default CountryFilterButton;
