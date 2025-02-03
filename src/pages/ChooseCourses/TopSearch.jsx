import React from "react";
import { Box, Typography } from "@mui/material";

import Bpencil from "../../Assets/HeroImages/banner-pencil.png";
import Bplane from "../../Assets/HeroImages/banner-plane.png";
import Bbulbe from "../../Assets/HeroImages/banner-bulbe.png";
import Bbook from "../../Assets/HeroImages/banner-book.png";
import Bpoint from "../../Assets/HeroImages/banner-point.png";
import ChooseButton from "../../components/Buttons/Choose";

function TopSearch() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#313893",
          height: "70vh",
          position: "relative",
          zIndex: "2",
          width: "100%",
          "@media (max-width : 770px)": {
            height: "fit-content",
            padding: "3rem",
          },
        }}
      >
        <Box
          sx={{
            display: " flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "90%",
            alignItems: "center",
            "@media (max-width : 770px)": {
              justifyContent: "center",
              alignItems: "space-evenly",
              height: "70%",
            },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: "700",
              textAlign: "center",
              color: "white",
              fontSize: "4.5rem",
              "@media (max-width : 770px)": {
                fontSize: "2rem",
              },
            }}
          >
            Search of courses in India
          </Typography>

          <Box
            sx={{
              fontSize: "0.5rem",
              display: "flex",
              width: "40%",
              justifyContent: "center",
              flexWrap: "wrap",
              marginTop: ["0", "1rem"],
              gap: "0.5rem",
              "@media (max-width : 770px)": {
                width: "100%",
                marginY: "1rem",
              },
            }}
          >
            <ChooseButton text="Commerce" />
            <ChooseButton text="Management" />
            <ChooseButton text="Arts" />
            <ChooseButton text="Computer Application" />
            <ChooseButton text="Education" />
            <ChooseButton text="Law" />
            <ChooseButton text="Engineering" />
            <ChooseButton text="Medical" />
            <ChooseButton text="Science" />
          </Box>
        </Box>

        <Box
          sx={{
            "@media (max-width :770px)": {
              display: "none",
            },
          }}
        >
          <img
            src={Bpencil}
            alt="pencil"
            style={{
              position: "absolute",
              top: "9%",
              left: "13%",
              zIndex: "-1",
              animation: "jump 4s linear infinite",
            }}
          />
          <img
            src={Bbook}
            alt="book"
            style={{
              position: "absolute",
              top: "12%",
              right: "13%",
              zIndex: "-1",
              animation: "jump 5s linear infinite",
            }}
          />
          <img
            src={Bbulbe}
            alt="bulb"
            style={{
              position: "absolute",
              bottom: "20%",
              left: "18%",
              zIndex: "-1",
              animation: "jump 4.2s linear infinite",
            }}
          />
          <img
            src={Bplane}
            alt="plane "
            style={{
              position: "absolute",
              bottom: "13%",
              right: "16%",
              zIndex: "-1",
              animation: "jump 3.2s linear infinite",
            }}
          />
          <img
            src={Bpoint}
            alt="paper"
            style={{
              position: "absolute",
              top: "42%",
              left: "17%",
              zIndex: "-1",
              animation: "jump 2.8s linear infinite",
            }}
          />
        </Box>
      </Box>
    </>
  );
}

export default TopSearch;
