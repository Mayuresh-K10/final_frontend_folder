import React from 'react';
import { Box, Typography } from "@mui/material";
import ApplyNowButton from "../../components/Buttons/ApplyNow";

const PartnerColleges = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "250px",
        height: "350px",
        marginLeft: "2rem",
        boxShadow: "0px 4px 40px 0px #7B90FF1A",
        borderRadius: "12px"
      }}
    >
      <img src={props.img} alt='' width="250px" height="150px" style={{borderRadius: "12px"}} />
      <Box sx={{padding: "10px"}}>
        <Box sx={{height: "100px"}}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "700",
              fontSize: "1.3rem",
              color: "#210366",
            }}
          >
            {props.name}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "500",
              fontSize: "0.8rem",
              color: "#210366",
            }}
          >
            {props.city}
          </Typography>
        </Box>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "500",
            fontSize: "0.8rem",
            color: "#210366",
            marginTop: "1rem"
          }}
        >
          {props.fees} 1st Year Fees
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "500",
            fontSize: "0.8rem",
          }}
        >
          {props.course}
        </Typography>
        <ApplyNowButton link={props.link} sx={{marginTop: "0.5rem"}} />
      </Box>
    </Box>
  )
}

export default PartnerColleges;
