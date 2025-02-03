import { Button } from '@mui/material'
import React from 'react'

const SAMainBtn = (props) => {
  return (
    
    <Button 
      variant='contained' 
      sx={{
        color: "#FFFFFF",
        fontWeight: "600",
        fontSize: "1rem",
        padding: "0.5rem",
        margin:"0.1rem",
        borderRadius: "1rem",
        '@media (max-width:800px)': {
          fontSize: "0.8rem",
          padding: "6px",
        },
      }}>
      {props.content}
    </Button>
    
  )
}

export default SAMainBtn
