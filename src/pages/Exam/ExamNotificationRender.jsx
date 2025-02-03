import React, { useState, useEffect } from "react";
import ExamNotifications from "../../components/Cards/ExamNotificationCard";
import { Box, Typography } from "@mui/material";

const ExamNotificationsRender = () => {
  const [examNotificationData, setExamNotificationData] = useState([]);
  const url = process.env.REACT_APP_NEWS_SERVER_URL;
  const fetchExamNotificationsData = async () => {
    try {
      const response = await fetch(
        `${url}/api/news/?type=exam%20notification`
      );
      const data = await response.json();
      const filteredData = data.slice(0, 5);
      setExamNotificationData(filteredData);
      if (data.status !== "ok") {
        console.error("Error fetching data from API");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchExamNotificationsData();
  }, []);

  

  return (
    <Box
      sx={{
        marginBottom: "40px",
        marginTop: "40px",
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
            Exams Notifications
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
          paddingY: "10px",
          border: "1px solid grey",
          borderTop: "none",
        }}
      >
        {examNotificationData.map((article, id) => (
          <ExamNotifications
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

export default ExamNotificationsRender;
