import React, { useEffect, useState, useCallback } from "react";
import { Box, Stack, Button } from "@mui/material";
import CourseFilterComponentCard from "../../components/FilterComponent/courseFilterComponentCard";
import { useLocation } from "react-router-dom";

const reviews = [
  {
    stream: "Course Degree",
    queryParam: "course",
    courses: [
      { course: "BTech" },
      { course: "MTech" },
      { course: "BSc" },
      { course: "MSc" },
      { course: "BBA" },
      { course: "MBA" },
      { course: "BCom" },
      { course: "MCom" },
      { course: "BA" },
      { course: "MA" },
      { course: "BCA" },
      { course: "MCA" },
      { course: "BEd" },
      { course: "MEd" },
      { course: "DEd" },
      { course: "BPharm" },
      { course: "MPharm" },
      { course: "DPharm" },
    ],
  },
  {
    stream: "College Rating",
    queryParam: "rating",
    courses: [
      { course: "10" },
      { course: "9" },
      { course: "8" },
      { course: "7" },
      { course: "6" },
      { course: "5" },
      { course: "4" },
      { course: "N/A" },
    ],
  },
  {
    stream: "Courses Type",
    queryParam: "course_type",
    courses: [{ course: "Full Time" }, { course: "Part Time" }],
  },
  {
    stream: "Courses Years",
    queryParam: "course_duration",
    courses: [
      { course: "1 Year" },
      { course: "2 Years" },
      { course: "3 Years" },
      { course: "4 Years" },
      { course: "5 Years" },
    ],
  },
  {
    stream: "University Type",
    queryParam: "college_type",
    courses: [{ course: "Private" }, { course: "Autonomous University" }],
  },
  {
    stream: "City",
    queryParam: "city",
    courses: [
      {course:"Delhi"},
      {course:"Bangalore"},
      {course:"Hyderabad"},
      {course:"Pune"},
      {course:"Mumbai"},
      {course:"Chennai"},
    ],
  },
];

export default function DropDown({ onFilterChange }) {
  const [dropDownData, setDropDownData] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({});
  const [resetKey, setResetKey] = useState(0);
  const location = useLocation();

  const processDummyData = useCallback(() => {
    const filterOptions = reviews.reduce((acc, item) => {
      acc[item.stream] = item.courses.map((course) => course.course);
      return acc;
    }, {});
    setDropDownData(filterOptions);
  }, []);

  useEffect(() => {
    processDummyData();
  }, [processDummyData]);

  useEffect(() => {
    // Get course from URL and set it as a selected filter if available
    const searchParams = new URLSearchParams(location.search);
    const course = searchParams.get("course");

    if (course) {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        course: [course],
      }));
      onFilterChange({ course: [course] });
    }
  }, [location.search, onFilterChange]);

  const handleFilterChange = (selectedOptions, heading) => {
    const selectedFilter = reviews.find((review) => review.stream === heading);
    const queryParam = selectedFilter ? selectedFilter.queryParam : heading;

    const newSelectedFilters = {
      ...selectedFilters,
      [queryParam]: selectedOptions,
    };

    setSelectedFilters(newSelectedFilters);
    onFilterChange(newSelectedFilters);
  };

  const handleResetFilters = () => {
    setSelectedFilters({});
    onFilterChange({});
    localStorage.clear();
    setResetKey((prevKey) => prevKey + 1);
  };

  return (
    <Stack
      sx={{
        "@media (max-width:800px)": {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        },
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Box
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "1rem",
            boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
            marginBottom: "1rem",
            padding: "1rem",
            border: "3px solid lightGray",
          }}
        >
          {Object.entries(dropDownData).map(([key, values], index) => (
            <CourseFilterComponentCard
            key={`${key}-${resetKey}`}
            heading={key}
            options={values}
            onFilterChange={handleFilterChange}
            selectedOptions={selectedFilters[reviews.find((review) => review.stream === key)?.queryParam] || []}
            reset={resetKey}
          />
          ))}
        </Box>
        <Button
          variant="contained"
          color="primary"
          onClick={handleResetFilters}
          sx={{ marginBottom: "2rem" }}
        >
          Reset Filters
        </Button>
      </Stack>
    </Stack>
  );
}