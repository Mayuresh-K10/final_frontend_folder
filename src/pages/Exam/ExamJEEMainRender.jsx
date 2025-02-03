import React from "react";
import { Box, Typography } from "@mui/material";
import ExamsJEEMain from "../../components/Cards/ExamJEEMainCard";
import { JEEMainData } from "./Data";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const ExamJEEMainRender = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/test-series");
  };

  return (
    <Box>
      <Box
        sx={{
          fontSize: "36px",
          fontWeight: "700",
          lineHeight: "24px",
          color: "#210366",
          whiteSpace: "nowrap",
          paddingY: "3.5rem",
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#210366",
            fontSize: "2.25rem",
            paddingTop: "1rem",
            fontWeight: 700,
            textAlign: "center",
            "@media (max-width: 768px)": {
              fontSize: "1rem",
            },
          }}
        >
          Top JEE Main Previous Year Papers
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          // marginLeft : '5vw',
          justifyContent: "center",
          alignItems: "center",
          [theme.breakpoints.down("md")]: {
            flexDirection: "column",
          },
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
          },
          gap: "5vw",

          paddingX: "10px",
          width: "100%",
        }}
      >
        {JEEMainData.map((item, id) => {
          return (
            <ExamsJEEMain
              key={id}
              name={item.name}
              date={item.date}
              img={item.img}
              onClick={handleClick}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default ExamJEEMainRender;
