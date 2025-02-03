import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import Img1 from "../images/Img1.png";
import Img2 from "../images/Img2.png";
import Img3 from "../images/Img3.png";
import Img4 from "../images/Img4.png";
import Img5 from "../images/Img5.png";
import Img6 from "../images/Img6.png";

const Photos = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: "2rem",
          padding: "10px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            fontStyle: "bold",
            fontSize: "20px",
            color: "#210366",

            textAlign: "start",
          }}
        >
          Photos
        </Typography>
        <Stack spacing={1} sx={{ marginTop: "1rem" }}>
          <Stack direction="row" spacing={1}>
            <img src={Img1} alt="" style={{ width: "176px", height: "70px" }} />
            <img src={Img2} alt="" style={{ width: "176px", height: "70px" }} />
          </Stack>
          <Stack direction="row" spacing={1}>
            <img src={Img3} alt="" style={{ width: "176px", height: "70px" }} />
            <img src={Img4} alt="" style={{ width: "176px", height: "70px" }} />
          </Stack>
          <Stack direction="row" spacing={1}>
            <img src={Img5} alt="" style={{ width: "176px", height: "70px" }} />
            <img src={Img6} alt="" style={{ width: "176px", height: "70px" }} />
          </Stack>
        </Stack>
        <Button
          sx={{
            padding: "8px 28px 8px 28px",
            fontFamily: "Poppins",
            fontStyle: "bold",
            fontWeight: "600",
            fontSize: "14px",
            textTransform: "capitalize",
            color: "#FFFFFF",
            backgroundColor: "#FF7900",
            borderRadius: "12px",
            marginTop: "1rem",
            "&:hover": {
              background: "#ffffff",
              color: "#FF7900",
            },
          }}
        >
          View All
        </Button>
      </Box>
    </>
  );
};

export default Photos;
