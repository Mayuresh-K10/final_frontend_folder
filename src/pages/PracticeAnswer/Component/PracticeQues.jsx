import { Box, Typography, Button, Grid } from "@mui/material";
import React, { useState } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const QueAns = ({
  paper,
  topic,
  subject,
  questions,
  statement1,
  statement2,
  answers,
  date,
  title,
}) => {
  const [show, setShow] = useState(false);
  const [mark, setMark] = useState(false);

  const handleClick = () => {
    setShow(!show);
  };

  const handleClicked = () => {
    setMark(!mark);
  };

  return (
    <Box
      sx={{
        fontStyle: "normal",
        background: "#ffffff",
        boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
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
          height: "auto",
          overflow: "hidden",
          transition: "height 0.3s ease-in-out",
        }}
      >
        <Box
          sx={{
            gap: "1rem",
            justifyContent: "space-between",
            flexWrap: "wrap",
            fontSize: "0.8rem !important",
          }}
        >
          {questions.map(({ question }, index) => {
            return (
              <Box key={index}>
                <Typography
                  sx={{
                    color: "#000080",
                    fontWeight: "bold",
                    fontSize: "1rem",
                    paddingTop: "0.5rem",
                    paddingBottom: "2rem",
                  }}
                >
                  {" "}
                  {title}
                </Typography>
                <span
                  style={{
                    justifyContent: "space-between",
                    color: "#2F1370",
                    fontSize: "0.875rem",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "126.523%",
                  }}
                >
                  Q: {question}
                </span>
                <Typography
                  sx={{
                    color: "#2F1370",
                    fontSize: "0.875rem",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "126.523%",
                    paddingTop: "1rem",
                  }}
                >
                  Assertion A: {statement1}
                </Typography>
                <Typography
                  sx={{
                    color: "#2F1370",
                    fontSize: "0.875rem",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "126.523%",
                    paddingTop: "1rem",
                  }}
                >
                  Reason R: {statement2}
                </Typography>
                <Grid
                  container
                  spacing={2}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    paddingTop: "3rem",
                    justifyContent: "space-between",
                  }}
                >
                  <Grid item xs={12} md={10} sx={{ display: "flex" }}>
                    <Grid item xs={4} md={2}>
                      <Typography
                        sx={{
                          color: "#2F1370",
                          fontSize: "0.875rem",
                          fontStyle: "normal",
                          fontWeight: 600,
                          lineHeight: "126.523%",
                        }}
                      >
                        {paper}
                      </Typography>
                    </Grid>
                    <Grid item xs={4} md={4}>
                      <Typography
                        sx={{
                          color: "#2F1370",
                          fontSize: "0.875rem",
                          fontStyle: "normal",
                          fontWeight: 600,
                          lineHeight: "126.523%",
                        }}
                      >
                        {topic}
                      </Typography>
                    </Grid>
                    <Grid item xs={4} md={2}>
                      <Typography
                        sx={{
                          color: "#2F1370",
                          fontSize: "0.875rem",
                          fontStyle: "normal",
                          fontWeight: 600,
                          lineHeight: "126.523%",
                        }}
                      >
                        {subject}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={2}
                    sx={{ display: "flex", alignItems: "center" }}
                  >
                    <Button
                      onClick={handleClick}
                      sx={{
                        display: `${show ? "none" : "block"}`,
                        color: "#FF7900",
                        padding: "0",
                        background: "none",
                        fontSize: " 0.875rem",
                        fontWeight: 600,
                        Border: "none",

                        "&:hover": {
                          background: "none",
                          border: "none",
                        },
                      }}
                    >
                      View Solution
                    </Button>

                    <Button
                      sx={{
                        display: `${!show ? "none" : "block"}`,
                        color: "#FF7900",
                        padding: "0",
                        background: "none",
                        fontWeight: "Bold",
                        Border: "none",
                        "&:hover": {
                          background: "none",
                          border: "none",
                        },
                      }}
                    >
                      Updated On: {date}
                    </Button>

                    <Box
                      onClick={handleClick}
                      sx={{
                        display: `${show ? "none" : "block"}`,
                        color: "#FF7900",
                      }}
                    >
                      <ArrowForwardIosIcon />
                    </Box>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    height: `${show ? "fit-content" : "1rem"}`,
                    overflow: "hidden",
                    transition: "height 0.3s ease-in-out",
                  }}
                >
                  {answers.map(({ ans, correctAns }, index) => {
                    return (
                      <Box key={index}>
                        <Box
                          sx={{
                            display: "flex",
                            paddingTop: "2rem",
                            alignItems: "flex-start",
                          }}
                        >
                          <Button
                            variant="outlined"
                            sx={{
                              color: "#2F1370",
                              fontSize: "0.875rem",
                              fontStyle: "normal",
                              fontWeight: 600,
                              lineHeight: "126.523%",
                              borderRadius: "0.625rem",
                              border: "1px solid rgba(47, 19, 112, 0.42)",
                              height: "3rem",
                              justifyContent: "flex-start",
                              background:
                                mark && correctAns !== undefined
                                  ? "lightgreen"
                                  : "",
                              backgroundColor:
                                mark && correctAns === undefined
                                  ? "mistyrose"
                                  : "",
                            }}
                            onClick={handleClicked}
                            fullWidth
                          >
                            <Typography sx={{}}>{ans}</Typography>
                          </Button>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default QueAns;
