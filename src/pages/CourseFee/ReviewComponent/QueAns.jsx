import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { keyframes } from "@emotion/react";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const QueAns = ({ user, date, questions }) => {
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <Box
      sx={{
        fontFamily: "Poppins, sans-serif",
        background: "#ffffff",
        borderRadius: "1rem",
        padding: "1rem",
        fontSize: "0.9rem",
        color: "#2f1370",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
        transition: "box-shadow 0.3s ease-in-out",
        "&:hover": {
          boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <Box
        sx={{
          height: `${show ? "fit-content" : "5.8rem"}`,
          overflow: "hidden",
          transition: "height 0.3s ease-in-out",
        }}
      >
        {questions.map(({ question, answer }, index) => (
          <Box
            key={index}
            sx={{
              animation: `${fadeIn} 0.3s ease forwards`,
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              Ques: {question}
              <Button
                onClick={handleClick}
                sx={{
                  color: show ? "#FF7900" : "#7B90FF",
                  padding: "0",
                  background: "none",
                  fontWeight: "bold",
                  border: "none",
                  cursor: "pointer",
                  "&:hover": {
                    color: show ? "#7B90FF" : "#FF7900",
                    background: "none",
                    border: "none",
                  },
                }}
              >
                {show ? "VIEW LESS" : "VIEW ALL"}
              </Button>
            </span>
            <Box>
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "#7F7D9C",
                  fontSize: "0.8rem",
                  textTransform: "capitalize",
                }}
              >
                Top Answer by {user} on {date}
              </Typography>
            </Box>
            <Typography>Ans: {answer}</Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Typography
            onClick={() => setLike(like + 1)}
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#7B90FF",
              cursor: "pointer",
              "&:hover": {
                color: "#5c6ac4",
              },
            }}
          >
            <ThumbUpIcon sx={{ fontSize: "1.3rem" }} /> {like}
          </Typography>
          <Typography
            onClick={() => setDislike(dislike + 1)}
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#FF7900",
              cursor: "pointer",
              "&:hover": {
                color: "#f36e23",
              },
            }}
          >
            <ThumbDownIcon sx={{ fontSize: "1.3rem" }} /> {dislike}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#000",
              cursor: "pointer",
              "&:hover": {
                color: "#333",
              },
            }}
          >
            <ShareIcon sx={{ fontSize: "1.3rem" }} /> Share
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default QueAns;
