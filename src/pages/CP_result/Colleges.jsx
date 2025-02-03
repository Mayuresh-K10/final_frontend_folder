import {
  Box,
  Container,
  Typography,
  Pagination,
  CircularProgress,
} from "@mui/material";
import React, { useState, useRef, useEffect, useCallback } from "react";
import axios from "axios";
import CollegeCard from "../../components/Cards/CollegeCard";
import NewApplicationCard from "../../components/Cards/NewApplicationsCard";
import { NewApplicationsData } from "./Data";

const Colleges = () => {
  const containerRef = useRef(null);
  const [visibleData, setVisibleData] = useState(5);
  const [isFetching, setIsFetching] = useState(false);
  const [collegepredictorData, setCollegePredictorData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const cardsPerPage = 20;

  const authToken = process.env.REACT_APP_BACKEND_BEARER_TOKEN;
  const url = process.env.REACT_APP_BACKEND_FIREBASE_URL;

  const getPredictorCollegesData = useCallback(async () => {
    setIsFetching(true);
    try {
      const response = await axios.get(
        `${url}/api/college-predictor-exams?pagination[page]=${currentPage}&pagination[pageSize]=${cardsPerPage}&populate[College_Name][populate]*=College_Logo`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      const data = response.data;
      if (data) {
        setCollegePredictorData(data.data);
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
      console.error("Error fetching College predictor Data:", error);
    } finally {
      setIsFetching(false);
    }
  }, [authToken, url, currentPage]);

  useEffect(() => {
    getPredictorCollegesData();
  }, [getPredictorCollegesData]);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div ref={containerRef} />
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
        {collegepredictorData.map((item) => (
          <React.Fragment key={item.id}>
            {item.id <= 4 && (
              <CollegeCard
                id={item.id}
                img={
                  item.attributes.College_Name?.data?.attributes?.College_Logo
                    ?.data?.attributes?.url ||
                  "https://www.google.com/imgres?q=no%20logo%20found%20image"
                }
                name={item.attributes.College_Name.data.attributes.College_Name}
                location={
                  item.attributes.College_Name.data.attributes
                    .Upper_Section_Details.Place
                }
                stars={
                  item.attributes.College_Name.data.attributes.College_Rating
                }
                fees={
                  item.attributes.College_Name.data.attributes
                    .Fees_and_Eligibility === null
                    ? "Unavailable"
                    : item.attributes.College_Name.data.attributes
                        .Fees_and_Eligibility[0].Fees
                }
                otherfee={
                  item.attributes.College_Name.data.attributes
                    .Fees_and_Eligibility === null
                    ? "Unavailable"
                    : item.attributes.College_Name.data.attributes
                        .Fees_and_Eligibility[0].Course
                }
              />
            )}

            {item.id === 5 && (
              <>
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: "700",
                    fontSize: "2rem",
                    textAlign: "left",
                    marginTop: "2rem",
                    color: "#41355D",
                  }}
                >
                  Latest Application Forms 2023
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    paddingBottom: "5vh",
                    width: "auto",
                    gap: "10px",
                    "@media (max-width:800px)": {
                      width: "100%",
                    },
                  }}
                >
                  {NewApplicationsData.map((props) => (
                    <NewApplicationCard
                      key={props.name}
                      img={props.img}
                      name={props.name}
                      ctc={props.ctc}
                      recruits={props.recruits}
                      apply={props.apply}
                      about={props.about}
                    />
                  ))}
                </Box>
              </>
            )}

            {item.id > 4 && (
              <>
                <CollegeCard
                  id={item.id}
                  img={
                    item.attributes.College_Name?.data?.attributes?.College_Logo
                      ?.data?.attributes?.url ||
                    "https://www.google.com/imgres?q=no%20logo%20found%20image"
                  }
                  name={
                    item.attributes.College_Name.data.attributes.College_Name
                  }
                  location={
                    item.attributes.College_Name.data.attributes
                      .Upper_Section_Details.Place
                  }
                  stars={
                    item.attributes.College_Name.data.attributes.College_Rating
                  }
                  fees={
                    item.attributes.College_Name.data.attributes
                      .Fees_and_Eligibility === null
                      ? "Unavailable"
                      : item.attributes.College_Name.data.attributes
                          .Fees_and_Eligibility[0].Fees
                  }
                  otherfee={
                    item.attributes.College_Name.data.attributes
                      .Fees_and_Eligibility === null
                      ? "Unavailable"
                      : item.attributes.College_Name.data.attributes
                          .Fees_and_Eligibility[0].Course
                  }
                />

                {item.id % 4 === 0 && (
                  <Box
                    sx={{
                      textAlign: "center",
                      height: "70px",
                      marginY: "10px",
                    }}
                  >
                    {/* ADVETISEMENT HERE */}
                  </Box>
                )}
              </>
            )}
          </React.Fragment>
        ))}
      </Box>
      <div ref={containerRef}></div>
      {!isFetching && visibleData >= collegepredictorData.length && (
        <Typography
          sx={{ textAlign: "center", color: "gray", marginY: "1rem" }}
        >
          End of Colleges
        </Typography>
      )}

      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        sx={{ display: "flex", justifyContent: "center", margin: "4rem" }}
      />
    </Container>
  );
};

export default Colleges;
