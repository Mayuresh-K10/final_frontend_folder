import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css/pagination";

const menuItems = [
  "Info",
  "Courses & Fees",
  "Admission 2023",
  "Reviews",
  "CutOff",
  "Placement",
  "Ranking",
  "Gallery",
  "Scholarship",
  "Faculty",
  "News & Articles",
  "Hostel",
  "College Compare",
  "Q&A",
];

const NavigationMenu = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        "@media (max-width:600)": {},
      }}
    >
      {menuItems.map((item, index) => (
        <Typography
          variant="h6"
          style={{ margin: "10px", cursor: "pointer", fontSize: ".8rem" }}
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
};

export default NavigationMenu;

{
  /* */
}
