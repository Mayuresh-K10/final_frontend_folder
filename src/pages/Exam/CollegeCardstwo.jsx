import React from "react";
import CollegeCardsthree from "../../components/Cards/CollegeComponentCard";
import { CollegeCardsTwoData } from "./Data";
import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const CollegesCards = () => {
  return (
    <>
      <Container maxWidth="lg">
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
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
          
          modules={[Pagination, Autoplay, Navigation]}
          style={{
            paddingBottom: "20px",
          }}
        >
          {CollegeCardsTwoData.map((val, index) => {
            return (
              <SwiperSlide key={index}>
                <CollegeCardsthree
                  key={index}
                  img={val.img}
                  date={val.date}
                  icon={val.icon}
                  contents={val.contents}
                  content_link={val.content_link}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </>
  );
};

export default CollegesCards;
