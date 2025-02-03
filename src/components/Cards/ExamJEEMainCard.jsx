import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

const ExamsJEEMain = (props) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick(); // Trigger onClick event passed from parent component
    }
  };

  return (
    <>
      <style>
        
        @import url(&apos;https://fonts.googleapis.com/css2?family=Inter&display=swap&apos;);
      </style>

      <Box
        sx={{
          width: "292px",
          height: "187px",
          flexDirection: "column",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          padding: "27px 16px 26.2px",
          isolation: "isolate",
          background: "#FFFFFF",
          boxShadow: "0px 0px 40px rgba(123, 144, 255, 0.1)",
          borderRadius: "28px",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.1)",
            transition: "0.3s",
            boxShadow: "0 2px 8px 2px rgba(178,178,178,0.48)",
          },
        }}
        onClick={handleClick} // Attach onClick event to the Box component
      >
        <Avatar
          src={props.img}
          sx={{
            width: "70px",
            height: "70px",
          }}
        ></Avatar>

        <Typography
          sx={{
            height: "21px",
            marginTop: "8px",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "21px",
            color: "#333333",
            width: "260px",
          }}
        >
          {props.name}
        </Typography>

        <Typography
          sx={{
            marginTop: "9px",
            width: "182px",
            height: "21px",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "16px",
            lineHeight: "21px",
            color: "#333333",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "1px 12.4px 0px 12.59px",
          }}
        >
          {props.date}
        </Typography>
      </Box>
    </>
  );
};

export default ExamsJEEMain;
