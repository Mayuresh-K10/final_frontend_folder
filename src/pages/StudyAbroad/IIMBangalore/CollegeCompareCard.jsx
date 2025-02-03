import React from "react";
import SuggestionCards from "../../../components/Cards/SuggestionCards";
import { Card2 } from "../../../data/DataLanding";
import {
  Box,
  Typography,
  Avatar,
  Card,
  CardContent,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SchoolIcon from "@mui/icons-material/School";

function CollegeCompareCard({ collegeInfo }) {
  // console.log("data:", collegeInfo);
   const {
    
    image,
    review_icon,
    img_logo,
    card_title,
    title_text,
    review_rate,
    review_cnt,
    btn_contents,
    btn2,
    btn3,
    btn4,
    img_title,
    img_body,
  } = Card2[0]; // Accessing the data of the first card

  return (
    <SuggestionCards
      
      image={image}
      review_icon={review_icon}
      img_logo={img_logo}
      card_title={card_title}
      title_text={title_text}
      review_rate={review_rate}
      review_cnt={review_cnt}
      btn_contents={btn_contents}
      btn2={btn2}
      btn3={btn3}
      btn4={btn4}
      img_title={img_title}
      img_body={img_body}
    />
  );
}

const CollegeCompareCard2 = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "300px",
        height: "430px",
        borderRadius: "2rem",
        backgroundColor: "white",
        margin: "auto",
        overflow: "hidden",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.15);",
        padding: "0.5rem",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "280px",
          height: "180px",
          borderRadius: "1rem",
          backgroundImage: `url(${props.image})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginX: "2rem",
          }}
        >
          <Avatar src={props.img_logo} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                textAlign: "left",
                fontWeight: "500",
                marginX: "1rem",
                marginTop: "0.5rem",
                color: "white",
              }}
            >
              {props.img_title}
            </Typography>
            <Typography
              sx={{
                textAlign: "left",
                fontSize: "11px",
                fontWeight: "700",
                marginTop: "0.5rem",
                color: "white",
              }}
            >
              {props.img_body}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Card
        sx={{
          marginTop: "1rem",
          boxShadow: "none",
          borderRadius: "0",
          borderTop: "1px solid #ddd",
        }}
      >
        <CardContent>
          <TextField
            label="Search College"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ marginBottom: "1rem" }}
          />
          <TextField
            label="Select Course"
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SchoolIcon />
                </InputAdornment>
              ),
            }}
            sx={{ marginBottom: "1rem" }}
          />
        </CardContent>
      </Card>
    </Box>
  );
};
export { CollegeCompareCard, CollegeCompareCard2 };
