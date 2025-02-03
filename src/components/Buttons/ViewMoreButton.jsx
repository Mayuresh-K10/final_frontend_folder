import { Button } from "@mui/material";
import React from "react";

const ViewMoreButton = ({ heading, onClick }) => {
  return (
    <>
      <Button
        variant="outlined"
        onClick={onClick}
        sx={{
          width: "fit",
          height: "3rem",
          boxSizing: "border-box",
          border: "1px solid #313893",
          borderRadius: "12px",
          color: "white",
          textAlign: "center",
          justifyContent: "center",
          fontSize: "0.8rem",
          fontWeight: "500",
          textTransform: "none",
          
          backgroundColor: "#313893",
          "&:hover": {
            backgroundColor: "#313893",
          },
        }}
      >
        {heading}
      </Button>
    </>
  );
};

export default ViewMoreButton;
