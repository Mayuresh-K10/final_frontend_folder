import React from "react";
import company1 from "../Assets/company1.svg";
import company2 from "../Assets/company2.svg";
import company3 from "../Assets/company3.svg";
import company4 from "../Assets/company4.svg";
import company5 from "../Assets/company5.svg";
import company6 from "../Assets/company6.svg";
import { Box } from "@mui/material";

const companylogo = [
  { width: "8.438rem", src: company1 },
  { width: "8.75rem", src: company2 },
  { width: "7.563rem", src: company3 },
  { width: "8.313rem", src: company4 },
  { width: "7.25rem", src: company5 },
  { width: "6.125rem", src: company6 },
];

const TrustedCompany = () => {
  return (
    <Box
      sx={{
        flex: "1",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        padding: "9rem 10rem 0rem",
        boxSizing: "border-box",
        maxWidth: "100%",
        zIndex: "5",
        textAlign: "center",
        fontSize: "1.5rem",
        '@media (max-width:600px)':{
          padding:"5rem 4.5rem 0rem"
        }
      }}
    >
      <Box
        sx={{
          alignSelf: "stretch",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "3rem",
          maxWidth: "100%",
          '@media (max-width:600px)':{
            width:'fit-content',
            marginTop:'16rem'
          }
        }}
      >
        <div
          style={{
            width: "29.438rem",
            position: "relative",
            letterSpacing: "0.04em",
            fontSize: "25px",
            fontWeight: "300",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "100%",
          }}
        >
          Trusted by 4,000+ companies
        </div>

        <Box
          sx={{
            alignSelf: "stretch",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.25rem",
            '@media (max-width:600px)':{
              display:'grid',
              gridTemplateColumns:'auto auto',
              gap:"2.75rem",
            },
            '@media (max-width:1280px)':{
              display:'grid',
              gridTemplateColumns:'auto auto auto',
              gap:"2.75rem",
            }
          }}
        >
          {companylogo.map((logo, index) => (
            <img
              key={index}
              style={{
                height: "3rem",
                width: logo.width,
                position: "relative",
                overflow: "hidden",
                flexShrink: "0",
                minHeight: "3rem",
              }}
              loading="lazy"
              alt=""
              src={logo.src}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default TrustedCompany;