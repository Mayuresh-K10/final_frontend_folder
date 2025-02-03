import React, { useState, useEffect } from "react";
import { Box, Link, Typography, Button, Avatar } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

function TopNews() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = process.env.REACT_APP_NEWS_SERVER_URL;

  const fetchNewsData = async () => {
    try {
      const response = await fetch(
        `${url}/api/news/?type=admission`
      );
      const data = await response.json();

      const filteredData = data.slice(0, 10);
      setNewsData(filteredData);
      if (data.status === "ok") {
        // console.log("NewsData: ", data.articles);
      } else {
        console.error("Error fetching data from API");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNewsData();
  }, []); // Empty dependency array to ensure useEffect runs only once

  // const getRandomDate = () => {
  //   const randomDay = Math.floor(Math.random() * 16) + 1; // Random day between 1 and 16
  //   const randomHour = Math.floor(Math.random() * 24); // Random hour between 0 and 23
  //   const randomMinute = Math.floor(Math.random() * 60); // Random minute between 0 and 59

  //   return new Date(2024, 6, randomDay, randomHour, randomMinute);
  // };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        borderRadius: "12px",
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "1rem",
        gap: "1rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          borderBottom: "1px solid #E0E0E0",
          padding: "0.5rem 1rem",
        }}
      >
        <Button variant="outlined" size="small" color="primary">
          State
        </Button>
        <Button variant="outlined" size="small" color="primary">
          Nation
        </Button>
      </Box>
      {loading ? (
        <CircularProgress />
      ) : (
        newsData.map((article, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              borderBottom: "1px solid #E0E0E0",
              padding: "1rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <Avatar
                src="https://example.com/avatar1.jpg"
                alt={article.title}
                sx={{
                  width: 50,
                  height: 50,
                  backgroundColor: "orange",
                  fontSize: "1.5rem",
                }}
              >
                {article.source
                  ? article.source.slice(0, 1).toUpperCase()
                  : "U"}
              </Avatar>
              <Typography
                color="primary"
                fontWeight="bold"
                flexWrap="wrap"
                sx={{ fontSize: "15px" }}
              >
                {article.title}
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1rem",
              }}
            >
              <Typography
                variant="caption"
                color="primary"
                fontWeight="500"
                sx={{ marginTop: "0.5rem" }}
              >
                {article.time}
              </Typography>
              <Button variant="outlined" size="small" color="primary">
                <Link
                  href={
                    article.link ? article.link : "https://yle.fi/a/74-20078915"
                  }
                  target="_blank"
                  underline="none"
                  sx={{ borderRadius: "5px", p: "2px", fontWeight: "bold" }}
                >
                  Read More &rarr;
                </Link>
              </Button>
            </Box>
          </Box>
        ))
      )}
      <Button
        size="small"
        sx={{
          "&:hover": {
            backgroundColor: "rgba(255, 69, 0, 0.9)", // Darker shade of orangered on hover
          },
        }}
      >
        <Link
          href="/news"
          underline="none"
          sx={{
            display: "inline-block",
            padding: "5px 8px",
            borderRadius: "5px",
            fontWeight: 500,
            backgroundColor: "orangered",
            color: "white",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "rgba(255, 69, 0, 0.9)", // Darker shade of orangered on hover
              textDecoration: "none",
            }
          }}
        >
          Explore More from Us right Here &#10148;
        </Link>
      </Button>
    </Box>
  );
}

export default TopNews;
