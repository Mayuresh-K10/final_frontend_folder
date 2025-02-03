import React from 'react'
import { Box,  IconButton } from '@mui/material';
import { useSwiper } from 'swiper/react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const SwiperBtn = () => {

    const swiper = useSwiper();

    return (
        <Box
            className="swiper-nav-btns"
            sx={{
                display: "flex",
                gap: "2rem",
            }}>
            <IconButton
                onClick={() => swiper.slidePrev()}
                sx={{
                    bgcolor: "transparent",
                    border: "1px solid #160048"
                }}>
                <KeyboardArrowLeftIcon />
            </IconButton>
            <IconButton
                onClick={() => swiper.slideNext()}
                sx={{
                    bgcolor: "transparent",
                    border: "1px solid #160048"
                }}>
                <ChevronRightIcon />
            </IconButton>
        </Box>
    )
}

export default SwiperBtn