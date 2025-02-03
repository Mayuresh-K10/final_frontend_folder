import React, { useMemo } from "react";
import { CollegesCards } from "../../components/Cards/CollegesCards";
import { Card1 } from "../../data/DataLanding";
import { Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const TopColleges = () => {
  // console.log("Topcolleges Render");
  const countryName = 'India';
  const memoizedCard1 = useMemo(() => Card1, []);

  return (
    <Container
      maxWidth="xl"
      sx={{ "@media (max-width:800px)": { margin: 0, padding: 0 } }}
    >
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
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        style={{
          paddingBottom: "20px",
        }}
      >
        {memoizedCard1.map((val, index) => (
          <SwiperSlide key={index}>
            <CollegesCards
              key={index}
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
        ))}
      </Swiper>
    </Container>
  );
};

export default TopColleges;
