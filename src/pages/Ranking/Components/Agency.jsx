import React from 'react';
import FilterButton from './FilterButton';
import { Container, Typography } from "@mui/material";
import Box from '@mui/material/Box';
const Agency = () => {
    const Agencies = [
        "All",
        "Indiatoday",
        "Financial times",
        "Financial Express",
        "The Week",
        "NIRF",
        "Outlook",
        "TOI",
    ];
    return (
        <div
            style={{
                fontFamily: "Poppins, sans-serif",
                fontStyle: "normal",
                background: "#ffffff",
                borderRadius: "1rem",
                padding: "1rem",
                fontSize: "0.9rem",

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
                }} >Agency:</Typography>
                <Box sx={{
                    display: "flex",
                    alignItems: "start",
                    height: "auto",
                    flexWrap: "wrap",
                    gap: "1rem",
                    marginTop: 2,
                }} >
                    {
                        Agencies.map((Tags, index) => {
                            return <FilterButton key={index}>{Tags}</FilterButton>;
                        })
                    }

                </Box>
            </Container>
        </div>
    );
};
export default Agency;