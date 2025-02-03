import React, { useMemo } from "react";
import SuggestionCards from "../../components/Cards/SuggestionCards";
import { Card2 } from "../../data/DataLanding";
import { Box, Container, Typography } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const OurSuggestion = () => {
  // console.log("Oursuggestion render");
  const memoizedCard2 = useMemo(() => Card2, []);

  return (
    <>
      <Container
        maxWidth="xl"
        sx={{
          marginBottom: "5rem",
          "@media (max-width:800px)": { margin: 0, padding: 0 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <Box
            sx={{
              width: "fit-content",
              marginBottom: "1rem",
              "@media (max-width:800px)": { paddingLeft: "1rem" },
            }}
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
            >
              Our Suggestion
            </Typography>
            <Box
              sx={{
                borderTop: "6px solid #7B90FF",
                borderRadius: "10px",
                display: "flex",
                width: "100%",
              }}
            />
          </Box>
        </Box>
        <Swiper
          centeredSlides={true}
          spaceBetween={20}
          breakpoints={{
            648: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination]}
        >
          {memoizedCard2.map((val) => (
            <SwiperSlide key={val.id}>
              <Box sx={{ marginBottom: "2rem" }}>
                <SuggestionCards
                  id={val.id}
                  image={val.image}
                  review_icon={val.review_icon}
                  img_logo={val.img_logo}
                  card_title={val.card_title}
                  title_text={val.title_text}
                  review_rate={val.review_rate}
                  review_cnt={val.review_cnt}
                  btn_contents={val.btn_contents}
                  btn2={val.btn2}
                  btn3={val.btn3}
                  btn4={val.btn4}
                  img_title={val.img_title}
                  img_body={val.img_body}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default OurSuggestion;
