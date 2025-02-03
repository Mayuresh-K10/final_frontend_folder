import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { Box, Typography, Button, Grid, Pagination } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import MathJaxRenderer from "./MathJaxRender";

const PracticeQues = () => {
  const [showSolution, setShowSolution] = useState([]);
  const [quesData, setQuesData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const questionsPerPage = 5;

  const authToken = process.env.REACT_APP_BACKEND_BEARER_TOKEN;
  const url = process.env.REACT_APP_BACKEND_SERVER_URL;

  const containerRef = useRef(null);

  const getQuesData = useCallback(async () => {
    try {
      const response = await axios.get(
        `${url}/api/practice-questions?pagination[page]=${currentPage}&pagination[pageSize]=${questionsPerPage}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const data = response.data;

      if (data) {
        setQuesData(data.data);
        setTotalPages(data.meta.pagination.pageCount);
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
      console.error("Error fetching QuesData:", error);
    }
  }, [authToken, url, currentPage]);

  useEffect(() => {
    getQuesData();
  }, [getQuesData]);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
    setShowSolution([]);
  };

  const handleToggleSolution = (index) => {
    const updatedStates = [...showSolution];

    updatedStates[index] = !updatedStates[index];

    setShowSolution(updatedStates);
  };

  return (
    <Box ref={containerRef}>
      {quesData.map((ques, index) => (
        <Box
          key={index}
          sx={{
            background: "#ffffff",
            boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
            borderRadius: "1rem",
            padding: "1rem",
            color: "#2f1370",
            marginBottom: "1.5rem",
          }}
        >
          <Typography
            variant="h6"
            sx={{ color: "#000080", marginBottom: "1rem" }}
          >
            Question:
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "0.875rem", marginBottom: "1rem" }}
          >
            <MathJaxRenderer mathContent={ques.attributes.Questions} />
          </Typography>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={10} />
            <Grid item xs={12} md={2}>
              <Button
                onClick={() => handleToggleSolution(index)}
                sx={{
                  color: "#FF7900",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  border: "none",
                }}
              >
                {showSolution[index] ? "Hide Solution" : "Show Solution"}
                <ArrowForwardIosIcon />
              </Button>
            </Grid>
          </Grid>
          {showSolution[index] && (
            <Box sx={{ marginTop: "1rem" }}>
              <Typography
                variant="h6"
                sx={{ color: "#000080", marginBottom: "0.5rem" }}
              >
                Solution:
              </Typography>
              <Typography variant="body1" sx={{ fontSize: "0.875rem" }}>
                <MathJaxRenderer mathContent={ques.attributes.Solutions} />
              </Typography>
            </Box>
          )}
        </Box>
      ))}
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        sx={{ alignSelf: "center", marginTop: "1rem" }}
      />
    </Box>
  );
};

export default PracticeQues;
