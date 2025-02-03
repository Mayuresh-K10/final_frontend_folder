import React from "react";
import { Box, Typography } from "@mui/material";

function VsCard() {
  return (
    <Box
      display="flex"
      sx={{
        // height: "430px",
        margin: "20px 0px 20px 0px",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          background: "#D8DEFF",
          borderRadius: "50%",
          minHeight: "4rem",
          minWidth: "4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{}}>Vs</Typography>
      </Box>
    </Box>
  );
}

export default VsCard;
