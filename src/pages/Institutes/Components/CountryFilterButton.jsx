import React from "react";
import { Button } from "@mui/material";

const CountryFilterButton = ({ country }) => {
  return (
    <Button
      sx={{
        background: "#7B90FF",
        borderRadius: "12px",
        color: "#fff",
        padding: "5px 19px",
        fontWeight: "600",
        border: "1px solid #2F1370",
        "&:hover": {
          color: "#2f1370",
          textDecorationColor: "#2f1370",
        },
      }}
    >
      {country}
    </Button>
  );
};

export default CountryFilterButton;
