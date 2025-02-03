import React from 'react';
import { Typography, Box, Link, Stack } from '@mui/material';

const AcadCounsel = () => {
  return (
    <>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "white",
        marginTop: '1rem', 
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontStyle: 'bold',
        fontSize: '20px',
        color: '#210366',
        marginLeft: '2rem'
      }}>
        <Stack direction="row" spacing={1} sx={{font: 'Inter'}}>
          <Typography variant='inherit' sx={{textTransform: 'uppercase'}}>study in usa for indian students:</Typography>
          <Typography variant='inherit' sx={{fontWeight: '600', textTransform: 'uppercase'}}>find universities, costs, courses, scholarships, placements</Typography>
        </Stack>
        <Typography variant='inherit' sx={{marginTop: '2rem', fontSize: '14px', fontWeight: '600'}}>USA is a coveted destination among international students, known for its ground-breaking research, innovation and entrepreneurship opportunities. USA ranks 3rd in the world in attracting international students to study abroad after Canada and UAE.</Typography>
        <Typography variant='inherit' sx={{marginTop: '1rem', fontSize: '14px', fontWeight: '600'}}>While it is next to impossible to find the real factor that drives the student’s passion towards the country, there are several reasons that make US a preferred destination for international students. From being home to the top 17 institutes out of the major 50 top universities in the world (QS World University Rankings 2023) to an endless variety of courses, diverse environment, and employment opportunities to choose from, the USA as a country is a package that offers it all.</Typography>
        <Typography variant='inherit' sx={{marginTop: '1rem', fontSize: '14px', fontWeight: '600'}}>Indian students make up around 21% of the more than a million international students studying in the US. Nearly 200,000 Indian students choose to pursue higher education in the United States in the academic year 2021–2022, up 19% from the previous year (2020–2021), according to the Open Doors Report published in November, 2022.</Typography>
      </Box>
    </>
  )
}

export default AcadCounsel;
