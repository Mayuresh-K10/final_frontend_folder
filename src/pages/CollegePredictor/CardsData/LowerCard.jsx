import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Links from "../Components/Links";
import { Avatar } from "@mui/material";

const LowerCard = ({
  collegeParticipating,
  collegeName,
  Images,
  collegeLoaction,
}) => {
  return (
    <Box
      sx={{
        borderRadius: "1rem",
        width: "350px",
        height: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "center",
        radius: "28px",
        border: "1px solid lightgray",
        overflow: "hidden",

        "@media (min-width:800px)": {
          height: "270px",
          width: "351px",
        },
        "&:hover": {
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        },
      }}
    >
      <Box>
        <Box
          sx={{
            padding: "1rem 1.8rem",
            height: "5.5rem",
            backgroundColor: "#EEECFE",
            overflow: "hidden",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ width: 70, height: 70 }} src={Images} />
          <Box
            display="flex"
            flexDirection="column"
            sx={{
              marginLeft: "0.5vw",
            }}
          >
            <Typography
              sx={{
                fontSize: "1.1rem",
                fontWeight: 700,
                marginLeft: "0.5vw",
                color: "#160048",
              }}
            >
              {collegeName}
            </Typography>
            <Typography
              sx={{
                fontSize: "1.1rem",
                fontWeight: 500,
                color: "#160048",
              }}
            >
              {collegeLoaction}
            </Typography>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
        >
          <Typography
            sx={{
              borderRight: "1px solid rgba(123, 144, 255, 0.33)",
              fontStyle: "normal",
              fontWeight: "bold",
              fontSize: "16px",
              lineHeight: "18px",
              alignItems: "center",
              letterSpacing: "0.03em",
              marginTop: ".5rem",
              color: "#210366",
              marginBottom: "2vh",
            }}
          >
            College Particapiting
            <div
              style={{
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
              {collegeParticipating}
            </div>
          </Typography>
        </Box>
        <hr
          style={{
            border: " 1px solid rgba(123, 144, 255, 0.33)",
          }}
        />
        <Box
          display="flex"
          flexDirection="row"
          sx={{
            justifyContent: "space-around",
            paddingTop: "2vh",
          }}
        >
          <Links text="Admission" />
          <Links text="College Info" />
          <Links text="Course & Fees" />
        </Box>
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

export default LowerCard;
