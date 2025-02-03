import { Box, Typography, Avatar,  } from "@mui/material";
import React from "react";

export default function ViewedQues({ ques, ans, avatar, name }) {
  return (
        <Box
          sx={{
            padding: "1rem",
            borderRadius: "2rem",
            boxShadow: "0px 0px 40px 0px #7B90FF26",
            marginBottom: "1rem",
          }}
        >
          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "600",        
              textAlign: "left",
              color: "#210366E5",
            }}
          >
            {ques}
          </Typography>

          <Box sx={{ display: "flex",alignItems:"center",background:"#F8FAFB",width:"20%",padding:"0.1rem"}}>
           <Box><Avatar sx={{background:"#DF486F" }} >{avatar}</Avatar></Box>
            <Typography
              sx={{     
                fontSize: "1rem",
                fontWeight: "600",
                textAlign: "left",
                color: "#210366",
              }}
            >
              {name}
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: "1rem",
              fontWeight: "400",
              textAlign: "left",
              color: "#210366",
            }}
          >
            {ans}
          </Typography>
        </Box>  
  );
}
