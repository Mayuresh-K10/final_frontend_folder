import React, { useState, useCallback } from "react";
import { Box, Container, Stack } from "@mui/material";
import TopCollegeHeading from "../../components/Headings/PageHeading";
import LatestNotification from "./LatestNotification";
import FoundCollegeHeading from "../../components/Headings/FoundCollegeHeading";
import Colleges from "./Colleges";
import DropDown from "./DropDown";
import { Helmet } from "react-helmet";

const TopUniversities = React.memo(({ openModal }) => {
    const TopCollage = `${process.env.PUBLIC_URL}/Assets/Top-colleges/Top-collages.svg`;
    const [selectedCity, setSelectedCity] = useState("");
    const [dataFromChild, setDataFromChild] = useState("");
    const [selectedFilters, setSelectedFilters] = useState({});

    const currentYear = new Date().getFullYear();

    const handleDataFromChild = useCallback((data) => {
        setDataFromChild(data);
    }, []);

    const handleData = useCallback((city) => {
        setSelectedCity(city);
    }, []);

    const handleFilterChange = useCallback((filters) => {
        setSelectedFilters(filters);
    }, []);

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta
                    name="description"
                    content="Explore top universities around the world, their rankings, programs, and campus life."
                />
                <meta
                    name="google-adsense-account"
                    content="ca-pub-3919517798801147"
                ></meta>
            </Helmet>
            <Container maxWidth="xl">
                <Box
                    alignItems={{ xs: "center", sm: "center" }}
                    sx={{
                        display: "flex",
                        flexDirection: " column",
                        justifyContent: "center",
                        marginTop: "2rem",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row ",
                            alignItems: "center",
                            "@media (max-width: 770px)": {
                                flexDirection: "column",
                                justifyContent: "center",
                                paddingY: "2rem",
                            },
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                "@media (max-width: 770px)": {
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignContent: "center",
                                    paddingY: "2rem",
                                },
                            }}
                        >
                            <TopCollegeHeading
                                text={`List of Top Colleges in Indian Based on ${currentYear} Ranking`}
                            />
                            <LatestNotification />
                        </Box>
                        <img
                            src={TopCollage}
                            alt="@BharatTech"
                            style={{ width: "40vw", height: "auto" }}
                        />
                    </Box>
                    <FoundCollegeHeading
                        onData={handleData}
                        collegecount={dataFromChild}
                    />
                    <Stack
                        direction={{
                            xs: "column",
                            sm: "column",
                            md: "column",
                            lg: "row",
                        }}
                        justifyContent="space-evenly"
                        alignItems={{
                            xs: "center",
                            sm: "center",
                            md: "flex-start",
                            lg: "flex-start",
                        }}
                        spacing={{ xs: "0", sm: "0", md: "1", lg: "1" }}
                        sx={{
                            marginY: "1.5rem",
                        }}
                    >
                        <DropDown onFilterChange={handleFilterChange} />
                        <Colleges
                            state={selectedCity}
                            selectedFilters={selectedFilters}
                            onCount={handleDataFromChild}
                            openModal={openModal}
                        />
                    </Stack>
                </Box>
            </Container>
        </>
    );
});

export { TopUniversities };
