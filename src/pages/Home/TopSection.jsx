import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Overlap from "../../Assets/shapes/oval-overlap.svg";
import { Image } from "../../utils/Image";

const TopSection = () => {
  return (
    <>
      <Container maxWidth="xl" sx={{ marginBottom: "5rem" }}>
        <Box
          sx={{
            backgroundColor: "#B6E5FB",
            borderRadius: "10px",
            padding: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "250px",
            position: "relative",
            overflow: "hidden",
            zIndex: "10",
            "@media(max-width:770px)": {
              flexDirection: "column",
              height: "auto",
              maxWidth: "100%",
              marginx: "auto",
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 750,
              lineHeight: "1.5",
              letterSpacing: ".05em",
              textAlign: "center",
              color: "black",
              display: "inline",
              marginX: "2rem",
              fontSize: "2.25rem",
              "@media(max-width:770px)": {
                fontSize: "1rem",
                textAlign: "center",
              },
            }}
          >
            Make sure you don't miss your chance to get admitted. &rarr;
          </Typography>
          <Box sx={{ position: "relative" }}>
            <Button
              href="/top-universities"
              size="large"
              sx={{
                fontSize: "2rem",
                fontWeight: 700,
                marginLeft: "1rem",
                textAlign: "center",
                padding: "0.5rem",
                color: "black",
                "@media(max-width:770px)": {
                  fontSize: "1rem",
                },
              }}
            >
              Apply Now
            </Button>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "53.5%",
                transform: "translate(-50%, -50%)",
                maxWidth: "25vw",
                width: "16rem",
                height: "auto",
                zIndex: "-1",
                "@media (max-width:800px)": {
                  width: "27rem",
                  maxWidth: "38vw",
                  marginLeft: "0.25rem",
                  padding: "0.25rem",
                  marginTop: "0.5rem",
                },
              }}
            >
              <Image
                src={Overlap}
                alt="@BharatTech"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </Box>
          </Box>

          <Box
            sx={{
              "@media (max-width : 770px)": {
                display: "none",
              },
            }}
          >
            <Box
              sx={{
                height: "50px",
                width: "50px",
                borderRadius: "50%",
                backgroundColor: "#FB6732",
                position: "absolute",
                top: "-10%",
                left: "10%",
              }}
            ></Box>
            <Box
              sx={{
                height: "150px",
                width: "150px",
                borderRadius: "50%",
                backgroundColor: "#FB6732",
                position: "absolute",
                top: "-40%",
                right: "5%",
              }}
            ></Box>
            <Box
              sx={{
                height: "200px",
                width: "200px",
                borderRadius: "50%",
                backgroundColor: "#FB6732",
                position: "absolute",
                bottom: "-30%",
                left: "-10%",
                zIndex: "-1",
              }}
            ></Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default TopSection;
