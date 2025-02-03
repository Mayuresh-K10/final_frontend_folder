import React from 'react';
import { useSwiper } from 'swiper/react';
import {Button, Box} from '@mui/material';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
export const SwiperNavButtons = () => {
const swiper = useSwiper();

  return (
    <>
      <Box sx={{display:"flex",justifyContent:"space-evenly"}}>
      <Button variant="text" startIcon={<NavigateBeforeOutlinedIcon />} color="primary" onClick={() => swiper.slidePrev()}>Prev</Button>
      <Button variant="text" endIcon={<NavigateNextOutlinedIcon />} color="primary" onClick={() => swiper.slideNext()}>Next</Button>
      </Box>
  
    </>
  );
};