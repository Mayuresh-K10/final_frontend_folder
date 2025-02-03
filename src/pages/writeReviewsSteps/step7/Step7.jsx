import React from 'react'
import { Box, Typography } from '@mui/material';
import { MdVerified } from "react-icons/md";

const StepSeven = () => {
  return (
    <Box sx={{
      marginX: 'auto',
      padding: "2rem"
    }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          gap: "20px",
          width: "100%",
        }}>
        <MdVerified size={60} style={{ color: "#038C09" }} />
        <Typography
          variant='h6'
          sx={{
            color: "#7B90FF"
          }}>
          Thank You For Your Response
        </Typography>
        <Typography
          sx={{
          }}>
          Your Review has been submitted
        </Typography>
        <Typography
          sx={{
            fontSize: '1.2rem',
            fontWeight: "bold",
            padding: "1rem",
            textAlign: 'center'
          }}>
          Check your Email for futher communications from Collegecue, also remember to check your spam and allow us
        </Typography>
      </Box>

    </Box>
  )
}

export default StepSeven


// F5F3FF