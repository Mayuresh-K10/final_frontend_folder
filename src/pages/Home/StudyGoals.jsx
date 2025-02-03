import React, { useState } from "react";
import StudyGoal from "../../components/Buttons/StudyGoal";
import { Box, Container, Typography } from "@mui/material";
import StudyGoalDialog from "../../components/Cards/StudyGoalDialog";
import img1 from "../../Assets/HomePage/11.webp";
import img2 from "../../Assets/HomePage/2.webp";
import img3 from "../../Assets/HomePage/5.webp";
import img4 from "../../Assets/HomePage/8.webp";
import img5 from "../../Assets/HomePage/1.webp";
import img7 from "../../Assets/HomePage/10.webp";
import img8 from "../../Assets/HomePage/3.webp";
import img9 from "../../Assets/HomePage/12.webp";
import img10 from "../../Assets/HomePage/13.webp";

const StudyGoals = () => {
  // console.log("StudyGoals Render ");
  const results = [
    {
      label: "Engineering",
      imagePath: img1,
      course1: "BTech",
      course2: "Diploma in Engineering",
      course3: "MTech",
    },
    {
      label: "Management",
      imagePath: img2,
      course1: "MBA",
      course2: "BBA",
      course3: "BBM",
    },
    {
      label: "Medical",
      imagePath: img3,
      course1: "MBBS",
      course2: "PG Medical",
      course3: "",
    },
    {
      label: "Commerce",
      imagePath: img4,
      course1: "BCom",
      course2: "MCom",
      course3: "",
    },
    {
      label: "Design",
      imagePath: img5,
      course1: "BDes",
      course2: "MDes",
      course3: "",
    },
    {
      label: "Law",
      imagePath: img7,
      course1: "LLB",
      course2: "LLM",
      course3: "",
    },
    {
      label: "Architecture",
      imagePath: img8,
      course1: "BArch",
      course2: "MArch",
      course3: "",
    },
    {
      label: "Animation",
      imagePath: img9,
      course1: "Bachelor of Animation",
      course2: "Diploma in Animation",
      course3: "Certificate in Animation",
    },
    {
      label: "Aviation",
      imagePath: img10,
      course1: "BBA (Aviation)",
      course2: "",
      course3: "",
    },
  ];

  const [openBoxId, setOpenBoxId] = useState(null);

  const handleBoxClick = (index) => {
    setOpenBoxId(index);
  };

  const handleClose = () => {
    setOpenBoxId(null);
  };

  return (
    <>
      <Container maxWidth="xl" sx={{ marginBottom: "5rem" }}>
        <Box sx={{ marginTop: "4rem" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              margin: "0px",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <Box sx={{ width: "fit-content", marginBottom: "1rem" }}>
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: 500,
                  lineHeight: "3rem",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#210366",
                  display: "inline",
                }}
              >
                Select Your Study Goals
              </Typography>
              <Box
                sx={{
                  borderTop: "6px solid #7B90FF",
                  borderRadius: "10px",
                  display: "flex",
                  width: "100%",
                }}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-around",
              marginBottom: "2rem",
              "@media (max-width :770px)": {
                gap: "10px",
              },
            }}
          >
            {results.map((result, index) => (
              <Box
                key={index}
                className={`study-goal-box ${
                  openBoxId === index ? "open" : ""
                }`}
                onClick={() => handleBoxClick(index)}
              >
                <StudyGoal dt={result.label} img={result.imagePath} />
              </Box>
            ))}
          </Box>
        </Box>

        {openBoxId !== null && (
          <StudyGoalDialog
            isOpen={openBoxId !== null}
            onClose={handleClose}
            data={results[openBoxId]}
          />
        )}
      </Container>
    </>
  );
};

export default StudyGoals;
