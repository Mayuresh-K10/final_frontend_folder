import { Button } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchButtonSmall = () => {
  return (
    <>
      <Button
        variant="outlined"
        sx={{
          width: "2rem",
          height: "2rem",
          boxSizing: "border-box",
          border: "5px solid #7B90FF",
          borderRadius: "12px",
          color: "#FFFFFF",
          textAlign: "center",
          backgroundColor: "#7B90FF",
          justifyContent: "center",
          fontFamily: "Poppins",
          fontSize: "0.8rem",
          fontWeight: "600",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#FFFFFF",
            border: "5px solid #7B90FF",
            color: "#7B90FF",
          },
        }}
      >
        {" "}
        <SearchIcon />
      </Button>
    </>
  );
};

export default SearchButtonSmall;
