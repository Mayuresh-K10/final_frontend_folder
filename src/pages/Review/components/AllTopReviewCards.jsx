import React, { useState } from "react";
import ReviewData from "../data.js";
import TopReviewCard from "./TopReviewCard.jsx";
import { Box, Pagination } from "@mui/material";

const AllTopReviewCards = ({ getbgColor }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = ReviewData.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(ReviewData.length / cardsPerPage);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        height: "auto",
        flexDirection: "column",
        gap: "1rem",
        marginBottom: "2rem",
        "@media (max-width: 600px)": {
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        flexWrap: "wrap",
        gap: "1rem",
        marginBottom: "2rem",
      }}>
      {currentCards.map((review, index) => (
        <TopReviewCard key={index} {...review} getbgColor={getbgColor} />
      ))}
      </Box>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        sx={{ alignSelf: "center", marginTop: "1rem" }}
      />
    </Box>
  );
};

export default AllTopReviewCards;
