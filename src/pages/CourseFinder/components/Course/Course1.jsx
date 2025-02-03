import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import SearchBar from "../../SearchBar";
import CourseButton from "./CourseButton";
import TopCoursesList from "./TopCoursesList";

const Course1 = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleCourseSelection = (course) => {
    setSelectedCourse(course);
  };

  return (
    <Box>
      <Stack
        direction="row"
        flexWrap={"wrap"}
        sx={{
          marginTop: "2rem",
          gap: 2,
        }}
      >
        <CourseButton course="BTech" onSelect={handleCourseSelection} selected={selectedCourse === "BTech"} />
        <CourseButton course="MBA" onSelect={handleCourseSelection} selected={selectedCourse === "MBA"} />
      </Stack>
      <TopCoursesList />
      <Stack
        sx={{
          display: "flex",
          flexDirection: "",
          flexWrap: "wrap",
          alignItems: "left",
          "@media (min-width:800px)": {
            paddingLeft: "5vw",
          },
        }}
      >
        <SearchBar placeholder="Search Goals" />
      </Stack>
    </Box>
  );
};

export default Course1;
