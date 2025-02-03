import React from "react";
import { Box, Button, Typography } from "@mui/material";
import img6 from "../../assets/NIT_TRICHY__Tiruchirappalli-removebg-preview.png";

const buttonsData = [
  { text: "Home" },
  { text: "Faculty" },
  { text: "Placement" },
  { text: "Scholarship" },
  { text: "Reviews" },
  { text: "Hostel" },
  { text: "News" },
  { text: "Ranking" },
  { text: "Cutoff" },
  { text: "Gallery" },
];

export default function RightSection() {
  return (
    <Box sx={{ width: "100%", boxShadow: "#7B90FF26" }}>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "4rem", height: "4rem", marginTop: "0.5rem" }}>
          <img src={img6} alt="" srcSet="" style={{ objectFit: "cover" }} />
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "1.2rem",
              fontWeight: "600",
              color: "#210366",
            }}
          >
            NIT TRICHY, Tiruchirappalli
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {buttonsData.map((button, index) => (
          <Button
            key={index}
            sx={{
              padding: "0.5rem",
              borderRadius: "2rem",
              border: "2px solid #7B90FF",
              color: "#210366",
              margin: "0.2rem",
            }}
          >
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "600",
                textTransform: "capitalize",
                textAlign: "center",
              }}
            >
              {button.text}
            </Typography>
          </Button>
        ))}
      </Box>
    </Box>
  );
}
