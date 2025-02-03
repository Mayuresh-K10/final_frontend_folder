import React from "react";
import { Box, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const Popup = ({ children, onClose }) => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 9999,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: `
          linear-gradient(
            0deg,
            rgba(0,0,0,0.5),
            rgba(0, 0, 0, 0.5)
          )`,
      }}
    >
      <Box sx={{ position: "relative" }}>
        {children}
        <Button
          onClick={onClose}
          sx={{ position: "absolute", right: "1rem", top: "1rem" }}
        >
          <CloseIcon />
        </Button>
      </Box>
    </Box>
  );
};

export default Popup;
