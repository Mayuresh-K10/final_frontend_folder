import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import Img1 from "../../assets/Img1.png";
import Img2 from "../../assets/Img2.png";
import Img3 from "../../assets/Img3.png";
import Img4 from "../../assets/Img4.png";
import Img5 from "../../assets/Img5.png";
import Img6 from "../../assets/Img6.png";
import "./PopularComparison.css";
const Photos = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: "2rem",
          borderRadius: "28px",
          padding: "10px",
          backgroundColor: "#FFFFFF",
          boxShadow: "0px 0px 40px 0px #7B90FF26",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "700",
            fontStyle: "bold",
            fontSize: "20px",
            color: "#210366",
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
            marginTop: "2rem",
            marginLeft: "8rem",
          }}
        >
          View All
        </Button>
      </Box>
    </>
  );
};

export default Photos;
