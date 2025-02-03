import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container, Grid } from '@mui/material';

import ApplySection from './components/ApplySection';
import TopNavbar from './components/TopNavbar';


import InstituteHeroSection from './components/InstituteHeroSection';

const InstitutePage = () => {

  
  return (
    <>
      <Container maxWidth="xl">
        <Box sx={{ overflow: "hidden", paddingY:"3.5rem"}} >
          <InstituteHeroSection/>
          <TopNavbar />
          <Grid container spacing={1}>
            <Grid item xs={12} md={8} lg={8}>
              <Box sx={{ marginY: "1rem" }}>
                <Outlet />
              </Box>
              
            </Grid>
            <Grid item xs={12} sm={4}>
              <ApplySection />
            </Grid>
          </Grid>
         
        </Box>
      </Container>
    </>
  );
}

export default InstitutePage;
