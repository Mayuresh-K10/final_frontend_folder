import React from 'react'
import Pridiction from "./Components/Pridiction"
import { Box, Container, Typography } from '@mui/material'
import TopColleges from './Components/TopColleges'
import CollageRank from './Components/CollageRank'
import ExamNewsRender from './Components/ExamNewsRender'
import ExamNotificationsRender from './Components/ExamNotificationRender'

const CollegePridictorInfo = () => {
    return (
        <>
            <Container maxWidth="xl" sx={{paddingY:"3.5rem"}}>
                <Typography
                    sx={{
                        fontSize: "2rem",
                        color: "#160048",
                        fontWeight: 700,
                        marginY: "2rem",
                        textAlign: "center",
                    }}>
                    College Predictor: Predict Your Admission Chances based on Exam
                </Typography>
                <Pridiction />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignContent: "center",
                        '@media (min-width: 740px)': {
                            flexDirection: "row",
                        },
                    }}>
                    <Box>
                        <TopColleges />
                        <CollageRank />
                    </Box>
                    <Box
                        sx={{
                            flex: "1",
                            marginX: "auto",
                            '@media (min-width: 740px)': {
                                paddingLeft: '1vw',
                            },
                        }}>
                        <ExamNewsRender/>
                        <ExamNotificationsRender />
                    </Box>
                </Box>
            </Container>
        </>
    )
}

export default CollegePridictorInfo
