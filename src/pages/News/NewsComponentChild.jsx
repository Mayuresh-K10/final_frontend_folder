import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Link } from '@mui/material';

const NewsComponentChild = (props) => {
  return (
    <> 
    <Link href="#" underline='none'>
    <Typography
      sx={{
        textAlign: "left",
        margin: "0.5rem 1rem 0.5rem 1rem",
        fontSize: "0.8rem",
        fontWeight: "600",
        color: "#210366",
        textDecoration: "none"
      }}>
      {props.content}
      <Box sx={{ borderBottom: "1px solid #7F56DA4D", paddingTop: "0.5rem" }}></Box>
      </Typography>
    </Link>
    </>
    
  )
}

export default NewsComponentChild
