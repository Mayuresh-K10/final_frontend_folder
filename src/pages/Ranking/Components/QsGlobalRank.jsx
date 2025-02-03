import { Box, Typography } from "@mui/material";
import React from "react";

const QsGlobalRank = () => {
  return (
    <Box
      sx={{
        fontFamily: "Poppins, sans-serif",
        fontStyle: "normal",
        background: "#ffffff",
        borderRadius: "1rem",
        padding: "1rem",
        fontSize: "0.9rem",
        marginTop: 2,
        color: "#2f1370",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <Typography
        sx={{
          width: 407,
          height: 23,
          color: "#210366",
          fontSize: 20,
          fontFamily: "Poppins",
          fontWeight: "600",
          wordWrap: "break-word",
        }}
      >
        IIM Bangalore QS Global Rankings
      </Typography>

      <Typography
        sx={{
          width: 924,
          height: 16,
          color: "#210366",
          fontSize: 14,
          fontFamily: "Poppins",
          fontWeight: "400",
          wordWrap: "break-word",
        }}
      >
        IIM Bangalore has secured 63rd position in QS Global Rankings 2022 in
        Business & Management Studies.
      </Typography>
    </Box>

  );
};

export default QsGlobalRank;
