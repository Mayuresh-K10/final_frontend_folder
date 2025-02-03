import { Box, Typography } from "@mui/material";
import React, { useState, useEffect, useCallback } from "react";
import AbroadCollegeCard from "../../components/Cards/AbroadCollegeCard";

import { PlacesData } from "./Data";

import axios from "axios";

const Colleges = ({ country, city, selectedFilters }) => {
    const partnerCollegesData = PlacesData[0].partnerCollegesData;

    const [activeStep, setActiveStep] = useState(0);
    const itemsPerPage = 2;
    const totalPages = partnerCollegesData.length;
    const [colleges, setColleges] = useState([]);
    const [originalColleges, setOriginalColleges] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [filteredDataEmpty, setFilteredDataEmpty] = useState(false);

    const url = process.env.REACT_APP_BACKEND_FIREBASE_URL;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `${url}/api/study_abroad_v2/colleges?country=${country}&city=${city}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Accept: "application/json",
                        },
                    }
                );
                //console.log(response.data.results);
                setColleges(response.data.results || []);
                setOriginalColleges(response.data.results || []);
                setIsLoading(false);
            } catch (error) {
                //  console.error("Error fetching data:", error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [country, city, url]);

    const filterColleges = useCallback(() => {
        let filteredData = [...originalColleges];
        let filtersApplied = false; // Track if any filters are applied

        for (const key in selectedFilters) {
            if (selectedFilters[key] && selectedFilters[key].length > 0) {
                filtersApplied = true; // Mark that filters are applied

                filteredData = filteredData.filter((item) => {
                    switch (key) {
                        case "Course Degree Type":
                            const coursedegree = item.course_degree;
                            return (
                                coursedegree &&
                                selectedFilters[key].includes(coursedegree)
                            );

                        case "College Rating":
                            const rating = item.college_id.college_rating;
                            return (
                                rating &&
                                selectedFilters[key].includes(
                                    Math.floor(rating).toString()
                                )
                            );
                        case "Courses Timing":
                            const courseTiming = item.courses_timing;
                            return (
                                courseTiming &&
                                selectedFilters[key].includes(courseTiming)
                            );
                        case "Courses Years":
                            const courseYears = item.courses_years;
                            return (
                                courseYears &&
                                selectedFilters[key].includes(courseYears)
                            );
                        default:
                            return true;
                    }
                });
            }
        }

        // If no filters are applied, show all original data
        if (!filtersApplied) {
            filteredData = [...originalColleges];
        }

        setColleges([...filteredData]);
        setFilteredDataEmpty(filteredData.length === 0);
    }, [originalColleges, selectedFilters]);

    useEffect(() => {
        filterColleges();
    }, [selectedFilters, filterColleges]);

    const displayedItems = [];
    for (let i = 0; i < itemsPerPage; i++) {
        const index = (activeStep + i) % totalPages;
        displayedItems.push(partnerCollegesData[index]);
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
            }}
        >
            {!isLoading &&
                colleges.length > 0 &&
                colleges.map((item) => (
                    <AbroadCollegeCard
                        key={item.id}
                        id={item.id}
                        img={`${process.env.REACT_APP_BACKEND_SERVER_URL}${item.logo}`}
                        name={item.university_name}
                        location={item.city}
                        stars={item.college_rating || "N/A"}
                        fees={item.courses_fees || "N/A"}
                        courseDegreeType={item.course_degree || "N/A"}
                        courses={item.courses || "N/A"}
                        courseLanguages={item.courses_languages || "N/A"}
                        courseTiming={item.courses_timing || "N/A"}
                        courseYears={item.courses_years || "N/A"}
                    />
                ))}
            {filteredDataEmpty && (
                <Typography variant="h6" color="error">
                    No data matches your filter criteria.
                </Typography>
            )}
        </Box>
    );
};

export default Colleges;
