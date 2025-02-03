import React, { useState, useEffect } from "react";
import axios from "axios";
import AllCards from "./components/AllCards";
import Tests from "./components/Tests";

import Faq from "../../components/Faq/Faq";
import BoldHeading from "../../components/Headings/BoldHeading";
import { Box, Container } from "@mui/material";

const TestSeries = ()=> {
  const [testSeries, settestSeries] = useState([]);

  const authToken = process.env.REACT_APP_BACKEND_BEARER_TOKEN;
  const url = process.env.REACT_APP_BACKEND_SERVER_URL;

  const getTestSeriesFAQ = async () => {
    try {
      const response = await axios.get(`${url}/api/test-series-faqs`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      const data = response.data;

      if (data) {
        // console.log("Test Series:", data.data);
        settestSeries(data.data);
      } else {
        console.error("Unexpected response format:", data.data);
      }
    } catch (error) {
      console.error("Error fetching test Series FAQ:", error);
    }
  };

  useEffect(() => {
    getTestSeriesFAQ();
  });

  return (
    <>
      <Container maxWidth="xl" sx={{
        mx: "auto"
      }}>
        <Tests />
        <AllCards />
        <Box sx={{ marginY: "3rem" }}>
          <BoldHeading textAlign="center" color="#1F305E">
            Frequently Asked Questions (FAQs)
          </BoldHeading>
          <Faq faqs={testSeries} />
        </Box>
      </Container>
    </>
  );
}

export {TestSeries}