import { Box, Typography } from "@mui/material";
import React from "react";
import SACard1 from "./SACard1";
import { Card1 } from "./Data";

import HeadText from "../../components/Headings/HeadText";

const CollegeWallahCounselling = () => {
  return (
    <Box
      sx={{
        paddingY: "5rem",
      }}
    >
      <HeadText headText={"Collegecue Free Counselling: Let Us Guide You"} />

      <Box>
        <Typography
          sx={{
            color: "#210366",
            fontWeight: 600,
            letterSpacing: "0.03em",
            marginY: "0.5rem",
          }}
        >
          Looking into Study Abroad colleges and universities as an
          international student can be a challenge, but it&apos;s one you can
          overcome! From how to look for accredited schools to what you should
          write about on your applications, our expert counsellors will help you
          at every step.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginY: "2rem",
        }}
      >
        {Card1.map((val, index) => {
          return (
            <SACard1
              key={index}
              img={val.img}
              bgColor={val.bgColor}
              title={val.title}
              content={val.content}
              link={val.link}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default CollegeWallahCounselling;
