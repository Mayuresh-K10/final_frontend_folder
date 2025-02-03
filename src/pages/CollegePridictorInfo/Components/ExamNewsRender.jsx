import React from "react";
import ExamNews from "../../../components/Cards/ExamNewsCard";
import { Box, Typography } from "@mui/material";
import { ExamNewsData } from "../Data";

const ExamNewsRender = () => {
  return (
    <Box
      sx={{
        filter: "drop-shadow(0px 0px 40px rgba(123, 144, 255, 0.1))",
        marginBottom: "40px",

      }}
    >
      <style>
       
        @import
        url(&apos;https://fonts.googleapis.com/css2?family=Inter&display=swap&apos;);
      </style>
      <Box
        sx={{
          border: "1px solid grey",
          boxSizing: "border-box",
          height: "57px",
          width: "330px",
          background: "#FFFFFF",
          borderBottom: "2.5px solid #7B90FF",
          borderRadius: "20px 20px 0px 0px",
          textAlign: "center",
        }}
      >
        <Box>
          <Typography
            sx={{

              fontFamily: "Poppins",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "24px",
              color: "#210366",
              paddingTop: "8px",
              textAlign: "center",
              marginTop: "16px",
            }}
          >
            Exams News
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "330px",
          height: "393.97px",
          background: "#FFFFFF",
          boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.1)",
          borderRadius: "0px 0px 20px 20px",
          border: "1px solid grey",
          borderTop: "none"
        }}
      >
        {ExamNewsData.map((item, id) => {
          return (
            <ExamNews
              key={id}
              name={item.name}
              date={item.date}
              img={item.img}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default ExamNewsRender;
