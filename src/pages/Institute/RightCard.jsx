import React, { useState, useEffect, useRef, useCallback } from "react";
import { Box, CircularProgress, Typography, Pagination } from "@mui/material";
import IndianInstituteCard from "../../components/Cards/IndianInstituteCard";
import axios from "axios";
import AdSenseComponent from "../../utils/AdSenseComponent";

const RightCard = ({ state }) => {
  const [foundInstitutes, setFoundInstitutes] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const containerRef = useRef(null);
  const url = process.env.REACT_APP_BACKEND_FIREBASE_URL;

  const getFoundInstitutes = useCallback(async (page, state) => {
    try {
      setIsFetching(true);
      let endpoint = `${url}/api/institutes/institutes?page=${page}`; // Ensure the limit is specified

      if (state) {
        endpoint += `&city=${state}`;
      }

      const response = await axios.get(endpoint, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      const data = response.data;

      if (data && Array.isArray(data.results)) {
        setFoundInstitutes(data.results);
        setTotalPages(Math.ceil(data.count / 10)); // Adjust if needed
      } else {
        console.error("Unexpected response format:", data);
      }
    } catch (error) {
      console.error(
        "Error fetching College Data:",
        error.response ? error.response.data : error.message
      );
    } finally {
      setIsFetching(false);
    }
  }, [url]);

  useEffect(() => {
    getFoundInstitutes(currentPage, state);
  }, [currentPage, state, getFoundInstitutes]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div ref={containerRef} />
        {isFetching && (
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
            <CircularProgress />
          </Box>
        )}
        {foundInstitutes && foundInstitutes.length > 0 ? (
          foundInstitutes.map((item, index) => (
            <React.Fragment key={item.institute_id}>
              <IndianInstituteCard
                id={item.institute_id}
                img={`${process.env.REACT_APP_BACKEND_SERVER_URL}${item.institute_logo}`}
                name={item.institute_name}
                stars={item.institute_rating}
                CenterName={item.institute_city}
                brochure=""
                apply={item.institute_id}
              />
              {/* Insert ad space after every 3 cards */}
              {(index + 1) % 3 === 0 && (
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "20px 0",
                  }}
                >
                  <AdSenseComponent />
                </Box>
              )}
            </React.Fragment>
          ))
        ) : (
          !isFetching && (
            <Box sx={{ mt: 4 }}>
              <Typography>No institutes found for {state}</Typography>
            </Box>
          )
        )}
      </Box>
      {totalPages > 1 && (
        <Box sx={{ mt: 2 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            color="primary"
          />
        </Box>
      )}
    </Box>
  );
};

export default RightCard;
