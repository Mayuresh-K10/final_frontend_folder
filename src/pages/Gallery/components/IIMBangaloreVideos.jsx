import { Box, Container, Typography } from "@mui/material";
import React from "react";
function IIMBangaloreVideos() {
  return (
    <Box
      sx={{
        borderRadius: "28px",
        minHeight: "220px",
        width: "100%",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        display: "flex",
        flexDirection: "column",
        margin: "1rem 0",
      }}
    >
      <Container>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight: "700",
            lineHeight: "36px",
            color: "#210366",
            letterSpacing: "0em",
            margin: "0.8rem",
          }}
        >
          IIM bangalore Videos
        </Typography>
      </Container>
    </Box>
  );
}

export default IIMBangaloreVideos;
