import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

// Keyframes for animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const NumRating = () => {
  const NumRatings = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  // Styled components for custom styles
  const StyledBox = styled(Box)`
    font-family: "Poppins, sans-serif";
    font-style: normal;
    background: #ffffff;
    box-shadow: 0px 0px 2.5rem rgba(123, 144, 255, 0.15);
    border-radius: 1rem;
    padding: 1rem;
    font-size: 0.9rem;
    color: #2f1370;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    animation: ${fadeIn} 1s ease;
  `;

  const AnimatedButton = styled(Button)`
    width: 40px;
    height: 40px;
    border-radius: 66px;
    transition: all 0.3s ease;
    &:hover {
      background-color: #2f1370;
      color: #ffffff;
    }
  `;

  const AnimatedTypography = styled(Typography)`
    font-family: "Poppins, sans-serif";
    font-weight: bold;
    animation: ${fadeIn} 1s ease;
  `;

  return (
    <Container>
      <StyledBox>
        <Grid
          item
          xs={6}
          md={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: 1,
            fontFamily: "Poppins, sans-serif",
            fontStyle: "normal",
            marginLeft: "1rem",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }}>Intership: 10/10 </Typography>
          <Typography sx={{ fontWeight: "bold" }}>
            Campus Life: 10/10{" "}
          </Typography>
        </Grid>
        <AnimatedTypography
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          How Likely are you to recommend Collegecue.com to a friend or a
          colleague?
        </AnimatedTypography>
        <Box sx={{ display: "flex", gap: 0.7, flexWrap: "wrap" }}>
          {NumRatings.map((Nums, index) => {
            return (
              <AnimatedButton variant="outlined" key={index}>
                {Nums}
              </AnimatedButton>
            );
          })}
        </Box>
        <Grid
          item
          xs={6}
          md={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            fontStyle: "normal",
            justifyContent: "space-between",
          }}
        >
          <AnimatedTypography>Not So Likely</AnimatedTypography>
          <AnimatedTypography>Highly Likely </AnimatedTypography>
        </Grid>
      </StyledBox>
    </Container>
  );
};

export default NumRating;
