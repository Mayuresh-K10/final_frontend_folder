import React from 'react';
import CollegeExams from '../../components/Cards/CollegeExamsCard';
import {ExamsData} from './Data';
import { Box, Typography, Stack } from '@mui/material';

const Exams = () => {
  return (
    <>
      <Box sx={{marginTop: '20px'}}>
        <Typography sx={{
        fontFamily: 'Poppins',
        fontStyle: 'bold',
        fontWeight: '700',
        fontSize: '30px',
        color: '#41355D'
        }}>Exams For USA</Typography>
      </Box>
      <Stack direction="row" flexWrap="wrap" alignItems="center" justifyContent="center">
        {ExamsData.map((value, index) => {
        return (
            <CollegeExams
            key={index}
            img={value.img}
            heading={value.heading}
            content={value.content}
            link={value.link}
            />
        )
        })}
      </Stack>
    </>
  )
}

export default Exams;
