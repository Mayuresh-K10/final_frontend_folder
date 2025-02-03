import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Box, Typography, Button } from "@mui/material";
import ExamCategoryButton from "./../../components/Buttons/ExamCategoryButton";

const ExamsCategory = () => {
  const [ExamCategory, setExamCategory] = useState([]);

  const authToken = process.env.REACT_APP_BACKEND_BEARER_TOKEN;
  const url = process.env.REACT_APP_BACKEND_SERVER_URL;

  const getExamCategory = useCallback(async () => {
    try {
      const response = await axios.get(`${url}/api/exam-categories`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      const data = response.data;

      if (data) {
        setExamCategory(data.data);
      } else {
        console.error("Unexpected response format:", data.data);
      }
    } catch (error) {
      console.error("Error fetching Exam Category:", error);
    }
  }, [authToken, url]);

  useEffect(() => {
    getExamCategory();
  }, [getExamCategory]);

  const [showAll, setShowAll] = useState(false);
  const [visibleButtons, setVisibleButtons] = useState([]);

  useEffect(() => {
    setVisibleButtons(ExamCategory.slice(0, 10));
  }, [ExamCategory]);

  const handleShowMore = () => {
    setVisibleButtons(ExamCategory);
    setShowAll(true);
  };

  const handleShowLess = () => {
    setVisibleButtons(ExamCategory.slice(0, 10));
    setShowAll(false);
  };

  return (
    <Box>
      <Box sx={{ marginTop: "2rem", borderRadius: "10px" }}>
        <Box
          sx={{
            borderRadius: "5px",
            fontSize: "36px",
            fontWeight: "700",
            lineHeight: "24px",
            letterSpacing: "0em",
            marginBottom: "1rem",
            color: "#210366",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#210366",
              fontSize: "1.5rem",
              paddingTop: "1rem",
              fontWeight: 700,
            }}
          >
            Exams Category
          </Typography>
        </Box>
      </Box>
      <Box sx={{ marginBottom: "3rem", paddingTop: "0.5rem" }}>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {visibleButtons.map((category, index) => (
            <ExamCategoryButton
              key={index}
              label={category.attributes.Exam_category}
            />
          ))}
          {!showAll && ExamCategory.length > visibleButtons.length && (
            <Button
              variant="outlined"
              onClick={handleShowMore}
              sx={{
                marginTop: "0.6rem",
                minWidth: "140px",
                maxHeight: "40px",
                borderRadius: "10px",
                borderColor: "#757575",
                color: "#757575",
                padding: "4px 16px",
                fontSize: "12px",
                lineHeight: "1.75",
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: "1.25px",
                "&:hover": {
                  borderColor: "#210366",
                  color: "#210366",
                },
              }}
            >
              Show More
            </Button>
          )}
          {showAll && (
            <Button
              variant="outlined"
              onClick={handleShowLess}
              sx={{
                marginTop: "0.6rem",
                minWidth: "140px",
                maxHeight: "40px",
                borderRadius: "10px",
                borderColor: "rgb(22,0,72)",
                color: "rgb(22,0,72)",
                padding: "4px 16px",
                fontSize: "12px",
                lineHeight: "1.75",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "1.25px",
                "&:hover": {
                  borderColor: "#210366",
                  color: "#210366",
                },
              }}
            >
              Show Less
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ExamsCategory;
