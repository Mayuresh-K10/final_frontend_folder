import * as React from "react";
import { useEffect, useState } from "react";
import TrendingCard from "../../components/Cards/TrendingCard";
import { Box, Typography, Link } from "@mui/material";

const ExamNewsRender = () => {
  const [scholarshipData, setScholarshipData] = useState([]);
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const fetchScholarshipData = async () => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=exam%scholarship&lang=en&apiKey=${apiKey}`
      );
      const data = await response.json();
      if (data.status === "ok") {
        const filteredData = data.articles;
        setScholarshipData(filteredData);
      } else {
        console.error("Error fetching data from API");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchScholarshipData();
  }, []);

  return (
    <Box
      sx={{
        filter: "drop-shadow(0px 0px 40px rgba(123, 144, 255, 0.1))",
        marginBottom: "40px",
      }}
    >
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
      </style>
      <Box
        sx={{
          boxSizing: "border-box",
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
              fontSize: "15px",
              color: "#210366",
              paddingTop: "8px",
              textAlign: "center",
              marginTop: "16px",
            }}
          >
            Featured News
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "330px",
          height: "300px",
          background: "#FFFFFF",
          boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.1)",
          borderRadius: "0px 0px 20px 20px",
        }}
      >
        {scholarshipData &&
          scholarshipData.map((article, index) => {
            return (
              <TrendingCard
                key={index}
                name={
                  <Link
                    href={article.url}
                    underline="none"
                    color="#210366"
                    target="_blank"
                  >
                    {article.title}
                  </Link>
                }
                date={article.publishedAt}
              />
            );
          })}
      </Box>
    </Box>
  );
};

export default ExamNewsRender;
