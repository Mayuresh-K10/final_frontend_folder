import { Button } from '@mui/material'
import React from 'react'

const Buttons = () => {
  return (
    <>
      <Button variant='contained' sx={{
        borderRadius:'1.3rem',
        borderColor:'#7B90FF',
        borderWidth:'0.2rem',
        borderStyle:'solid',
        justifyContent:'center',
        textAlign:'center',
        margin:'1rem',
        fontFamily:'Poppins',
        fontSize:'1.1rem',
        fontWeight:'500',
        lineHeight:'1.3rem',
        letterSpacing:'0rem',
        color:'#210366',
        backgroundColor:'transparent',
        cursor:'pointer',
        '&:hover':{
          backgroundColor:'#7B90FF',
          color:'white'
        }
      }} >mbbs</Button>
    </>
  )
}

export default Buttons
