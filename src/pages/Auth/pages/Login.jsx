import { Box } from "@mui/material";
import React, { useLayoutEffect } from "react";
import LoginCard from "../components/LoginCard";
import WhySignUpCard from "../components/WhySignUpCard";

const Login = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
        "@media (max-width: 770px)": {
          flexDirection: "column-reverse",
          alignItems: "center",
          height: "100%",
        },
      }}
    >
      <Box>
        <WhySignUpCard />
      </Box>
      <Box>
        <LoginCard />
      </Box>
    </Box>
  );
};

export {Login};
