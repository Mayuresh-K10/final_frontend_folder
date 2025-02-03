import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const TopNavbar = () => {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{
          gap: "50px",
          width: "100%",
          height: "50px",
          overflowY: "scroll",
          bgcolor: "white",
          marginY: "1rem",
        }}
      >
        <Link to="/college-info/">Info</Link>
        <Link to="/college-info/course-fee">Courses & Fees</Link>
        <Link to="/college-info/gallery">Gallery</Link>
        <Link to="/college-info/faculty">Faculty</Link>
        <Link to="/college-info/Hostel">Hostel</Link>
        <Link to="/college-info/placement">Placement</Link>
        <Link to="/college-info/review">Reviews</Link>
        <Link to="/college-info/IIMBangalore">Collage Compare</Link>
      </Stack>
    </>
  );
};

export default TopNavbar;
