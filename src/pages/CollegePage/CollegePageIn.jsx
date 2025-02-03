import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
    Box,
    Container,
    CircularProgress,
    Typography,
    Paper,
    Divider,
    Grid,
    TableContainer,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
} from "@mui/material";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";

const CollegePageIn = () => {
    const { id } = useParams();
    const [collegeInfo, setCollegeInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    const authToken = process.env.REACT_APP_BACKEND_BEARER_TOKEN;
    const url = process.env.REACT_APP_BACKEND_SERVER_URL;

    const getCollegesInfo = useCallback(async () => {
        try {
            const response = await axios.get(
                `${url}/api/study-abroads/${id}?populate=*`,
                {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                }
            );

            if (response.data) {
                setCollegeInfo(response.data.data);
                //console.log(response.data);
            } else {
                console.error("Unexpected response format:", response.data);
            }
        } catch (error) {
            console.error("Error fetching collegeInfo Info:", error);
        } finally {
            setLoading(false);
        }
    }, [url, authToken, id]);

    useEffect(() => {
        if (id) {
            getCollegesInfo();
        }
    }, [id, getCollegesInfo]);

    if (loading) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                }}
            >
                <CircularProgress size={80} thickness={4} color="primary" />
            </Box>
        );
    }

    if (!collegeInfo || !collegeInfo.attributes) {
        return (
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight: "100vh",
                }}
            >
                <Typography variant="h6" color="error">
                    College information not found.
                </Typography>
            </Box>
        );
    }

    const attributes = collegeInfo.attributes;
    const upperDetails = attributes.Upper_Section_Details || {};

    return (
        <Container maxWidth="xl">
            <Box sx={{ overflow: "hidden" }}>
                <HeroSection
                    id={collegeInfo.id}
                    logo={`${url}${
                        attributes.College_Logo?.data?.attributes?.url || ""
                    }`}
                    name={attributes.College_Name || "N/A"}
                    location={upperDetails.Place || "N/A"}
                    approved={upperDetails.Approval || "N/A"}
                    established={upperDetails.Establishment || "N/A"}
                    rating={attributes.College_Rating || "N/A"}
                    isAutonomous={upperDetails.UniversityType || "N/A"}
                />
                <Box
                    sx={{
                        maxWidth: "100%",
                        height: "auto",
                        marginX: "0",
                        marginY: "2rem",
                    }}
                >
                    <Paper elevation={3} sx={{ p: 3 }}>
                        <Typography variant="h4" gutterBottom>
                            {attributes.College_Name || "N/A"}
                        </Typography>
                        <Typography
                            variant="h6"
                            color="textSecondary"
                            gutterBottom
                        >
                            {attributes.College_Heading || "N/A"}
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Grid container spacing={2}>
                            <Grid item xs={12} md={6}>
                                <Typography variant="body1" gutterBottom>
                                    <strong>Location:</strong>{" "}
                                    {attributes.College_Place || "N/A"}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    <strong>Fees:</strong>{" "}
                                    {attributes.College_Fees?.[
                                        "Tuition Fees"
                                    ] || "N/A"}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    <strong>Top Course:</strong>{" "}
                                    {attributes.College_Top_Course || "N/A"}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    <strong>Exam Scores:</strong>{" "}
                                    {attributes.College_Exam_Score || "N/A"}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    <strong>Rating:</strong>{" "}
                                    {attributes.College_Rating || "N/A"}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="body1" gutterBottom>
                                    <strong>Established:</strong>{" "}
                                    {upperDetails["Established Year"] || "N/A"}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    <strong>School Type:</strong>{" "}
                                    {upperDetails["School type"] || "N/A"}
                                </Typography>
                                <Typography variant="body1" gutterBottom>
                                    <strong>College Info:</strong>{" "}
                                    {attributes.College_Summary || "N/A"}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>

                    <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
                        <Typography
                            variant="h5"
                            sx={{ fontWeight: "bold", fontSize: "1.2rem" }}
                        >
                            Fees & Eligibility
                        </Typography>
                        {attributes.Fees_and_Eligibility?.length > 0 ? (
                            <TableContainer sx={{ mt: 2 }}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell align="center">
                                                Fees
                                            </TableCell>
                                            <TableCell align="center">
                                                Exams Score
                                            </TableCell>
                                            <TableCell align="center">
                                                Program Type
                                            </TableCell>
                                            <TableCell align="center">
                                                Important Dates
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {attributes.Fees_and_Eligibility.map(
                                            (item, index) => (
                                                <motion.tr
                                                    key={index}
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{
                                                        delay: index * 0.1,
                                                    }}
                                                    sx={{
                                                        backgroundColor:
                                                            index % 2 === 0
                                                                ? "#D1EAF0"
                                                                : "#FFFFFF",
                                                    }}
                                                >
                                                    <TableCell align="center">
                                                        {item.Fees || "N/A"}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {item["Exams Score"] ||
                                                            "N/A"}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {item["Program Type"] ||
                                                            "N/A"}
                                                    </TableCell>
                                                    <TableCell align="center">
                                                        {item[
                                                            "Important Dates"
                                                        ] || "N/A"}
                                                    </TableCell>
                                                </motion.tr>
                                            )
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        ) : (
                            <Typography variant="body1" color="textSecondary">
                                No Fees & Eligibility data available.
                            </Typography>
                        )}
                    </Paper>
                </Box>
            </Box>
        </Container>
    );
};

export default CollegePageIn;
