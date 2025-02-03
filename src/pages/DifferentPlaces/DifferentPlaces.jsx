import React, { useState } from "react";
import { Container, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import TopCollegeHeading from "../../components/Headings/PageHeading";
import Colleges from "./Colleges";
import DropDown from "./DropDown";

const DifferentPlaces = () => {
  const { country, city } = useParams();
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
  };

  return (
    <Container maxWidth="lg" sx={{ marginY: "3rem" }}>
      <TopCollegeHeading text={`List of colleges in ${city}`} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "2rem",
          marginY: "2rem",
          alignItems: "flex-start",
        }}
      >
        <DropDown onFilterChange={handleFilterChange} />
        <Colleges
          country={country}
          city={city}
          selectedFilters={selectedFilters}
        />
      </Box>
    </Container>
  );
};

export {DifferentPlaces};
