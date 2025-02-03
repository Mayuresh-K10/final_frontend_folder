import React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

import StarIcon from "@mui/icons-material/Star";
import Rating from "@mui/material/Rating";
import { RegisterModal } from "../../../components/Modal/MultiModal";

const Card = ({
  courseDuration,
  courseType,
  courseLevel,
  programType,
  courseEligibility,
  courseDetail,
  popularJobRoles,
  entranceExamName,
  entranceExamFullForm,
  entranceExamMode,

  courseName,
}) => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= 800);
  const [open, setOpen] = useState(false);
  const [showAll, setShowAll] = useState(window.innerWidth > 768);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const handleResize = () => {
      setShowAll(window.innerWidth > 768);
      setIsWideScreen(window.innerWidth >= 800);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Stack
        sx={{
          borderRadius: "2rem",
          width: "95%",
          height: "auto",
          border: "1px solid lightgray",
          "&:hover": {
            boxShadow: 3,
          },
          "@media (max-width:800px)": {
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          },
        }}
      >
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            margin: ".5rem",
            paddingLeft: "1rem",
            "@media (max-width:800px)": {
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Stack
            sx={{ display: "flex", flexDirection: "column", flexWrap: "wrap" }}
          >
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                "@media (max-width:800px)": {
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  textAlign: "center",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#210366",
                  fontSize: 19,
                  fontWeight: "700",
                  wordWrap: "break-word",

                  marginBottom: "0.3rem",
                }}
              >
                {courseName}
              </Typography>
              <Typography
                sx={{
                  color: "#210366",
                  fontSize: 20,
                  fontWeight: "500",
                  wordWrap: "break-word",
                  marginRight: "1rem",
                  marginBottom: "0.3rem",
                  marginLeft: "0.5rem",
                }}
              >
                {courseLevel}
              </Typography>

              <Typography
                style={{
                  color: "#210366",
                  fontSize: 20,
                  fontWeight: "600",
                  wordWrap: "break-word",
                }}
              >
                <Rating
                  name="customized-icons"
                  value={4.5}
                  precision={0.5}
                  icon={<StarIcon sx={{ color: "#FFD700" }} />}
                  readOnly
                />
              </Typography>
            </Stack>

            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                "@media (max-width:800px)": {
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#210366",
                  fontSize: 14,
                  fontWeight: "500",
                  wordWrap: "break-word",
                  marginRight: "0.3rem",
                }}
              >
                {courseType}
              </Typography>
              <Typography
                sx={{
                  color: "#210366",
                  fontSize: 14,
                  fontWeight: "500",
                  wordWrap: "break-word",
                  marginRight: "0.3rem",
                }}
              >
                {programType}
              </Typography>
              <Typography
                style={{
                  color: "#210366",
                  fontSize: 14,
                  fontWeight: "500",
                  wordWrap: "break-word",
                  marginRight: "1rem",
                }}
              >
                {courseDuration}
              </Typography>
              <Typography
                sx={{
                  color: "#210366",
                  fontSize: 14,
                  fontWeight: "500",
                  wordWrap: "break-word",
                  marginRight: "1rem",
                }}
              >
                {courseEligibility}
              </Typography>
            </Stack>

            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                marginY: "1rem",
                "@media (max-width:800px)": {
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
            >
              {!showAll && (
                <Button
                  sx={{ "@media (min-width: 769px)": { display: "none" } }}
                  onClick={() => setShowAll(true)}
                >
                  View More
                </Button>
              )}
              {showAll && (
                <Button
                  sx={{ "@media (min-width: 769px)": { display: "none" } }}
                  onClick={() => setShowAll(false)}
                >
                  View Less
                </Button>
              )}
              {showAll && (
                <Typography
                  sx={{
                    color: "#210366",
                    fontSize: 14,
                    fontWeight: "500",
                    wordWrap: "break-word",
                    marginRight: "1rem",
                    cursor: "pointer",
                    marginBottom: "1rem",
                  }}
                >
                  {courseDetail}
                </Typography>
              )}
            </Stack>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                gap: "1.5rem",
                "@media (max-width:800px)": {
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  maxWidth: "80%",
                  height: "2rem",
                  background: "rgba(123.25, 144.32, 255, 0.30)",
                  padding: "0.5rem 0.5rem",
                  borderRadius: 2,
                  overflow: "auto", // Set overflow
                  "@media (max-width: 780px)": {
                    height: "auto",
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#210366",
                    fontSize: 12,
                    fontWeight: "600",
                    textTransform: "capitalize",
                    wordWrap: "break-word",
                  }}
                >
                  {" "}
                  Popular Job Roles: {popularJobRoles}
                </Typography>
              </Box>

              <Button
                variant="contained"
                sx={{
                  height: 30,
                  background: "#FF7900",
                  marginBottom: "1rem",
                }}
                onClick={handleOpen}
              >
                Apply Now
              </Button>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
            background: "rgba(123.25, 144.32, 255, 0.20)",
            borderRadius: "0 0 2rem 2rem",
            padding: "1%",
            "@media (max-width:800px)": {
              padding: "3%",
            },
          }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100%",
              flexDirection: isWideScreen ? "row" : "column",
            }}
          >
            {[entranceExamName, entranceExamFullForm, entranceExamMode].map(
              (item, index) => (
                <Box
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "1rem",
                  }}
                >
                  <Typography
                    style={{
                      color: "#210366",
                      fontSize: 15,
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    {item}
                  </Typography>
                </Box>
              )
            )}
            <RegisterModal
              open={open}
              showCollegeInfo={true}
              collegeName={courseName}
              handleClose={handleClose}
            />
          </Box>
        </Stack>
      </Stack>
    </>
  );
};

export default Card;
