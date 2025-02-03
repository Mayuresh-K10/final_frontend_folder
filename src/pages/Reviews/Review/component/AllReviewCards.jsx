import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import { motion } from "framer-motion";
import reviews from "./IIMBangaloreReviewsData.js";
import ReviewCard from "./ReviewCard.jsx";
import OrangeButton from "./OrangeButton.jsx";

const AllReviewCards = ({ getbgColor }) => {
  const [show, setShow] = useState(true);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <Box>
      <style>
        {`
        .review-cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          padding: 1rem;
          gap: 1rem;
         
          transition: height 0.3s ease-in-out;
        }

        .review-cards-container .MuiPaper-root {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .review-cards-container .MuiPaper-root:hover {
          transform: translateY(-5px);
        }

        .motion-review-card {
          cursor: pointer;
        }
      `}
      </style>
      <motion.div
        className="review-cards-container"
        style={{
          height: show ? "100%" : "0",
          overflow: "hidden",
          transition: "height 0.3s ease-in-out",
        }}
        layout
      >
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="motion-review-card"
            whileHover={{ scale: 1.05 }}
          >
            <ReviewCard {...review} getbgColor={getbgColor} />
          </motion.div>
        ))}
      </motion.div>
      <Container
        sx={{
          textAlign: "center",
          marginTop: "1.25rem",
        }}
      >
        <OrangeButton
          buttonName={`View All Reviews (${reviews.length})`}
          onClick={handleClick}
        />
      </Container>
    </Box>
  );
};

export default AllReviewCards;
