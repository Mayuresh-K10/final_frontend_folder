import React from 'react'
import Allcard from './Allcard'
import { Box, Container } from '@mui/material'
import AllLowerCard from './CardsData/AllLowerCard'
import FooterCard from './FooterCard/FooterCard'
import { Data, TopSectiondata, Card2 } from "./Data"
import SelectButton from './SelectButton'
import { Helmet } from 'react-helmet'
import AdSenseComponent from '../../utils/AdSenseComponent'

const CollegePredictor = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Predict your chances of admission to various colleges and universities based on your academic profile, test scores, and other criteria." />
        <meta name="google-adsense-account" content="ca-pub-3919517798801147"></meta>
      </Helmet>
      <Container maxWidth="xl"  sx={{paddingY:"3.5rem"}}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          justifyContent: "center",
          alignItems: "center",
        }}>
          <SelectButton TopSectiondata={TopSectiondata} />
          <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <AdSenseComponent />
            <Box maxWidth='lg'>
            <Allcard Data={Data} TopSectiondata={TopSectiondata} />
            </Box>
            <AdSenseComponent />
          </Box>
          <Box>
            <AllLowerCard Card2={Card2} />
          </Box>
          <FooterCard />
        </Box >
      </Container>
    </>
  )
}

export {CollegePredictor};