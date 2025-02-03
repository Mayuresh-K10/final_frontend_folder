import React from "react";
import { Typography, Button, Box } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import Img1 from "../images/pana.png";
import Videos from "./Videos";
import Photos from "./Photos";
import TopCourses from "./TopCourses";
import Notifications from "./Notifications";
import News from "./News";
import Faculties from "./Faculties";
import LearnCourses from "./LearnCourses";

const ApplySection = () => {
  return (
    <>
      <Button
        variant="contained"
        fullWidth
        height="54px"
        textCenter
        sx={{
          backgroundColor: "#7B90FF",
          borderRadius: "12px",
          fontWeight: "700",
          fontStyle: "bold",
          fontSize: "16px",
          marginTop: "1rem",
          textTransform: "capitalize",
        }}
        disableElevation
      >
        Apply Now
      </Button>

      <Button
        fullWidth
        textCenter
        sx={{
          color: "#210366",
          borderRadius: "12px",
          fontWeight: "700",
          fontStyle: "bold",
          fontSize: "16px",
          marginTop: "1rem",
          textTransform: "capitalize",
          boxShadow: "0px 0px 40px 0px #7B90FF26",
        }}
      >
        Download Brochure
        <FileDownloadOutlinedIcon
          style={{ position: "absolute", right: "0px" }}
        />
      </Button>

      
      <TopCourses />
      
      <LearnCourses />
    </>
  );
};

export default ApplySection;
