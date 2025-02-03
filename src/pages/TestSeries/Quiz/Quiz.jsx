import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Box,
  RadioGroup,
  Pagination,
  Radio,
  CircularProgress,
  FormControlLabel,
  Button,
} from "@mui/material";
import BoldHeading from "../../../components/Headings/BoldHeading";
import { useParams } from "react-router-dom";
import MathJaxRenderer from "../../PracticeQuestion/Component/MathJaxRender";
import { ScoreModal } from "../../../components/Modal/MultiModal";

function Quiz() {
  const [quizData, setQuizData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalQuestions, setTotalQuestions] = useState(1);
  const [score, setScore] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [time, setTime] = useState(3600); // Set timer to 60 minutes (3600 seconds)
  const [timerExpired, setTimerExpired] = useState(false);
  const timerRef = useRef(null);
  const containerRef = useRef(null);
  const { filter: urlFilter } = useParams();

  const pageSize = 31;

  const cleanText = (text) => {
    // Replace or remove unwanted characters
    return text.replace(/�/g, "");
  };

  const authToken = process.env.REACT_APP_BACKEND_BEARER_TOKEN;
  const url = process.env.REACT_APP_BACKEND_SERVER_URL;

  const getQuizQuestions = useCallback(
    async (filterValue = "") => {
      setIsFetching(true);
      try {
        const res = await axios.get(`${url}/api/test-series-pages`, {
          params: {
            "pagination[page]": currentPage,
            "pagination[pageSize]": pageSize,
            "filters[Test][$eq]": filterValue || urlFilter,
          },
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        const data = res.data;
        // console.log("data", data);
        if (data) {
          setQuizData(data.data);
          setTotalPages(data.meta.pagination.pageCount);
          setTotalQuestions(data.meta.pagination.total);
          setAnswers(Array(data.data.length).fill("")); // Initialize answers with empty strings
          if (containerRef.current) {
            containerRef.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        } else {
          console.error("Unexpected response format:", data);
        }
      } catch (error) {
        console.error("Error fetching Quiz Data:", error);
      } finally {
        setIsFetching(false);
      }
    },
    [currentPage, authToken, url, urlFilter]
  );

  useEffect(() => {
    getQuizQuestions();
  }, [getQuizQuestions]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (time <= 0) {
      setTimerExpired(true);
      clearInterval(timerRef.current);
    }
  }, [time]);

  const handleOptionChange = (event, questionIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = event.target.value;
    setAnswers(newAnswers);
  };

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleSubmit = () => {
    let calculatedScore = 0;
    const correctAnswers = [];

    quizData.forEach((question, index) => {
      const selectedAnswer = answers[index];
      const correctAnswer = question.attributes.Answer.trim();

      // Map options to their values
      const optionsMap = {
        A: question.attributes.Option_A,
        B: question.attributes.Option_B,
        C: question.attributes.Option_C,
        D: question.attributes.Option_D,
      };

      // Find the key (option) corresponding to the selected answer
      const selectedOption = Object.keys(optionsMap).find(
        (key) => optionsMap[key].trim() === selectedAnswer.trim()
      );

      if (selectedOption === correctAnswer) {
        calculatedScore++; // Increment score for correct answer
      }

      correctAnswers.push({
        question: question.attributes.Question,
        correctAnswer: correctAnswer,
      });
    });

    setScore(calculatedScore);
    // console.log("score",calculatedScore);
    setOpenModal(true);
    clearInterval(timerRef.current);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <Box sx={{ background: "#f8f9fd" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            background: "#ffffff",
            padding: "2%",
            borderRadius: "2rem",
            paddingTop: "5rem",
          }}
        >
          <BoldHeading>Quiz</BoldHeading>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "2rem",
            }}
          >
            <Box
              sx={{
                borderRadius: "50%",
                background: "lightGray",
                height: "8rem",
                width: "8rem",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                color="#000"
                fontSize={"1rem"}
                fontWeight={700}
              >
                <div ref={containerRef} />
                {totalQuestions} Questions
              </Typography>
            </Box>
            <Box
              sx={{
                borderRadius: "50%",
                background: "#ff5773",
                height: "8rem",
                width: "8rem",
                color: "#FFFFFF",
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                marginLeft: "1rem",
                flexWrap: "wrap",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography
                  variant="subtitle1"
                  color="#FFFFFF"
                  sx={{ fontSize: "1.2rem" }}
                >
                  {formatTime(time)} sec
                </Typography>
                <Typography variant="subtitle2" color="#FFFFFF">
                  Minutes
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              background: "#eef0f9",
              padding: "2rem",
              borderRadius: "2rem",
            }}
          >
            {timerExpired ? (
              <Typography variant="h6">Time&apos;s up!</Typography>
            ) : (
              <>
                {isFetching && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "1rem",
                    }}
                  >
                    <CircularProgress />
                  </Box>
                )}
                {quizData.map((question, index) => (
                  <div key={question.id}>
                    <Box sx={{ display: "flex", flexDirection: "row" }}>
                      <Typography
                        variant="h6"
                        style={{ margin: "1rem" }}
                        gutterBottom
                      >
                        {question.attributes.Question_No}.{" "}
                      </Typography>
                      <Typography sx={{ marginTop: "20px" }}>
                        <MathJaxRenderer
                          mathContent={cleanText(question.attributes.Question)}
                        />
                      </Typography>
                    </Box>

                    <RadioGroup
                      value={answers[index]}
                      onChange={(event) => handleOptionChange(event, index)}
                    >
                      {["Option_A", "Option_B", "Option_C", "Option_D"].map(
                        (optionKey, optionIndex) => {
                          const optionValue = question.attributes[optionKey];
                          return (
                            <FormControlLabel
                              style={{ marginLeft: "5px" }}
                              key={optionIndex}
                              value={optionValue}
                              control={<Radio />}
                              label={
                                <MathJaxRenderer mathContent={optionValue} />
                              }
                            />
                          );
                        }
                      )}
                    </RadioGroup>
                  </div>
                ))}
                {!isFetching && quizData.length > 0 && (
                  <Typography
                    sx={{ textAlign: "center", color: "gray", marginY: "1rem" }}
                  >
                    End of Questions
                  </Typography>
                )}
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "1rem",
                  }}
                />
                {currentPage === totalPages && ( // Show submit button only on the last page
                  <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSubmit}
                      sx={{ marginRight: "1rem" }}
                    >
                      Submit
                    </Button>
                  </Box>
                )}
              </>
            )}
          </Box>
        </Box>
      </Container>

      <ScoreModal
        open={openModal}
        handleClose={handleCloseModal}
        score={score}
        totalQuestions={totalQuestions}
      />
    </Box>
  );
}

export {Quiz};