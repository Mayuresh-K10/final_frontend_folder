import React from "react";
import { Box, Container } from "@mui/material";

export default function Review() {
  return (
    <Container maxWidth="xl">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box marginTop="1rem" display="flex" flexDirection="column">
          Sorry!! No College Rating is available right now.
        </Box>
      </Box>
    </Container>
  );
}
