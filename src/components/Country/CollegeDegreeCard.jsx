import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";

const CollegeDegreeCard = ({ course }) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "600px",
        padding: "1.5rem",
        marginY: "1rem",
        border: "1px solid lightgray",
        borderRadius: "8px",
        backgroundColor: "white",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold", color: "#41355D" }}>
        {course.courses_name || "N/A"}
      </Typography>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ marginTop: "1rem" }}>
        <Typography variant="body2" color="text.secondary">
          <strong>Location:</strong> {course.city || "N/A"}, {course.country?.trim() || "N/A"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Study Level:</strong> {course.study_level || "N/A"}
        </Typography>
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ marginTop: "0.5rem" }}>
        <Typography variant="body2" color="text.secondary">
          <strong>Fee:</strong> {course.currency ? `${course.currency} ${course.fee_amount || "N/A"}` : "N/A"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Scholarship:</strong> {course.scholarship_available ? "Available" : "Not Available"}
        </Typography>
      </Stack>
      <Button
        component="a"
        href={course.program_landing_page_url || "#"}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          marginTop: "1rem",
          backgroundColor: "#3858FC",
          color: "white",
          textTransform: "capitalize",
          "&:hover": { backgroundColor: "#213ebd" },
        }}
        disabled={!course.program_landing_page_url} // Disable button if no link is available
      >
        Learn More
      </Button>
    </Box>
  );
};

export default CollegeDegreeCard;
