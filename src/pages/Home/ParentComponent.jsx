import { Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import CardComponent from "../../components/Cards/CardComponent";

const ParentComponent = () => {
  const [examNewsData, setExamNewsData] = useState([]);

  const url = process.env.REACT_APP_NEWS_SERVER_URL;

  const fetchExamNewsData = async () => {
    try {
      const response = await fetch(`${url}/api/news/?type=exams`);
      const data = await response.json();
      const filteredData = data.slice(0, 3); // Slice the data to get the first 3 news items
      setExamNewsData(filteredData);
      console.log("data FOR NEWS ", data);
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
        display: "flex",
        justifyContent: "space-around",
        alignItems: "start",
        height: "auto",
        paddingTop: "3rem",
        paddingBottom: "2rem",
        flexWrap: "wrap",
        rowGap: "2rem",
      }}
    >
      {examNewsData.map((item, index) => (
        <CardComponent key={index} {...item} />
      ))}
    </Box>
  );
};

export default ParentComponent;
