// TopCoursesList.jsx
import React from "react";
import { Box, Stack } from "@mui/material";
import Books from './assets/Books.png';
import Character from './assets/Character.png';
import Plant from './assets/Plant.png';

const TopCoursesList = () => {
  return (
    <Stack
      direction="row"
      flexWrap={"wrap"}
      justifyContent={'space-evenly'}
      sx={{
        marginTop: "2rem",
        gap: 2,
      }}
    >
      <Box
        sx={{
          color: "#210366",
          fontSize: 30,
          fontWeight: "700",
          wordWrap: "break-word",
        }}
      >
        List of Top courses in Indian Colleges 2023
      </Box>
      <Box>
        <img
          src={Books}
          alt="background"
          style={{
            width: "5vw",
            height: "8vh",
            marginRight: '0.8rem'
          }} />
        <img
          src={Character}
          alt="background"
          style={{
            width: "8vw",
            height: "13vh",
            marginRight: '0.8rem'
          }} />
        <img
          src={Plant}
          alt="background"
          style={{
            width: "3vw",
            height: "10vh",
          }} />
      </Box>
    </Stack>
  );
};

export default TopCoursesList;
