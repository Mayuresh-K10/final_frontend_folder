import { Box, Typography } from "@mui/material";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import logo from "../../Assets/cc2.svg";
import bharattech from "../../Assets/bharat.webp"

const FooterStart = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-evenly",
        "@media (max-width: 770px)": {
          alignItems: "center",
          gap: "20px",
        },
      }}
    >
      
      <img
        src={logo}
        alt="CollegeCue"
        style={{ width: "320px", height: "auto" }}
      />
      <Box sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:'1rem', marginTop:'-5rem', marginLeft:'7rem'}}>
      <Typography sx={{ color: "white",
          marginTop:'-3rem', fontWeight:'600'}} >Owned By</Typography>
          <img src={bharattech} alt="..." style={{width:'100px', height:'auto', marginTop:'-2.75rem'}} />
      </Box>
      <Typography
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          color: "white",
          gap: "10px",
        }}
      >
        <EmailIcon />
        support@collgecue.com
      </Typography>
    </Box>
  );
};

export default FooterStart;
