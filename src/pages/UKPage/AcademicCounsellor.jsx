import React from 'react';
import CollegeCounsellor from '../../components/Cards/CollegeCounsellorCard';
import { AcadCounsellor } from './Data';
import { Box, Stack } from '@mui/material';
import AcadCounsell from '../CanadaPage/images/AcadCounsell.png';

const AcademicCounsellor = () => {
  return (
 
      <Box sx={{
        boxShadow: '0px 0px 40px 0px #7B90FF26',
        borderRadius: '28px',
        padding: '2rem',
        marginY: '5rem',
      }}>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "10px",
            width: "100%"
          }}>
          <Box
            sx={{
              
              fontStyle: 'bold',
              fontWeight: '700',
              fontSize: '20px',
              color: '#210366',
              marginX: "auto",
              textAlign: "start"
            }}
          >
            <h1
              style={{
                fontWeight: 600,
                fontSize:'24px',
                color:'#48639e'
              }}
            >How Our Academic Counsellor Can Help You : Get Admission</h1>
          
          </Box>

          <Stack
            direction='row'
            marginTop="1.5rem"
            sx={{
              width: "100%",
              justifyContent: "space-around",
              alignItems: "center",
              '@media (max-width: 770px)': {
                flexDirection: "column-reverse",
                justifyContent: " center",
                alignItems: "center",
                gap: "20px"
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                '@media (max-width : 770px)': {
                  width: "auto",
                  justifyContent: "center"
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
            <Box sx={{ width:"70%"}}>
            <img src={AcadCounsell} alt="@Bharat-Tech"
              style={{
                height: "100%",
                width: "100%",
                objectFit:"cover"
              }} />
            </Box>
            
          </Stack>
        </Stack>
      </Box>

  )
}

export default AcademicCounsellor;