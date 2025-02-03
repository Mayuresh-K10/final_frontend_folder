import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  MenuItem,
  Box,
  Typography,
  Button,
} from "@mui/material";

export default function Rejected() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",
        gap: "0.5rem",
        marginTop: "4rem",
        "@media (max-width: 600px)": {
          flexDirection: "column",
        },
      }}
    >
       
        
       <Typography
        sx={{ color: "#210366", fontSize: "18px", fontWeight: "500" }}
      > Your Photos might got rejected
          </Typography>

          <Typography
        sx={{ color: "#210366", fontSize: "14px", fontWeight: "400" }}
      > Do not share personal photographs.Share photos of Campus, events, Fests etc.
      </Typography>
    </Box>
  );
}
