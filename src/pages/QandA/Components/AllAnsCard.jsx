import { Box, Pagination } from "@mui/material";
import React, { useState, useEffect, useCallback, useRef } from "react";
import axios from "axios";
import Card from "./Card.jsx";
import Search from "./Search.jsx";

const AllAnsCard = ({ getbgColor }) => {
  const [qandA, setQandA] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const cardsPerPage = 3;

  const authToken = process.env.REACT_APP_BACKEND_BEARER_TOKEN;
  const url = process.env.REACT_APP_BACKEND_SERVER_URL;

  const containerRef = useRef(null); // Ref to the container element

  const getQandAData = useCallback(async () => {
    try {
      const response = await axios.get(
        `${url}/api/q-and-as?pagination[page]=${currentPage}&pagination[pageSize]=${cardsPerPage}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const data = response.data;

      if (data) {
        setQandA(data.data);
        setTotalPages(data.meta.pagination.pageCount);
        if (containerRef.current) {
          containerRef.current.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        console.error("Unexpected response format:", data);
      }
    } catch (error) {
      console.error("Error fetching Q and A:", error);
    }
  }, [currentPage, authToken, url]);

  useEffect(() => {
    getQandAData();
  }, [getQandAData]);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Box
        ref={containerRef} // Add ref to the container element
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "2rem",
          "@media (max-width: 768px)": {
            padding: "1rem",
            flexDirection: "column", // Adjust padding for smaller screens
          },
        }}
      >
        <Search />
        {qandA.map((question, index) => (
          <Card
            key={index}
            stream=""
            cutoff=""
            area="NIT Trichy Tiruchirappalli"
            heading={question.attributes.Question}
            avatar="https://example.com/avatar1.jpg"
            userav={`${question.attributes.Name.slice(0, 1).toUpperCase()}`}
            user={question.attributes.Name}
            institution={question.attributes.Degree_College}
            posted="Posted On:"
            date={question.attributes.Posted_On}
            reviews={question.attributes.Review}
            rateup="2"
            ratedown="0"
            share="0"
            ans="3 Answer"
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

export default AllAnsCard;
