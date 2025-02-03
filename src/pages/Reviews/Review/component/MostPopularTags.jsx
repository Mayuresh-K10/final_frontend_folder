import React from "react";
import { Box, Container, Typography } from "@mui/material";
import TagsButton from "./TagsButton";

function MostPopularTags() {
  let mostPopularTags = [
    {
      title: "Placement",
      num: 14,
      id: 25,
    },
    {
      title: "Program",
      id: 26,
      num: 12,
    },
    {
      id: 27,
      title: "Hostel Room",
      num: 11,
    },
    {
      id: 28,
      title: "Management",
      num: 11,
    },
    {
      id: 29,
      title: "Bangalore",
      num: 8,
    },
    {
      id: 30,
      title: "Campus Life",
      num: 6,
    },
    {
      id: 31,
      title: "Internship Offer",
      num: 6,
    },
    {
      id: 32,
      title: "Recruit",
      num: 3,
    },
    {
      id: 33,
      title: "Course Curriculum",
      num: 6,
    },
    {
      title: "Summer Internship",
      num: 6,
      id: 34,
    },
    {
      id: 35,
      title: "Faculty Members",
      num: 4,
    },
  ];
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "700",
            lineHeight: "3rem",
            color: "#210366",
          }}
        >
          Most Popular Tags
        </Typography>
        {mostPopularTags.map((value) => {
          return (
            <TagsButton key={value.id} title={value.title} num={value.num} />
          );
        })}
      </Container>
    </Box>
  );
}

export default MostPopularTags;
