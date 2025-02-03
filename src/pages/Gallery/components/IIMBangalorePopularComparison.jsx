import {
  Box,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import ViewAllButton from "../Button/ViewAllButton";
import OrangeButton from "../Button/OrangeButton";
import { comparisonImages } from "./Data/Data";
import RoundImages from "./RoundImages";

function IIMBangalorePopularComparison() {
  return (
    <Box
      sx={{
        borderRadius: "28px",
        Height: "400px",
        width: "100%",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        margin: "1rem 0",
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        overflowX: "scroll",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            margin: "1rem",
            fontWeight: "700",
            lineHeight: "36px",
            color: "#210366",
            letterSpacing: "0em",
          }}
        >
          Popular Comparison
        </Typography>
        <ViewAllButton />
      </Container>
      <Container>
        <Divider />
        <Box sx={{
          display: "flex",
          gap: "0.8rem",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}>
          {comparisonImages.map((value) => {
            return (
              <Box sx={{
                marginTop: "1em",
                marginBottom: "1rem",
              }}>
                <RoundImages key={value.id} pic={value.img} picname={"Comparison Images"} />
                <Typography sx={{
                  fontSize: "16px",
                  fontWeight: "700",
                  lineHeight: "36px",
                  color: "#210366",
                  letterSpacing: "0em",
                }}
                >{value.title}</Typography>
              </Box>
            );
          })}
        </Box>
        <OrangeButton buttonName={"Compare Now"} />

      </Container>
    </Box>
  );
}
export default IIMBangalorePopularComparison;