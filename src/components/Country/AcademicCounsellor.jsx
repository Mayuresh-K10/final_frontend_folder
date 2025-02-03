import React from 'react';
import CollegeCounsellor from '../Cards/CollegeCounsellorCard';
import { Box, Typography, Stack } from '@mui/material';
import AcadCounsell from './Images/AcadCounsell.png';

const AcademicCounsellor = ({AcadCounsellor}) => {
  return (
    <>
      <Box sx={{
        boxShadow: '0px 0px 40px 0px #7B90FF26',
        borderRadius: '28px',
        padding: '20px',
        paddingY:"3.5rem"
      }}>
        <Stack
          sx={{
            display: "flex",
            flexDirection : "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
            width : "100%"
          }}>
          <Box
            sx={{
              fontFamily: 'Poppins',
              fontStyle: 'bold',
              fontWeight: '700',
              fontSize: '20px',
              color: '#210366',
              marginX: "auto",
              textAlign : "start"
            }}
          >
            <Typography variant='h5'
            sx={{
              fontWeight : 600
            }}
            >How Our Academic Counsellor Can Help You</Typography>
            <Typography variant='subtitle1'>Get Admission</Typography>
          </Box>

          <Stack
            direction='row'
            marginTop="1.5rem"
            sx={{
              width: "100%",
              justifyContent :"space-evenly",
              alignItems : "center",
              '@media (max-width: 770px)': {
              flexDirection : "column-reverse",
              justifyContent :" center",
              alignItems : "center",
              gap : "20px"
            },
            }}
          >
            <Box
              sx={{
                width: "770px",
                display : "flex",
                flexWrap : "wrap",
                '@media (max-width : 770px)' : {
                  
                  justifyContent : "center",
                  width: "fit-content",
                }
              }}
            >
              {AcadCounsellor.map((val, index) => {
                return (
                  <CollegeCounsellor
                    key={index}
                    img={val.img}
                    content={val.content}
                  />
                );
              })}
            </Box>
            <img src={AcadCounsell} alt="Counsellor"
              style={{
                height: "200xp",
                width: "200px"
              }} />
          </Stack>
        </Stack>
      </Box>
    </>
  )
}

export default AcademicCounsellor;