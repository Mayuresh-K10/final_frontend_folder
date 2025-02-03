import { Box,Typography } from "@mui/material";
import React from "react";
import reviews from "./DataCol.jsx";
import CardCol from "./CardCol.jsx";
const  AllAnsCol = ({ getbgColor }) => {
  return (

    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems:'center',
        height: "auto",
        gap: "1rem",
        marginBottom: "2rem",
        "@media (max-width: 768px)": {
          height: "auto",
        marginRight:"1rem",
        marginLeft:"1rem",
       
      }
      }}
    >       
    <Box sx={{marginTop:1}}>
      <Typography
        sx={{
          color: "#210366",
          fontSize: 30,
          fontWeight: "600",
          wordWrap: "break-word",
          textAlign:'center'
          
        }}
      >
        Most Viewed Questions
      </Typography>
    </Box>
    
    <Box >
       
        
          {reviews.map((Answer,index) => {
            return (
            
                <CardCol key={index} {...Answer} getbgColor={getbgColor} />
            );
          })}

      </Box>
     
    </Box>
  );
};

export default AllAnsCol;