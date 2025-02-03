import { Avatar, Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import FilterButton from "../../../components/Buttons/FilterButton";
import FlagIcon from "@mui/icons-material/Flag";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { RegisterModal } from "../../../components/Modal/MultiModal";

const ReviewCard = ({
  avatar,
  user,
  institution,
  rating,
  reviews,
  heading,
  getbgColor,
}) => {
  const [show, setShow] = useState(false);
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <Box
      sx={{
        fontFamily: "Poppins, sans-serif",
        background: "#ffffff",
        boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
        borderRadius: "1rem",
        padding: "1rem",
        fontSize: "0.9rem",
        color: "#2f1370",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        width: "100%",
        "@media (max-width:600px)": {
          width: "90%",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Avatar
            src={avatar}
            name={user}
            sx={{
              bgcolor: getbgColor(user[0].toUpperCase()),
              textTransform: "uppercase",
            }}
          >
            {`${user.slice(0, 1).toUpperCase()}`}
          </Avatar>
          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
                color: "#2f1370",
                textTransform: "capitalize",
              }}
            >
              {user}
            </Typography>
            <Box sx={{ display: "flex", gap: "1rem", fontSize: "0.8rem" }}>
              <Typography>{institution}</Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography sx={{ color: "#FF7900", fontWeight: "bold" }}>
            <span style={{ color: "#000" }}>{rating}</span>/10
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          height: `${show ? "fit-content" : "5.8rem"}`,
          overflow: "hidden",
          transition: "height 0.3s ease-in-out",
        }}
      >
        <Typography
          id="review_haeding"
          sx={{ color: "#7B90FF", fontsize: "1rem !important" }}
        >
          {heading}
        </Typography>
        <Box>{reviews}</Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Button
          onClick={handleClick}
          sx={{
            display: `${show ? "none" : "block"}`,
            color: "#FF7900",
            padding: "0",
            background: "none",
            border: "none",
            "&:hover": {
              background: "none",
              border: "none",
            },
          }}
        >
          Read more
        </Button>

        <Button
          onClick={handleClick}
          sx={{
            display: `${!show ? "none" : "block"}`,
            color: "#FF7900",
            padding: "0",
            background: "none",
            border: "none",
            "&:hover": {
              background: "none",
              border: "none",
            },
          }}
        >
          Read less
        </Button>

        <Box sx={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <FilterButton onClick={handleOpen}>
            <FlagIcon sx={{ color: "#000", fontSize: "1.3rem" }} /> Report
          </FilterButton>
          <FilterButton onClick={handleOpen}>
            <ThumbUpIcon sx={{ color: "#7B90FF", fontSize: "1.3rem" }} /> {like}
          </FilterButton>
          <FilterButton onClick={handleOpen} >
            <ThumbDownIcon sx={{ color: "#FF7900", fontSize: "1.3rem" }} />{" "}
            {dislike}
          </FilterButton>
        </Box>
      </Box>
      <RegisterModal open={open} handleClose={handleClose} />
    </Box>
  );
};

export default ReviewCard;
