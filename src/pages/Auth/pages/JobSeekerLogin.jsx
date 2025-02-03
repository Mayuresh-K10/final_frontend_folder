import { Box } from "@mui/material";
import React, { useLayoutEffect } from "react";
import WhySignUpCard from "../components/WhySignUpCard";
import JobSeekerLoginCard from "../components/JobSeekerLogin";

const JobSeekerLogin = () => {
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
        <JobSeekerLoginCard />
      </Box>
    </Box>
  );
};

export {JobSeekerLogin};
