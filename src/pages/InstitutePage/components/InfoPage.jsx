import React from "react";
import { Box, Card, Stack, Typography } from "@mui/material";
import { Persondata, MainHeadData, Dates, Paragraphs } from "../Data";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CourseFee from "../../CourseFee/CourseFee";
import TrendingNews from "../../TrendingNews/TrendingNews";

function InfoPage() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "column",

        gap: "2rem",
      }}
    >
      <Card>
        <Box>
          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{ width: "20vw", marginTop: "28px", marginLeft: "10px" }}
            >
              Select Tagged Courses :
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              sx={{
                gap: "25px",
                width: "100%",
                height: "50px",
                overflowY: "scroll",
                bgcolor: "white",
                marginY: "1rem",
              }}
            >
              <Typography
                role="button"
                title="item"
                sx={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  padding: "2px",
                }}
              >
                UPSC
              </Typography>
              <Typography
                role="button"
                title="item"
                sx={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  padding: "2px",
                }}
              >
                PCS
              </Typography>
            </Stack>
          </Box>

          <Box sx={{ display: "flex" }}>
            <Typography
              sx={{ width: "15vw", marginTop: "28px", marginLeft: "10px" }}
            >
              Select Course Type :
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              sx={{
                gap: "25px",
                width: "100%",
                height: "50px",
                overflowY: "scroll",
                bgcolor: "white",
                marginY: "1rem",
              }}
            >
              <Typography
                role="button"
                title="item"
                sx={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  padding: "2px",
                }}
              >
                Weekend
              </Typography>

              <Typography
                role="button"
                title="item"
                sx={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  padding: "2px",
                }}
              >
                Test Series
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Card>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-start",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography
          varient="h2"
          sx={{ fontSize: "25px", fontWeight: 600, color: "#00008B" }}
        >
          What's new at
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-start",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {MainHeadData.map((item) => (
          <Typography
            sx={{ fontSize: "18px", fontWeight: 300, color: "#00008B" }}
            key={item.id}
          >
            {item.typo}
          </Typography>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-start",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.3rem",
        }}
      >
        {Dates.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-start",
              flexDirection: "row",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Typography
              sx={{ fontSize: "15px", fontWeight: 500, color: "#097969" }}
            >
              {item.dates} :{" "}
            </Typography>
            <Typography
              sx={{ fontSize: "15px", fontWeight: 500, color: "#6495ED" }}
            >
              {" "}
              {item.typo}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "flex-start",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        {Paragraphs.map((item) => (
          <Typography
            sx={{ fontSize: "18px", fontWeight: 300, color: "#00008B" }}
            key={item.id}
          >
            {item.typo}
          </Typography>
        ))}
      </Box>
      <CourseFee />
      <TrendingNews />
    </Box>
  );
}

export default InfoPage;
