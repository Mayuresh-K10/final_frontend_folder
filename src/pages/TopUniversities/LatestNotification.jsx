import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Notifications } from "./Data";

const LatestNotification = () => {
  return (
    <Container
      sx={{
        marginLeft: "-1.5rem",
        "@media (max-width:800px)": {
          marginLeft: "0",
        },
      }}
    >
      <Box
        sx={{
          marginTop: "1rem",
          padding: "1rem",
          borderRadius: "12px",
          boxShadow: "0px 4px 40px 4px rgba(123, 144, 255, 0.1)",
          border: "2px solid #553cdf",
          "@media (max-width:800px)": {
            marginLeft: "0",
            width: "100%",
          },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "600",
            fontSize: "1.5rem",
            color: "#41355D",
          }}
        >
          Latest Notification
        </Typography>
        {Notifications.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1rem",
              gap: "1rem",
              "@media (min-width:800px)": {
                flexDirection: "row",
                gap: "2rem",
              },
            }}
          >
            <Typography
              color="error"
              sx={{
                fontWeight: "600",
                fontSize: "0.8rem", // Increased font size
                // color: "#FF0000",
                "@media (min-width:800px)": {
                  width: "120px",
                },
              }}
            >
              {item.date}
            </Typography>
            <Typography
              sx={{
                fontWeight: "600",
                fontSize: "0.7rem",
                color: "#41355D",
                "@media (min-width:800px)": {
                  flex: "1",
                },
              }}
            >
              {item.content}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default LatestNotification;
