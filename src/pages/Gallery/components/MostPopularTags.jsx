import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { mostPopularTags } from "./Data/Data";
import TagsButton from "../Button/TagsButton";

function MostPopularTags() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        margin: "1rem 0",
      }}
    >
      <Container>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "700",
            lineHeight: "36px",
            color: "#210366",
            margin: "0.8rem",
            letterSpacing: "0em",
          }}
        >
          Most Popular Tags
        </Typography>
        {mostPopularTags.map((value) => {
          return (
            <TagsButton key={value.id} title={value.title} num={value.num} />
          );
        })}
      </Container>
    </Box>
  );
}

export default MostPopularTags;
