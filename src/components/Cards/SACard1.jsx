import React from 'react';
import { Typography, Box, Link } from '@mui/material';

const SACard1 = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          
          width: "340px",
          height: "auto",
          borderRadius: "1rem",
          backgroundColor: "white",
          margin: "1rem",
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.15);',
        }}
      >
        <Box sx={{
          width: "340px",
          height: "160px",
          borderRadius: "1rem 1rem 0 0",
          backgroundColor: props.bgColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }} >
          <img
            width="180px"
            height="100px"

            src={props.img} />

        </Box>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "1rem",
            fontFamily: "Poppins",
            fontWeight: "700",
            marginX: "1rem",
            marginTop: "1rem",
            color: "#210366"
          }}>
          {props.title}
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "0.8rem",
            fontFamily: "Poppins",
            fontWeight: "600",
            margin: "1rem",
            color: "#210366"
          }}>
          {props.content}
        </Typography>

        <Link href="#">
          <Typography
            sx={{
              textAlign: "center",
              margin: "0.5rem 1rem 0rem 1rem",
              fontSize: "0.7rem",
              fontFamily: "Poppins",
              fontWeight: "400",
              color: "#210366",
              padding: "0.5rem",
              textTransform: "capitalize",
              textDecoration: "underline"
            }}>
            {props.link} 
            </Typography>
        </Link>


      </Box>
    </>
  )
}

export default SACard1
