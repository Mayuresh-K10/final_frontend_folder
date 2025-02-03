import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Avatar,
  TextField,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ModeEditRoundedIcon from "@mui/icons-material/ModeEditRounded";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import CommentIcon from "@mui/icons-material/Comment";

export const CommentBox = () => {
  return (
    <Box sx={{ width:"100%", padding: 2 }}>
      <TextField
        fullWidth
        multiline
        label="Write a comment"
        rows={4}
        variant="outlined"
        placeholder="Share your thoughts..."
        // You can add additional props or customization here
      />
      <Box sx={{ marginTop: 2, textAlign: "right" }}>
        <Button variant="contained" color="primary">
          Post Comment
        </Button>
      </Box>
    </Box>
  );
};

const iconStyle = {
  borderRadius: "1rem",
  padding: "0.5rem",
  color: "#4285F4",
  margin: "0.2rem",
  fontSize: "0.8rem",
  // background:"#F8FAFB",
  height:"3rem",
  textAlign:"center",
  width:"3rem",
};

export default function RankQuestion({
  ques,
  ans,
  avatar,
  name,
  clg,
  post,
  comment,
}) {
  const [showCommentBox, setShowCommentBox] = useState(false);

  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: "2rem",
        background: "#FFFFFF",
        // border: "2px solid",
        padding: "0.5rem",
        margin: "0.2rem",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Button>CutOff</Button>
        <Button>B.Tech Computer Science and Engineering</Button>
        <Button>NIT Trichy Tiruchirappalli</Button>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#2F1370",
            }}
          >
            {ques}
          </Typography>
        </Box>
        <Box
          sx={{
            ...iconStyle,
            display: "flex",
            flexWrap: "wrap",
            
          }}
        >
          {[
            <ModeEditRoundedIcon />,
            <ShareRoundedIcon />,
            <MoreHorizRoundedIcon />,
          ].map((Icon, index) => (
            <Box key={index} >
              {Icon}
            </Box>
          ))}
         
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          width: "100%",
        }}
      >
        <Box>
          <Avatar sx={{ background: "#210366E5" }}>{avatar} </Avatar>
        </Box>
        <Box sx={{}}>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "600",
              color: " #2F1370",
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "600",
              color: " #2F1370",
            }}
          >
            {clg}
          </Typography>
          <Typography
            sx={{
              fontSize: "12px", // Reduce font size to 12px
              fontWeight: "600",
              color: "#666", // Change color to a subdued shade, like gray
            }}
          >
            Posted on: {post}
          </Typography>
        </Box>
      </Box>

      <Typography
        sx={{
          fontSize: "1rem",
        }}
      >
        {ans}
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ ...iconStyle }}>
          <ThumbUpIcon />
        </Box>
        <Box sx={{ ...iconStyle }}>
          <ThumbDownAltIcon />
        </Box>
        <Box>
           <Box
            sx={iconStyle}
            onClick={() => setShowCommentBox(!showCommentBox)}
            style={{ cursor: "pointer" }}
          >
            <CommentIcon />
          </Box>
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "600",
            }}
          >
            {comment}
          </Typography>
        </Box>
        {showCommentBox && <CommentBox />}
      </Box>
    </Box>
  );
}
