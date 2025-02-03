import React from "react";
import { Toolbar, Typography, Button } from "@mui/material";


const Header = () => {
  return (
    <Toolbar
      sx={{
        width: 1214,
        height: 50,
        background: "#210366",
        boxShadow: "0px 4px 40px rgba(0, 0, 0, 0.10)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          top: 0,
          marginTop: 1,
          position: "absolute",
          color: "white",
          fontSize: 17,
          fontFamily: "Inter",
          fontWeight: "700",
          textTransform: "capitalize",
          wordWrap: "break-word",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography marginRight={2}>Top universities & colleges</Typography>
        <Typography marginRight={2}>Top courses</Typography>
        <Typography marginRight={2}>Exam</Typography>
        <Typography marginRight={2}>Study Abroad</Typography>
        <Typography marginRight={2}>Review</Typography>
        <Typography marginRight={2}>New</Typography>
        <Typography marginRight={2}>Admission 2023</Typography>
        <Typography marginRight={2}>Write a review</Typography>
        <Typography marginRight={2}>Top coupons</Typography>
        <Typography marginRight={2}>More</Typography>
        <Button
        variant="contained"
        // onClick={}
          style={{
            color: "white",
            fontSize: 17,
            fontFamily: "Inter",
            fontWeight: "700",
            textTransform: "capitalize",
            wordWrap: "break-word",
            background: '#7B90FF',
          }}
        >
          Login
        </Button>
      </Typography>
    </Toolbar>
  );
};

export default Header;