import { Box, Button, Typography } from "@mui/material";
import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Link } from "react-router-dom";

function OurStudentCard({ thumb, title, sub, link }) {
  return (
    <>
      <Box
        sx={{
          width: "400px",
          marginBottom: "10px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            borderRadius:"50px"
          }}
        >
          <Link to={link}>
            <img
              src={thumb}
              alt=""
              style={{
                width: "100%",
                borderRadius:"50px"
              }}
            />
          </Link>
          <Button
            variant="contained"
            color="error"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              borderRadius: "12px",
            }}
          >
            <PlayArrowIcon />
          </Button>
        </Box>
        <Typography
          variant="subtitle1"
          sx={{
            color: "black",
            fontWeight: 600,
            textAlign:"center"
          }}
        >
          <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
            {title}
          </Link>
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            fontSize: "0.6rem",
            textAlign:"center"
          }}
        >
          {sub}
        </Typography>
      </Box>
    </>
  );
}

export default OurStudentCard;
