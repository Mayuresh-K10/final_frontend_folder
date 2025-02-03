import React from "react";
import { Typography, Box, Link, Divider } from "@mui/material";

const SACard1 = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "300px",
          height: "380px",
          borderRadius: "1.3rem",
          backgroundColor: "white",
          marginY: "1rem",
          padding: "5px",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.15);",
          "&:hover": {
            // color: "#ffffff",
            transform: "scale(1.01)",
            transition: "0.3s",
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "175px",
            borderRadius: "1rem",
            // backgroundColor: props.bgColor,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow:"hidden"
          }}
        >
          <img
            height="100%"
            alt={props.title}
            src={props.img}
            sx={{
              objectFit: "cover",
            }}
          />
        </Box>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: "700",
            marginX: "auto",
            marginY: "1rem",
  
          }}
        >
          {props.title}
        </Typography>
        <Divider sx={{ width: "90%" }} />
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "0.8rem",
            fontWeight: "600",
            margin: "1rem",
            
          }}
        >
          {props.content}
        </Typography> 
        <Divider sx={{ width: "90%" }} />
       <Link href="/top-universities" sx={{
          textDecoration:"none",
          
        }}>
          <Typography
            sx={{
              textAlign: "center",
              marginY: "1rem",
              fontSize: "1rem",
              fontWeight: "400",
              textTransform: "capitalize",
              // background:"#F5F7F8",
              // color:"#F57D1F",
              borderRadius:"0.5rem",
              padding:"5px 5px",
              "&:hover":{
                  color:"#ffffff",
                  background: "linear-gradient(45deg, #FFA500 30%, #FF4500 90%)",
                  transform:"scale(1.01)",
                  transition:"0.3s",
              }
            }}
          >
            {props.link}{" "}
          </Typography>
        </Link>
      </Box>
    </>
  );
};

export default SACard1;
