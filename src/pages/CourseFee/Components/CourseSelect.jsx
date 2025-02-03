import React from "react";
import {
  Container,
  Box,
  Typography,
  Grid,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const CourseSelect = () => {
  const CourseSelects = [
    "Degree",
    "Streams",
    "Program Type",
    "Entrance/Exam accepted",
    "Course Level",
  ];
  const Courses = ["PGPM", "PGPEM", "EPGP", "PGP-PPM", "Certification", "Ph.D"];
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        padding: "0px ",
        paddingTop: "2rem !important",
      }}
    >
      <Box
        sx={{
          fontStyle: "normal",
          background: "#ffffff",
          boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
          borderRadius: "1rem",
          padding: "1rem",
          fontSize: "0.9rem",
          color: "#2f1370",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          animation: "fadeInUp 1s ease",
        }}
      >
        <Box
          sx={{
            margin: "1rem 1rem 1rem 1rem",
            padding: "1rem 1rem 1rem 3rem",
          }}
        >
          <Grid container spacing={4} sx={{ paddingTop: "1rem" }}>
            <Grid item xs={12} md={12}>
              <input
                style={{
                  paddingLeft: "0.8rem",
                  borderRadius: "0.5rem",
                  border: "1px solid #ccc",
                  margin: "0 0 0.4rem 0rem",
                  height: "40px",
                  width: "50%",
                  alignItems: "start",
                  flexWrap: "wrap",
                  gap: "1rem",
                  outline: "none",
                }}
                type="text"
                placeholder="search for colleges, exams and more..."
              />
              <Button
                variant="contained"
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  marginLeft: "2rem",
                  backgroundColor: "#FC6A03",
                  padding: "0.2rem 1rem",
                  color: "white",
                  textTransform: "capitalize",
                  borderRadius: "0.5rem",
                  height: "40px",
                  width: "200px",
                  "@media (max-width:800px)": {
                    marginLeft: "0rem",
                  },
                }}
              >
                Search Course
              </Button>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={4}
            sx={{ paddingTop: "1rem", display: "flex" }}
          >
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                alignItems: "start",
                height: "auto",
                flexWrap: "wrap",
                gap: "1rem",
              }}
            >
              {CourseSelects.map((CourseSelect, index) => {
                return (
                  <Typography
                    key={index}
                    sx={{
                      color: "#000080",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      fontFamily: "Poppins",
                    }}
                  >
                    {CourseSelect}
                  </Typography>
                );
              })}
            </Grid>
            <Grid item xs={12} md={6}>
              {Courses.map((Course, index) => {
                return (
                  <FormControlLabel
                    control={<Checkbox />}
                    key={index}
                    label={Course}
                  />
                );
              })}
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box></Box>
    </Container>
  );
};
export default CourseSelect;

const styles = `
    @keyframes fadeInUp {
        0% {
            opacity: 0;
            transform: translateY(20px);
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }

    input[type="text"] {
        border: 1px solid #ccc;
        padding: 0.5rem;
    }

    input[type="text"]:focus {
        outline: none;
        border-color: #2f1370;
    }
`;

const styleElement = document.createElement("style");
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);
