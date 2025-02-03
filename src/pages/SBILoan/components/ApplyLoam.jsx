import { Box, Typography, Card, Stack } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import DifferenceOutlinedIcon from "@mui/icons-material/DifferenceOutlined";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import React from "react";

const ApplyLoan = ({ bankName }) => {
  const steps = [
    {
      icon: (
        <LocationOnOutlinedIcon
          sx={{ width: 50, height: 50, color: "#FF7900", my: 2 }}
        />
      ),
      text: `Visit the official website and Click on ${bankName} Education Loan`,
    },
    {
      icon: (
        <DifferenceOutlinedIcon
          sx={{ width: 50, height: 50, color: "#FF7900", my: 2 }}
        />
      ),
      text: `Select the particular loan scheme at ${bankName} and click on Apply Online`,
    },
    {
      icon: (
        <SaveAsOutlinedIcon
          sx={{ width: 50, height: 50, color: "#FF7900", my: 2 }}
        />
      ),
      text: `Fill up the form with all the necessary details for ${bankName}`,
    },
    {
      icon: (
        <FileUploadOutlinedIcon
          sx={{ width: 50, height: 50, color: "#FF7900", my: 2 }}
        />
      ),
      text: `Upload the signature, photograph, and other required documents for ${bankName}`,
    },
    {
      icon: (
        <ThumbUpAltOutlinedIcon
          sx={{ width: 50, height: 50, color: "#FF7900", my: 2 }}
        />
      ),
      text: `Submit the Form for ${bankName} and take the print out`,
    },
    {
      icon: (
        <AccountBalanceOutlinedIcon
          sx={{ width: 50, height: 50, color: "#FF7900", my: 2 }}
        />
      ),
      text: `After that visit the nearby ${bankName} Bank for the further proceedings`,
    },
  ];

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          textAlign: "center",
          display: "flex",
          marginLeft: 6,
          marginTop: "4rem",
        }}
      >
        <Typography
          sx={{
            color: "#210366",
            fontSize: 32,
            fontWeight: "500",
            wordWrap: "break-word",
          }}
        >
          How to apply for{" "}
        </Typography>
        <Typography
          sx={{
            color: "#FF7900",
            fontSize: 32,
            fontWeight: "500",
            wordWrap: "break-word",
            marginLeft: 2,
          }}
        >
          {bankName} Education Loan{" "}
        </Typography>
        <Typography
          sx={{
            color: "#210366",
            fontSize: 32,
            fontWeight: "500",
            wordWrap: "break-word",
            marginLeft: 1,
          }}
        >
          ?
        </Typography>
      </Box>

      <Stack
        display={"flex"}
        flexDirection={"column"}
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          color: "rgba(21.57, 0, 72.46, 0.60)",
          fontSize: 20,
          fontWeight: 700,
          wordWrap: "break-word",
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        {`${bankName} Education loan application form can be available online or offline at Bank branches.`}
      </Stack>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "1.2rem",
          justifyContent: "center",
        }}
      >
        {steps.map((step) => (
          <Card
            key={step.text}
            sx={{
              width: "30%", // Adjust as needed
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: 150, // Ensure minimum height for content visibility
              border: "1px solid #e0e0e0",
              borderRadius: 4,
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              {step.icon}
            </Box>
            <Typography
              sx={{
                color: "rgba(21.57, 0, 72.46, 0.8)", // Adjust contrast
                fontSize: 16,
                fontWeight: 500,
                textAlign: "center",
                lineHeight: 1.5,
                textWrap: "wrap",
              }}
            >
              {step.text}
            </Typography>
          </Card>
        ))}
      </Stack>
    </Box>
  );
};

export default ApplyLoan;
