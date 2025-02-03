import { Button } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchButton = () => {
  return (
    <>
      <Button
        variant="outlined"
        sx={{
          width: "fit",
          height: "3rem",
          boxSizing: "border-box",
          border: "5px solid #160048",
          borderRadius: "12px",
          color: "#FFFFFF",
          textAlign: "center",
          backgroundColor: "#160048",
          justifyContent: "center",
          fontSize: "0.8rem",
          fontWeight: "600",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "transparent",
            border: "5px solid #160048",
            color: "#160048",
          },
        }}
      >
        {" "}
        <SearchIcon />
      </Button>
    </>
  );
};

export default SearchButton;
