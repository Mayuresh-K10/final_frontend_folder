import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/pagination";
import { Box } from "@mui/material";
import { collegeData } from "./collegeData"; // Import the collegeData array

function TopCollegeStepper(props) {
  // Function to filter the collegeData array based on the country prop
  const getCollegeData = (country) => {
    if (country) {
      // console.log(country);
      return collegeData
        .filter((college) => college.country === country)
        .slice(0, 5);
    } else {
      // If no country is specified, return the top 5 colleges
      return collegeData.slice(0, 5);
    }
  };

  const filteredCollegeData = getCollegeData(props.country);

  return (
    <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
      <Swiper
        spaceBetween={10}
        breakpoints={{
          500: {
           
            slidesPerView: 4,
          },
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop={true}
      
        
        modules={[ Autoplay]}
      >
        {filteredCollegeData.map((college, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                borderRadius: "50%",
                overflow: "hidden",
                padding: "0.5px",
                border: "2px solid lightGray",
                height: "90px",
                width: "90px",
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={college.img}
                alt={college.name}
                style={{
                  objectFit: "contain",
                  objectPosition: "center center",
                  width:"100%"
                  
                }}
                loading="lazy" // Lazy-load the image for better performance
              />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TopCollegeStepper;
