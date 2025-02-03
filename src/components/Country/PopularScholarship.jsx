import React from 'react';
import CollegeScholarship from '../Cards/CollegeScholarshipCard';
import { Box, Typography, Stack } from '@mui/material';

const PopularScholarship = ({PopularScholarshipData=[], countryName}) => {
  return (
    <>
      <Box sx={{paddingY:"3.5rem"}}>
        <Typography sx={{
          fontFamily: 'Poppins',
          fontStyle: 'bold',
          fontWeight: '700',
          fontSize: '30px',
          color: '#41355D'
        }}>Popular Scholarship For {countryName}</Typography>
        <Stack direction="row" flexWrap="wrap" alignItems="center" justifyContent="center">
          {PopularScholarshipData.map((value, index) => {
            return (
              <CollegeScholarship
                key={index}
                heading={value.heading}
                title={value.title}
                content1={value.content1}
                content2={value.content2}
                content3={value.content3}
                content4={value.content4}
                button={value.button}
              />
            )
          })}
        </Stack>
      </Box>
    </>
  )
}

export default PopularScholarship;
