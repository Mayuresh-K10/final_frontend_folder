import React from "react";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import RatingBox from "./RatingBox";

function IIMBangaloreRating() {
  return (
    <Box sx={{
      borderRadius: "28px",
      minHeight: "193px",
      width: "100%",
      boxShadow: "0px 2px 8px rgba(99, 99, 99, 0.2)",
      display: "flex",
      flexDirection: "column",
      margin: "1rem 0",
      bgcolor: "#f7f7f7", // Light background color
      padding: "20px",
      boxSizing: "border-box", // Include padding in width calculation
    }}>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "700",
          color: "#210366",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        How likely are you to recommend to a friend or a colleague?
      </Typography>

      <Container>
        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center", // Center the rating boxes
          }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
            <RatingBox key={value}>{value}</RatingBox>
          ))}
        </Box>
      </Container>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: '14px',
            fontWeight: "500",
            color: "#555",
            textAlign: "center",
            flex: "1", // Equal width for both labels
          }}
        >
          Not so likely
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: '14px',
            fontWeight: "500",
            color: "#555",
            textAlign: "center",
            flex: "1", // Equal width for both labels
          }}
        >
          Highly likely
        </Typography>
      </Box>
    </Box>
  );
}

export default IIMBangaloreRating;
