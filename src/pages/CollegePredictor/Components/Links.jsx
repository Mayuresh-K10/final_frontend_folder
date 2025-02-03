import React from "react";
import { Box, Typography } from "@mui/material";

const Links = (props) => {
  return (
    <Box>    
      <Typography
      sx={{
        boxSizing:"border-box",
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "400",
        fontSize: "16px",
        lineHeight: "18px",
        display: "flex",
        alignItems: "center",
        letterSpacing: " 0.03em",
        justifyContent: "center",
        color: " #210366",
      }}
    >{props.text}</Typography>
    </Box>

  );
};

export default Links;
