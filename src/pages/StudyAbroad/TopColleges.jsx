import React from 'react';
import {CollegesCards} from '../../components/Cards/CollegesCards';
import HeadText from '../../components/Headings/HeadText';
import { Card1 } from '../../data/DataLanding';
import { Box, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const TopColleges = () => {
  const countryName = 'India';
  return (

    <Container maxWidth="xl" sx={{ paddingY: "5rem",'@media (max-width:800px)':{margin:0, padding:0} }}>
      <Box sx={{ marginY: "1rem" }}>
        <HeadText headText={"Top  Colleges "} />
      </Box>
      <Container maxWidth="xl" sx={{'@media (max-width:800px)':{margin:0, padding:0}}}>
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        breakpoints={{
          648: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
        loop={true}
        pagination={{
          clickable: true, // Enable clickable pagination
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        style={{
          paddingBottom: "20px",
        }}
      >
        {Card1.map((val, index) => {
          return (
            <SwiperSlide key={index}>
              <CollegesCards
                img={val.img}
                icon={val.icon}
                bgColor={val.bgColor}
                titles={val.titles}
                contents={val.contents}
                contents_body={val.contents_body}
                content_link={val.content_link}
                countryName={countryName}
                degreeName={val.titles}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      </Container>
    </Container>


  )
}

export default TopColleges;
