import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import { Box, CircularProgress, Pagination, Typography } from "@mui/material";
import Carddesign from "./Carddesign";

const Allcard = () => {
  const [predictorData, setPredictor] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const cardsPerPage = 9;

  const authToken = process.env.REACT_APP_BACKEND_BEARER_TOKEN;
  const url = process.env.REACT_APP_BACKEND_SERVER_URL;

  const containerRef = useRef(null);

  const getPredictorData = useCallback(async () => {
    setIsFetching(true);

    try {
      const response = await axios.get(
        `${url}/api/college-predictors?pagination[page]=${currentPage}&pagination[pageSize]=${cardsPerPage}&populate=*`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const data = response.data;

      if (data) {
        setPredictor(data.data);
        setTotalPages(data.meta.pagination.pageCount);

        if (containerRef.current) {
          containerRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      } else {
        console.error("Unexpected response format:", data);
      }
    } catch (error) {
      console.error("Error fetching Predictor Cards Data:", error);
    } finally {
      setIsFetching(false);
    }
  }, [authToken, url, currentPage]);

  useEffect(() => {
    getPredictorData();
  }, [getPredictorData]);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Box>
      <Box
        ref={containerRef}
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          height: "auto",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {isFetching && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            <CircularProgress />
          </Box>
        )}

        {predictorData.map((item, index) => (
          <Carddesign
            key={index}
            CollegeParticiapting={
              item.attributes.Colleges_participating || "Unavailable"
            }
            examdate={item.attributes.Exam_Date || "Unavailable"}
            examlevel={item.attributes.Exam_level || "Unavailable"}
            imgcontent={item.attributes.Exam_Name.data.attributes.Exam_Name}
            imglogo={
              item.attributes.Logo.data === null
                ? "https://example.com/default-logo.jpg"
                : `${url}${item.attributes.Logo.data.attributes.url}`
            }
          />
        ))}
      </Box>
      <Box
        sx={{
          width: "100%",
          marginY: "2rem",
          marginX: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {!isFetching && predictorData.length === 0 && (
          <Typography
            sx={{ textAlign: "center", color: "gray", marginY: "1rem" }}
          >
            End of Cards
          </Typography>
        )}
      </Box>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        sx={{ display: "flex", justifyContent: "center", margin: "2rem" }}
      />
    </Box>
  );
};

export default Allcard;
