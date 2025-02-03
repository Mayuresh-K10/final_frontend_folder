import { Typography, Box, Button } from "@mui/material";
import React from "react";
// import datamage from "../"
const FinanceExpress = () => {
  return (
    <Box sx={{ marginTop: 2, width: 924, }}>
      <Box
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontStyle: "normal",
          background: "#ffffff",
          borderRadius: "1rem",
          fontSize: "0.9rem",
          color: "#2f1370",
          display: "flex",
          flexDirection: "column",

        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", gap: "15px" }}>

          <img 
          style={{ width: 40, height: 40 }} 
          src="data:image/png;base64,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" alt="" />

          <Typography
            sx={{
              width: 653,
              height: 40,
              color: "#210366",
              fontSize: 18,
              fontFamily: "Poppins",
              fontWeight: "600",
              wordWrap: "break-word",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              justifyItems: "center"
            }}
          >
            Financial Express
          </Typography>
        </Box>

        <Box>
          <Typography
            sx={{
              display: "flex",
              width: 924,
              height: 50,
              flexDirection: "column",
              justifyContent: "center",
              flexShrink: 0,
            }}
          > IIM Bangalore Overall ranking by Financial Express is 1 out of 50 colleges in India in 2019.

          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", padding: "0", justifyContent: "flex-start" }}>

          <Box sx={{ display: "flex", flexDirection: "column" }}>

            <Box>
              <Typography sx={{
                width: 150,
                height: 54,
                background: "#7B90FF",
                borderTopLeftRadius: 28,
                border: "0.50px ",
                color: "white",
                fontSize: 18,
                fontFamily: "Poppins",
                fontWeight: "600",
                wordWrap: "break-word",
                fontStyle: "normal",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
              >
                Stream
              </Typography>
            </Box>
            <Box sx={{ border: "0.50px ", height: 133, display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }} >
              <Typography sx={{ color: '#210366', fontSize: 18, fontFamily: 'Poppins', fontWeight: '700', wordWrap: 'break-word' }}>
                Overall
              </Typography>
              <Button variant="contained" sx={{
                color: "white",
                fontSize: 10,
                fontFamily: "Poppins",
                fontWeight: "400",
                wordWrap: "break-word",
                width: 82,
                marginTop: -8,
                height: 22,
                flexShrink: 0,
                borderRadius: 12,
                background: "#7B90FF",
              }}>
                Compare
              </Button>

            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", }}>

            <Box
              sx={{
                width: 774,
                height: 54,
                background: "#210366",
                border: "0.50px ",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                borderTopRightRadius: 28,
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: 18,
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  wordWrap: "break-word",

                }}
              >
                2019 Ranking
              </Typography>
            </Box>

            <Box
              sx={{
                width: 774,
                height: 133,
                background: "white",
                border: "0.50px  ",
                textAlign: "center",
                display: "flex", flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#210366",
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >#1 out of 50 in India 2019
                <br />
                #1st in Bangalore
                <br />
                #1 in Karnataka
                <br />

              </Typography>
            </Box>
          </Box>


        </Box>
      </Box>
    </Box>

  );
};

export default FinanceExpress;
