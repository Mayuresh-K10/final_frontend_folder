import React from "react";
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css/pagination";

import CountryCard from "../../components/CountryCard/CountryCard";
import { countriesData } from "./Data";
import { Box } from "@mui/material";
import "./DestinationPlace.css";
function DestinationPlace() {
  return (
    <div
      style={{
       
          paddingY: "5rem",
        
      }}
    >
      <Swiper
        className="Swiper-destination"
        spaceBetween={10}
        breakpoints={{
          500: {
            // width: 500,
            slidesPerView: 2,
          },
          768: {
            // width: 768,
            slidesPerView: 4,
          },
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination, Autoplay]}
      >
        {countriesData.map((val, index) => (
          <SwiperSlide key={index}>
            <Box sx={{ marginY: "3rem", marginX: "5rem" }}>
              <NavLink
                to={`/study-abroad/${val.countryName
                  .toLowerCase()
                  .replace(/\s+/g, "-")}`}
                style={{ textDecoration: "none" }}
              >
                <CountryCard
                  countryName={val.countryName}
                  countryImage={val.countryImage}
                />
              </NavLink>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default DestinationPlace;
