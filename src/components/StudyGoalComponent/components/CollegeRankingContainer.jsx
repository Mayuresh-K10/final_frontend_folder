import { Box, Container, Stack,  } from "@mui/material";
import React from "react";
import CollegeRankingCard from "../../components/Cards/CollegeRankingCard";
import DataFile from "../../data/DataFile";
import Heading from "../../components/Headings/Heading";

const CollegeRankingContainer = () => {
  return (
    <>
      <Container maxWidth="lg" >
        <Box
          sx={{
            justifyItems: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            margin: "1rem 0 ",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            <Heading head="College Ranking 2023"></Heading>
          </Box>

          <Stack
            direction="row"
            spacing={4}
            useFlexGap
            flexWrap="wrap"
            display="flex"
            justifyContent="center"
            sx={{ marginTop: "2rem", marginBottom: "2rem" }}
          >
            {DataFile.map((val) => {
              return <CollegeRankingCard img={val.img} city={val.city}></CollegeRankingCard>;
            })}
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default CollegeRankingContainer;
