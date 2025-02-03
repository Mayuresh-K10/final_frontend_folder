import React from "react";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import Img1 from "../../assets/campus-students.png";
import Logo1 from "../../assets/logo1.png";
import Review from "../../assets/review.png";
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
            width: "110%",
            height: "550px",
            backgroundImage: `url(${Img1})`,
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
              width: "1267px",
              height: "200px",
              marginLeft: "-1rem",
              marginRight: "-1rem",
              marginBottom: "-22rem",
              borderRadius: "0 0 3rem 3rem",
              opacity: "0.9",
              padding: "3rem",
            }}
          >
            <Stack direction="row" spacing={2}>
              <img
                src={Logo1}
                alt="logo"
                style={{ width: "121px", height: "121px", marginLeft: "1rem" }}
              />
              <Stack sx={{ marginTop: "1rem" }}>
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontStyle: "bold",
                    fontWeight: "700",
                    fontSize: "20px",
                    lineHeight: "20.8px",
                    color: "#ffffff",
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
                marginLeft: "1000px",
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
                  }}
                >
                  9.1
                </Typography>
                <img
                  src={Review}
                  alt="Reviews"
                  style={{
                    width: "50px",
                    height: "30px",
                    marginTop: "0.3rem",
                    marginLeft: "0.2rem",
                  }}
                />
              </Stack>
              <Stack direction="row" spacing={3}>
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
