import React from "react";
import { Typography, Box, Link, Stack } from "@mui/material";
// import Img from './images/graph.png';

const AcadCounsel = ({ country }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "1rem",
          fontWeight: "700",
          fontStyle: "bold",
          fontSize: "20px",
          color: "#210366",
          marginLeft: "2rem",
        }}
      >
        <Stack direction="row" spacing={1} sx={{ font: "Inter" }}>
          <Typography variant="inherit" sx={{ textTransform: "uppercase" }}>
            study in {country}:
          </Typography>
          <br />
          <Typography
            variant="inherit"
            sx={{ fontWeight: "600", textTransform: "uppercase" }}
          >
            costs, top universities, applications, deadlines, visa process & job
            opportunities
          </Typography>
        </Stack>
        <Typography
          variant="inherit"
          sx={{ marginTop: "2rem", fontSize: "14px", fontWeight: "600" }}
        >
          Studying in {country} has become a trend among international students
          due to the innovative education system, hassle free student visa
          process and outstanding placement opportunities. The universities and{" "}
          <span>
            <Link
              target="_blank"
              href="#"
              sx={{
                color: "#4FB8DD",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              colleges in
            </Link>
          </span>{" "}
          {country} are consecutively ranking among the best universities in the
          world.
        </Typography>
        <Typography
          variant="inherit"
          sx={{ marginTop: "1rem", fontSize: "14px", fontWeight: "600" }}
        >
          International students from Asian countries like India, China, and
          Korea contribute to a major part of the international population
          pursuing higher education in {country}. Currently, around 753,000
          students are holding {country} student visa. Indian students in{" "}
          {country} secured 226,450 permits in 2022, improving from 52,645 study
          permits in 2016.
        </Typography>

        <Typography
          variant="inherit"
          sx={{ marginTop: "2rem", marginLeft: "-1rem", fontSize: "30px" }}
        >
          Growth Of Indian Students in {country}
        </Typography>
        <Link href="#">
          <Typography
            sx={{
              textAlign: "center",
              margin: "1rem 1rem 0rem 1rem",
              fontSize: "0.6rem",
              fontFamily: "Poppins",
              fontWeight: "400",
              color: "#210366",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            Read more
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default AcadCounsel;
