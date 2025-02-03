import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

export default function SearchBar(props) {
  return (
    <Box
      sx={{
        height: "56px",
        background: "#FFFFFF",
        boxShadow: "0px 0px 40px rgba(123, 144, 255, 0.15)",
        borderRadius: "8px",
        display: "flex",
        maxWidth: "500px ",
      }}
    >
      <IconButton
        type="button"
        sx={{
          color: "rgba(33, 3, 102, 0.59)",
        }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
      <input
        style={{
          color: "rgba(33, 3, 102, 0.83)",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "21px",
          border: "none",
          outline: "none", // Remove focus outline
        }}
        placeholder={props.placeholder}
        inputProps={{ "aria-label": props.placeholder }}
      />
    </Box>
  );
}
