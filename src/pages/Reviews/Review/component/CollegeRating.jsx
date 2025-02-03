import React from "react";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import academic from "../../assets/academic.png";
import accomodation from "../../assets/accomodation.png";
import faculty from "../../assets/teacher.png";
import infrastructure from "../../assets/infra.png";
import placement from "../../assets/placement.png";
import sociallyf from "../../assets/social-status.png";
const ratingsData = [
  { label: "Academic", imgSrc: academic, rating: 9.0 },
  { label: "Accommodation", imgSrc: accomodation, rating: 9.0 },
  { label: "Faculty", imgSrc: faculty, rating: 9.2 },
  { label: "Infrastructure", imgSrc: infrastructure, rating: 9.0 },
  { label: "Placement", imgSrc: placement, rating: 9.0 },
  { label: "Social Life", imgSrc: sociallyf, rating: 9.2 },
];

export default function CollegeRating() {
  return (
    <Stack
      sx={{
        marginTop: "1rem",
        width:'100%',
        borderRadius: "28px",
        boxShadow: "0px 4px 40px 0px #7B90FF26",
        padding: "1rem",
        marginBottom: "2rem",
        '@media (max-width:600px)':{
          width: "fit-content",
          marginX:"auto"
        }
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between", '@media (max-width:600px)':{
          flexDirection:'column',
      } }}>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "700",
            lineHeight: "26px",
            letterSpacing: "0em",
            color: "#210366",
            marginBottom: "1rem",
            marginTop: "1rem",
          }}
        >
          College Rating
        </Typography>
        <Box>
          <Typography
            sx={{ fontSize: "20px", fontWeight: "700", lineHeight: "26px" }}
          >
            {ratingsData[0].rating.toFixed(1)} out of 10
          </Typography>
          <Rating value={ratingsData[0].rating} readOnly precision={0.1} />
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ flexDirection: "column" }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "700",
            lineHeight: "26px",
            letterSpacing: "0em",
            textAlign: "center",
            color: "#210366",
            marginBottom: "1rem",
            marginTop: "1rem",
            '@media (max-width:600px)':{
              fontSize:"11px"
            }
          }}
        >
          Based on <span style={{ color: "#FF7900" }}>74 students</span> Rating{" "}
          <span style={{ color: "#FF7900" }}> CLAIM THIS COLLEGE</span>
        </Typography>
      </Box>
      <Divider />
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ marginRight: "1rem", 
          display:"grid",
          gridTemplateColumns:"auto auto auto",
          placeItems:'center',
          justifyContent:'space-evenly',
         '@media (max-width:600px)':{
          display:"grid",
          gridTemplateColumns:"auto auto",
          placeItems:'center',
        }}}
      >
        {ratingsData.map((data, index) => (
          <Grid item key={index}>
            <Box textAlign="center">
              <Box
                sx={{
                  width: "100px",
                  height: "100px",
                  overflow: "hidden",
                  borderRadius: "1rem",
                  marginX: "auto",
                  padding:"0.5rem",
                }}
              >
                <img
                  src={data.imgSrc}
                  alt={data.label}
                  style={{
                    width: "80%",
                    height: "80%",
                    objectFit: "cover",
                   
                  }}
                />
              </Box>
              <Typography
                sx={{
                  marginTop: "-1.5rem",
                  fontSize: "16px",
                  fontWeight: "bold",
                  lineHeight: "26px",
                }}
              >
                {data.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      </Stack>
  );
}
