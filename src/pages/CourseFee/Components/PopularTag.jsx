import React from 'react';
import FilterButton from '../../../components/Buttons/FilterButton';
import { Container, Typography } from "@mui/material";
import Box from '@mui/material/Box';
const PopularTag = () => {
    const PopularTags = [
        "Placement(14)",
        "Program(12)",
        "Hostel Room(11)",
        "Management(11)",
        "Bangalore(8)",
        "Campus Life(8)",
        "Internship Offer(6)",
        "Recruit(3)",
        "Course Curriculum(6)",
        "Summer Internship(6)",
        "Facullty Members(4)"
    ];
    return (
        <Container sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "0px ",
            paddingTop: "2rem !important",
        }}>
            <Box sx={{
                fontFamily: "Poppins, sans-serif",
                fontStyle: "normal",
                background: "#ffffff",
                boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
                borderRadius: "1rem",
                padding: "1rem",
                fontSize: "0.9rem",

                color: "#2f1370",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
            }}>
                <Typography variant='h5' sx={{
                    color: "#000080",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    paddingTop: "1rem",
                    flexGrow: "1",
                    fontFamily: "Poppins, sans-serif"
                }} >Most Popular Tags</Typography>
                <Box sx={{
                    display: "flex",
                    alignItems: "start",
                    height: "auto",
                    flexWrap: "wrap",
                    gap: "1rem"
                }} >

                    {

                        PopularTags.map((Tags, index) => {
                            return <FilterButton key={index}>{Tags}</FilterButton>;
                        })

                    }

                </Box>
            </Box>
        </Container>
    );
};
export default PopularTag;