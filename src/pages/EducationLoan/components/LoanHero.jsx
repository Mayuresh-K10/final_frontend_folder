import React from "react";
import { Box, Typography } from "@mui/material";
import "../Education.css";
import Ellipse from "../../../Assets/shapes/Eliipse.svg";
import Square from "../../../Assets/shapes/Square.svg";
import Rectangle from "../../../Assets/shapes/Rectangle.svg";
import LoanPearson from "../../../Assets/HeroImages/LoanPerson.png";
import LoanPearson2 from "../../../Assets/HeroImages/LoanPearson2.png";
import SBI from "../../../Assets/BankLogo/sbilogo.png";
import PNB from "../../../Assets/BankLogo/PNB-logo.png";
import Axis from "../../../Assets/BankLogo/Axis-logo.png";
import BOB from "../../../Assets/BankLogo/BOB-logo.png";
import Kotak from "../../../Assets/BankLogo/Kotak-logo.png";
import Union from "../../../Assets/BankLogo/Union-logo.png";
import HDFC from "../../../Assets/BankLogo/Hdfc-logo.png";
import ICICI from "../../../Assets/BankLogo/ICICI-logo.png";

const LoanHeroSection = () => {
  const BankLogo = [
    { logo: SBI },
    { logo: PNB },
    { logo: Axis },
    { logo: Kotak },
    { logo: Union },
    { logo: HDFC },
    { logo: ICICI },
    { logo: BOB },
  ];

  return (
    <Box
      sx={{
        marginBottom: "2rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
          position: "relative",
          zIndex: "1",
          maxWidth:'100%',
          marginX:'auto',
          '@media (max-width:1150px)':{
            height:'auto',
            marginTop:'5rem',
            minHeight:'auto'
          }
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            gap: "10px",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              width: "80%",
              fontSize: "3rem",
              fontWeight: "700",
              wordWrap: "break-word",
              color: "#160048",
            }}
          >
            Education loans for studies in India and abroad.
          </Typography>
          <Typography
            sx={{
              width: "90%",
              color: "gray",
              fontSize: "1.5rem",
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            Education loans help students afford higher education in India or
            abroad.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "2.1rem",
            alignItems: "center",
            justifyContent: "center",
            width: "90vw",
            overflowX: "auto",
            marginY: "2rem",
          }}
        >
          {BankLogo.map((item, index) => (
            <img
              key={index}
              style={{ width: "80px", height: "auto", objectFit: "contain" }}
              src={item.logo}
              alt="@BharatTech"
            />
          ))}
        </Box>
      </Box>
      <Box className="hide-on-small-screen">
        {" "}
        <img
          src={Ellipse}
          alt="@BharatTech"
          style={{
            position: "absolute",
            top: "14.4%",
            right: "6.5%",
            display: "block",
          }}
        />
        <img
          src={Square}
          alt="@BharatTech"
          style={{
            position: "absolute",
            bottom: "5%",
            left: "5%",
            display: "block",
          }}
        />
        <img
          src={Rectangle}
          alt="@BharatTech"
          style={{
            position: "absolute",
            top: "55%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "80%",
            height: "auto",
            display: "block",
            maxWidth: "100%",
          }}
        />
        <Box
          sx={{
            padding: "10px",
            backgroundColor: "#fff",
            position: "absolute",
            bottom: "10%",
            left: "21%",
            display: "block",
            width:'8rem'
          }}
        >
          <img
            src={LoanPearson}
            alt="@BharatTech"
            style={{
              width: "auto",
              maxWidth:'100%'
            }}
          />
        </Box>
        <Box
          sx={{
            padding: "10px",
            backgroundColor: "#fff",
            position: "absolute",
            bottom: "10%",
            right: "21%",
            display: "block",
          }}
        >
          <img
            src={LoanPearson2}
            alt="@BharatTech"
            style={{
              width: "7rem",
              maxWidth:'100%',
              position:'relative'
            }}
          />
        </Box>
      </Box>
      <style>
        {`
          @media (max-width: 1150px) {
            .hide-on-small-screen {
              display: none;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default LoanHeroSection;