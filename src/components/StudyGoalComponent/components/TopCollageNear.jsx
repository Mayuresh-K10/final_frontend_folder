import { Box } from '@mui/system'
import React from 'react'
import TopCollageNearCard from '../../Cards/TopCollageNearCard'
import { CollegeNear } from '../Data'
import { Typography } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperBtn from "../../Buttons/SwiperBtn";

const TopCollageNear = () => {

    const CityName = "Mumbai"

    return (
        <>
            <Box>
                <Box
                    sx={{ width: "fit-content", marginBottom: "1rem" }}
                >
                    <Typography
                        sx={{
                            fontSize: "2rem",
                            fontWeight: 500,
                            lineHeight: "3rem",
                            letterSpacing: "0em",
                            textAlign: "left",
                            color: "#160048",
                            display: "inline",
                        }}
                    >Top colleges Near {CityName}
                    </Typography>
                    <Box
                        sx={{
                            borderTop: "6px solid #7B90FF", borderRadius: "10px", display: "flex", width: "100%",
                        }} />
                </Box>
                <Swiper
                    centeredSlides={true}
                    breakpoints={{
                        648: {
                            slidesPerView: 1,
                            spaceBetween: 5,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        },
                    }}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                // modules={[Pagination]}
                >
                    {CollegeNear.map(({ img, name, Fees }, index) => (
                        <SwiperSlide key={index}>
                            <TopCollageNearCard img={img} name={name} fees={Fees} />
                        </SwiperSlide>
                    ))}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            marginRight: "2rem",
                            marginTop: "25px",
                        }}
                    >
                        <SwiperBtn />
                    </Box>
                </ Swiper>
            </Box>
        </>
    )
}

export default TopCollageNear