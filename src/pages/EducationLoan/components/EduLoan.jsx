import { Box, Card, Stack, Typography } from "@mui/material";
import React from "react";

import EducationLoan1 from "../../../Assets/images/eductionLoan1.png";

const EduLoan = () => {
  return (
    <>
      <Box paddingY={"5rem"}>
        <Typography
          sx={{
            width: "100%",
            height: "100%",
            color: "#210366",
            fontSize: 25,
            fontWeight: "700",
            wordWrap: "break-word",
            marginTop: 10,
            textAlign: "center",
          }}
        >
          EDUCATION LOAN: EVERYTHING TO KNOW ABOUT
        </Typography>

        <Stack
          sx={{
            flexDirection: { xs: "column", sm: "row" }, // Stack direction adjusted for small screens
            justifyContent: "center",
            alignItems: "center",
            marginTop: 2,
          }}
        >
          <Typography
            style={{
              width: "70%",
              height: "100%",
              color: "#210366",
              fontSize: 18,
              fontWeight: "500",
              wordWrap: "break-word",
              marginTop: 6,
            }}
          >
            Education loans provide financial assistance to students for higher
            education in India or abroad. Banks, NBFCs, and cooperative
            societies offer various loan options to help students overcome
            financial barriers. These loans, along with government subsidies,
            promote academic excellence and enable students to pursue education
            in reputed institutions despite rising costs. 
          </Typography>

          <Card
            style={{
              width: 160,
              height: 180,
              background: "linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)",
              boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.15)",
              borderRadius: 28,
              display: "flex",
              marginTop: 8,
              marginLeft: 24,
            }}
          >
            <img
              style={{
                width: 160,
                height: 180,
                objectFit: "cover ",
              }}
              src={EducationLoan1}
              alt=""
            />
          </Card>
        </Stack>
      </Box>
    </>
  );
};

export default EduLoan;
