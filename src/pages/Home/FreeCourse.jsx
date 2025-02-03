import { Box, Container, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const FreeCourse = ({ FreeCourseData }) => {
  // console.log("FreeCourse Render ");
  const memoizedFreeCourseData = useMemo(
    () => FreeCourseData,
    [FreeCourseData]
  );

  return (
    <Container maxWidth="xl">
      {/* above marginbottom edited */}
      <Box sx={{ width: "fit-content", marginBottom: "1rem", marginX: "auto" }}>
        <Typography
        variant="h1"
          sx={{
            fontSize: "2rem",
            fontWeight: 500,
            lineHeight: "3rem",
            letterSpacing: "0em",
            textAlign: "left",
            color: "#210366",
            display: "inline",
            marginY: "10px",
          }}
        >
          Get Courses from Here
        </Typography>
        <Box
          sx={{
            borderTop: "6px solid #7B90FF",
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            marginX: "auto",
          }}
        />
        <Typography
          sx={{ textAlign: "center", marginY: "10px", color: "white" }}
        >
          ldfddsfsbdgngmhgfdsadfghjgdsgf
        </Typography>
      </Box>
      <Box>
        <Swiper
          centeredSlides={true}
          breakpoints={{
            648: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination, Autoplay]}
          style={{
            paddingBottom: "20px",
          }}
        >
          {memoizedFreeCourseData.map((course, index) => (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100px",
                  height: "100px",
                  marginX: "auto",
                  marginBottom: "10px",
                  border: "2px solid lightgray",
                  borderRadius: "18px",
                  padding: "5px",
                }}
              >
                <a href={course.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={course.img}
                    alt={course.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                      mixBlendMode: "multiply",
                    }}
                  />
                </a>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Container>
  );
};

export default FreeCourse;
