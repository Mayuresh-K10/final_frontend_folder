import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Box, Button, Grid, Typography } from "@mui/material";
import { countriesData } from "./Data";
import "./DestinationPlace.css";

function CountryCard({ countryName, countryImage }) {
  return (
    <Box sx={{ border: "1px solid #ddd", borderRadius: "8px", overflow: "hidden", width: "150px" }}>
      <img
        src={countryImage}
        alt={countryName}
        style={{
          width: "100%",      // Fixed width for image
          height: "85px",     // Fixed height for image
          objectFit: "cover",  
        }}
      />
      <Typography
        variant="body1"
        sx={{
          width: "100px",          // Fixed width for country name
          textAlign: "center",     
          overflow: "hidden",      
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",    
          margin: "0 auto",       
          paddingTop: "0.5rem",
        }}
      >
        {countryName}
      </Typography>
    </Box>
  );
}

function CountriesList() {
  const [showAll, setShowAll] = useState(false);
  const displayedCountries = showAll ? countriesData : countriesData.slice(0, 6);

  return (
    <div style={{ paddingY: "5rem" }}>
      <Grid container spacing={4}>
        {displayedCountries.map((val, index) => (
          <Grid item xs={6} sm={4} md={2.4} lg={2} key={index}>
            <NavLink
              to={`/study-abroad/${val.countryName.toLowerCase().replace(/\s+/g, "-")}`}
              style={{ textDecoration: "none" }}
            >
              <CountryCard countryName={val.countryName} countryImage={val.countryImage} />
            </NavLink>
          </Grid>
        ))}
      </Grid>

      {/* Show More / Show Less Button */}
      <Box sx={{ textAlign: "center", marginY: "2rem" }}>
        <Button variant="contained" onClick={() => setShowAll((prev) => !prev)}>
          {showAll ? "Show Less" : "Show More"}
        </Button>
      </Box>
    </div>
  );
}

export default CountriesList;
