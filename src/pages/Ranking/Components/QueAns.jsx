import { Box, Typography, Button, Toolbar, IconButton } from "@mui/material";
import React, { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const QueAns = ({ user, date, questions }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <Box
      sx={{
        marginTop: 2,
        fontFamily: "Poppins, sans-serif",
        fontStyle: "normal",
        background: "#ffffff",
        borderRadius: "1rem",
        padding: "1rem",
        fontSize: "0.9rem",
        color: "#2f1370",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
    >
      <Box
        sx={{
          height: `${show ? "fit-content" : "5.8rem"}`,
          overflow: "hidden",
          transition: "height 0.3s ease-in-out",
        }}
      >
        {questions.map(({ question, answer }, index) => {
          return (
            <Box key={index}>
              <span
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                Ques: {question}
                <Button
                  onClick={handleClick}
                  sx={{
                    display: `${show ? "none" : "block"}`,
                    color: "#FF7900",
                    padding: "0",
                    background: "none",

                    Border: "none",
                    "&:hover": {
                      background: "none",
                      border: "none",
                    },
                  }}
                >
                  VIEW ALL
                </Button>
                <Button
                  onClick={handleClick}
                  sx={{
                    display: `${!show ? "none" : "block"}`,
                    color: "#FF7900",
                    padding: "0",
                    background: "none",

                    Border: "none",
                    "&:hover": {
                      background: "none",
                      border: "none",
                    },
                  }}
                >
                  VIEW Less
                </Button>
              </span>
              <Box>
                <Typography
                  id="name"
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
              <Box sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <Box>
                  <Toolbar>
                    <IconButton>
                      <ThumbUpIcon />
                      <Typography
                        sx={{
                          color: "#210366",
                          fontSize: 14,
                          fontFamily: "Poppins",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        1
                      </Typography>
                    </IconButton>
                    <IconButton>
                      <ThumbDownIcon />
                      <Typography
                        sx={{
                          color: "#210366",
                          fontSize: 14,
                          fontFamily: "Poppins",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        0
                      </Typography>
                    </IconButton>
                    <IconButton>
                      <ShareIcon />
                      <Typography
                        sx={{
                          color: "#210366",
                          fontSize: 14,
                          fontFamily: "Poppins",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        Share
                      </Typography>
                    </IconButton>
                    <IconButton>
                      <HelpOutlineIcon />
                      <Typography
                        sx={{
                          color: "#210366",
                          fontSize: 14,
                          fontFamily: "Poppins",
                          fontWeight: "400",
                          wordWrap: "break-word",
                        }}
                      >
                        2Answer
                      </Typography>
                    </IconButton>

                    <IconButton sx={{ color: "#7B90FF" }}>
                      <FiberManualRecordIcon />
                      <FiberManualRecordIcon />
                      <FiberManualRecordIcon />
                    </IconButton>
                  </Toolbar>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: "#7B90FF",
                      fontSize: 16,
                      fontFamily: "Inter",
                      fontWeight: "500",
                      wordWrap: "break-word",
                      alignSelf: "flex-end"
                    }}
                  >
                    Read more
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>

    </Box>
  );
};

export default QueAns;
