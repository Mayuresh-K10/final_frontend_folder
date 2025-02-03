import {
  Box,
  Container,
  Typography,
} from "@mui/material";
import React from "react";
import { CampusImages, eventImages } from "./Data/Data";
import RoundImages from "./RoundImages";

function IIMBangaloreImages() {
  return (
    <Box
      sx={{
        borderRadius: "28px",
        height: "auto", // Change height to auto to allow content to dictate height
        width: "100%",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        display: "flex",
        flexDirection: "column",
        margin: "1rem 0",
      }}
    >
      <Container>
        
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: "700",
            lineHeight: "36px",
            color: "#210366",
            letterSpacing: "0em",
            margin: "0.8rem",
          }}
        >
          Campus Images
        </Typography>
        <Box sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}>
          {CampusImages.map((value) => {
            return (
              <RoundImages key={value.id} pic={value.img} picname={"Campus Images"} />
            );
          })}
        </Box>
        <Typography
          sx={{
            fontSize: "25px",
            fontWeight: "700",
            lineHeight: "36px",
            color: "#210366",
            letterSpacing: "0em",
            gap: "0.8rem",
          }}
        >
          Events Images
        </Typography>
        <Box sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}>
          {eventImages.map((value) => {
            return (
              <RoundImages key={value.id} pic={value.img} picname={"Event Images"} />
            );
          })}
        </Box>
      </Container>
    </Box>
  );
}

export default IIMBangaloreImages;