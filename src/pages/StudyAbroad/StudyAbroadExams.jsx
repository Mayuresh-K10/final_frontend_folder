import { Box } from '@mui/material'
import React from 'react'
import HeadText from '../../components/Headings/HeadText'
import AllExamsCard from './AllExamsCard'

const StudyAbroadExams = () => {
  return (
      <Box sx={{paddingY:"3rem"}}>
        <HeadText headText='Study Abroad Exams' />
        <AllExamsCard isAbroadExam={false}/>
      </Box>
    
  )
}

export default StudyAbroadExams
