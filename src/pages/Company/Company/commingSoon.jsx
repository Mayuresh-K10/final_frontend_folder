import React, { useState } from "react";
import { Box, Card, Popover } from "@mui/material";

const CommingSoon = () => {
  return (
    <Box
      sx={{
        marginTop: "200px",
        marginRight: "25px",
        
      }}
    >
      <div style={{backgroundColor: "#f0f5f3", zIndex:"99" }} className="remove-account-popup text-center modal-content">
        

        

        
        <p>COMMING SOON...</p>
        
      </div>
    </Box>
  );
};

export default CommingSoon;
