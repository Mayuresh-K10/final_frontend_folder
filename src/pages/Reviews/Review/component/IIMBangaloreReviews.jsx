import React from "react";
import { Box, Button, Container, Divider, Typography } from "@mui/material";
import Review from "./Reviews";
import MostPopularTags from "./MostPopularTags";
function IIMBangaloreReviews() {
  let tag = ["Stream", "Course Tag", "Course", "Batch"];

  return (
    <Box
      sx={{
        borderRadius: "1rem",
        marginLeft: "20px",
        marginBottom: "10px",
        width: "90%",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        boxSizing: "border-box",
        padding: "1rem",
        "@media (max-width:600px)": {
          marginLeft: "0px",
          padding: "0px",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "1.5rem",
          margin: "1rem 0",
          fontWeight: "700",
          color: "#210366",
        }}
      >
        IIM Bangalore Reviews
      </Typography>
      <Container>
        <Divider
          sx={{
            border: "1px solid rgba(123, 144, 255, 0.15)",
          }}
        />
      </Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "1rem",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.1rem", // Responsive font size
            fontWeight: "700",
            color: "#210366",
          }}
        >
          Filter By
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {tag.map((value) => (
            <Button
              key={value}
              variant="contained"
              sx={{
                borderRadius: "1rem",
                textTransform: "none",
                margin: "0.5rem 0.5rem",
                fontSize: "1rem", // Responsive font size
                fontWeight: "700",
                color: "#210366",
                backgroundColor: "transparent",
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#7B90FF",
                  color: "white",
                },
              }}
            >
              {value}
            </Button>
          ))}
        </Box>
      </Box>
      <MostPopularTags />
      <Container>
        <Typography
          sx={{
            fontSize: "2rem", // Responsive font size
            fontWeight: "700",
            lineHeight: "2rem",
            color: "#210366",
            margin: "1.5rem",
          }}
        >
          74 Reviews Found
        </Typography>
      </Container>
      <Review />
    </Box>
  );
}

export default IIMBangaloreReviews;
