import { Avatar, Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";

const TopReviewCard = ({
  avatar,
  name,
  institution,
  review,
  course,
  getbgColor,
}) => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };
  return (
    <Box
      id="header"
      sx={{
        fontFamily: "Poppins, sans-serif",
        fontStyle: "normal",
        background: "#ffffff",
        boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
        borderRadius: "1rem",
        width: "22.625rem",
        padding: "1rem",
        fontSize: "0.9rem",
        color: "#2f1370",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        '@media (max-width:600px)':{
          width:'80%'
        }
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          flexWrap: "wrap",
          fontSize: "0.8rem !important",
        }}
      >
        <Avatar
          src={avatar}
          name={name}
          sx={{
            bgcolor: getbgColor(name[0].toUpperCase()),
            textTransform: "uppercase",
          }}
        >
          {name[0]}
        </Avatar>
        <Box>
          <Typography
            id="name"
            sx={{ fontWeight: "bold", color: "#2f1370", fontSize: "0.8rem" }}
          >
            {name}
          </Typography>
          <Typography id="intitution" sx={{ fontSize: "0.8rem" }}>
            {institution}
          </Typography>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            height: `${show ? "fit-content" : "4.5rem"}`,
            overflow: "hidden",
            transition: "height 0.3s ease-in-out",
          }}
        >
          {review}
        </Box>
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
          Showmore
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
          Showless
        </Button>
      </Box>
    </Box>
  );
};

export default TopReviewCard;
