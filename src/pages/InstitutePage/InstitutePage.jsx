import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box, Container, Grid } from '@mui/material';
import HeroSection from './components/HeroSection';
import ApplySection from './components/ApplySection';
import TopNavbar from './components/TopNavbar';
import InfoPage from './components/InfoPage';
import CutOff from '../CutOff/CutOff';
import Ranking from '../Ranking/Ranking';
import Gallery from '../Gallery/Gallery';
import Faculty from '../Faculty/Faculty';
import Hostel from '../Hostel/Hostel';
import Reviews from '../Reviews/Reviews';
import JeeRank from '../JeeMainRank/JeeRank/JeeRank';
import Placement from '../Placement/Placement';
import CourseFee from '../CourseFee/CourseFee';
import TrendingNews from '../TrendingNews/TrendingNews';
import IIMBangalore from '../StudyAbroad/IIMBangalore/IIMBangalore';
import { collegeInfo } from './Herodata';
import IIMBangaloreReviews from '../Reviews/Review/component/IIMBangaloreReviews';

const InstitutePage = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box sx={{ overflow: "hidden" }} >
          <HeroSection collegeInfo={collegeInfo} />
          <TopNavbar />
          <Grid container spacing={1}>
            <Grid item  xs={12} md={8} lg={8}>
              <Box sx={{ marginY: "1rem" }}>
                <Routes>
                  <Route path="/" element={<InfoPage/>} />
                  <Route path="/cutoff" element={<CutOff />} />
                  <Route path="/course-fee" element={<CourseFee />} />
                  <Route path="/ranking" element={<Ranking />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/faculty" element={<Faculty />} />
                  <Route path="/jee-rank" element={<JeeRank />} />
                  <Route path="/Hostel" element={<Hostel />} />
                  <Route path="/review" element={<Reviews />} />
                  <Route path="/placement" element={<Placement />} />
                  <Route path="/IIMBangalore" element={<IIMBangalore />} />
                  <Route path="/trending-news" element={<TrendingNews />} />
                </Routes>
              </Box>
              <IIMBangaloreReviews/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <ApplySection />
            </Grid>
          </Grid>
    
        </Box>
      </Container>
    </>
  );
}

export default InstitutePage;
