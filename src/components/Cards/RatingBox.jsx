import { Typography } from '@mui/material'
import React from 'react'

const RatingBox = ({children}) => {
  return (
    <Typography sx={{
        textAlign:"center",
           height:"45px",
           width:"45px",
           borderRadius:"50px",
           justifyContent:"center",
           alignItems:"center",
           fontWeight:"700",
           color: "rgba(33, 3, 102, 1)",
           display:"flex",
           border:"1px solid rgba(0, 0, 0, 0.125)",
           '@media (max-width:800px)': {
            height : '30px',
            width : '30px',
          },
          
    }}>{children} </Typography>
  )
}

export default RatingBox