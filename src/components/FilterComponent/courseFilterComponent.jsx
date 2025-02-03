import React, { useEffect, useState, useCallback, useRef } from "react";
import { Box, Stack,Button } from "@mui/material";
import axios from "axios";
import CourseFilterComponentCard from "./courseFilterComponentCard";

const CourseFilterComponent = ({ onFilterChange }) => {
  const [dropDownData, setDropDownData] = useState({});
  const [filters, setFilters] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({}); // State to manage selected filters
  const [resetKey, setResetKey] = useState(0);


  const authToken = process.env.REACT_APP_BACKEND_BEARER_TOKEN;
  const url = process.env.REACT_APP_BACKEND_SERVER_URL;
  const containerRef = useRef(null);

  const getCourseData = useCallback(async () => {
    try {
      const response = await axios.get(`${url}/api/course-finders`, {
        params: {
          "populate[Entrance_Exam][populate]*": "exam_details.Exam_category.Exam_category",
          "populate[Course_Name]": "*",
        },
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      const data = response.data;
      setFilters(data.data);
    } catch (error) {
      console.error("Error fetching Course Data:", error);
    }
  }, [authToken, url]);

  useEffect(() => {
    getCourseData();
  }, [getCourseData]);

  useEffect(() => {
    if (filters && filters.length > 0) {
      const filterOptions = filters.map((item) => ({
        Exam_category:
        item.attributes.Entrance_Exam?.data?.attributes?.exam_details?.data?.[0]?.attributes?.Exam_category?.data?.attributes?.Exam_category,
        Course_Level: item.attributes.Course_Level,
        Course_Duration: item.attributes.Course_Duration,
        Program_Type: item.attributes.Program_Type,
      }));

      const uniqueOptions = {
        ["Exam category"]: Array.from(
          new Set(
            filterOptions
              .map((option) => option.Exam_category)
              .filter(Boolean)
          ),
        ),
        ["Course Level"]: Array.from(
          new Set(filterOptions.map((option) => option.Course_Level).filter(Boolean))
        ),
        ["Course Duration"]: Array.from(
          new Set(filterOptions.map((option) => option.Course_Duration).filter(Boolean))
        ),
        ["Program Type"]: Array.from(
          new Set(filterOptions.map((option) => option.Program_Type).filter(Boolean))
        ),
      };

      setDropDownData(uniqueOptions);
    }
  }, [filters]);

  // Handler for filter change
  const handleFilterChange = (selectedOptions, heading) => {
    // Merge current selections with previous selections
    const newSelectedFilters = {
      ...selectedFilters,
      [heading]: selectedOptions,
    };
  
    setSelectedFilters(newSelectedFilters);
  
    // Pass current selected filters to parent component
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
      ref={containerRef}
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
        </Box>
        <Button
            variant="contained"
            onClick={handleResetFilters}
            sx={{ marginTop: "1rem", backgroundColor: "#f44336", color: "#ffffff" }}
          >
            Reset Filters
          </Button>
      </Stack>
    </Stack>
  );
};

export default CourseFilterComponent;
