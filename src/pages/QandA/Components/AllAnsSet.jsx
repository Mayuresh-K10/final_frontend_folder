import { Box, Typography } from "@mui/material";
import React from "react";
import reviews from "./DataSet.jsx";
import CardSet from "./CardSet.jsx";
const AllAnsSet = ({ getbgColor }) => {
  return (
    <>
      
       <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}> 
          <Typography
            sx={{
              color: "#210366",
              fontSize: 18,
              fontFamily: "Roboto, sans-serif",
              fontWeight: "600",
              wordWrap: "break-word",
              marginLeft:"1rem"
            }}
          >
            Found 6715 Institute
          </Typography>
        
          <Typography
            sx={{
              color: "#210366",
              fontSize: 18,
              fontFamily: "Roboto, sans-serif",
              fontWeight: "600",
              wordWrap: "break-word",
              marginRight: "1rem",
             
            }}
          >
            Set default
          </Typography>
        
          </Box> 
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "2rem",
                }}
      >

          {reviews.map((Answer, index) => {
            return <CardSet key={index} {...Answer} getbgColor={getbgColor} />;
          })}
      
      </Box>
    </>
  );
};

export default AllAnsSet;
