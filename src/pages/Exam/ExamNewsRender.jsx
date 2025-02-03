import React, { useState, useEffect } from "react";
import ExamNews from "../../components/Cards/ExamNewsCard";
import { Box, Typography } from "@mui/material";

const ExamNewsRender = () => {
  const [examNewsData, setExamNewsData] = useState([]);

  const url = process.env.REACT_APP_NEWS_SERVER_URL;

  const fetchExamNewsData = async () => {
    try {
      const response = await fetch(
        `${url}/api/news/?type=exams`
      );
      const data = await response.json();
      const filteredData = data.slice(0, 5); // Adjust the slicing based on your requirements
      setExamNewsData(filteredData);
      if (data.status !== "ok") {
        console.error("Error fetching data from API");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchExamNewsData();
  }, []); // Add an empty dependency array to ensure useEffect runs only once

 

  return (
    <Box
      sx={{
        filter: "drop-shadow(0px 0px 40px rgba(123, 144, 255, 0.1))",
        marginBottom: "40px",
      }}
    >
      <Box
        sx={{
          border: "1px solid grey",
          boxSizing: "border-box",
          height: "auto",
          width: "330px",
          background: "#FFFFFF",
          borderBottom: "2.5px solid #7B90FF",
          borderRadius: "20px 20px 0px 0px",
          textAlign: "center",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "24px",
              color: "#210366",
              paddingTop: "8px",
              textAlign: "center",
            }}
          >
            Exams News
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "330px",
          height: "auto",
          background: "#FFFFFF",
          boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.1)",
          borderRadius: "0px 0px 20px 20px",
          border: "1px solid grey",
          borderTop: "none",
        }}
      >
        {examNewsData.map((article, id) => (
          <ExamNews
            key={id}
            name={article.title}
            date={article.time} // Use getRandomDate function to generate random date
            img={article.image}
            link={article.link}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ExamNewsRender;
