import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { Box, Pagination } from "@mui/material";

import ReviewCard from "./ReviewCard.jsx";

const AllReviewCards = ({ getbgColor, onData }) => {
  const [reviewCards, setReviewCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const cardsPerPage = 10;

  const authToken = process.env.REACT_APP_BACKEND_BEARER_TOKEN;
  const url = process.env.REACT_APP_BACKEND_SERVER_URL;

  const containerRef = useRef(null); // Ref to the container element

  const getReviewCards = useCallback(async () => {
    try {
      const response = await axios.get(
        `${url}/api/review-tabs?pagination[page]=${currentPage}&pagination[pageSize]=${cardsPerPage}&populate=*`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const data = response.data;
      if (data) {
        setReviewCards(data.data);

        setTotalPages(data.meta.pagination.pageCount);
        onData(data.meta.pagination.total);

        if (containerRef.current) {
          containerRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else {
        console.error("Unexpected response format:", data.data);
      }
    } catch (error) {
      console.error("Error fetching Exam Cards Data:", error);
    }
  }, [currentPage, authToken, url, onData]);

  useEffect(
    () => {
      getReviewCards();
    },
    [getReviewCards] /*, [currentPage]*/
  );

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "auto",
          gap: "1rem",
          marginBottom: "2rem",
          "@media (max-width: 600px)": {
            alignItems: "center",
          },
        }}
      >
        <div ref={containerRef} />

        {reviewCards.map((review, index) => (
          <ReviewCard
            key={index}
            avatar="https://example.com/avatar2.jpg"
            user={review.attributes.Name}
            institution={
              review.attributes.College_Name.data == null
                ? "Unavailable"
                : review.attributes.College_Name.data.attributes.College_Name
            }
            rating={review.attributes.Ratings}
            reviews={review.attributes.Review}
            heading={review.attributes.Heading}
            getbgColor={getbgColor}
          />
        ))}
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          sx={{ alignSelf: "center", marginTop: "1rem" }}
        />
      </Box>
    </>
  );
};

export default AllReviewCards;
