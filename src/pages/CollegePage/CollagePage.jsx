import React, {
    useState,
    useEffect,
    useCallback,
    useLayoutEffect,
} from "react";
import axios from "axios";
import { Outlet, useParams } from "react-router-dom";
import { Box, Container, Grid, CircularProgress } from "@mui/material";
import HeroSection from "./components/HeroSection";
import ApplySection from "./components/ApplySection";
import TopNavbar from "./components/TopNavbar";

const CollegePage = ({ openModal }) => {
    // useLayoutEffect(() => {
    //   window.scrollTo(0, 0);
    // });

    const { id } = useParams();
    const [collegeInfo, setCollegeInfo] = useState(null);
    const [loading, setLoading] = useState(true);

    const authToken = process.env.REACT_APP_BACKEND_BEARER_TOKEN;
    const url = process.env.REACT_APP_BACKEND_SERVER_URL;

    const getCollegesInfo = useCallback(async () => {
        try {
            const response = await axios.get(
                `${url}/api/college-infos/${id}?populate=*`,
                {
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                }
            );

            if (response.data) {
                setCollegeInfo(response.data.data);
                setLoading(false); // Set loading to false after data is fetched
            } else {
                console.error("Unexpected response format:", response.data);
            }
        } catch (error) {
            console.error("Error fetching collegeInfo Info:", error);
        }
    }, [url, id, authToken]);

    useEffect(() => {
        if (id) {
            getCollegesInfo();
        }
    }, [id, getCollegesInfo]);

    if (loading || !collegeInfo) {
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

    return (
        <Container maxWidth="xl">
            <Box sx={{ overflow: "hidden" }}>
                <HeroSection
                    id={collegeInfo.id}
                    logo={`${url}${collegeInfo.attributes.College_Logo.data.attributes.url}`}
                    name={collegeInfo.attributes.College_Name}
                    location={
                        collegeInfo.attributes.Upper_Section_Details.Place
                    }
                    approved={
                        collegeInfo.attributes.Upper_Section_Details.Approval
                    }
                    established={
                        collegeInfo.attributes.Upper_Section_Details
                            .Establishment
                    }
                    rating={collegeInfo.attributes.College_Rating}
                    isAutonomous={
                        collegeInfo.attributes.Upper_Section_Details
                            .UniversityType
                    }
                />
                <TopNavbar />
                <Grid container spacing={1}>
                    <Grid item xs={12} md={8} lg={8}>
                        <Box
                            sx={{
                                padding: "5rem",
                                "@media (max-width:800px)": { padding: "1rem" },
                            }}
                        >
                            <Outlet />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <ApplySection openModal={openModal} />
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default CollegePage;
