import { Box } from "@mui/material";
import React from "react";
import LoginCard from "./LoginCard";
import bacground from "../assets/loginbackground.png";
import WhySignUpCard from "./WhySignUpCard";
const Login = () => {
  return (
    <Box
      maxWidth="xl"
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100vh",
        position: "relative",
      }}
    >
      <img
        src={bacground}
        alt="background"
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: "0",
          zIndex: "-1",
        }}
      />
      <WhySignUpCard />
      <LoginCard />
    </Box>
  );
};

export default Login;