import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  IconButton,
  Divider,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

const BlogCard = ({ image, date, title, description, readMoreLink }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <Box
      sx={{
        borderRadius: "10px",
        height: "480px", 
        width: "350px",
        display: "flex",
        flexDirection: "column",
        margin: "2rem 0",
        overflow: "hidden",
        position: "relative",
        boxShadow: "0px 2px 8px rgba(99, 99, 99, 0.2)",
        transition: "box-shadow 0.3s ease-in-out",
        "&:hover": {
          boxShadow: "0px 4px 16px rgba(99, 99, 99, 0.5)",
          transform: "scale(1.01)",
          transition: "0.3s",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          height: "180px",
          width: "100%",
          overflow: "hidden",
          borderRadius: "10px 10px 0 0",
        }}
      >
        <img
          src={image}
          alt="Blog"
          style={{
            width: "100%",
            height: "100%", 
            objectFit: "cover",
            borderRadius: "10px 10px 0 0",
          }}
        />
        <Typography
          variant="caption"
          sx={{
            position: "absolute",
            bottom: "10px",
            left: "10px",
            bgColor: "rgba(255, 255, 255, 0.8)",
            borderRadius: "8px",
            padding: "5px",
            color: "black",
          }}
        >
          {date}
        </Typography>
        <IconButton
          variant="contained"
          color={liked ? "error" : "default"}
          sx={{
            position: "absolute",
            bottom: "10px",
            right: "10px",
            width: "auto",
            transition: "color 0.3s",
            backgroundColor: "#ffffff",
            borderRadius: "50%",
            "&:hover": {
              backgroundColor: liked ? "#ffffff" : "#FF8811",
            },
          }}
          onClick={toggleLike}
        >
          <FavoriteIcon
            color={liked ? "error" : "inherit"}
            sx={{ color: liked ? "#FF0811" : "#333333" }}
          />
        </IconButton>
      </Box>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: "0 0 10px 10px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: 700,
            lineHeight: "1.4rem",
            letterSpacing: "0.03em",
            textAlign: "center",
            color: "#210366",
            marginBottom: "10px",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            color: "#333333",
            fontSize: "0.9rem",
            fontWeight: 500,
            lineHeight: "1.3rem",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          {description ? description.slice(0, 135) + "..." : ""}
        </Typography>
        <Divider sx={{ marginY: "10px" }} />
        <Button
          component="a"
          
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: "#ffffff",
            backgroundColor: "#FF8811",
            borderRadius: "5px",
            padding: "5px",
            textAlign: "center",
            textTransform: "none",
            marginX: "auto",
            marginY:"auto",
            "&:hover": {
              backgroundColor: "#333333",
            },
          }}
        >
          Read More
        </Button>
      </Box>
    </Box>
  );
};

export default BlogCard;
