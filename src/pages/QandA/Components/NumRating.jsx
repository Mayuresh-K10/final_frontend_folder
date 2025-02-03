import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";

const NumRating = () => {
  const NumRatings = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  return (
    <Container>
      <Box
        sx={{
          fontFamily: "Roboto, sans-serif",
          fontStyle: "normal",
          borderRadius: "1rem",
          padding: "1rem",
          fontSize: "0.9rem",
          marginTop: "2rem",
          color: "#2f1370",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            marginBottom: "1rem",
          }}
        >
          How Likely are you to recommend collegecue.com to a friend or a colleague?
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {NumRatings.map((Nums, index) => (
            <Grid item key={index}>
              <Button
                sx={{
                  width: "3rem",
                  height: "3rem",
                  borderRadius: "50%",
                }}
                variant="outlined"
              >
                {Nums}
              </Button>
            </Grid>
          ))}
        </Grid>
        <Grid container justifyContent="space-between" sx={{ marginTop: "1rem" }}>
          <Grid item>
            <Typography>Not So Likely</Typography>
          </Grid>
          <Grid item>
            <Typography>High Likely</Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default NumRating;
