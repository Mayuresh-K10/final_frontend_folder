import { Box,  Typography } from "@mui/material";
import React from "react";

const NirfRanking = () => {
  return (
    <Box
    sx={{
        fontFamily: "Poppins, sans-serif",
        fontStyle: "normal",
        background: "#ffffff",
        borderRadius: "1rem",
        padding: "1rem",
        fontSize: "0.9rem",
        marginTop:2,
        color: "#2f1370",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
    }}
>
        <Typography
          sx={{
            width: 330,
            height: 23,
            color: "#210366",
            fontSize: 20,
            fontFamily: "Poppins",
            fontWeight: "600",
            wordWrap: "break-word",
          }}
        >
          IIM Bangalore NIRF Ranking 2022
        </Typography>
      
      
        <Box>
          <Typography
            sx={{width: 924, height: 47,
              color: "#210366",
              fontSize: 14,
              fontFamily: "Poppins",
              fontWeight: "400",
              wordWrap: "break-word",

            }}
          >
            National Institutional Ranking Framework i.e. NIRF is a popular
            ranking system identified by MHRD to rank the top institutes in
            India.
            <br />
            IIM Bangalore has been the second Best B-Schools as ranked by NIRF
            Ranking 2022 with an overall score of 82.62.
          </Typography>
  </Box>
        
      </Box>
    
  );
};

export default NirfRanking;
