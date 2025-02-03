import { Box, Button, Container, Typography } from "@mui/material";
import Img1 from "../Assets/IIT_Guwahati__1641446008448_1641446008765 1 (1).png";
import Imglogo1 from "../Assets/Rectangle 17904 (1).png";
import React from "react";
const Carddesign = ({
  CollegeParticiapting,
  examdate,
  examlevel,
  imgcontent,
  imglogo,
  imgpath,
}) => {
  return (
    <Box
      sx={{
        borderRadius: "12px",
        width: "430px",
        height: "351px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        margin: "1rem auto",
        textAlign: "center",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        radius: "28px",
      }}
    >
      <Box
        sx={{
          padding: "1rem 1.8rem",
          height: "5.5rem",
          backgroundColor: "#7B90FF33",
          borderRadius: "12px",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: `url(${Img1})`,
        }}
      >
        <img src={Imglogo1} />
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontSize: "1.1rem",
            fontWeight: 700,
            color: "#210366",
          }}
        >
          {imgcontent}
        </Typography>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-evenly">
        <Typography
          component="div"
          sx={{
            borderRight: "1px solid rgba(123, 144, 255, 0.33)",
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "bold",
            fontSize: "16px",
            lineHeight: "18px",

            alignItems: "center",
            letterSpacing: "0.03em",
            marginTop: ".5rem",
            color: "#210366",
          }}
        >
          College Particapiting
          <div
            style={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "18px",
              display: "flex",
              alignItems: "start",
              letterSpacing: "0.03em",
              color: "#210366",
              marginTop: ".5rem",
              justifyContent: "center",
            }}
          >
            {CollegeParticiapting}
          </div>
        </Typography>
        <Container>
          <Typography
            component="div"
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "16px",
              lineHeight: "18px",
              alignItems: "center",
              letterSpacing: "0.03em",
              marginTop: ".5rem",
              color: "#210366",
              borderRight: "1px solid rgba(123, 144, 255, 0.33)",
            }}
          >
            Exam Date
            <div
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                display: "flex",
                alignItems: "center",
                letterSpacing: "0.03em",
                color: "#7B90FF",
                justifyContent: "center",
                marginTop: ".5rem",
              }}
            >
              {examdate}
            </div>
          </Typography>
        </Container>
        <Container>
          <Typography
            component="div"
            sx={{
              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "16px",
              lineHeight: "18px",
              alignItems: "center",
              letterSpacing: "0.03em",
              marginTop: ".5rem",
              color: "#210366",
            }}
          >
            Exam Level
            <div
              style={{
                fontFamily: "Poppins",
                fontStyle: "normal",
                fontWeight: "500",
                fontSize: "16px",
                lineHeight: "18px",
                display: "flex",
                alignItems: "center",
                letterSpacing: "0.03em",
                color: "#7B90FF",
                justifyContent: "center",
                marginTop: ".5rem",
              }}
            >
              {examlevel}
            </div>
          </Typography>
        </Container>
      </Box>
      <hr
        style={{
          border: " 1px solid rgba(123, 144, 255, 0.33)",
        }}
      />
      <Box display="flex" flexDirection="row" justifyContent="space-evenly">
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "18px",
            display: "flex",
            alignItems: "center",
            letterSpacing: " 0.03em",
            justifyContent: "center",
            color: " #210366",
          }}
        >
          Exam Info
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "18px",
            display: "flex",
            alignItems: "center",
            letterSpacing: " 0.03em",
            justifyContent: "center",
            color: "#210366",
          }}
        >
          CutOff
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "18px",
            display: "flex",
            alignItems: "center",
            letterSpacing: " 0.03em",
            justifyContent: "center",
            color: " #210366",
          }}
        >
          Practice Tests
        </Typography>
      </Box>
      <Button
        variant="text"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          color: "#FFFFFF",
          backgroundColor: "#7B90FF",
          fontFamily: "Poppins",
          fontWeight: 600,
          fontSize: "0.8rem",
          letterSpacing: "0.02em",
          borderRadius: "12px",
          margin: "0rem auto",
          marginTop: "1rem",
          marginBottom: "1rem",
          "&:hover": {
            backgroundColor: "#fff",
            color: "#3c52b2",
          },
        }}
      >
        Predict Now
      </Button>
    </Box>
  );
};

export default Carddesign;
