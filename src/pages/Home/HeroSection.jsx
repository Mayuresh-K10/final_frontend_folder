import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import CountUp from "react-countup";
import { Box, Typography, Stack, Container, Button, Grid } from "@mui/material";
import CourcesIcon from "../../Assets/cources-icon.svg";
import GratuateIcon from "../../Assets/gratuate-icon.svg";
import CircleBlueIcon from "../../Assets/HeroImages/Circle-Spike.svg";
import CircleOrangeIcon from "../../Assets/HeroImages/Circle-Spike-orange.svg";
// import StudentHeroImage from "../../Assets/HeroImages/Stuent-hero.webp";
// import StudentHeroImageX from "../../Assets/HeroImages/Stuent-hero.png";
import DotesImage from "../../Assets/HeroImages/banner-gird.webp";
import DotesImagenlue from "../../Assets/HeroImages/banner-gird-blue.webp";
// import BottomCurveImage from "../../Assets/HeroImages/round-reactangle.png";
import Overlap from "../../Assets/shapes/oval-overlap.svg";
import "./css/Home.css";
import { RegisterModal } from "../../components/Modal/MultiModal";

const HeroSection = () => {
  const StudentHeroImage = `${process.env.PUBLIC_URL}/Assets/HeroImage/Stuent-hero.webp`;
  const BottomCurveImage = `${process.env.PUBLIC_URL}/Assets/round-reactangle.webp`;
  const [isTyping, setIsTyping] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // useEffect(() => {
  //   console.log("herosection");
  //   const timeout = setTimeout(() => {
  //     setIsTyping(false);
  //   }, 5000);

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, []);

  return (
    <>
      <Box
        sx={{
          height: "auto",
          overflow: "hidden",
          backgroundColor: "#313893",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          maxWidth: "100%",
          marginX: "auto",
        }}
      >
        <Box sx={{ zIndex: "2", maxWidth: "100%", marginX: "auto" }}>
          <Container maxWidth="lg">
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              height="100%"
              sx={{ marginX: "auto", padding: "1rem" }}
            >
              <Grid item xs={12} md={6}>
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    "@media (max-width : 770px)": {
                      alignItems: "center",
                      textAlign: "center",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      fontWeight: 600,
                      color: "white",
                      mb: "0.5rem",
                      marginTop: "1rem",
                      fontSize: { xs: "1.5rem", md: "3rem" },
                      "@media (max-width : 770px)": {
                        marginTop: "5rem",
                      },
                    }}
                  >
                    Discover{" "}
                    <span style={{ position: "relative", zIndex: "1" }}>
                      10000+
                    </span>
                    <Box
                      sx={{
                        position: "absolute",
                        top: "12.5%",
                        left: "62%",
                        transform: "translate(-55%, -50%)",
                        maxWidth: " 28vw",
                        width: " 220px",
                        height: "auto",
                        zIndex: "-1",
                        "@media (max-width:800px)": {
                          width: "300px",
                          maxWidth: "28vw",
                          left: "52%",
                          top: "16%",
                        },
                      }}
                    >
                      <img
                        src={Overlap}
                        alt="@BharatTech"
                        style={{ width: "100%" }}
                      />
                    </Box>
                    Colleges
                    <br />
                    around the Globe!
                    <Typewriter
                      onTypingEnd={() => setIsTyping(false)}
                      typing={isTyping}
                      options={{
                        strings: ["Step To Your Career", "Step To Your Future"],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Box>

                  <Stack
                    direction={{ xs: "column", md: "row" }}
                    gap="100px"
                    mt="1.5rem"
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "white",
                        gap: "20px",
                        "@media (max-width :770px)": {
                          flexDirection: "column",
                          justifyContent: "flex-start",
                        },
                      }}
                    >
                      <img
                        src={GratuateIcon}
                        alt=""
                        style={{ width: "40px", height: "auto" }}
                      />
                      <Box variant="inherit">
                        <CountUp
                          prefix="More than "
                          end={25}
                          duration={3}
                          suffix="K"
                          style={{ margin: "10px" }}
                        />
                        <Typography variant="inherit">
                          Students enrolled
                        </Typography>
                      </Box>
                      <img
                        src={CourcesIcon}
                        alt=""
                        style={{ width: "40px", height: "auto" }}
                      />
                      <Box variant="inherit">
                        <CountUp
                          prefix="More than "
                          end={10}
                          duration={3}
                          suffix="K+"
                          style={{ margin: "10px" }}
                        />
                        <Typography variant="inherit">
                          Professional Courses
                        </Typography>
                      </Box>
                    </Box>
                  </Stack>

                  <Button
                    sx={{
                      backgroundColor: "#e4441a",
                      color: "white",
                      fontWeight: 500,
                      fontSize: "1rem",
                      padding: "0.5rem 2rem",
                      borderRadius: "0.5rem",
                      "&:hover": { backgroundColor: "#e4441a" },
                      my: { xs: "3rem", md: "1rem" },
                      "@media (max-width : 770px)": {
                        textAlign: "center",
                      },
                    }}
                    onClick={handleOpen}
                  >
                    Need Help? Get 1 on 1 Counselling
                  </Button>
                  <RegisterModal
                    open={open}
                    showCollegeInfo={true}
                    collegeName="One-on-One Counseling"
                    handleClose={handleClose}
                  />
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: "400px",
                    width: "100%",
                    marginY: "auto",
                    marginTop: "11rem",
                    "@media (max-width : 770px)": {
                      marginTop: "0rem",
                      marginX: "auto",
                    },
                  }}
                >
                  <img
                    fetchpriority="high"
                    src={StudentHeroImage}
                    // srcSet={`${StudentHeroImage} 30vw ,${StudentHeroImage} 40vw , ${StudentHeroImage} 50vw`}
                    sizes="(max-width: 600px) 480px, (max-width: 900px) 800px, 1200px"
                    width="1200"
                    height="auto"
                    alt="@BharatTech"
                    style={{
                      maxWidth: "50vw",
                      height: "auto",
                      marginLeft: "0.3rem",
                    }}
                  />
                  <img
                    src={DotesImage}
                    alt="@BharatTech"
                    loading="lazy"
                    style={{
                      position: "absolute",
                      top: "30%",
                      left: "0%",
                      transform: "translate(-50%, -50%)",
                      zIndex: -1,
                      animation: "Rotate 10s linear infinite",
                    }}
                  />
                  <img
                    src={DotesImagenlue}
                    alt="@BharatTech"
                    loading="lazy"
                    style={{
                      position: "absolute",
                      top: "30%",
                      right: "-20%",
                      transform: "translate(-50%, -50%)",
                      zIndex: -1,
                      animation: "Rotate 5s linear infinite",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>

            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <img
                src={CircleOrangeIcon}
                alt="book"
                loading="lazy"
                style={{
                  position: "absolute",
                  top: "10%",
                  right: "40%",
                  zIndex: -1,
                  animation: "Rotate 7s linear infinite",
                }}
              />
              <img
                src={CircleBlueIcon}
                alt="nnn"
                loading="lazy"
                style={{
                  position: "absolute",
                  top: "10%",
                  right: "5%",
                  zIndex: -1,
                  animation: "Rotate 8s linear infinite",
                }}
              />
            </Box>
          </Container>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            zIndex: 2,
            maxWidth: "auto",
            marginX: "auto",
          }}
        >
          <img
            src={BottomCurveImage}
            alt="@BharatTech"
            fetchpriority="high"
            style={{ width: "100%" }}
          />
        </Box>
      </Box>
    </>
  );
};

export { HeroSection };
