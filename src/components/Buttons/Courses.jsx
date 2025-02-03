import { Button } from '@mui/material'
import React from 'react'

const Courses = (props) => {
  return (
    <Button
      href={props.link}
      variant='text'
      sx={{
        border: '2px solid #7B90FF',
        borderRadius: '16px',
        height: '50px',
        padding: '0.5rem',
        textAlign: 'center',
        textTransform: 'none',
        marginRight: '2rem',
        justifyContent: 'center',
        fontSize: '1rem',
        fontWeight: '550',
        letterSpacing: '0rem',
        color: "#160048",
        '&:hover': {
          color: "white",
          backgroundColor: "#7B90FF"
        }
      }}
    >{props.dt}</Button>

  )
}

export default Courses
