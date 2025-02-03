import React, { useEffect, useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import Img1 from "../images/campus-students.png";

import { useParams } from "react-router-dom";

const InstituteHeroSection = () => {
  const { id } = useParams();
  const [collegeInfo, setCollegeInfo] = useState(null);
  const instiLogo = process.env.REACT_APP_BACKEND_SERVER_URL;

  useEffect(() => {
    const fetchCollegeInfo = async () => {
      try {
        const response = await fetch(
          `${instiLogo}/api/institute-infos/${id}?populate=*`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch college information");
        }
        const data = await response.json();
        setCollegeInfo(data.data);
      } catch (error) {
        console.error("Error fetching college information:", error);
      }
    };
    fetchCollegeInfo();
  }, [id, instiLogo]);

  if (!collegeInfo) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginY: "2rem",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            borderRadius: "3rem",
            width: "100%",
            height: "550px",
            backgroundImage: `url(${Img1})`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
            "@media (min-width:800px)": {
              padding: "0",
            },
            position: "relative",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#000",
              width: "100%",
              height: "auto",
              borderRadius: "0 0 3rem 3rem",
              opacity: "0.9",
              padding: "2%",
              maxWidth: "1267px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              position: "absolute",
              bottom: "0",
            }}
          >
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  "@media (max-width:800px)": {
                    justifyContent: "center",
                    alignContent: "center",
                  },
                }}
              >
                <img
                  src={`${instiLogo}${collegeInfo.attributes.Institute_Logo.data.attributes.url}`}
                  alt="logo"
                  style={{ width: "121px", height: "121px", borderRadius:"50%" }}
                />
              </Box>
              <Stack>
                <Typography
                  sx={{
                    fontStyle: "bold",
                    fontWeight: "700",
                    fontSize: "20px",
                    lineHeight: "20.8px",
                    color: "#ffffff",
                  }}
                >
                  {collegeInfo.attributes.Institute_Name}
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default InstituteHeroSection;
