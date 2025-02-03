import { Typography, Box, Button } from "@mui/material";
import React from "react";

const TheWeek = () => {
  return (
    <Box sx={{ marginTop: 2, width: 924 }}>
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
            style={{ width: 68, height: 40 }}
            src="data:image/jpeg;base64,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"
            alt="" />
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
            The Week
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
            IIM Bangalore MBA ranking by The Week is 2 out of 179 colleges in
            India in 2020 and it was 1 out of 19 colleges in Bangalore in 2019.
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
                borderBottomLeftRadius: 28,
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
                width: 389,
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
                2020 Ranking
              </Typography>
            </Box>

            <Box
              sx={{
                width: 386,
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
                #3out of 281 in India 2022
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
                width: 387,
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
                2019 Ranking
              </Typography>
            </Box>

            <Box
              sx={{
                width: 386,
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
                #3out of 281 in India 2022
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

export default TheWeek;
