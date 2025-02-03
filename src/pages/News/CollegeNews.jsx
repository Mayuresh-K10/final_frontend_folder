import React, { useState } from "react";
import Hero from "./Hero";
import NewsComponent2 from "./NewsComponent2";
import NewsComponent3 from "./NewsComponent3";
import { Typography, Container, Box, TextField, Button } from "@mui/material";

import RadioGroup from "../../components/RadioGroupRating";

import { Helmet } from "react-helmet";
import AdSenseComponent from "../../utils/AdSenseComponent";

const CollegeNews = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    setEmail("");
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Stay updated with the latest news and updates related to education, universities, research, and career trends."
        />
        <meta
          name="google-adsense-account"
          content="ca-pub-3919517798801147"
        ></meta>
      </Helmet>
      <style>
        {`
          body {
            margin: 0;
            background-color: #f9f9f9; /* Light background color */
            color: #333;
          }

          .page-content {
            padding: 2rem 0;
          }

          .trending-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            margin: 0 auto;
          }

          .grid-container {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
          }

          .grid-item {
            display: flex;
            justify-content: center;
          }

          .subscribe-box {
            background-color: #f9f9f9;
            padding: 20px;
            margin-top: 20px;
            margin-bottom: 30px;
            border-radius: 8px;
            box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: center;
          }

          .subscribe-btn {
            width: 120px;
            padding: 10px;
            background-color: #210366;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
          }

          .subscribe-btn:hover {
            background-color: #2c0f7c;
          }

          .subscribe-btn:focus {
            outline: none;
          }

          .MuiTextField-root {
            width: 300px;
            background-color: #f5f5f5;
            border-radius: 5px;
            padding: 10px;
          }

          .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
            border-color: #210366;
          }

          .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input {
            color: #210366;
          }

          .MuiInputLabel-outlined.Mui-focused {
            color: #210366;
          }
        `}
      </style>

      <Container width="100%" className="page-content">
        <Hero />
        <NewsComponent2 />
        <AdSenseComponent />
        <NewsComponent3 />

        <Box className="subscribe-box" sx={{marginX:'1rem'}}>
          <Typography
            variant="h4"
            sx={{ marginBottom: "1rem", fontWeight: "bold" }}
          >
            Subscribe to Our Newsletter
          </Typography>
          <div className="subscribe-form">
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              value={email}
              onChange={handleEmailChange}
              InputProps={{
                style: { backgroundColor: "#f5f5f5" },
              }}
              InputLabelProps={{
                style: { color: "#210366" },
              }}
            />
            <Button
              sx={{ marginTop: "0.5rem" }}
              variant="contained"
              color="primary"
              className="subscribe-btn"
              onClick={handleSubscribe}
            >
              Subscribe
            </Button>
          </div>
        </Box>

        <RadioGroup />
      </Container>
    </>
  );
};

export {CollegeNews};
