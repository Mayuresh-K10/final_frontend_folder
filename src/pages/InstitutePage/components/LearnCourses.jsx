import React from 'react';
import HostelLearnCourses from '../../../components/Cards/HostelLearnCoursesCard';
import {HostelLearnCoursesData} from '../../Hostel/Data';
import { Box, Typography, Stack } from '@mui/material';

const LearnCourses = () => {
  return (
    <>
      <Box sx={{
        marginTop: '2rem', 
        marginBottom: '2rem',
        boxShadow: '0px 0px 40px 0px #7B90FF26',
        borderRadius: '28px',
        padding: '20px'
      }}>
        <Typography sx={{
            fontFamily: 'Poppins',
            fontSize: 'bold',
            fontWeight: '700',
            fontSize: '20px',
            color: '#210366',
        }}>Learn more about the courses</Typography>
        {HostelLearnCoursesData.map((item, id) => {
          return (
            <HostelLearnCourses
              key={id}
              {...item}
            />
          )
        })}
      </Box>
    </>
  )
}

export default LearnCourses;
