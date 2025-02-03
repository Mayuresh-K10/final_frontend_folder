import React from 'react';
import CollegeChoose from '../../components/Cards/CollegeChooseCard';
import {CollegeChooseData} from './Data';
import {Box, Typography, Stack } from '@mui/material';
import ViewMoreButton from "../../components/Buttons/ViewMoreButton";

const ChooseFuture = () => {
  return (
    <>
      <Box sx={{marginTop: '2rem', marginBottom: '2rem'}}>
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            margin: "0px",
            justifyContent: "space-between",
            marginBottom: "10px",
        }}>
        <Typography sx={{
            fontFamily: 'Poppins',
            fontWeight: '700',
            fontStyle: 'bold',
            fontSize: '30px',
            color: '#41355D',
            textTransform: 'capitalize',
        }}>Choose your future</Typography>
        <ViewMoreButton />
        </Box>
        <Stack direction='row' flexWrap='wrap' marginTop='2rem'>
        {CollegeChooseData.map((value, index) => {
            return (
            <CollegeChoose
                key={index}
                img={value.img}
                course={value.course}
                college={value.college}
            />
            )
        })}
        </Stack>
      </Box>
    </>
  )
}

export default ChooseFuture;
