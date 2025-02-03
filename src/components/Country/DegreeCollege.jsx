import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import axios from "axios";
import CollegeDegreeCard from './CollegeDegreeCard';
import { Container, Box, Typography, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';

const DegreeCollege = () => {
    const { countryName, degreeName } = useParams();
    const [colleges, setColleges] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchColleges = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_BACKEND_FIREBASE_URL}/api/study_abroad_v2/courses?degree_name=${degreeName}&country=${countryName}`
                );
                setColleges(response.data.results || []); // Update the data path to match "results"
            } catch (error) {
                console.error("Error fetching colleges:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchColleges();
    }, [countryName, degreeName]);

    if (loading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
                <CircularProgress />
            </Box>
        );
    }

    return (
        <>
            <Hero country={countryName} />
            <Container sx={{ marginY: "5rem" }}>
                <Box sx={{ paddingX: "2rem", paddingY: "3rem" }}>
                    <Typography variant="h4" sx={{ textAlign: "center", marginBottom: "2rem", color: "#41355D" }}>
                        Colleges in {countryName} offering {degreeName} programs
                    </Typography>
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        {colleges.length > 0 ? (
                            colleges.map((college) => (
                                <CollegeDegreeCard key={college.id} course={college} />
                            ))
                        ) : (
                            <Typography variant="h6" color="text.secondary" sx={{ marginTop: "2rem" }}>
                                No colleges found offering {degreeName} programs in {countryName}.
                            </Typography>
                        )}
                    </Box>
                </Box>
            </Container>
        </>
    );
}

export default DegreeCollege;
