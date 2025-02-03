import React from 'react';
import CanadaCollegeRanking from '../../components/Cards/CanadaCollegeRanking';
import {CollegeRankingData} from './Data';
import { Box, Typography, Stack } from '@mui/material';

const CollegeRanking = () => {
  return (
    <>
      <Box sx={{marginTop: '2rem'}}>
        <Typography sx={{
        fontFamily: 'Poppins',
        fontStyle: 'bold',
        fontWeight: '700',
        fontSize: '30px',
        color: '#41355D'
        }}>Colleges Ranking 2023</Typography>
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
            }}>College</Typography>
            <Box sx={{width: '400px', display: 'flex', margin: '0px', justifyContent: 'space-between'}}>
            <Typography variant='inherit' sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#D8DEFF',
            width: '130px',
            height: '40px',
            borderRadius: '12px',
            }}>Ranking</Typography>
            <Typography variant='inherit' sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#D8DEFF',
            width: '130px',
            height: '40px',
            borderRadius: '12px',
            }}>Streams</Typography>
            </Box>
        </Box>
        <Stack>
            {CollegeRankingData.map((value, index) => {
            return (
                <CanadaCollegeRanking
                key={index}
                img={value.img}
                college={value.college}
                ranking={value.ranking}
                streams={value.streams}
                />
            )
            })}
        </Stack>
        </Box>
      </Box>
    </>
  )
}

export default CollegeRanking;
