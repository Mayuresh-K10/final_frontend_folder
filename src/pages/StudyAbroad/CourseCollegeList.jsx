import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Container, Typography, Card, CardContent, Button, Pagination } from '@mui/material';
import { useParams } from 'react-router-dom';
import SAHeroSection from './SAHeroSection';

const CourseCollegeList = () => {
    const { subject } = useParams();
    const [colleges, setColleges] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedId, setExpandedId] = useState(null);
    const [totalCollege, setTotalCollege] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const resultsPerPage = 10; // Set based on the backend response or desired items per page

    const fetchColleges = async (page = 1) => {
        setLoading(true);
        try {
            const response = await axios.get(
                `${process.env.REACT_APP_BACKEND_FIREBASE_URL}/api/study_abroad_v2/courses?subject=${encodeURIComponent(subject)}&page=${page}`
            );
            setColleges(response.data.results || []);
            setTotalCollege(response.data.count || 0);
            setTotalPages(Math.ceil(response.data.count / resultsPerPage)); // Calculate total pages
        } catch (error) {
            console.error('Error fetching colleges:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchColleges(currentPage);
    }, [subject, currentPage]);

    const handlePageChange = (event, page) => {
        setCurrentPage(page);
    };

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    if (loading) return <Typography>Loading...</Typography>;

    return (
        <>
            <Box sx={{}}>
                <SAHeroSection />
                <Container sx={{ padding: "2rem 0rem", marginTop: '2rem' }}>
                    <Typography variant="h4" sx={{ textAlign: "center", marginBottom: "2rem", color: "#41355D" }}>
                       {totalCollege} Colleges offering {subject} programs
                    </Typography>
                    <Box display="flex" flexDirection="column" alignItems="center" gap={4}>
                        {colleges.map((college) => (
                            <Card key={college.id} sx={{ width: "100%", maxWidth: 600 }}>
                                <CardContent>
                                    <Typography variant="h6">
                                        {college.courses_name || "N/A"}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {college.city ? `${college.city}, ${college.country}` : "Location: N/A"}
                                    </Typography>
                                    <Typography variant="body2" sx={{ marginTop: 1 }}>
                                        {expandedId === college.id
                                            ? college.description || "N/A"
                                            : `${college.description?.substring(0, 100) || "N/A"}...`}
                                        <Button onClick={() => toggleExpand(college.id)} size="small">
                                            {expandedId === college.id ? "Read Less" : "Read More"}
                                        </Button>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                                        {college.qs_subject_rankings ? `QS Ranking: ${college.qs_subject_rankings}` : "QS Ranking: N/A"}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Fee: {college.currency || "N/A"} {college.fee_amount || "N/A"}
                                    </Typography>
                                    {college.program_landing_page_url ? (
                                        <Button
                                            href={college.program_landing_page_url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            size="small"
                                        >
                                            Program Details
                                        </Button>
                                    ) : (
                                        <Typography variant="body2" color="text.secondary">
                                            Program Details: N/A
                                        </Typography>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                    <Box display="flex" justifyContent="center" sx={{ marginTop: "2rem" }}>
                        <Pagination
                            count={totalPages}
                            page={currentPage}
                            onChange={handlePageChange}
                            color="primary"
                        />
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default CourseCollegeList;
