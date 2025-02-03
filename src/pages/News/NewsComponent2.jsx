import React, { useState, useEffect, useRef, useCallback } from "react";
import { Typography, Container, Pagination } from "@mui/material";
import MoreNewsComponent from "./MoreNewsComponent";


const NewsComponent2 = () => {
  const [entranceData, setEntranceData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6; // Number of items per page

  const totalItems = entranceData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = entranceData.slice(indexOfFirstItem, indexOfLastItem);

  const containerRef = useRef(null);

  const url = process.env.REACT_APP_NEWS_SERVER_URL;

  const fetchEntranceData = useCallback(async () => {
    try {
      const response = await fetch(`${url}/api/news/?type=education`);
      const data = await response.json();
      
      setEntranceData(data); // Set the entranceData directly with the fetched array
      if (containerRef.current) {
        containerRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, [url]);

  useEffect(() => {
    fetchEntranceData();
  }, [fetchEntranceData]);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Container ref={containerRef} width="100%" className="page-content">
      <Typography
        variant="h1"
        sx={{
          fontSize: "2rem",
          fontWeight: "bold",
          textAlign: "center",
          color: "#210366",
          marginBottom: "1rem",
        }}
      >
        Trending News
      </Typography>
      <div className="grid-container">
        {currentItems.map((article, index) => (
          <div key={index} className="grid-item">
            <MoreNewsComponent
              img={article.image}
              date={article.time}
              heading={article.title}
              content={article.description}
              read_link={article.link}
            />
          </div>
        ))}
      </div>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
      />
    </Container>
  );
};

export default NewsComponent2;
