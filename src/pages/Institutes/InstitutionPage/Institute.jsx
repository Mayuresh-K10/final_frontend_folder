import React from "react";
import { Box } from "@mui/material";
import LeftCard from "../LeftCard/LeftCard";
import RightCards from "../RightCard/RightCards";
import { Pagination } from "@mui/material";
import BoldHeading from "../Components/BoldHaeding";
import PageNameHeading from "../Components/PageNameHaeding";
import { Container } from "@mui/material";
import CountryFilter from "../Components/CountryFilter";
import { Card } from "@material-ui/core";
import { Typography } from "@mui/material";
import RatingBox from "../Components/RatingBox";
const MainPage = () => {
  return (
    <Container
      sx={{
        padding: "2rem 0 !important",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <PageNameHeading>Institute</PageNameHeading>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <BoldHeading>
          List of Top Institute in Indian Based on 2023 Ranking
        </BoldHeading>
        <Box>
          <CountryFilter />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
          <LeftCard />
          <RightCards />
        </Box>
      </Box>

      <Card
        sx={{
          display: "center",
          flexDirection: "column",
          margin: "auto",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontFamily: "Poppins",
            fontSize: "1.25rem",
            lineHeight: "3rem",
            letterSpacing: "0em",
            color: "#2F1370",
            fontWeight: "bold",
            marginBottom: "1rem",
            textAlign: "Center",
          }}
        >
          How likely are you to recommend collegecue to a friend or a
          colleague?
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "center",
            marginBottom: "2rem",
            justifyContent: "space-between",
          }}
        >
          <RatingBox>1</RatingBox>
          <RatingBox>2</RatingBox>
          <RatingBox>3</RatingBox>
          <RatingBox>4</RatingBox>
          <RatingBox>5</RatingBox>
          <RatingBox>6</RatingBox>
          <RatingBox>7</RatingBox>
          <RatingBox>8</RatingBox>
          <RatingBox>9</RatingBox>
          <RatingBox>10</RatingBox>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ color: "rgba(51, 51, 51, 1)" }}>
            Not so likely
          </Typography>
          <Typography
            sx={{
              color: "rgba(33, 3, 102, 1)",
              fontFamily: "Poppins",
              fontSize: "1.25rem",
              lineHeight: "3rem",
              letterSpacing: "0em",

              fontWeight: "bold",
            }}
          >
            Highly likely
          </Typography>
        </Box>
      </Card>

      <Pagination
        count={10}
        color={"primary"}
        sx={{
          alignItems: "center",
          "& .css-wjh20t-MuiPagination-ul": {
            width: "fit-content",
            margin: "0 auto",
          },
        }}
      />
    </Container>
  );
};

export default MainPage;
