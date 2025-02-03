import { Box,  Typography } from "@mui/material";
import React from "react";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { Link } from "react-router-dom";

const CourseAboutCard = (props) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#FFF",
          border: "5px dashed #160048",
          borderRadius: "20px",
          height: "250px",
          width: "350px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          paddingTop: "1rem",
          transition: "All 0.5s, color 0.5s",
          '&:hover': {
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.15);",
            border: "5px dashed #ED6C02",
          },
          "& > *:hover": {
            backgroundColor: "white",
          },
          '@media (max-width : 770px)': {
            height: "210px",
            width: "300px",
          }

        }}
      >
        <Box>
          <Box>
            <Typography
              sx={{
                color: "#210366",
                fontSize: "25px",
                fontWeight: "700",
                textAlign: "center",
                marginY: "1rem",
              }} >
              {props.deg}
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontWeight: "500",
                backgroundColor: "#160048",
                marginLeft: "1rem",
                color: "white",
                width: "fit-content",
                padding: "5px",
                marginBottom: "0.5rem",
                borderRadius: "12px",
              }}
            >
              {props.type}
            </Typography>
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >

            <Typography
              sx={{
                display: "flex",
                alignItems: 'center',
                gap: "5px"
              }}
            >
              <SchoolOutlinedIcon />
              {props.duration}
            </Typography>

            <Typography
              sx={{
                display: "flex",
                alignItems: 'center',
                gap: "5px"
              }}>
              <PaidOutlinedIcon />
              {props.fee}
            </Typography>


            <Typography
              sx={{
                display: "flex",
                alignItems: 'center',
                gap: "5px"
              }}>
              <LocationCityIcon />
              {props.cllgs}
            </Typography>

          </Box>
        </Box>
        <Box
         
          sx={{
            margin: "1rem",
            color: "#210366",
            fontSize: "16px",
            fontWeight: "700",
            alignSelf: "center ",
            textDecoration: "none",
            cursor: "pointer",
            
          }}
        >
          <Link to="/course-finders">Courses overview</Link>
          
        </Box>
      </Box>
    </>
  );
};

export default CourseAboutCard;
