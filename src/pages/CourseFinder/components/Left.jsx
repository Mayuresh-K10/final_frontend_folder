import React,{useState} from "react";
import { Box, Grid } from "@mui/material";
import AllAnsSet from "../Left/AllAnswer";
import AllReviewCards from "../Right/MainCard";
import AdSenseComponent from "../../../utils/AdSenseComponent";

const Left = () => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const handleFilterChange = (filters) => {
    setSelectedFilters(filters);
    // console.log("on change filter", filters);
  };
  return (
    <Grid container spacing={2}>
      <Grid item md={3} direction="column">
      <AllAnsSet
          onFilterChange={(filters) => handleFilterChange(filters)}
        />
        <AdSenseComponent />
      </Grid>
      <Grid item md={9}>
        <Box sx={{ marginLeft: "15px" }}>
          <AllReviewCards
            selectedFilters={selectedFilters}
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Left;
