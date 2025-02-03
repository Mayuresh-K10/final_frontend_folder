import { Container, Typography } from '@mui/material'
import React from 'react'
import HeadText from '../../components/Headings/HeadText'

const StudyAbroadDetails = () => {
  return (
    <>
      <Container maxWidth="lg" sx={{paddingY:"3.5rem"}} >
        <HeadText headText='Study Abroad: Find Program, Colleges, Costs, Scholarship, Visa details for International Students' />
        <Typography
          sx={{
            color: "#210366",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.03em",
            margin: "1rem 0rem",
          }}
        >
          Cultural Exposure:- Studying overseas offers international students a lifetime opportunity to live in an entirely new country and familiarise themselves with its culture, traditions,people, lifestyles, etc.
        </Typography>
        <Typography
          sx={{
            color: "#210366",
            fontFamily: "Poppins",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.03em",
            margin: "1rem 0rem",
            marginBottom : "10px"
          }}
        >
          Discover Yourself:- For many students, studying abroad might be the first time when they will be living on their own. This could be their only chance to re-discover their interests and
        </Typography>
      </Container>
    </>
  )
}

export default StudyAbroadDetails
