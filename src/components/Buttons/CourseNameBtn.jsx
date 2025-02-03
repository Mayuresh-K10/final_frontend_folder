import { Button } from '@mui/material'
import React from 'react'

const CourseNameBtn = ({ courseName, link, isHovered }) => {
  return (
    <Button
      variant="text"
      sx={{
        fontSize: '0.8rem',
        fontWeight: 500,
        textTransform: 'none',
        lineHeight: '1rem',
        textAlign: 'center',
        borderRadius: '0.5rem',
        padding: '5px',
        color: '#5A4FCF',
        backgroundColor: isHovered ? "#FABA5F" : '#FFFFFF',
        border: "1px solid lightgrey",
        '&:hover': {
          backgroundColor: 'white',
          color: '#FF5733',
          // border: "none",
          border: "1px solid lightgrey",
        },

      }}
      href={link}
    >
      {courseName}
    </Button>
  )
}

export default CourseNameBtn
