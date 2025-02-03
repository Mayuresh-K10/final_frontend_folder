import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Box,
    Pagination,
    Typography,
    Stack,
    CircularProgress,
} from "@mui/material";
import AbroadCollegeCard from "../Cards/CardCollege";
import CardCollege from "../Cards/CardCollege";

const FoundColleges = ({ country }) => {
    const [allColleges, setAllColleges] = useState([]); // Store all colleges data
    const [isFetching, setIsFetching] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const cardsPerPage = 5;

    const url = process.env.REACT_APP_BACKEND_FIREBASE_URL;

    useEffect(() => {
        const fetchData = async () => {
            setIsFetching(true);
            try {
                const response = await axios.get(
                    `${url}/api/study_abroad_v2/colleges?country=${country}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                        },
                    }
                );
                //console.log("studey abroad country coleges ",response.data.results);
                setAllColleges(response.data.results || []);
                setTotalPages(
                    Math.ceil(
                        (response.data.results.length || 0) / cardsPerPage
                    )
                );
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setIsFetching(false);
            }
        };

        fetchData();
    }, [country, url]);

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };

    const paginatedColleges = allColleges.slice(
        (currentPage - 1) * cardsPerPage,
        currentPage * cardsPerPage
    );

    return (
        <>
            <Box sx={{ paddingY: "3.5rem" }}>
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: "500",
                        fontSize: "2rem",
                        textAlign: "center",
                        color: "#41355D",
                    }}
                >
                    Found {allColleges.length} Colleges
                </Typography>

                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    sx={{ mt: "20px", gap: "1rem" }}
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

                    {paginatedColleges.length > 0 ? (
                        paginatedColleges.map((item) => (
                            <CardCollege
                                key={item.id}
                                id={item.id}
                                img={item.logo}
                                name={item.university_name}
                                location={item.city}
                                stars={item.college_rating || "N/A"}
                                fees={item.courses_fees || "N/A"}
                                courseDegreeType={item.course_degree || "N/A"}
                                courses={item.Courses ? item.Courses[0] : "N/A"}
                                courseLanguages={
                                    item.courses_languages || "N/A"
                                }
                                courseTiming={item.courses_timing || "N/A"}
                                courseYears={item.courses_years || "N/A"}
                                btn1="View Details"
                                btn2="Placements"
                                btn3="Add to Compare"
                                brochure="Brochure"
                                enquire="Enquire"
                                isCountry
                            />
                        ))
                    ) : (
                        <Typography
                            sx={{
                                textAlign: "center",
                                color: "gray",
                                marginY: "1rem",
                            }}
                        >
                            No available colleges found.
                        </Typography>
                    )}
                </Stack>
            </Box>

            {totalPages > 1 && (
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "2rem",
                    }}
                />
            )}
        </>
    );
};

export default FoundColleges;
