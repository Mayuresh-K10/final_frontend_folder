import React from "react";
import Question from "./Question";
import QuestionCol from "./QuestionCol";
import StudyAbroadTags from "./StudyAbroadTags";
import { Box } from "@mui/material";
import AdSenseComponent from "../../../utils/AdSenseComponent";


const StudyAbroad = () => {
  

  return (
    <Box sx={{ 
      display:'flex',
      maxWidth:'100%',
      '@media (max-width:1280px)':{
        flexDirection:'column'
      }
     }}>
      <Box 
      sx={{
        width:'20%',
        '@media (max-width:1280px)':{
         width:'100%'
        }
      }}>
      <StudyAbroadTags />
      <AdSenseComponent />
      </Box>
      <Box
       sx={{
        width:'60%',
        '@media (max-width:1280px)':{
          width:'100%'
       }, 
      }}>
       <Question />
      </Box>
      <Box  sx={{
        width:'20%',
        '@media (max-width:1280px)':{
           width:'100%'
        },
        
      }}>
        <QuestionCol />
      </Box>
      
    </Box>
  );
};

export default StudyAbroad;
