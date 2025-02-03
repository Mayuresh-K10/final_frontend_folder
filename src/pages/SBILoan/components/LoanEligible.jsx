import { Stack, Typography } from "@mui/material";
import React from "react";

const LoanEligible = ({ title, subtitle, image, eligibility }) => {
  return (
    <>
      <Stack>
        <Stack
          display={"flex"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          gap={"4rem"}
          sx={{
            width: { xs: "80%", sm: "80%", md: "95%", lg: "100%" },
            height: "100%",
            marginLeft: "2rem",
            marginTop: 10,
            justifyContent: "space-evenly",
            alignItems: 'center',
          }}
        >
          <img
            style={{ width: 250, height: 250, objectFit: "contain" }}
            src={image}
            alt=""
          />
          <Stack sx={{
            textAlign: "start",
            marginBottom: 8,
          }}>
            <Typography
              sx={{
                color: "#210366",
                fontSize: 32,
                fontWeight: "600",
                wordWrap: "break-word",
                display: "flex",
                textAlign: "start",
                justifyContent: "flex-start"
              }}
            >
              {title}
              <Typography
                sx={{
                  color: "#FF7900",
                  fontSize: 32,
                  fontWeight: "600",
                  wordWrap: "break-word",
                  marginLeft: 1,
                }}
              >
                {subtitle}
              </Typography>
            </Typography>
            <Typography
              sx={{
                color: "#210366",
                fontSize: 15,
                fontWeight: "400",
                wordWrap: "break-word",
                marginTop: 3
              }}>
              {eligibility.map((item, index) => (
                <React.Fragment key={index}>
                  {'\u25CF'} {item}
                  <br />
                </React.Fragment>
              ))}
            </Typography>
          </Stack>

        </Stack>
      </Stack>
    </>
  );
};

export default LoanEligible;
