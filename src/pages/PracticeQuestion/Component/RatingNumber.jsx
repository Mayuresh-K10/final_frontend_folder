import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
const NumRating = () => {
  const NumRatings = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        padding: "0px ",
        paddingTop: "2rem !important",
      }}
    >
      <Box
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontStyle: "normal",
          background: "#ffffff",
          boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
          borderRadius: "1rem",
          padding: "1rem",
          fontSize: "0.9rem",

          color: "#2f1370",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          {" "}
          How Likely are you to recommend collegeCue.com to a friend or a
          colleague?
        </Typography>
        <Box
          sx={{
            display: "flex",

            justifyContent: "space-evenly",
            width: "100%",
          }}
        >
          {NumRatings.map((Nums, index) => {
            return (
              <Button
                sx={{
                  borderRadius: "50%",
                }}
                variant="outlined"
                key={index}
              >
                {Nums}
              </Button>
            );
          })}
        </Box>

        <Grid
          item
          xs={4}
          md={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            fontFamily: "Poppins, sans-serif",
            fontStyle: "normal",
            justifyContent: "space-between",
          }}
        >
          <Typography>Not So Likely</Typography>

          <Typography>High Likely </Typography>
        </Grid>
      </Box>
    </Container>
  );
};
export default NumRating;
