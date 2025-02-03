import React from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import img1 from "../../assets/Get_Answers3.png";

export default function Trending() {
  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          padding: "1rem",
          borderRadius: "1rem",
          background: "#FFFFFF",
          margin: "0.2rem",
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={img1}
            alt="question"
            style={{
              objectFit: "cover",
            }}
          />
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              color: "#210366",
              fontSize: "1.5rem",
              fontStyle: "normal",
              fontWeight: "600",
            }}
          >
            Get Answers on Test Preparation Admission & Campus Life
          </Typography>
        </Box>
        <Box sx={{ width: "100%", padding: "1rem" }}>
          <TextField
            fullWidth
            multiline
            label="Write a comment"
            rows={4}
            variant="outlined"
          />
          <Button
            variant="contained"
            sx={{
              width: "100%",
              padding: "0.5rem",
              borderRadius: "1rem",
              backgroundColor: "#FF7900",
              marginTop: "1rem",
            }}
          >
            Add Question
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
