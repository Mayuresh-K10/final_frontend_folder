import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import {
    Box,
    Container,
    Typography,
    Pagination,
    CircularProgress,
} from "@mui/material";
import CollegeCard from "../../components/Cards/CollegeCard";
import NewApplicationCard from "../../components/Cards/NewApplicationsCard";
import { NewApplicationsData } from "./Data";
import { useLocation } from "react-router-dom";
import AdSenseComponent from "../../utils/AdSenseComponent";

const Colleges = ({ state, selectedFilters, onCount, openModal }) => {
    const [originalCollegeData, setOriginalCollegeData] = useState([]);
    const [collegeData, setCollegeData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const location = useLocation();

    const url = process.env.REACT_APP_BACKEND_FIREBASE_URL;
    const authToken = process.env.REACT_APP_BACKEND_BEARER_TOKEN;

    const searchParams = new URLSearchParams(location.search);
    const course = searchParams.get("course");
    const city = searchParams.get("city"); // Get the city from the query params

    const buildQueryParams = (params) => {
        const queryParams = new URLSearchParams();
        for (const key in params) {
            if (params[key] && params[key].length > 0) {
                params[key].forEach((value) => queryParams.append(key, value));
            }
        }
        return queryParams.toString();
    };

    const getCollegesData = useCallback(
        async (page, state, selectedFilters) => {
            try {
                setLoading(true);
                let endpoint = `${url}/api/top_universities/university/courses?page=${page}&page_size=50`;

                if (state) {
                    endpoint += `&university_type=${state}`;
                }

                if (course) {
                    endpoint += `&course=${course}`;
                }

                if (city) {
                    endpoint += `&city=${city}`;
                }

                const queryParams = buildQueryParams(selectedFilters);
                if (queryParams) {
                    endpoint += `&${queryParams}`;
                }

                const response = await axios.get(endpoint, {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                });

                if (response.data && Array.isArray(response.data.results)) {
                    setCollegeData(response.data.results);
                    setTotalPages(
                        Math.ceil(
                            response.data.count / response.data.results.length
                        )
                    );
                    onCount(response.data.count);
                }
            } catch (error) {
                console.error("Error fetching College Data:", error);
            } finally {
                setLoading(false);
            }
        },
        [url, authToken, onCount, course, city]
    );

    useEffect(() => {
        setCollegeData([]); // Clear the current data when the filter changes
        getCollegesData(1, state, selectedFilters); // Fetch data for the first page when the filter changes
    }, [getCollegesData, state, selectedFilters]);

    useEffect(() => {
        getCollegesData(currentPage, state, selectedFilters);
    }, [currentPage, getCollegesData, state, selectedFilters]);

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <Container>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    paddingBottom: "1.5rem",
                }}
            >
                {collegeData.length > 0
                    ? collegeData.map((item, index) => (
                          <React.Fragment key={item.course_id}>
                              <CollegeCard
                                  id={item.college_info_id.college_info_id}
                                  name={item.college_info_id.college_name}
                                  location={item.college_info_id.city}
                                  stars={item.college_info_id.college_rating}
                                  courses={item.course_name}
                                  courseTiming={item.course_type}
                                  courseYears={item.course_duration}
                                  img={`${process.env.REACT_APP_BACKEND_SERVER_URL}${item.college_info_id.college_logo}`}
                                  openModal={openModal}
                              />
                              {index === 4 && (
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
                                          Latest Application Forms 2025
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
                                                  {...props}
                                              />
                                          ))}
                                      </Box>
                                  </>
                              )}

                              {(index + 1) % 4 === 0 &&
                                  index !== collegeData.length - 1 && (
                                      <Box sx={{ minHeight: "100px" }}>
                                          <AdSenseComponent />
                                      </Box>
                                  )}
                          </React.Fragment>
                      ))
                    : !loading && (
                          <Typography
                              variant="h6"
                              color="error"
                              sx={{ textAlign: "center", marginTop: "2rem" }}
                          >
                              No colleges present.
                          </Typography>
                      )}
                {loading && (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            marginTop: "2rem",
                        }}
                    >
                        <CircularProgress />
                    </Box>
                )}
            </Box>
            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "2rem",
                }}
            />
        </Container>
    );
};

export default Colleges;
