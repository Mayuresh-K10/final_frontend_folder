import React, { useState, useEffect } from "react";
import { Box,Button } from "@mui/material";
import countryData from "../utils/coutryfilters";
import CountryFilterButton from "./CountryFilterButton";
const CountryFilter = () => {
  const [showAll, setShowAll] = useState(window.innerWidth > 780);
  useEffect(() => {
    const handleResize = () => {
      setShowAll(window.innerWidth > 780);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedCountries = showAll ? countryData : countryData.slice(0, 5);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "auto",
        flexWrap: "wrap",
        gap: "0.5rem",
        '@media (max-width:800px)':{width:'80%'},
      }}
    >
      {displayedCountries.map((country, index) => {
        return <CountryFilterButton key={index} country={country} />;
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

export default CountryFilter;
