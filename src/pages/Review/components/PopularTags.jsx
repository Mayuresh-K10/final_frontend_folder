import { Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import FilterButton from "../../../components/Buttons/FilterButton";

const PopularTags = () => {
  const filters = [
    "All Country",
    "UK",
    "Canada",
    "Australia",
    "USA",
    "Netherlands",
    "Germany",
    "Ireland",
    "Sweden",
    "New Zealand",
    "Singapore",
    "France",
    "Hong Kong",
    "Malaysia",
    "UAE",
  ];

  const [showAll, setShowAll] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setShowAll(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const displayedFilters = showAll ? filters : filters.slice(0, 6);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        height: "auto",
        flexWrap: "wrap",
        gap: "1rem",
        marginX:"1rem",
        justifyContent: "center",
        "@media (max-width: 600px)": {
          justifyContent: "flex-start",
          
        },
      }}
    >
      {displayedFilters.map((filter, index) => {
        return <FilterButton key={index}>{filter}</FilterButton>;
      })}
      {!showAll && (
        <Button sx={{ "@media (min-width: 769px)": { display: "none" } }} onClick={() => setShowAll(true)}>View More</Button>
      )}
    </Box>
  );
};

export default PopularTags;