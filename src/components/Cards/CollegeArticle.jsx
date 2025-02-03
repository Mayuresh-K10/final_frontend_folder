import React, { useState } from "react";
import { Box,  Typography, Link,  IconButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

const CollegeArticle = (props) => {

  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "400px",
          width: "350px",
          borderRadius: "1rem",
          backgroundColor: "white",
          margin: "1rem",
          padding: "12px",
          boxShadow: '0px 0px 40px 0px #7B90FF26'
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: "175px",
            width: "100%",
            backgroundImage: `url(${props.img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "20px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          
          <IconButton
            variant="contained"
            color={liked ? "error" : "primary"}
            sx={{
              position: "absolute",
              bottom: "5%",
              right: "5%",
              width: "auto",
              transition: "color 0.3s",
            }}
            onClick={toggleLike}
          >
            <FavoriteIcon />
          </IconButton>
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "14px",
            fontFamily: "Poppins",
            fontWeight: "700",
            marginX: "1rem",
            marginTop: "0.5rem",
            color: "#210366",
          }}
        >
          {props.contents}
        </Typography>
        <Typography
          sx={{
            height: '130px',
            textAlign: "center",
            fontSize: "12px",
            fontFamily: "Poppins",
            fontWeight: "600",
            margin: "1rem",
            color: "#210366",
          }}
        >
          {props.contents_body}
        </Typography>
        <Link href="#">
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "0.6rem",
              fontFamily: "Poppins",
              fontWeight: "400",
              color: "#210366",
              textTransform: "capitalize",
              textDecoration: "underline",
              // fontWeight: "bold"
            }}
          >
            {props.content_link}{" "}
          </Typography>
        </Link>
      </Box >
    </>
  );
};

export default CollegeArticle;