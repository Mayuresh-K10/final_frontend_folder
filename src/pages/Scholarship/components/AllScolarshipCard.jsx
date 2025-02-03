import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import ScolarshipCard from "./ScolarshipCard";
import { Box, Pagination, Typography } from "@mui/material";
import AdSenseComponent from "../../../utils/AdSenseComponent";

const AllScholarshipCard = ({ filters }) => {
  const [scholarshipCards, setScholarshipCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const cardsPerPage = 18;

  const authToken = process.env.REACT_APP_BACKEND_BEARER_TOKEN;
  const url = process.env.REACT_APP_BACKEND_SERVER_URL;

  const containerRef = useRef(null);

  const getScholarshipCards = useCallback(async () => {
    try {
      const filterQueries = Object.keys(filters)
        .filter((key) => filters[key])
        .map((key) => `filters[${key}][$eq]=${filters[key]}`)
        .join("&");

      const response = await axios.get(
        `${url}/api/scholarships?${filterQueries}&pagination[page]=${currentPage}&pagination[pageSize]=${cardsPerPage}&populate=*`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const data = response.data;

      if (data) {
        setScholarshipCards(data.data);
        setTotalPages(data.meta.pagination.pageCount);

        if (containerRef.current) {
          containerRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        console.error("Unexpected response format:", data.data);
      }
    } catch (error) {
      console.error("Error fetching Scholarship Cards Data:", error);
    }
  }, [currentPage, url, authToken, filters]);

  useEffect(() => {
    getScholarshipCards();
  }, [getScholarshipCards]);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Box>
      <div ref={containerRef} />

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "start",
          height: "auto",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        <AdSenseComponent />
        {scholarshipCards.map((scholarship, index) => (
          <React.Fragment key={index}>
            <ScolarshipCard
              scholarshipName={scholarship.attributes.Scholarship_Name}
              internationalStudentEligible={scholarship.attributes.International_Student_Eligible}
              amount={scholarship.attributes.Amount}
              type={scholarship.attributes.Type}
              levelOfStudy={scholarship.attributes.Level_Of_Study}
              numberOfScholarships={scholarship.attributes.Number_Of_Scholarships}
            />
            {/* Insert ad space after every 3 cards */}
            {(index + 1) % 3 === 0 && (
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "20px 0",
                }}
              >
                <AdSenseComponent />
              </Box>
            )}
          </React.Fragment>
        ))}
        <AdSenseComponent />
      </Box>

      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      />
    </Box>
  );
};

export default AllScholarshipCard;
