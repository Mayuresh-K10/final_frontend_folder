import React from "react";
import { Button } from "@mui/material";

const CountryFilterButton = ({ country }) => {
  return (
    <Button
      variant="div"
      sx={{
        fontSize: "1.1rem",
        textTransform: "none",
        fontWeight: 600,
        lineHeight: "1.3rem",
        letterSpacing: "0em",
        textAlign: "center",
        borderRadius: "0.8rem",
        padding: "0.5rem 2rem",
        borderColor: "#7B90FF",
        borderWidth: "0.1rem",
        borderStyle: "solid",
        color: "#210366",
        backgroundColor: "white",
        "&:hover": {
          backgroundColor: "#7B90FF",
          color: "white",
          boxShadow: "0 2px 8px 2px rgba(178,178,178,0.048)",
        },
      }}
    >
      {country}
    </Button>
  );
};

export default CountryFilterButton;
