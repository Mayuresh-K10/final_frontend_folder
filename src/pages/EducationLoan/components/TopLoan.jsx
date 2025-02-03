import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";

import EducationLoan2 from "../../../Assets/images/educationLoan2.png";

const TopLoan = () => {

  return (
    <Box sx={{paddingY:"3.5rem" }}>
      <Typography
        sx={{
          color: "#210366",
          fontSize: { xs: 24, md: 30 }, // Adjusted font size for different screen sizes
          fontWeight: "700",
          textAlign: "center",
          marginTop: 2,
        }}
      >
        Top Up Loans
      </Typography>
      <Stack
        sx={{
          flexDirection: { xs: "column", sm: "row" }, // Stack direction adjusted for small screens
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2,
        }}
      >
        <Card
          sx={{
            width: { xs: "80%", sm: "45%", md: "30%", lg: "20%" },
            maxWidth: "300px",
            marginX: "auto",
            background: "linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)",
            boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.15)",
            borderRadius: "16px",
            marginTop: { xs: 2, sm: 0 }, // Adjusted margin top for small screens
          }}
        >
          <img
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            src={EducationLoan2}
            alt=""
          />
        </Card>
        <Typography
          sx={{
            width: { xs: "100%", sm: "55%", md: "70%", lg: "80%" },
            color: "#210366",
            fontSize: { xs: 16, md: 18 }, // Adjusted font size for different screen sizes
            fontWeight: "500",
            marginTop: { xs: 2, sm: 0 }, // Adjusted margin top for small screens
            marginLeft: { sm: 2 }, // Adjusted margin left for medium screens and above
            textAlign: { xs: "left", sm: "center" }, // Adjusted text alignment for small screens
          }}
        >
          Education loans, offered by banks, NBFCs, and cooperatives, provide
          financial aid for students pursuing higher education in India or
          abroad. With rising education costs, these loans help students
          overcome financial barriers and access quality education. Government
          subsidy schemes further support academic excellence across all sectors
          of society.
        </Typography>
      </Stack>
    </Box>
  );
};

export default TopLoan;
