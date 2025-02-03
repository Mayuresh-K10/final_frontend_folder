import React, { useEffect, useState, useCallback } from "react";
import { Box, Stack, Button } from "@mui/material";
import CourseFilterComponentCard from "../../components/FilterComponent/courseFilterComponentCard";

const reviews = [
  {
    stream: "Course Degree Type",
    courses: [
      { course: "Certificate" },
      { course: "Bachelor" },
      { course: "Master" },
      { course: "On Campus" },
    ],
  },
  {
    stream: "College Rating",
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
    stream: "Courses Timing",
    courses: [
      { course: "Full Time" },
      { course: "Part Time" },
    ],
  },
  {
    stream: "Courses Years",
    courses: [
      { course: "1 year" },
      { course: "2 years" },
      { course: "3 years" },
      { course: "4 years" },
      { course: "5 years" },
    ],
  },
];

export default function DropDown({ onFilterChange }) {
  const [dropDownData, setDropDownData] = useState({});
  const [selectedFilters, setSelectedFilters] = useState({});
  const [resetKey, setResetKey] = useState(0);

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

  const handleFilterChange = (selectedOptions, heading) => {
    const newSelectedFilters = {
      ...selectedFilters,
      [heading]: selectedOptions,
    };

    setSelectedFilters(newSelectedFilters);
    onFilterChange(newSelectedFilters);
  };

  const handleResetFilters = () => {
    setSelectedFilters({});
    onFilterChange({});
    localStorage.clear();
    setResetKey(prevKey => prevKey + 1);
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
            reset={resetKey}
            />
          ))}
          <Button
            variant="contained"
            onClick={handleResetFilters}
            sx={{ marginTop: "1rem", backgroundColor: "#f44336", color: "#ffffff" }}
          >
            Reset Filters
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
}
