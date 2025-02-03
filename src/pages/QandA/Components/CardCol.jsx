import { Avatar, Box, Typography } from "@mui/material";
import React from "react";
const CardCol = ({
  heading,
  avatar,
  userav,
  user,
  reviews,

  getbgColor,
}) => {
 
  return (
    
      <Box

        sx={{
          display: "flex",

          flexDirection: "row",
          "@media (max-width: 768px)": {
            height: "auto",
         
        }
        }}
      >
        <Box
          sx={{
            fontStyle: "normal",
            background: "#ffffff",
            padding: "1rem",
            border:"1px solid lightgrey",
            fontSize: "0.9rem",
            width: "100%",
            color: "#2f1370",
            display: "flex",
            height: "auto",
            borderRadius:"2rem",
            flexDirection: "column",
            marginTop:"1rem",
            "@media (max-width: 768px)": {
              height: "auto",
          
           
          }
          }}
        >
          <Typography
            id="review_haeding"
            sx={{
              fontStyle: "normal",
              color: "#2F1370",
              fontSize: 20,
              fontWeight: "600",
              width: "100%",
              wordWrap: "break-word",
            }}
          >
            {heading}
          </Typography>

          <Box
            sx={{
              display: "flex",
              
              gap: "0.5rem",
              fontSize: "0.8rem !important",
              alignItems: "center",
            }}
          >
            <Avatar
              src={avatar}
              name={userav}
              sx={{
                width: 42,
                height: 42,
                borderRadius:"1rem",
                bgcolor: getbgColor(userav[(0, 0)].toUpperCase()),
                textTransform: "uppercase",
              }}
            >
              {userav}
            </Avatar>

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
          </Box>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            {reviews.map(({ Answer }, index) => {
              return (
                <Box
                  sx={{
                    width: "100%",
                    height: "auto",
                    color: "#2F1370",
                    fontSize: 14,
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: "400",
                    wordWrap: "break-word",
                    marginTop: "1rem",
                  }}
                  kye={index}
                >
                  {Answer}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    
  );
};

export default CardCol;
