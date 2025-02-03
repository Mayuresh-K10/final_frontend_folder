import React from 'react';
import FilterButton from './FilterButton';
import { Container, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Agency from './Agency';
const StreamsTag = () => {
    const StreamsTags = [
        "All",
        "Overall",
        "MBA",
        "MBA",
    ];
    return (
        <Box
            sx={{
                fontFamily: "Poppins, sans-serif",
                fontStyle: "normal",
                background: "#ffffff",
                borderRadius: "1rem",
                padding: "1rem",
                fontSize: "0.9rem",
                marginTop: 2,
                color: "#2f1370",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
            }}
        >
            <Container>

                <Typography variant='h5' sx={{
                    color: "#000080",
                    fontWeight: "bold",
                    fontSize: "1.2rem",
                    paddingTop: "1rem",
                    flexGrow: "1",
                    fontFamily: "Poppins, sans-serif"
                }} >Top Streams:</Typography>
                <Box sx={{
                    display: "flex",
                    alignItems: "start",
                    height: "auto",
                    flexWrap: "wrap",
                    gap: "1rem",
                    marginTop: 2,
                }} >
                    {
                        StreamsTags.map((Tags, index) => {
                            return <FilterButton key={index}>{Tags}</FilterButton>;
                        })

                    }

                </Box>
            </Container>
            <Agency />
        </Box>
    );
};
export default StreamsTag;