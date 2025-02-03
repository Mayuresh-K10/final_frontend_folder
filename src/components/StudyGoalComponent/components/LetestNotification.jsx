import React from "react";
import { Box } from "@mui/material";
import MyHeading from "../../Headings/MyHeading";
import ParentCardSection from "./ParentCardSection";

export default function LetestNotification() {
  const heading = "Latest Notification";

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <MyHeading headingName={heading} />
        <ParentCardSection />
      </Box>
    </>
  );
}
