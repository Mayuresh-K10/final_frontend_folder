import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SuggestionCards from "../../../components/Cards/SuggestionCards";
import { Card2 } from "../../../data/DataLanding";
import Container from "@mui/material/Container";
import HeadText from "../../../components/Headings/HeadText";
import { Box } from "@mui/material";
import SwiperBtn from "../../../components/Buttons/SwiperBtn";
import "swiper/swiper-bundle.css";

function PopularCompare() {
  const cardData = Card2; // Assuming Card2 is an array of data

  const swiperSettings = {
    slidesPerView: 2, // Adjust the number of cards to show at once
    spaceBetween: 1, // Adjust the space between cards
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        borderRadius: "2rem",
        background: "#FFFFFF",
      }}
    >
      <HeadText headText={"Popular Compare"} />
      <Swiper {...swiperSettings}
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        540: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
    }}
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <Box display="flex" my="2rem">
              <SuggestionCards
                id={card.id}
                image={card.image}
                review_icon={card.review_icon}
                img_logo={card.img_logo}
                card_title={card.card_title}
                title_text={card.title_text}
                review_rate={card.review_rate}
                review_cnt={card.review_cnt}
                btn_contents={card.btn_contents}
                btn2={card.btn2}
                btn3={card.btn3}
                btn4={card.btn4}
                img_title={card.img_title}
                img_body={card.img_body}
              />
            </Box>
          </SwiperSlide>
        ))}
        <Box display="flex" my="1rem">
          <SwiperBtn />
        </Box>
      </Swiper>
    </Container>
  );
}

export default PopularCompare;
