import { Typography, Box, Button } from "@mui/material";
import React from "react";

const MbaBox = () => {
  return (
    <Box sx={{ marginTop: 2, width: 924}}>
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
            style={{ width: 58, height: 45 }}
            src="https://education.sakshi.com/sites/default/files/images/2022/07/18/nirf-1658138662.png"
            alt=""
          />

          <Typography
            sx={{
              width: 139,
              height: 40,
              color: "#210366",
              fontSize: 18,
              fontFamily: "Poppins",
              fontWeight: "600",
              wordWrap: "break-word",
              alignItems: "center",
              display: "flex",
              flexDirection: "row",
              justifyItems: "center",
            }}
          >
            NIRF
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
          >
            IIM Bangalore MBA ranking by NIRF is 2 out of 125 colleges in India
            in 2022 and it was 2 out of 100 colleges in India in 2021.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "0",
            justifyContent: "flex-start",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box>
              <Typography
                sx={{
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
            <Box
              sx={{
                border: "0.50px ",
                height: 133,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#210366",
                  fontSize: 18,
                  fontFamily: "Poppins",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                MBA
              </Typography>
              <Button
                variant="contained"
                sx={{
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
                }}
              >
                Compare
              </Button>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                width: 258,
                height: 54,
                background: "#210366",
                border: "0.50px ",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
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
                2022 Ranking
              </Typography>
            </Box>

            <Box
              sx={{
                width: 258,
                height: 133,
                background: "white",
                border: "0.50px  ",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
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
              >
                #2 out of 125 in India 2022
                <br />
                #1st in Bangalore
                <br />
                #1 in Karnataka
                <br />
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                width: 258,
                height: 54,
                background: "#210366",
                border: "0.50px ",
              }}
            >
              <Typography
                sx={{
                  color: "white",
                  fontSize: 18,
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  wordWrap: "break-word",
                  textAlign: "center",
                }}
              >
                2021 Ranking
              </Typography>
            </Box>

            <Box
              sx={{
                width: 258,
                height: 133,
                background: "white",
                border: "0.50px ",
                display: "flex",
                flexDirection: "column",
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
              >
                #2 out of 100 in India 2022
                <br />
                #1st in Bangalore
                <br />
                #1 in Karnataka
                <br />
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              sx={{
                width: 258,
                height: 54,
                background: "#210366",
                border: "0.50px ",
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
                  textAlign: "center",
                }}
              >
                2020 Ranking
              </Typography>
            </Box>

            <Box
              sx={{
                width: 258,
                height: 133,
                background: "white",
                border: "0.50px ",
                display: "flex",
                flexDirection: "column",
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
              >
                #2 out of 100 in India 2020
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

export default MbaBox;
