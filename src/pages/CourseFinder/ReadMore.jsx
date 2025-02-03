import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

function ReadMore({ text, maxLength }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Box>
      <Typography
        sx={{
          color: "#210366",
          fontSize: isMobile ? 12 : 14,
          fontWeight: "500",
          wordWrap: "break-word",
        }}
      >
        {isExpanded
          ? text
          : text.slice(0, isMobile ? maxLength / 2 : maxLength)}
        {text.length > maxLength && (
          <Typography
            onClick={toggleReadMore}
            sx={{
              color: "#FF7900",
              fontSize: 12,
              fontWeight: "600",
              textDecoration: "underline",
              wordWrap: "break-word",
              display: isExpanded ? "inline" : "block",
            }}
          >
            {isExpanded ? "Read less" : "Read more"}
          </Typography>
        )}
      </Typography>
    </Box>
  );
}

export default ReadMore;
