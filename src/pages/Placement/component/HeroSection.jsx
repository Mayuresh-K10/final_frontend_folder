import React from "react";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import campus from "../images/campus.png";
import Logo from "../images/Logo.png";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PushPinIcon from "@mui/icons-material/PushPin";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import TripOriginRoundedIcon from "@mui/icons-material/TripOriginRounded";
const HeroSection = () => {
  return (
    <>
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
            width: "290%",
            height: "550px",
            backgroundImage: `url(${campus})`,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "1rem",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#000",
              width: "1209px",
              height: "200px",
              marginLeft: "-1rem",
              marginRight: "-1rem",
              marginBottom: "-24rem",
              borderRadius: "0 0 3rem 3rem",
              opacity: "0.9",
            }}
          >
            <Stack
              direction="row"
              spacing={2}
              sx={{ marginTop: "3rem", marginLeft: "0.6rem" }}
            >
              <img
                src={Logo}
                alt="logo"
                style={{
                  width: "80px",
                  height: "80px",
                  marginLeft: "0.6rem",
                  marginTop: "0.4rem.",
                  borderRadius: 50,
                }}
              />

              <Stack>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "bold",
                    fontWeight: "700",
                    fontSize: "20px",
                    lineHeight: "20.8px",
                    color: "#ffffff",
                    marginTop: "0.8rem",
                  }}
                >
                  IIM Bangalore - Indian Institute of Management
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    color: "#ffffff",
                    fontSize: "14px",
                  }}
                >
                  Bangalore, Karnataka |{" "}
                  <BookmarkIcon style={{ width: "9.3px", height: "12px" }} />{" "}
                  AICTE, UGC Approved
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ color: "#ffffff", marginTop: "0.5rem" }}
                >
                  <Typography sx={{ display: "flex" }}>
                    <PushPinIcon
                      style={{
                        width: "15px",
                        height: "12px",
                        marginTop: "0.1rem",
                      }}
                    />
                    <Typography
                      sx={{ fontSize: "10px", fontFamily: "Poppins" }}
                    >
                      Estd 1973
                    </Typography>
                  </Typography>
                  <Typography sx={{ display: "flex" }}>
                    <StarRoundedIcon
                      style={{
                        width: "15px",
                        height: "12px",
                        marginTop: "0.1rem",
                      }}
                    />
                    <Typography
                      sx={{ fontSize: "10px", fontFamily: "Poppins" }}
                    >
                      Autonomous University
                    </Typography>
                  </Typography>
                  <Typography sx={{ display: "flex" }}>
                    <HelpOutlineIcon
                      style={{
                        width: "15px",
                        height: "12px",
                        marginTop: "0.1rem",
                      }}
                    />
                    <Typography
                      sx={{ fontSize: "10px", fontFamily: "Poppins" }}
                    >
                      210 Questions Answered
                    </Typography>
                  </Typography>
                  <Typography sx={{ display: "flex" }}>
                    <ViewQuiltIcon
                      style={{
                        width: "15px",
                        height: "12px",
                        marginTop: "0.1rem",
                      }}
                    />
                    <Typography
                      sx={{ fontSize: "10px", fontFamily: "Poppins" }}
                    >
                      Ranked 2 For MBA By NIRF 2022
                    </Typography>
                  </Typography>
                  <Typography sx={{ fontSize: "10px", fontFamily: "Poppins" }}>
                    +19 More
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack
              sx={{
                marginLeft: "770px",
                marginTop: "-8rem",
              }}
            >
              <Stack direction="row">
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "bold",
                    fontWeight: "600",
                    color: "#ffffff",
                    fontSize: "30px",
                    marginLeft: "90px",
                  }}
                >
                  9.1
                </Typography>

                <Typography
                  sx={{
                    width: "100px",
                    height: "7px",
                    fontFamily: "Poppins",
                    fontStyle: "bold",
                    fontWeight: "600",
                    color: "#ffffff",
                    fontSize: "10px",
                    marginTop: "1.2rem",
                    marginLeft: "0.2rem",
                  }}
                >
                  73 Reviews
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1}>
                <IconButton
                  aria-label="like"
                  sx={{ color: "#ffffff", marginLeft: "-14rem" }}
                >
                  <FavoriteRoundedIcon />
                </IconButton>
                <Button
                  sx={{
                    fontFamily: "Poppins",
                    color: "#ffffff",
                    textTransform: "capitalize",
                  }}
                >
                  Will You Get In
                </Button>
                <Button sx={{ fontFamily: "Poppins", color: "#ffffff" }}>
                  Get Contact Details
                </Button>
              </Stack>
              <TripOriginRoundedIcon
                sx={{ color: "#7B90FF", width: "15px", marginLeft: "2rem" }}
              />
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontStyle: "bold",
                  fontWeight: "600",
                  color: "#ffffff",
                  fontSize: "12px",
                  marginLeft: "3rem",
                  marginTop: "-1.2rem",
                }}
              >
                Claim this college
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
