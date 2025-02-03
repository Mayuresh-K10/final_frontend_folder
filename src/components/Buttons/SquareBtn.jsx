

import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const RoundBtn = ({ image, name }) => {
  return (
    <Link to={`/study-abroad/${name}`} style={{ textDecoration: "none" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "white",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          height: "170px",
          width: "170px",
          borderRadius: "2rem 1rem",
          color: "#323C4F",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.3)",
          },
          paddingY:'10px'
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "85%",
          }}
        >
          <img
            src={image}
            alt={name}
            style={{
              width: "87%",
              height: "87%",
              objectFit: "contain",
            }}
          />
        </Box>

        <Typography
          sx={{
            fontWeight: 600,
            textAlign: "center",
            textTransform: "uppercase",
            color: "#323C4F",
            maxWidth: 100,
            height: 30,
            marginX: "auto",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {name}
        </Typography>
      </Box>
    </Link>
  );
};

export default RoundBtn;
