import { Avatar, Box, Rating, Typography, Container } from "@mui/material";
import React from "react";
import GrayButton from "../Button/GrayButton";
import OrangeButton from "../Button/OrangeButton";
import BlueButton from "../Button/BlueButton";
const RightCards = (props) => {
  return (
    
    <Container
      maxWidth="lg"
      sx={{
        height: "160px",
        width: "100%",
        backgroundColor: "#FFFFFF",
        marginTop: "2rem",
        boxShadow: "0px 2px 40px rgba(123, 144, 255, 0.1)",
        borderRadius: "12px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        '@media (max-width:800px)': {
          flexDirection: "column",
          alignItems: "center",
          height: "auto",
        },
      }}
    >
      <Avatar
        src={props.img}
        sx={{
          height: "120px",
          width: "120px",
          padding: "1rem",
          marginTop: "1rem",
          marginLeft: "1rem",
          border: "0.1px solid #7B90FF",
          '@media (max-width:800px)': {
            margin: "0 auto",
          },
        }}
      />
      <Box
        sx={{
          display: "flex",
          marginLeft: "2rem",
          flexDirection: "column",
          gap: "0.2rem",
          marginTop: "0.7rem",
          width: "47%",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Poppins",
            fontWeight: "700",
            fontSize: "1.3rem",
            color: "#210366",
            whiteSpace: "nowrap",
          }}
        >
          {props.name}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontFamily: "Poppins",
            fontWeight: "700",
            fontSize: "1.3rem",
            color: "#210366",
            whiteSpace: "nowrap",
          }}
        >
          {props.AcedemyName}
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "500",
            fontSize: "1rem",
            color: "#210366",
            whiteSpace: "nowrap",
          }}
        >
          Centers: {props.CenterName}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "0.4rem",
            width: "%",
          }}
        >
          
          <Box>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "1rem",
                color: "#210366",
                whiteSpace: "nowrap",
              }}
            >
              {props.Courses}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "0.2rem",
            whiteSpace: "nowrap",
          }}
        >
          <Box sx={{ width: "60%", display: "flex", gap: "0.5rem" }}>
            <GrayButton text="Info" />
            <GrayButton text="Courses & Fees " />
          </Box>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "1rem",
              color: "#210366",
              marginLeft: "0.3rem",
              paddingTop: "0.2rem",
            }}
          >
            {props.CoursesFee}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: "0.7rem",
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          marginLeft: "1rem",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "500",
            fontSize: "1rem",
            color: "#210366",
            marginLeft: "0.3rem",
            paddingTop: "0.2rem",
          }}
        >
          {props.stars}
        </Typography>

        <Rating
          name="read-only"
          value={props.stars}
          sx={{ color: "#7B90FF" }}
          precision={0.1}
          readOnly
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          marginLeft: "2rem",
          marginTop: "1rem",
        }}
      >
        <OrangeButton text="Brochure" link={props.brochure} />
        <OrangeButton text="Apply Now" link={props.apply} />
      </Box>
        </Container>
        
  );
};

export default RightCards;
