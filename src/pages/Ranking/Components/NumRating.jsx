import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
const NumRating = () => {
  const NumRatings = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return (
    <Container>
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
          }}
        >

        </Grid>
        <Typography
          sx={{
            textAlign: "center",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "bold",
            fontSize: "1.2rem",
          }}
        >
          {" "}
          How Likely are you to recommend Collegecue.com to a friend or a
          colleague?
        </Typography>
        <Box sx={{ display: "flex", gap: 6 }}>
          {NumRatings.map((Nums, index) => {
            return (
              <Button
                sx={{
                  width: 66,
                  height: 66,
                  borderRadius: 66 / 2,
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
          xs={6}
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
