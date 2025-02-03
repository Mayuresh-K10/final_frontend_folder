import React from "react";
import { Box, Button, Typography } from "@mui/material";
function HeadingSection() {
    const topics = [
        "IIT Guwahati",
        "MBA/PGDM",
        "XLRI XSM Jamshedpur",
        "BE/B.Tech",
        "TAPMI Manipal",
        "ME/M.Tech",
        "PUMBA Pune",
      ];
    
  return (
    <Box>
    <Box>
      <Typography
        sx={{
          color: "#2F1370",
          fontSize: "1.5rem",
          fontStyle: "normal",
          fontWeight: "600",
        }}
      >
        Trending Topics
      </Typography>
    </Box>

    <Box>
      {topics.map((topic, index) => (
        <Button
          key={index}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "1rem",
            border: "2px solid #7B90FF",
            background: "#FFFFFF",
            margin:"0.3rem 0.2rem"
          }}
        >
          {topic}
        </Button>
      ))}
    </Box>
    </Box>
  )
}

export default HeadingSection