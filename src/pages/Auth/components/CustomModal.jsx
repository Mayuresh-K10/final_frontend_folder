import React from "react";
import LoginCard from "./LoginCard";
import { Modal, Backdrop, Fade, Typography, Box } from "@mui/material";
const CustomModal = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          padding: "2rem",
          outline: "none",
          maxHeight: "80vh", 
          overflowY: "auto", 
          width: "80%", 
        }}
      >
        <LoginCard />
      </Box>
    </Modal>
  );
};

export default CustomModal;
