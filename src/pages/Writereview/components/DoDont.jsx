import { Box, Typography } from "@mui/material";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

import img6 from "../images/6.png";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

const DoDont = () => {
  const [doanddonts, setdoanddonts] = useState([]);
  const [currentPage] = useState(1);
  const [setTotalPages] = useState(1);
  const doanddontsPerPage = 6;

  const authToken = process.env.REACT_APP_BACKEND_BEARER_TOKEN;
  const url = process.env.REACT_APP_BACKEND_SERVER_URL;

  const getDoandDonts = useCallback(async () => {
    try {
      const response = await axios.get(
        `${url}/api/do-and-donts?pagination[page]=${currentPage}&pagination[pageSize]=${doanddontsPerPage}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const data = response.data;

      if (data) {
        // console.log("Do's and Dont's:", data.data);
        setdoanddonts(data.data);
        setTotalPages(data.meta.pagination.pageCount);
      } else {
        console.error("Unexpected response format:", data.data);
      }
    } catch (error) {
      console.error("Error fetching do's:", error);
    }
  }, [authToken, url, currentPage, setTotalPages]);

  useEffect(() => {
    getDoandDonts();
  }, [getDoandDonts]);

  const donts = [
    "Don't ignore instructions, rush through questions, make assumptions, leave out mentioned facts, or provide irrelevant information.",
    "No Rash words should be used in the content, it will be edited during the moderation process.",
    "Don't Copy others' content and reviews. Don't let anyone use your identity.",
    "Don't rush through the review form or skip steps, as each step is important and contributes to a comprehensive evaluation of your college experience.",
    "Don't be afraid to share the review form with other students and encourage them to participate, but avoid spamming or pressuring people to submit reviews. Respect their decision if they choose not to participate.",
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",

          gap: "1rem",
          color: "#2F1370",
          textAlign: "left",
        }}
      >
        <Box width="200px" height="200px">
          <img
            src={img6}
            alt="DosDOnt"
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "4rem",
            padding: "2rem",
            "@media (max-width:800px)": {
              gap: "1vh",
              flexDirection: "column",
              paddingLeft: "5vw",
              paddingRight: "5vw",
            },
          }}
        >
          <Box
            sx={{
              flex: "1",
              display: "flex",
              gap: "1rem",
              flexDirection: "column",

              "@media (max-width:800px)": {
                gap: "2vh",
                paddingBottom: "10vh",
              },
            }}
          >
            {doanddonts.map((item, index) => (
              <Box key={index} sx={{ display: "flex", gap: "1rem" }}>
                <CheckCircleIcon sx={{ color: "green" }} />
                <Typography variant="p">
                  {item.attributes.DosAndDonts} -{" "}
                  {item.attributes.PointsToConsider}
                </Typography>
              </Box>
            ))}
          </Box>
          <Box
            sx={{
              flex: "1",
              display: "flex",
              gap: "1rem",
              flexDirection: "column",
            }}
          >
            {donts.map((item, index) => (
              <Box key={index} sx={{ display: "flex", gap: "1rem" }}>
                <CancelIcon sx={{ color: "red" }} />
                <Typography variant="p">{item}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* <Pagination
    count={totalPages}
    page={currentPage}
    onChange={handlePageChange}
    sx={{ alignSelf: "center", marginTop: "1rem" }} /> */}
    </>
  );
};

export default DoDont;
