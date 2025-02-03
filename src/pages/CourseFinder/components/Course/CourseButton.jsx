import React from "react";
import { Button, Stack } from "@mui/material";
import { useLocation } from "react-router-dom";

const courses = [
  { label: "BTech", id: 1 },
  { label: "MBA", id: 2 },
  { label: "MBBS", id: 3 },
  { label: "Law", id: 4 },
  { label: "Science", id: 5 },
  { label: "Study Abroad", id: 6 },
  { label: "All Course", id: 7 },
];

const CourseButtons = () => {
  const location = useLocation();

  const handleFilterCountry = (country) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("selectedCountry", country);
  };

  return (
    <Stack
      direction="row"
      flexWrap={"wrap"}
      sx={{
        paddingY: "2rem",
        gap: 2,
      }}
    >
      {courses.map((course) => (
        <Button
          key={course.id}
          sx={{
            background: "#7B90FF",
            borderRadius: 2,
            color: "white",
            fontSize: 16,
            fontWeight: "600",
            "&:hover": {
              background: "#f94306",
            },
          }}
          onClick={() => handleFilterCountry(course.label)}
        >
          {course.label}
        </Button>
      ))}
    </Stack>
  );
};

export default CourseButtons;
