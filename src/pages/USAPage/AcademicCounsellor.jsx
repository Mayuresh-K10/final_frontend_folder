import React from 'react';
import CollegeCounsellor from '../../components/Cards/CollegeCounsellorCard';
import {AcadCounsellor} from './Data';
import { Box, Typography, Stack } from '@mui/material';
import AcadCounsell from '../CanadaPage/images/AcadCounsell.png';

const AcademicCounsellor = () => {
  return (
    <>
      <Box sx={{
        marginTop: '2rem',
        boxShadow: '0px 0px 40px 0px #7B90FF26',
        borderRadius: '28px',
        padding: '20px',
        marginBottom: '2rem',
      }}>
        <Stack direction="row" sx={{
          display: "flex",
          flexDirection: "row",
          margin: "0px",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}>
          <Stack sx={{
            fontFamily: 'Poppins',
            fontStyle: 'bold',
            fontWeight: '700',
            fontSize: '20px',
            color: '#210366'
          }}>
            <Typography variant='inherit'>How Our Academic Counsellor Can Help You</Typography>
            <Typography variant='inherit'>Get Admission</Typography>
            <Stack direction='row' flexWrap='wrap'  marginTop="1.5rem">
            {AcadCounsellor.map((val,index)=>{
              return(
                <CollegeCounsellor
                  key={index}
                  img={val.img}
                  content={val.content}
                />
              );
              })}
            </Stack>
          </Stack>
          <img src={AcadCounsell} alt="Counsellor" style={{marginRight: '2rem'}} />
        </Stack>
      </Box>
    </>
  )
}

export default AcademicCounsellor;