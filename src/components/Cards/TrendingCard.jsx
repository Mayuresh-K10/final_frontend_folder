import React from "react";
import { Typography, Box, Link, useTheme } from "@mui/material";
import { keyframes } from "@emotion/react";

const TrendingCard = (props) => {
  const theme = useTheme();
  // Keyframes for animations
  const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

  const slideInUp = keyframes`
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  `;

  const slideInLeft = keyframes`
    from {
      transform: translateX(-20px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  `;

  const slideInRight = keyframes`
    from {
      transform: translateX(20px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  `;

  return (
    <>
      <div
        style={{
          marginLeft: "200px",
          margin: "0px",
          display: "flex",
          gap: "10px", // Adjust the gap between cards
        }}
      >
        <Box
          sx={{
            borderRadius: "1rem",
            width: "400px", // Increased width
            Height: "420px", // Increased height
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "1rem", // Adjusted padding
            backgroundColor: "#fff",
            boxShadow: theme.shadows[3],
            position: "relative",
            overflow: "hidden",
            animation: `${fadeIn} 0.5s ease, ${slideInUp} 0.5s ease`,
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": {
              transform: "translateY(-10px)",
              boxShadow: theme.shadows[6],
            },
          }}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "1.4rem", // Increased font size
              fontWeight: "700",
              color: "#210366",
              marginBottom: "1rem",
              animation: `${slideInUp} 0.8s ease`,
            }}
          >
            {props.heading}
          </Typography>
          <Box
            sx={{
              padding: "0.5rem 1rem",
              "&:not(:last-child)": {
                borderBottom: `1px solid ${theme.palette.primary.light}`,
              },
              animation: `${slideInLeft} 0.8s ease`,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "0.9rem", // Increased font size
                fontWeight: "600",
                color: theme.palette.text.primary,
                marginBottom: "0.5rem",
                animation: `${fadeIn} 1s ease`,
              }}
            >
              <Link href="#" underline="none" color={theme.palette.primary.main}>
                {props.content1}
              </Link>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "0.8rem",
                fontWeight: "400",
                color: theme.palette.text.secondary,
                marginBottom: "0.5rem",
                animation: `${fadeIn} 1s ease`,
              }}
            >
              {props.date}
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "0.5rem 1rem",
              "&:not(:last-child)": {
                borderBottom: `1px solid ${theme.palette.primary.light}`,
              },
              animation: `${slideInRight} 0.8s ease`,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "0.9rem",
                fontWeight: "600",
                color: theme.palette.text.primary,
                marginBottom: "0.5rem",
                animation: `${fadeIn} 1s ease`,
              }}
            >
              <Link href="#" underline="none" color={theme.palette.primary.main}>
                {props.content2}
              </Link>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "0.8rem",
                fontWeight: "400",
                color: theme.palette.text.secondary,
                marginBottom: "0.5rem",
                animation: `${fadeIn} 1s ease`,
              }}
            >
              {props.date}
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "0.5rem 1rem",
              "&:not(:last-child)": {
                borderBottom: `1px solid ${theme.palette.primary.light}`,
              },
              animation: `${slideInLeft} 0.8s ease`,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "0.9rem",
                fontWeight: "600",
                color: theme.palette.text.primary,
                marginBottom: "0.5rem",
                animation: `${fadeIn} 1s ease`,
              }}
            >
              <Link href="#" underline="none" color={theme.palette.primary.main}>
                {props.content3}
              </Link>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "0.8rem",
                fontWeight: "400",
                color: theme.palette.text.secondary,
                marginBottom: "0.5rem",
                animation: `${fadeIn} 1s ease`,
              }}
            >
              {props.date}
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "0.5rem 1rem",
              animation: `${slideInRight} 0.8s ease`,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "0.9rem",
                fontWeight: "600",
                color: theme.palette.text.primary,
                marginBottom: "0.5rem",
                animation: `${fadeIn} 1s ease`,
              }}
            >
              <Link href="#" underline="none" color={theme.palette.primary.main}>
                {props.content4}
              </Link>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "0.8rem",
                fontWeight: "400",
                color: theme.palette.text.secondary,
                marginBottom: "0.5rem",
                animation: `${fadeIn} 1s ease`,
              }}
            >
              {props.date}
            </Typography>
          </Box>
          <Box
            sx={{
              padding: "0.5rem 1rem",
              animation: `${slideInLeft} 0.8s ease`,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontSize: "0.9rem",
                fontWeight: "600",
                color: theme.palette.text.primary,
                marginBottom: "0.5rem",
                animation: `${fadeIn} 1s ease`,
              }}
            >
              <Link href="#" underline="none" color={theme.palette.primary.main}>
                {props.content5}
              </Link>
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "0.8rem",
                fontWeight: "400",
                color: theme.palette.text.secondary,
                marginBottom: "0.5rem",
                animation: `${fadeIn} 1s ease`,
              }}
            >
              {props.date}
            </Typography>
          </Box>
        </Box>
      </div>
    </>
  );
};

export default TrendingCard;
