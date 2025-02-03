import React from "react";
import { Container, Box, Typography } from "@mui/material";
import { ClgRankTable } from "./ClgRankTable";

export const CollegeRanking = () => {
  return (
    <Container>
      <Box sx={{ margin: "2rem" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            margin: "0px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "fit-content", marginBottom: "1rem" }}>
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: 500,
                lineHeight: "3rem",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#210366",
                display: "inline",
              }}
            >
              Collage Ranking
            </Typography>
            <Box
              sx={{
                borderTop: "6px solid #7B90FF",
                borderRadius: "10px",
                display: "flex",
                width: "100%",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <ClgRankTable />
        </Box>
      </Box>
    </Container>
  );
};
