import React from 'react'
import { Container, Typography } from '@mui/material'
const ExamHeading = (props) => {
  return (
    <Container>
    <Typography
    component="div"
    sx={{
      borderRight: "1px solid rgba(123, 144, 255, 0.33)",
      fontFamily: "Poppins",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "16px",
      lineHeight: "18px",
      alignItems: "center",
      letterSpacing: "0.03em",
      marginTop: ".5rem",
      color: "#210366",
    }}

    >{props.text}</Typography>
    </Container>
    )
}

export default ExamHeading