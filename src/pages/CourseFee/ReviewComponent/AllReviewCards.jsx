import { Box } from "@mui/material";
import React from "react";
import reviews from "../Review/Data.js";
import ReviewCard from "./ReviewCard.jsx";
const AllReviewCards = ({ getbgColor }) => {
  return (
    <Box
      sx={{
        display: "flex",

        height: "auto",

        marginBottom: "2rem",
        fontStyle: "normal",
        background: "#ffffff",
        boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
        borderRadius: "1rem",
        padding: "1rem",
        fontSize: "0.9rem",

        color: "#2f1370",

        flexDirection: "column",
        gap: "1.5rem",

      }}
    >
      {reviews.map((review, index) => {
        return <ReviewCard key={index} {...review} getbgColor={getbgColor} />;
      })}
    </Box>
  );
};
export default AllReviewCards;