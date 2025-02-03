import React, { useState } from "react";
import { Button } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

import TopCourses from "./TopCourses";

import LearnCourses from "./LearnCourses";
import { RegisterModal } from "../../../components/Modal/MultiModal";

const ApplySection = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        onClick={handleOpen}
      >
        Apply Now
      </Button>
      <RegisterModal open={open} handleClose={handleClose} />

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
        onClick={handleOpen}
      >
        Download Brochure
        <FileDownloadOutlinedIcon
          style={{ position: "absolute", right: "0px" }}
        />
      </Button>
      <RegisterModal open={open} handleClose={handleClose} />

      <TopCourses />

      <LearnCourses />
    </>
  );
};

export default ApplySection;
