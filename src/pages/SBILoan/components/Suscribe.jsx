import { Box, Button, Typography } from "@mui/material";
import React from "react";
import SocialMediaLinks from "./SocialMediaLinks";
import { FaGooglePlay, FaApple } from 'react-icons/fa';

const Suscribe = () => {
  return (
    <>
      <Box
        sx={{
          width: 1270,
          height: 594,
          background: "#210366",
          marginTop:6
        }}
      >
        <Box
          sx={{
            color: "white",
            fontSize: 32,
            fontFamily: "Poppins",
            fontWeight: "700",
            letterSpacing: 1.2,
            wordWrap: "break-word",
            textAlign: "center",
            lineHeight: 4,
          }}
        >
          SUBSCRIBE TO OUR NEWS LETTER
        </Box>
        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: 7,
              height: 7,
              background: "#7B90FF",
              borderRadius: 20,
              marginTop: 5,
            }}
          />
          <Typography
            style={{
              color: "#7B90FF",
              fontSize: 11,
              fontFamily: "Poppins",
              fontWeight: "700",
              letterSpacing: 0.4,
              wordWrap: "break-word",
              marginLeft: 6,
              marginRight: 10,
            }}
          >
            COLLEGE NOTIFICATIONS
          </Typography>
          <div
            style={{
              width: 7,
              height: 7,
              background: "#7B90FF",
              borderRadius: 20,
              marginTop: 5,
            }}
          />
          <Typography
            style={{
              color: "#7B90FF",
              fontSize: 11,
              fontFamily: "Poppins",
              fontWeight: "700",
              letterSpacing: 0.4,
              wordWrap: "break-word",
              marginLeft: 12,
              marginRight: 10,
            }}
          >
            EXAM NOTIFICATIONS
          </Typography>
          <div
            style={{
              width: 7,
              height: 7,
              background: "#7B90FF",
              borderRadius: 20,
              marginTop: 5,
            }}
          />
          <Typography
            style={{
              color: "#7B90FF",
              fontSize: 11,
              fontFamily: "Poppins",
              fontWeight: "700",
              letterSpacing: 0.4,
              wordWrap: "break-word",
              marginLeft: 12,
            }}
          >
            NEWS UPDATES
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: 12,
              fontFamily: "Poppins",
              fontWeight: "600",
              lineHeight: 10,
              wordWrap: "break-word",
              marginRight: 80,
            }}
          >
            ENTER YOUR EMAIL ID
          </div>

          <div
            style={{
              color: "white",
              fontSize: 12,
              fontFamily: "Poppins",
              fontWeight: "600",
              lineHeight: 10,
              wordWrap: "break-word",
              marginRight: 80,
            }}
          >
            +91 ENTER YOUR MOBILE NO
          </div>

          <div
            style={{
              color: "white",
              fontSize: 12,
              fontFamily: "Poppins",
              fontWeight: "600",
              lineHeight: 10,
              wordWrap: "break-word",
              marginRight: 80,
            }}
          >
            CHOOSE YOUR COURSE
          </div>

          <Button
            variant="contained"
            sx={{
              background: "#FF7900",
              width: 100,
              height: 30,
              marginTop: 6,
              borderRadius: 4,
            }}
          >
            Submit
          </Button>
        </Box>
        <Box
          sx={{
            width: 1270,
            height: 232.41,
            background: "#210366",
            boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.10)",
            display: "flex",
          }}
        >
          <Box
            sx={{
              marginLeft: 6,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: 14,
                fontFamily: "Poppins",
                fontWeight: "900",
                wordWrap: "break-word",
              }}
            >
              TOP COLLEGES
              <div style={{ width: 21.91, height: 3, background: "#FF0000" }} />
            </Typography>
            <Box
              style={{
                color: "white",
                fontSize: 8,
                fontFamily: "Poppins",
                fontWeight: "700",
                wordWrap: "break-word",
                marginTop: 12,
              }}
            >
              <Typography>M.B.A</Typography>
              <Typography>b.tech/b.e</Typography>
              <Typography>MCA</Typography>
              <Typography>BCA</Typography>
              <Typography>M.TECH</Typography>
              <Typography>BA</Typography>
              <Typography>MA</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              marginLeft: 10,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: 14,
                fontFamily: "Poppins",
                fontWeight: "900",
                wordWrap: "break-word",
              }}
            >
              TOP UNIVERSITIES
              <div style={{ width: 21.91, height: 3, background: "#EE60FF" }} />
            </Typography>
            <Box
              style={{
                color: "white",
                fontSize: 8,
                fontFamily: "Poppins",
                fontWeight: "700",
                wordWrap: "break-word",
                marginTop: 12,
              }}
            >
              <Typography>ENGINEERING</Typography>
              <Typography>MEDICAL</Typography>
              <Typography>LAW</Typography>
              <Typography>MANAGEMENT</Typography>
              <Typography>COMMERCE</Typography>
              <Typography>ARTS</Typography>
              <Typography>SCIENCE</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              marginLeft: 10,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: 14,
                fontFamily: "Poppins",
                fontWeight: "900",
                wordWrap: "break-word",
              }}
            >
              TOP EXAM
              <div style={{ width: 21.91, height: 3, background: "#10FFB9" }} />
            </Typography>
            <Box
              style={{
                color: "white",
                fontSize: 8,
                fontFamily: "Poppins",
                fontWeight: "700",
                wordWrap: "break-word",
                marginTop: 12,
              }}
            >
              <Typography>CAT</Typography>
              <Typography>GATE</Typography>
              <Typography>JEE-MAINS</Typography>
              <Typography>NEET</Typography>
              <Typography>XLAT</Typography>
              <Typography>CLAT</Typography>
              <Typography>MAT</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              marginLeft: 10,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: 14,
                fontFamily: "Poppins",
                fontWeight: "900",
                wordWrap: "break-word",
              }}
            >
              STUDY ABROAD
              <div style={{ width: 21.91, height: 3, background: "#FF7900" }} />
            </Typography>
            <Box
              style={{
                color: "white",
                fontSize: 8,
                fontFamily: "Poppins",
                fontWeight: "700",
                wordWrap: "break-word",
                marginTop: 12,
              }}
            >
              <Typography>IRELAND</Typography>
              <Typography>NEW ZEALAND</Typography>
              <Typography>HONG KONG</Typography>
              <Typography>SIGAPORE</Typography>
              <Typography>MALAYSIA</Typography>
              <Typography>NETHERLAND</Typography>
              <Typography>ITALY</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              marginLeft: 10,
            }}
          >
            <Box
              style={{
                color: "white",
                fontSize: 8,
                fontFamily: "Poppins",
                fontWeight: "700",
                wordWrap: "break-word",
                marginTop: 22,
              }}
            >
              <Typography>CANADA</Typography>
              <Typography>USA</Typography>
              <Typography>UK</Typography>
              <Typography>UAE</Typography>
              <Typography>AUSTRALIA</Typography>
              <Typography>GERMANY</Typography>
              <Typography>SWEDENS</Typography>
            </Box>
          </Box>

          <Box
            sx={{
              marginLeft: 10,
            }}
          >
            <Typography
              sx={{
                color: "white",
                fontSize: 14,
                fontFamily: "Poppins",
                fontWeight: "900",
                wordWrap: "break-word",
              }}
            >
              OTHER LINKS
              <div style={{ width: 21.91, height: 3, background: "#00FF00" }} />
            </Typography>
            <Box
              style={{
                color: "white",
                fontSize: 8,
                fontFamily: "Poppins",
                fontWeight: "700",
                wordWrap: "break-word",
                marginTop: 12,
              }}
            >
              <Typography>ABOUT Collegecue</Typography>
              <Typography>CONTACT US</Typography>
              <Typography>ADVERTISING</Typography>
              <Typography>CAREER</Typography>
              <Typography>ABOUT US</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            opacity: 0.5,
            color: "#7B90FF",
            fontSize: 16,
            fontFamily: "Poppins",
            fontWeight: "600",
            lineHeight: 5,
            wordWrap: "break-word",
            display:"flex"
          }}
        >
          Download the Collegewallah app on
          <a href="LINK_TO_GOOGLE_PLAY_STORE" target="_blank" rel="noopener noreferrer">
        <FaGooglePlay size={30} />
      </a>
      <a href="LINK_TO_APPLE_APP_STORE" target="_blank" rel="noopener noreferrer">
        <FaApple size={30} />
      </a>
        <SocialMediaLinks/>
        </Box>
      </Box>
    </>
  );
};

export default Suscribe;