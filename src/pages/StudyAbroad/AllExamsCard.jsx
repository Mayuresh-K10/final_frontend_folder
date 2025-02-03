import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Box, Pagination } from "@mui/material";
import ExamCard from "../../components/Cards/ExamCard";

const AllExamsCard = ({ isAbroadExam }) => {
  const [abroadExams, setAbroadExams] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const cardsPerPage = 9;

  const authToken = process.env.REACT_APP_BACKEND_BEARER_TOKEN;
  const url = process.env.REACT_APP_BACKEND_SERVER_URL;

  const getAbroadExamsData = useCallback(async () => {
    // console.log("Fetching data for page:", currentPage); // Debug log
    try {
      const response = await axios.get(
        `${url}/api/abroad-exams?pagination[page]=${currentPage}&pagination[pageSize]=${cardsPerPage}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const data = response.data;
      if (data) {
        
        setAbroadExams(data.data);
        setTotalPages(data.meta.pagination.pageCount);
      } else {
        console.error("Unexpected response format:", data.data);
      }
    } catch (error) {
      console.error("Error fetching abroad Exams:", error);
    }
  }, [currentPage, authToken, url]);

  useEffect(() => {
    getAbroadExamsData();
  }, [getAbroadExamsData]);



  const handlePageChange = (event, newPage) => {
    // console.log("Page changed to:", newPage); // Debug log
    setCurrentPage(newPage);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", paddingBottom: "3.5rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "start",
          height: "auto",
          flexWrap: "wrap",
          margin: "1rem 0",
        }}
      >
        {abroadExams.map((exam) => (
          <ExamCard
            key={exam.id}
            examName={exam.attributes.Exam_Name}
            examDescription={exam.attributes.Exam_Detail}
            registrationPage="Registration"
            readMore="Read more"
            isAbroadExam={isAbroadExam}
          />
        ))}
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

export default AllExamsCard;
