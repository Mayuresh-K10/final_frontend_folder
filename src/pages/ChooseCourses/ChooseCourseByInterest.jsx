import React from 'react'
import { Box } from '@mui/material'
import InterestHeading from '../../components/Headings/InterestHeading'
import InterestAllCards from './InterestAllCards'

const   ChooseCourseByInterest = () => {
  return (
    <Box sx={{ width: '100%', 
    backgroundColor: "#F5F5F5",
    padding:"5rem",
    '@media (max-width:800px)':{
      paddingLeft:'1rem',
      paddingRight:'1rem',
      justifyContent:'center',
      alignItems:'center'
    }
    }}>
      <InterestHeading />
      <InterestAllCards />
    </Box>
  )
}

export default ChooseCourseByInterest
