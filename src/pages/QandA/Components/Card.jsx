import { Avatar, Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { RegisterModal } from "../../../components/Modal/MultiModal";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";

const Card = ({
  area,
  heading,
  avatar,
  userav,
  user,
  institution,
  posted,
  date,
  reviews,
  share,
  ans,
  getbgColor,
}) => {
 
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid lightgrey",
        padding: "1rem",
        borderRadius: "20px",
        backgroundColor: "#FFFFFF",
        maxWidth: "100%",
        marginBottom: "1rem",
        "@media (max-width: 768px)": {
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          fontStyle: "normal",
          fontSize: "0.9rem",
          width: "100%",
          color: "#2f1370",
          display: "flex",
          // bgcolor:"red",
          justifyContent: "center",
          paddingLeft: "1rem",
          flexDirection: "column",
          gap: "1.5rem",
          "@media (max-width: 768px)": {
            flexDirection: "column",
          },

        }}
      >
        <Box
         sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "0.5rem",
          "@media (max-width: 768px)": {
            flexDirection: "column",
            alignItems:'flex-start'
          },
        }}
        >
          <Typography
            sx={{
              color: "#2F1370",
              fontSize: 14,
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            B .Tech Computer Science and Engineering
          </Typography>
          <Typography
            sx={{
              color: "#2F1370",
              fontSize: 14,
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            CutOff
          </Typography>
          <Typography
            sx={{
              color: "#2F1370",
              fontSize: 14,
              fontWeight: "400",
              wordWrap: "break-word",
            }}
          >
            {area}
          </Typography>
        </Box>
        <Typography
          id="review_haeding"
          sx={{
            color: "#7B90FF",
            fontsize: "1rem !important",
            width: "100%",
            fontSize: 20,
            fontWeight: "600",
            wordWrap: "break-word",
            textWrap:'wrap'
          }}
        >
          {heading}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: "1rem",
            fontSize: "0.8rem",
            "@media (max-width: 768px)": {
              flexDirection: "column",
            },
          }}
        >
          <Avatar
            src={avatar}
            name={userav}
            sx={{
              width: 70,
              height: 70,
              left: 0,
              top: 0,
              borderRadius: 9999,
              bgcolor: getbgColor(userav[(0, 0)].toUpperCase()),
              textTransform: "uppercase",
            }}
          >
            {userav}
          </Avatar>

          <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem",
           "@media (max-width: 768px)": {
            paddingRight:"1.5rem",
            flexDirection: "column",
          },
         }}>
            <Typography
              id="name"
              sx={{
                color: "#2F1370",
                fontSize: 14,
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              {user}
            </Typography>

            <Box sx={{ display: "flex", gap: "5rem" }}>
              <Typography
                id="intitution"
                sx={{
                  color: "#2F1370",
                  fontSize: 14,
                  fontFamily: "Poppins",
                  fontWeight: "600",
                  wordWrap: "break-word",
                  width: 345,
                  height: 20,
                }}
              >
                {institution}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  id="posted"
                  sx={{
                    color: "#2F1370",
                    fontSize: 14,
                    fontWeight: "600",
                    wordWrap: "break-word",
                  }}
                >
                  {posted}
                </Typography>
                <Typography
                  id="date"
                  sx={{
                    color: "#2F1370",
                    fontSize: 14,
                    fontStyle: "normal",
                    fontWeight: "600",
                  }}
                >
                  {date}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            height: "5.8 rem",
            overflow: "hidden",
            transition: "height 0.3s ease-in-out",
          }}
        >
          <Box sx={{ display: "flex", gap: "1rem" }}>
                <Box
                  sx={{
                    width: "96%",
                    height: "auto",
                    color: "#2F1370",
                    fontSize: 14,
                    fontWeight: "400",
                    wordWrap: "break-word",
                  }}
                >
                  {reviews}
                </Box>
          </Box>
          <Box
            sx={{
              marginTop: "1rem",
              display: "flex",
              alignItems: "flex-start",
              marginLeft: "0rem",
            }}
          >
            
          </Box>
          <Box
            sx={{
              // width: "100%",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              // gap: 1,
              marginTop: "1rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
           
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "2px",
                flexWrap: "wrap",
              }}
            >
              <Button
                startIcon={<ThumbUpIcon />}
                onClick={handleOpen}
                sx={{
                  height: "20px",
                  width:"auto",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                {like}
              </Button>

              <Button
                onClick={handleOpen}
                startIcon={<ThumbDownIcon sx={{color:"#FF5733"}}/>}
                sx={{
                  height: "20px",
                  width:"auto",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                
                {dislike}
              </Button>
              <Button
              startIcon={<ShareIcon />}
              onClick={handleOpen}
                sx={{
                  height: "20px",
                  width:"auto",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  display: "inline-flex",
                }}
              >
                {share}
              </Button>
              <Button
                onClick={handleOpen}
                sx={{
                  height: "20px",
                  width:"auto",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  flexDirection:"row",
                  display: "inline-flex",
                }}
              >
                {ans}
              </Button>
            </Box>
          </Box>
        </Box>
        <RegisterModal open={open} handleClose={handleClose} />
      </Box>
    </Box>
  );
};

export default Card;
