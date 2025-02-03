import React from "react";
import { Box, Button,  Container, Typography, Grid } from "@mui/material";
import sbiHero from "./../aseets/Home/sbi_hero.svg";

const HeroSection = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#313893",
          width: "100%",
          paddingY: 12,
          transition: "All 0.5s",
        }}
      >
        <Container maxWidth="lg">
          <Grid container alignItems={"center"} spacing={6}>
            <Grid direction={"column"} item xs={12} md={6}>
              <Box textAlign={{ xs: "center", md: "left" }}>
                <Box textAlign={{ xs: "center", md: "left" }}>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      color: "#FAF9F6",
                      fontSize: { xs: 28, md: 32 },

                      marginTop: { xs: 2, md: 4 },
                    }}
                  >
                    Education Loans  In India And Abroad
                  </Typography>
                 
                </Box>

                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: "#FAF9F6",

                    fontSize: { xs: 16, md: 18 },
                  }}
                >
                  Education Loans are designed to extend financial assistance to
                  students aspiring to pursue their higher studies in reputed
                  colleges in India or Abroad.
                </Typography>
              </Box>
              <Box
                sx={{
                  marginTop: 2,
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: "center",
                  
                }}
              >
                <Button
                  sx={{
                    width: { xs: "50%", md: 160 },
                    background: "#FF7900",
                    borderRadius: 2,
                    color: "white",
                    marginRight: { xs: 0, md: 2 },
                    // marginBottom: { xs: 2, md: 0 },
                    marginY: {xs:2, md:0}
                  }}
                >
                  Apply Now
                </Button>
                <Button
                  sx={{
                    width: { xs: "50%", md: 160 },
                    color: "#FF7900",
                    background: "white",
                    borderRadius: 2,
                  }}
                >
                  Check Eligibility
                </Button>
              </Box>
            </Grid>
            <Grid item direction={"column"} columns={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  margin: "1rem",
                  gap: "1rem",
                }}
              >
                <img style={{ width: 450 }} src={sbiHero} alt="" />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default HeroSection;
