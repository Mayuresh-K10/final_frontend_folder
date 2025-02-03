import { Box, Container, Divider, Pagination, Typography } from "@mui/material";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";


import EarnUpto from "./components/EarnUpto";

import BoldHeading from "../../components/Headings/BoldHeading";

import LeaderBoard from "./components/LeaderBoard";
import cactus from "./images/courses-shape.png";
import DoDont from "./components/DoDont";
import Faq from "../../components/Faq/Faq";


const WriteReview = () => {
  const [reviewFAQ, setReviewFAQ] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const FAQPerPage = 10;

  const authToken = process.env.REACT_APP_BACKEND_BEARER_TOKEN
  const url = process.env.REACT_APP_BACKEND_SERVER_URL

  const getreviewFAQ = useCallback(async () => {
    try {
      const response = await axios.get(
        `${url}/api/faqs?pagination[page]=${currentPage}&pagination[pageSize]=${FAQPerPage}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const data = response.data;

      if (data) {
        setReviewFAQ(data.data);
        setTotalPages(data.meta.pagination.pageCount);
      } else {
        console.error("Unexpected response format:", data.data);
      }
    } catch (error) {
      console.error("Error fetching review FAQ:", error);
    }
  }, [currentPage, url, authToken]);

  useEffect(() => {
    getreviewFAQ();
  }, [getreviewFAQ]/*, [currentPage]*/);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  // const earnData = [
  //   {
  //     img: img1,
  //     way: "Write a Review & EarnUp to",
  //     amount: "10",
  //   },
  //   {
  //     img: img2,
  //     way: "Reward For Selected Colleges Reviews",
  //     amount: "10",
  //   },
  //   {
  //     img: img4,
  //     way: "Get Reviews From Your Friends & Earn",
  //     amount: "10",
  //   },
  //   {
  //     img: img5,
  //     way: "Achieve Milestone and Earn Up to",
  //     amount: "10",
  //   },
  // ];
  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            paddingY: "3.5rem",
            justifyContent: "center",
            alignItems: "center",
            marginX: "auto",
            maxWidth: { xs: "90%", sm: "70%", md: "100%", lg: "100%" },
          }}
        >
          <Box>
            <EarnUpto />
          </Box>

          <Box
            sx={{
              padding: "2rem 4rem 2rem 4rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              marginBottom: "3rem",
              width: "100%",
              "@media (max-width:800px)": {
                paddingLeft: "1vw",
                paddingRight: "1vw",
              },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: "2.5rem",
                lineHeight: "3rem",
                letterSpacing: "0em",
                color: "#2c3968",
                fontWeight: "bold",
                marginBottom: "1rem",
                paddingY: "3.5rem",
              }}
            >
              Collegecue Reviews Leaderboard- This Month
            </Typography>
            <LeaderBoard />
          </Box>
          <Divider
            variant="horizontal"
            style={{
              width: "100%",
            }}
          />
          <Box
            sx={{
              bgcolor: "#f6fafb",
              padding: "4rem 4rem 2rem 4rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100%",
              gap: "2rem",
              position: "relative",
              "@media (max-width:800px)": {
                paddingLeft: "1vw",
                width: "100%",
                paddingRight: "1vw",
              },
            }}
          >
            <BoldHeading textAlign="center" color="#1F305E">
              Do’s & Dont’s - Points to Consider While Writing a Review
            </BoldHeading>
            <DoDont />
            <Box
              sx={{
                position: "absolute",
                top: "-50px",
                right: "150px",
              }}
            >
              <img
                src={cactus}
                alt=""
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
            </Box>
            <BoldHeading textAlign="center" color="#1F305E">
              Frequently Asked Questions (FAQs)
            </BoldHeading>
            <Faq faqs={reviewFAQ} />
          </Box>
        </Box>
      </Container>

      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        sx={{ display: "flex", justifyContent: "center", marginTop: "3.5rem", marginBottom: "3.5rem" }}
      />
    </>
  );
};

export { WriteReview };