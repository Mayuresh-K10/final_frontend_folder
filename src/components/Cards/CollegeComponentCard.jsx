import React, { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const CollegeCardsthree = (props) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContentVisibility = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginY: "2rem",
          flexDirection: "row",
          flexWrap: "wrap",
          maxWidth: "400px",
          width: "273px",
          height: "255px",
          backgroundColor: "white",
          marginX: "auto",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.15);",
          borderRadius: "28px",
          overflow: "hidden",
          paddingX: "10px",
          paddingY: "10px",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "scale(1.03)", // Scale on hover
            boxShadow: "0 2px 8px 2px rgba(178, 178, 178, 0.48)",
            cursor: "pointer",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            borderRadius: "28px",
            overflow: "hidden",
            height: "112px",
          }}
        >
          <img
            style={{
              objectFit: "cover",
              width: "273px",
              height: "112px",
              borderRadius: "18px",
            }}
            src={props.img}
            alt=""
          />
          <Box
            sx={{
              position: "absolute",
              bottom: "10px",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#fff",
              marginLeft: "10px",
              color: "#111",
              padding: "5px",
              borderRadius: "16px",
              height: "fit-content",
              width: "fit-content",
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "5px",
              lineHeight: "6px",
              letterSpacing: "0em",
              textAlign: "left",
            }}
          >
          </Box>
          <Box sx={{ position: "absolute", top: "10px", right: "10px" }}>
            <FavoriteBorderIcon
              sx={{
                fontSize: "16px",
                color: "#FFC72C",
                "&:hover": {
                  color: "white",
                },
              }}
            />
          </Box>
        </Box>
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            marginX: "2rem",
          }}
        >
          <img src={props.icon} alt="" />
          <img src={props.icon} alt="" />
        </Stack>

        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "700",
            marginX: "1rem",
            marginTop: "0.5rem",
            color: "#210366",
            height: isContentVisible ? "auto" : "3.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "height 0.3s ease",
            overflow: "hidden", // Hide overflow
          }}
        >
          {isContentVisible ? props.contents : props.contents.slice(0, 25)}
        </Typography>
        <Box
          sx={{
            width: "80%",
            opacity: "0.7",
            margin: "0 auto",
            marginTop: "1rem",
          }}
        >
          <hr />
        </Box>
        <Box>
          <Button
            variant="text"
            sx={{
              color: "#FF7900",
              display: "flex",
              justifyContent: "center",
              padding: "5px",
              cursor: "pointer",
              marginBottom: "6px",
              borderRadius: "5px",
              "&:hover": {
                color: "#FF9C49",
                backgroundColor: "transparent",
              },
            }}
            onClick={toggleContentVisibility}
          >
            {isContentVisible ? "Read Less" : "Read More"}
          </Button>

         
        </Box>
      </Box>
    </>
  );
};

export default CollegeCardsthree;
