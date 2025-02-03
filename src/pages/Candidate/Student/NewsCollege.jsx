import React, { useState, useEffect, useRef, useCallback } from "react";
import { Typography, Container } from "@mui/material";
import { Card, Box, Button, TextField, Pagination } from "@mui/material";
import MoreNewsComponent from "../../News/MoreNewsComponent";


const NewsCollege = () => {
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
    <Box sx={{
      width: '100%', minHeight: '100vh', background: '#313893', borderTopLeftRadius: '50px', marginBottom: '3rem',
      '@media(max-width:1300px)': { borderTopLeftRadius: '0px' }
    }}>
      <Box sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5rem', marginRight: '25px',
        '@media(max-width:1300px)': { marginRight: '25px', marginLeft: '25px' }
      }}>
        <Box
          sx={{
            borderRadius: '50px', backgroundColor: '#313893', width: '100%', height: 'auto'
          }}>
          <Card
            sx={{
              borderRadius: '50px', backgroundColor: 'white', padding: '20px',
            }}>
            <h4 style={{ color: '#313893' }}>News for Students</h4>
            <Container ref={containerRef} width="100%" className="page-content">
              <Typography
                variant="h2"
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
              <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly', alignItems:'center', width:'100%'}}>
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
              </Box>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}
              />
            </Container>

          </Card>
        </Box>
      </Box>
    </Box>
  )
}

export default NewsCollege