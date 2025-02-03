import { Box,  Stack } from "@mui/material";
import React from "react";
import { FactCard } from "./Data";
import FactAboutUs from "../../components/Cards/FactAboutUsCard";
import HeadText from "../../components/Headings/HeadText";

const FewFacts = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        paddingY:"3.5rem",
      }}
    >
      <HeadText headText={"A few facts about us.."} />
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        {FactCard.map((val, index) => {
          return (
            <FactAboutUs
              key={index}
              img={val.img}
              title={val.title}
              content={val.content}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default FewFacts;
