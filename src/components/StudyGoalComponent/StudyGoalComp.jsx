import { Container } from '@mui/system'
import React from 'react'
import LetestNotification from "./components/LetestNotification"
import { CollegeRanking } from "./components/CollegeRanking";
import TopColleges from './components/TopColleges';


import TopCollageNear from './components/TopCollageNear';
import HeroSection from './components/HeroSection';

const StudyGoalComp = () => {
    return (
        <>
            <HeroSection />
            <Container>
                <TopCollageNear />
                <TopColleges />
                <LetestNotification />
                <CollegeRanking />
                
            </Container>
        </>
    )
}

export default StudyGoalComp