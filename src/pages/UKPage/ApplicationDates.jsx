import React from 'react';
import CollegeApplication from '../../components/Cards/CollegeApplicationCard';
import {ApplicationDatesData} from './Data';
import { Box, Typography, Stack } from '@mui/material';

const ApplicationDates = () => {
  return (
    <>
      <Box sx={{marginTop: '2rem'}}>
        <Typography sx={{
        fontFamily: 'Poppins',
        fontStyle: 'bold',
        fontWeight: '700',
        fontSize: '30px',
        color: '#41355D'
        }}>Application Dates</Typography>
        <Box sx={{
        backgroundColor: '#F3EEFF',
        borderRadius: '28px',
        marginTop: '1rem',
        marginLeft: '1rem',
        padding: '20px'
        }}>
        <Box sx={{
            display: 'flex',
            flexDirection: "row",
            width: "100%",
            margin: "0px",
            justifyContent: "space-between",
            marginBottom: "10px",
            padding: '0px 40px 0px 40px',
            fontFamily: 'Poppins',
            fontWeight: '700',
            fontStyle: 'bold',
            fontSize: '24px',
            color: '#210366',
        }}>
            <Typography variant='inherit' sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#D8DEFF',
            width: '130px',
            height: '40px',
            borderRadius: '12px',
            }}>Univeristy</Typography>
            <Box sx={{width: '750px', display: 'flex', margin: '0px', justifyContent: 'space-between'}}>
            <Typography variant='inherit' sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#D8DEFF',
            width: '130px',
            height: '40px',
            borderRadius: '12px',
            }}>Events</Typography>
            <Typography variant='inherit' sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#D8DEFF',
            width: '300px',
            height: '40px',
            borderRadius: '12px',
            }}>Application Start Date</Typography>
            <Typography variant='inherit' sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#D8DEFF',
            width: '300px',
            height: '40px',
            borderRadius: '12px',
            }}>Application End Date</Typography>
            </Box>
        </Box>
        <Stack>
            {ApplicationDatesData.map((value, index) => {
            return (
                <CollegeApplication
                key={index}
                img={value.img}
                university={value.university}
                events={value.events}
                start={value.start}
                end={value.end}
                />
            )
            })}
        </Stack>
        </Box>
      </Box>
    </>
  )
}

export default ApplicationDates;
