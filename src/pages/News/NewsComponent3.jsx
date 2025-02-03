import React, { useState, useEffect, useCallback } from "react";
import { Typography, Container, Box, Pagination } from "@mui/material";
import MoreNewsComponent from "./MoreNewsComponent";

const NewsComponent3 = () => {
  const [admissionData, setAdmissionData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);
  const itemsPerPage = 6;
 
  const totalItems = admissionData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = admissionData.slice(indexOfFirstItem, indexOfLastItem);

  const url = process.env.REACT_APP_NEWS_SERVER_URL;

  const fetchAdmissionData = useCallback(async () => {
    try {
      const response = await fetch(
        `${url}/api/news/?type=admission`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      //console.log("compoenent 3 response",data)
      
      setAdmissionData(data);
      if (data.status === "ok") {
        const filteredData = data;
       
      } else {
        console.error("Error fetching data from API");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
    }
  }, [url]);

  useEffect(() => {
    fetchAdmissionData();
  }, [fetchAdmissionData]);

  

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Container width="100%" className="page-content">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
              textAlign: "left",
              color: "#210366",
              marginBottom: "1rem",
            }}
          >
            More News
          </Typography>
        </Box>
        <div className="grid-container">
          {currentItems.slice(0,15).map((article, index) => (
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
    </>
  );
};

export default NewsComponent3;
