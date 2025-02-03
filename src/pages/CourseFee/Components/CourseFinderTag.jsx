import React from 'react';
import { motion } from 'framer-motion';
import FilterButton from '../../../components/Buttons/FilterButton';
import { Container, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';

const FinderTag = () => {
  const FinderTags = [
    "Digital Marketing",
    "Fashion Designing",
    "Interior Design",
    "Paramedical",
    "Nursing",
    "Graphic Design",
    "Data Science",
    "Computer",
    "Hotel Management",
    "BE/B.Tech",
    "BA",
    "B.Sc",
    "M.Com",
    "B.Ed",
    "B.Com",
    "M.Sc",
    "MA",
    "BBA",
    "Doctorate"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          padding: "0px",
          paddingTop: "2rem !important",
        }}
      >
        <Box
          sx={{
            fontFamily: "Poppins, sans-serif",
            background: "#f4f7ff",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            borderRadius: "1rem",
            padding: "1.5rem",
            color: "#2f1370",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <Typography
            variant='h5'
            sx={{
              color: "#210366",
              fontWeight: "bold",
              fontSize: "1.5rem",
              textTransform: "capitalize",
              fontFamily: "Poppins, sans-serif"
            }}
          >
            Course Finder - Search From 20K + Courses
          </Typography>

          <TextField
            id="outlined-size-normal"
            sx={{
              padding: "1rem",
              borderRadius: "0.5rem",
              border: "none",
              margin: "1rem 0",
              fontFamily: "Poppins",
              background: "#ffffff",
            }}
            placeholder="Search Degree, Stream or Program"
          />

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            {FinderTags.map((Tags, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FilterButton>{Tags}</FilterButton>
                </motion.div>
              );
            })}
          </Box>
        </Box>
      </Container>
    </motion.div>
  );
};

export default FinderTag;
