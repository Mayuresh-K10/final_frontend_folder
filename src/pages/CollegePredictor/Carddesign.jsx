import React from "react";
import { Avatar, Box, Button, Grid, Typography } from "@mui/material";

const Carddesign = ({
  CollegeParticiapting,
  examdate,
  examlevel,
  imgcontent,
  imglogo,
}) => {
  return (
    <Box
      sx={{
        borderRadius: "18px",
        width: "350px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "center",
        cursor: "pointer",
        overflow: "hidden",
        transition: "All 0.3s ease",
        "&:hover": {
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        },
        "@media (min-width:800px)": {
          height: "350px",
          width: "350px",
        },
      }}
    >
      <Box
        sx={{
          height: "7rem",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          backgroundColor: "#EEECFE",
          padding: "1rem",
        }}
      >
        <Avatar
          sx={{
            width: 70,
            height: 70,
          }}
          src={imglogo}
        />
        <Typography
          sx={{
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "#160048",
            marginLeft: "0.4vw",
          }}
        >
          {imgcontent} College Predictor
        </Typography>
      </Box>

      <Grid
        container
        spacing={2}
        sx={{
          padding: "20px",
        }}
      >
        <Grid item xs={4}>
          <Typography sx={{ fontSize: "15px", fontWeight: 500 }}>
            Colleges Participating
          </Typography>
          <Typography sx={{ fontSize: "15px" }}>
            {CollegeParticiapting}
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography sx={{ fontSize: "15px", fontWeight: 500 }}>
            Exam Date
          </Typography>
          <Typography sx={{ fontSize: "15px" }}>{examdate}</Typography>
        </Grid>

        <Grid item xs={4}>
          <Typography sx={{ fontSize: "15px", fontWeight: 500 }}>
            Exam Level
          </Typography>
          <Typography sx={{ fontSize: "15px" }}>{examlevel}</Typography>
        </Grid>
      </Grid>

      <hr
        style={{
          border: " 1px solid rgba(123, 144, 255, 0.33)",
        }}
      />

      <Box display="flex" flexDirection="row" justifyContent="space-evenly">
        <Typography
          sx={{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "18px",
            display: "flex",
            alignItems: "center",
            letterSpacing: " 0.03em",
            justifyContent: "center",
            color: " #210366",
            paddingLeft: "1vw",
          }}
        >
          Exam Info
        </Typography>
        <Typography
          sx={{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "18px",
            display: "flex",
            alignItems: "center",
            letterSpacing: " 0.03em",
            justifyContent: "center",
            color: "#210366",
            paddingLeft: "3vw",
            "@media (max-width:480px)": {
              paddingLeft: "8vw",
            },
          }}
        >
          CutOff
        </Typography>
        <Typography
          sx={{
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "18px",
            display: "flex",
            alignItems: "center",
            letterSpacing: " 0.03em",
            justifyContent: "center",
            color: " #210366",
            paddingLeft: "1.5vw",
            "@media (max-width:480px)": {
              paddingLeft: "3vw",
            },
          }}
        >
          Practice Tests
        </Typography>
      </Box>

      <Button
        variant="text"
        href="/collegePredictor/exam"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          color: "#FFFFFF",
          backgroundColor: "#7B90FF",
          fontWeight: 600,
          fontSize: "0.8rem",
          letterSpacing: "0.02em",
          borderRadius: "16px",
          marginX: "auto",
          marginY: "1rem",
          "&:hover": {
            backgroundColor: "#B6E5FB",
            color: "#3c52b2",
          },
          width: "90%",
        }}
      >
        Predict Now
      </Button>
    </Box>
  );
};

export default Carddesign;
