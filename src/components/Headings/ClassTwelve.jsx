import React from "react";
import { Container, Box } from "@mui/material";

const Classtwelve = () => {
  return (
    <Container>
      <Box sx={{ marginTop: "4rem" }}>
        <Box
          sx={{
            height: "21px",
            width: "307px",
            borderRadius: "null",
            fontFamily: "Poppins",
            fontSize: "20px",
            fontWeight: "600",
            lineHeight: "21px",
            letterSpacing: "0em",
            textAlign: "left",
            color: "#210366",
            
            "@media (max-width: 740px)": {
              textAlign: "center",
              marginX : 'auto'
            },
          }}
        >
          Top Class 12 Concept Articles
        </Box>
      </Box>
    </Container>
  );
};

export default Classtwelve;
