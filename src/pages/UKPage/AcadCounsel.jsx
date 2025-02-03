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
          <Typography variant='inherit' sx={{textTransform: 'uppercase'}}>study in uk: </Typography>
          <Typography variant='inherit' sx={{fontWeight: '600', textTransform: 'uppercase'}}>find universities, costs, courses, visa, scholarships, placements</Typography>
        </Stack>
        <Typography variant='inherit' sx={{marginTop: '2rem', fontSize: '14px', fontWeight: '600'}}>Studying in UK is popular for the undisputed reputation of the universities in higher education and the legacy of welcoming international students. The United Kingdom is one of the prominently celebrated study-abroad destinations that attracts millions of international students representing over 100 countries across the globe.</Typography>
        <Typography variant='inherit' sx={{marginTop: '1rem', fontSize: '14px', fontWeight: '600'}}>UK is often counted in the list of the 3 most coveted countries for international students, including Canada and USA. The UK has over 150 top universities in the UK ranking globally for their curriculum and research methods.</Typography>
        <Typography variant='inherit' sx={{marginTop: '1rem', fontSize: '14px', fontWeight: '600'}}>As per the survey results of India Today, UK ranked amongst the most preferred international destinations among Indian students. As per the latest report, there are 679,970 international students pursuing studies in UK according to statistics from the Higher Education Statistics Agency.</Typography>
      </Box>
    </>
  )
}

export default AcadCounsel;
