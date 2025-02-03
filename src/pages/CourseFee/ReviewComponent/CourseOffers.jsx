import {

  Box,
  Typography,
} from "@mui/material";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ImportContactsTwoToneIcon from "@mui/icons-material/ImportContactsTwoTone";
import HistoryEduTwoToneIcon from "@mui/icons-material/HistoryEduTwoTone";
import PendingTwoToneIcon from "@mui/icons-material/PendingTwoTone";
import BusinessTwoToneIcon from "@mui/icons-material/BusinessTwoTone";
import ArrowCircleRightTwoToneIcon from "@mui/icons-material/ArrowCircleRightTwoTone";
import DownloadTwoToneIcon from "@mui/icons-material/DownloadTwoTone";
import CompareArrowsTwoToneIcon from "@mui/icons-material/CompareArrowsTwoTone";
import React from "react";
const CourseOffers = ({
  streams,
  duaration,
  time,
  degree,
  degrees,
  campus,
  fees,
  rating,
  review,
  rate,
  exam,
  applDate,
  questions,
  question,
  user,
  date,
}) => {
  return (
    <Box
      sx={{
        fontStyle: "normal",
        background: "white",
        boxShadow:
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        borderRadius: "1rem",
        padding: "1rem",
        fontSize: "0.9rem",
        color: "#2f1370",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", flexWrap: 'wrap' }}>
          <Typography
            sx={{
              backgroundColor: "#7B90FF",
              borderRadius: "1rem 1rem 1rem 1rem", // Adjusted for the left Typography
              width: "calc(100% - 10rem)", // Adjusted width for the left Typography
              height: "2rem",
              padding: "0.5rem 1rem",
              display: "flex",
              alignItems: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              fontWeight: "bold",
            }}
          >
            {streams}
          </Typography>
          <Typography
            sx={{
              backgroundColor: "#7B90FF",
              borderRadius: "1rem 1rem 1rem 1rem", // Adjusted for the right Typography
              fontWeight: "bold",
              width: "8rem",
              height: "2rem",
              padding: "0.5rem 1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {time}
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: 'wrap',
              '@media (max-width:800px)': {
                flexWrap: 'wrap',
                justifyContent: 'center'
              },

            }}
          >
            <Box sx={{
              display: "flex", gap: 1, paddingTop: "1rem",  flexWrap: 'wrap', '@media (max-width:800px)': {
                flexWrap: 'wrap',
                justifyContent: 'center'
              },
            }}>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  paddingTop: "1rem",
                  flexWrap: 'wrap',
                  '@media (max-width:800px)': {
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                  },
                }}
              >
                <Box sx={{ color: "#7B90FF" }}>
                  <AccessTimeIcon />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: "#7B90FF",
                      fontSize: "1rem",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "0.89375rem",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap", // Prevent text from wrapping
                      overflow: "hidden", // Hide overflowing text
                      textOverflow: "ellipsis", // Show ellipsis for overflow
                    }}
                  >
                    {duaration}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  paddingTop: "1rem",
                }}
              >
                <Box sx={{ color: "#FF7900", marginLeft: "1.4rem" }}>
                  <ImportContactsTwoToneIcon />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      color: "#FF7900",
                      fontSize: "1rem",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "0.89375rem",
                      textTransform: "uppercase",
                    }}
                  >
                    {degree}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  paddingTop: "1rem",
                }}
              >
                <Box sx={{ color: "#210366", marginLeft: "1.4rem" }}>
                  <HistoryEduTwoToneIcon />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      color: "#210366",
                      fontSize: "1rem",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "0.89375rem",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {degrees}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  paddingTop: "1rem",
                }}
              >
                <Box sx={{ color: "#7B90FF", marginLeft: "1.4rem" }}>
                  <PendingTwoToneIcon />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      color: "#7B90FF",
                      fontSize: "1rem",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "0.89375rem",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {time}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  paddingTop: "1rem",
                }}
              >
                <Box sx={{ color: "#FF7979", marginLeft: "1.4rem" }}>
                  <BusinessTwoToneIcon />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: "Poppins, sans-serif",
                      color: "#FF7979",
                      fontSize: "1rem",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "0.89375rem",
                      textTransform: "uppercase",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      // marginLeft: '2rem',
                    }}
                  >
                    {campus}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{
            display: "flex", justifyContent: "space-between",  flexWrap: 'wrap', '@media (max-width:800px)': {
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
              marginTop: '0.5rem'
            },
          }}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Typography
                sx={{
                  color: "#FF7900",
                  fontSize: "0.875rem",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "1.1375rem",
                }}
              >
                <span style={{ color: "#FF7900" }}>{rating}</span>/10
              </Typography>
              <Typography
                sx={{
                  color: "#7B90FF",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "0.875rem",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "1.1375rem",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {review} Reviews
              </Typography>
              <Typography
                sx={{
                  color: "#210366",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "0.875rem",
                  fontStyle: "normal",
                  fontWeight: 500,
                  lineHeight: "1.1375rem",
                }}
              >
                | {rate}{" "}
                <span style={{ color: "#FF7900" }}>NIRF in Management</span>
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#FF7900",
                  textAlign: "right",
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "1.7875rem",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  marginLeft: "1.8",
                }}
              >
                Check Detailed Fees{" "}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#666",
                fontFamily: "Poppins, sans-serif",
                fontSize: "0.875rem",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "1.1375rem",
              }}
            >
              {" "}
              Exams Accepted : <span style={{ color: "#FF7900" }}>{exam}</span>
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                color: "#666",
                fontFamily: "Poppins, sans-serif",
                fontSize: "0.875rem",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "1.1375rem",
              }}
            >
              {" "}
              Application Date:{" "}
              <span style={{ color: "#210366" }}>{applDate}</span>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 1,   flexWrap: 'wrap', '@media (max-width:800px)':{
                flexWrap:'wrap',
                justifyContent:'flex-start'
              }, }}>
            <Box
              sx={{ alignItems: "center", display: "flex", paddingTop: "1rem" }}
            >
              <Box sx={{ color: "#210366" }}>
                <ArrowCircleRightTwoToneIcon />
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#210366",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "0.875rem",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "1.1375rem",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Admission Predictor
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ alignItems: "center", display: "flex", paddingTop: "1rem" }}
            >
              <Box sx={{ color: "#7B90FF" }}>
                <DownloadTwoToneIcon />
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#7B90FF",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "0.875rem",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "1.1375rem",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Download Brochure
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{ alignItems: "center", display: "flex", paddingTop: "1rem",'@media (max-width:800px)':{
                justifyContent:'flex-start',display:'flex',flexDirection:'column',alignItems:'flex-start'
              } }}
            >
              <Box sx={{ color: "#FF7900" }}>
                <CompareArrowsTwoToneIcon />
              </Box>
              <Box>
                <Typography
                  sx={{
                    color: "#FF7900",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "0.875rem",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "1.1375rem",
                  }}
                >
                  Compare
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 1,
                }}
              >
                <Typography
                  sx={{
                    color: "#7B90FF",
                    textAlign: "right",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "1rem",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "1.7875rem",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    marginLeft: "7.2rem",
                    '@media (max-width:800px)':{
                      marginLeft:'0rem'
                    }
                  }}
                >
                  {fees}
                </Typography>
                <Typography
                  sx={{
                    color: "#210366",
                    textAlign: "right",
                    fontSize: "1rem",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "1.7875rem",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    paddingLeft: "0.1rem",
                  }}
                >
                  {" "}
                  Total Fees
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default CourseOffers;
