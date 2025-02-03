import { Box, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import FilterButton from "../../../components/Buttons/FilterButton";

const FilterButtons = () => {
  const filters = [
    "Engineering",
    "Management",
    "Science",
    "Commerce",
    "Arts",
    "Computer Applications",
    "Medical",
    "Pharmacy",
    "Law",
    "Agriculture",
    "Hotel Management",
    "Architecture",
    "Mass Communications",
    "Dental",
    "Design",
    "Education",
    "Vocational Courses",
    "Aviation",
    "Veterinary Sciences",
    "Science",
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

  const displayedFilters = showAll ? filters : filters.slice(0, 5);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "start",
        height: "auto",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      {displayedFilters.map((filter, index) => {
        return <FilterButton key={index}>{filter}</FilterButton>;
      })}
      {!showAll && (
        <Button sx={{ "@media (min-width: 769px)": { display: "none" } }} onClick={() => setShowAll(true)}>View More</Button>
      )}
      {showAll && (
        <Button sx={{ "@media (min-width: 769px)": { display: "none" } }} onClick={() => setShowAll(false)}>View Less</Button>
      )}
    </Box>
  );
};

export default FilterButtons;