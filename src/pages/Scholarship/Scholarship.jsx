import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import CountryFilter from "./components/CountryFilter";
import AllScholarshipCard from "./components/AllScolarshipCard";
import DropDownFilter from "./components/DropDownFilter";
import BoldHeading from "../../components/Headings/BoldHeading";
import RadioGroupRating from "../../components/RadioGroupRating";
import { Helmet } from "react-helmet";

const Scholarship = () => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Explore scholarship opportunities for students based on merit, financial need, field of study, and other criteria to support your education expenses." />
        <meta name="google-adsense-account" content="ca-pub-3919517798801147"></meta>
      </Helmet>
      <Container
        sx={{
          padding: "5rem",
          display: "flex",
          flexDirection: "column",
          gap: "5rem",
          marginTop: "1rem",
          '@media (max-width:800px)':{
            paddingLeft:'1rem',
            paddingRight:'1rem'
          }
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <BoldHeading>Scholarships to study Abroad</BoldHeading>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "5rem", alignContent:"center", justifyContent:"center" }}>
            <CountryFilter />
            <DropDownFilter onFilterChange={handleFilterChange} />
          </Box>
        </Box>
        <section>
          <Box sx={{flexWrap:'wrap'}}>
            <Typography
            variant="h1"
             sx={{
          fontSize: "2.5rem",
          lineHeight: "3rem",
          letterSpacing: "0em",
          fontWeight: "bold",
          marginBottom: "1rem",
          paddingY:"3.5rem",
          '@media (max-width:800px)':{fontSize:'2rem'}
        }}>Found 527 Scholarships</Typography>
            <Divider sx={{ marginBottom: "10px" }} />
          </Box>
          <AllScholarshipCard filters={filters} />
          <Box sx={{ textAlign: "center", position: "relative", top: "2.5rem", }}>
            <RadioGroupRating />
          </Box>
        </section>
      </Container>
    </>
  );
};

export {Scholarship};
