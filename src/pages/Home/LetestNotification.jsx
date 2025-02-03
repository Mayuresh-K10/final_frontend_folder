import React from "react";
import { Box, Container } from "@mui/material";
import MyHeading from "../../components/Headings/MyHeading";
import ParentCardSection from "./ParentCardSection";

const LetestNotification = () => {
  // console.log("LetestNotification render");

  const heading = "Latest Notification";

  return (
    <>
      <Container maxWidth="xl" sx={{ marginBottom: "5rem" }}>
        <Box
          sx={{
            margin: "2rem 0",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <MyHeading headingName={heading} />
          <ParentCardSection />
        </Box>
      </Container>
    </>
  );
};
export default LetestNotification;
