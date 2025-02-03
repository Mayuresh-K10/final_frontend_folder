import { Container, Typography } from '@mui/material'
import React from 'react'
import HeadText from '../../components/Headings/HeadText'

const ChooseTheUniversity = () => {
  return (
    <>
      <Container maxWidth="lg">
        <HeadText headText='Choose the University/ College' />
        <Typography
          sx={{
            color: "#210366",
            fontSize: "0.8rem",
            fontWeight: 600,
            letterSpacing: "0.03em",
            margin: "1rem",
          }}
        >
          After deciding which program to study, the next step is to target the prospective universities. There is a huge number of universities to study abroad and to choose from the lot can be tedious. This decision should be based on various factors like costs & expenses, academic quality, and structure, faculty, admission requirements, deadlines, post-degree career opportunities, etc.
        </Typography>
      </Container>
    </>
  )
}

export default ChooseTheUniversity
