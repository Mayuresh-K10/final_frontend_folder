import React from "react";
import { Box, Container } from '@mui/material';
import Border from './components/Border';
import EduLoan from './components/EduLoan';
import EmiCalculator from './components/EmiCalculator';
import Application from './components/Application';
import TopLoan from './components/TopLoan';
import { Helmet } from 'react-helmet';
import LoanHeroSection from "./components/LoanHero";
import AdSenseComponent from "../../utils/AdSenseComponent"

function EducationLoan() {

  return (
    <Box >
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Explore options for education loans, financial aid, scholarships, and funding opportunities for students pursuing higher education." />
        <meta name="google-adsense-account" content="ca-pub-3919517798801147"></meta>
      </Helmet>
      <LoanHeroSection/>
      <Container maxWidth= "lg" >
        <Border />
        <EduLoan />
        <EmiCalculator />
        <Application />
        <AdSenseComponent />
        <TopLoan />
      </Container >
    </Box>
  );
}

export default EducationLoan;
