import React, { useState, useEffect } from "react";
import { Box, Divider, Typography } from "@mui/material";
import UpcomingExams from "../../components/Cards/UpcomingExamCard";

const UpcomingExamRender = () => {
  const [upcomingExamsData, setUpcomingExamsData] = useState([]);
  const url = process.env.REACT_APP_NEWS_SERVER_URL;
  const fetchUpcomingExamsData = async () => {
    try {
      const response = await fetch(
        `${url}/api/news/?type=upcoming%20exam`
      );
      const data = await response.json();
      const filteredData = data.slice(0, 5);
      setUpcomingExamsData(filteredData);
      if (data.status !== "ok") {
        console.error("Error fetching data from API");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchUpcomingExamsData();
  }, []);

 

  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
      </style>
      <Box
        sx={{
          marginBottom: "40px",
          height: "auto",
          paddingY: "7px",
          paddingX: "5px",
          filter: "drop-shadow(0px 0px 40px rgba(123, 144, 255, 0.1))",
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
          }}
        >
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
            Upcoming Exams
          </Typography>
        </Box>

        <Box
          sx={{
            border: "1px solid grey",
            borderTop: "none",
            width: "330px",
            background: "#FFFFFF",
            paddingBottom: "10px",
            borderRadius: "0px 0px 20px 20px",
          }}
        >
          {upcomingExamsData.map((article, id) => (
            <React.Fragment key={id}>
              <UpcomingExams
                name={article.title}
                date={article.time} // Use getRandomDate function to generate random date
                img={article.image}
                link={article.link}
              />
              <Divider
                sx={{
                  marginX: "5px",
                  marginY: "8px",
                  backgroundColor: "rgba(123, 144, 255, 0.2)",
                  width: "auto",
                }}
              />
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default UpcomingExamRender;
