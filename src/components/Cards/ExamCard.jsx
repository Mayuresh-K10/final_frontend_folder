import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { RegisterModal } from "../Modal/MultiModal";

const ExamCard = ({
  key,
  examName,
  examDescription,
  registrationPage,
  readMore,
  isAbroadExam,
  
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        borderRadius: "18px",
        width: "22rem",
        minHeight: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: "1rem auto",
        textAlign: "center",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        transition: "box-shadow 0.3s ease-in-out",
        "&:hover": {
          boxShadow: "rgba(99, 99, 99, 0.5) 0px 4px 16px 0px",
        },
      }}
    >
      <Box
        sx={{
          padding: "1rem 1.8rem",
          height: "5.5rem",
          backgroundColor: "#4F5DE4",
          borderRadius: "18px 18px 0px 0px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: 700,
            color: "#ffffff",
          }}
        >
          {examName}
        </Typography>
      </Box>

      <Box sx={{ padding: "0.5rem 1rem", overflow: "hidden" }}>
        <Typography
          sx={{
            fontSize: "0.8rem",
            fontWeight: 500,
            lineHeight: "1.4rem",
            textAlign: "center",
            color: "#210366",
          }}
        >
          {examDescription ? examDescription.slice(0, 140) + "..." : ""}
        </Typography>
      </Box>

      {isAbroadExam ? (
        <Button
          variant="contained"
          sx={{
            color: "#ffffff",
            backgroundColor: "#7B90FF",
            fontWeight: 600,
            fontSize: "0.9rem",
            letterSpacing: "0.02em",
            borderRadius: "12px",
            margin: "1.5rem auto",
            "&:hover": {
              backgroundColor: "#5f77db",
            },
          }}
          onClick={handleOpen}
        >
          {registrationPage}
        </Button>
      ) : (
        <Link to={`/study-abroad/abroadExam`}>
          <Button
            variant="contained"
            sx={{
              color: "#ffffff",
              backgroundColor: "#7B90FF",
              fontWeight: 600,
              fontSize: "0.9rem",
              letterSpacing: "0.02em",
              borderRadius: "12px",
              margin: "1.5rem auto",
              "&:hover": {
                backgroundColor: "#5f77db",
              },
            }}
          >
            Registration
          </Button>
        </Link>
      )}
            <RegisterModal
              open={open}
              showCollegeInfo={true}
              collegeName={examName}
              handleClose={handleClose}
            />
    </Box>
  );
};

export default ExamCard;
