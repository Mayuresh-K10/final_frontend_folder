import React, { useState } from "react";
import FilterButton from "../../components/Buttons/FilterButton";
import { Box, Typography } from "@mui/material";
import CollegePridictImg from "../../Assets/Collage_pridictor.svg";
import { useLocation } from "react-router-dom";

const SelectButton = ({ TopSectiondata }) => {
    const { courseHeading, courseLabels, stateHeading, stateLabels } =
        TopSectiondata;

    const [activeCourse, setActiveCourse] = useState(null);
    const [activeState, setActiveState] = useState(null);
    const location = useLocation();

    const handleFilterCountry = (country) => {
        const searchParams = new URLSearchParams(location.search);
        searchParams.set("selectedCountry", country);
    };

    const handleCourseSelect = (course) => {
        setActiveCourse(course === activeCourse ? null : course);

        handleFilterCountry(course);
    };

    const handleStateSelect = (state) => {
        setActiveState(state === activeState ? null : state);

        handleFilterCountry(state);
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "1rem",
                justifyContent: "center",
                marginY: "2rem",
                "@media (max-width: 770px)": {
                    flexDirection: "column",
                },
            }}
        >
            <Box>
                <Typography
                    variant="h1"
                    sx={{
                        marginY: "1.5rem",
                        fontSize: "2rem",
                        color: "#160048",
                        fontWeight: 700,
                    }}
                >
                    College Predictor 2025 for top Universities and Exams
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "center",
                        "@media (max-width:800px)": {
                            flexDirection: "column",
                            gap: "0.5rem",
                        },
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "22px",
                            lineHeight: "2rem",
                            color: "#2F1370",
                            fontWeight: "500",
                            marginBottom: "1rem",
                            "@media (max-width:800px)": {
                                marginTop: "2vh",
                                marginBottom: "0",
                            },
                        }}
                    >
                        {courseHeading}
                    </Typography>

                    <Box
                        sx={{
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "16px",
                            lineHeight: "18px",
                            display: "flex",
                            alignItems: "center",
                            letterSpacing: "0.03em",
                            color: "#7B90FF",
                            justifyContent: "center",
                            marginBottom: "1rem",
                            gap: "0.5rem",
                            "@media (max-width:800px)": {
                                maxWidth: "100%",
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "1%",
                                paddingBottom: "2%",
                            },
                        }}
                    >
                        {courseLabels.map((label, index) => (
                            <FilterButton
                                key={index}
                                style={{ marginTop: "0.5vh" }}
                                isActive={label === activeCourse}
                                onClick={() => handleCourseSelect(label)}
                            >
                                {label}
                            </FilterButton>
                        ))}
                    </Box>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "center",
                        "@media (max-width:800px)": {
                            flexDirection: "column",
                            gap: "0",
                        },
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "22px",
                            lineHeight: "2rem",
                            color: "#2F1370",
                            fontWeight: "500",
                            marginBottom: "1rem",
                            "@media (max-width:800px)": {
                                marginTop: "2vh",
                                marginBottom: "0",
                            },
                        }}
                    >
                        {stateHeading}
                    </Typography>

                    <Box
                        sx={{
                            fontStyle: "normal",
                            fontWeight: "500",
                            fontSize: "16px",
                            lineHeight: "18px",
                            display: "flex",
                            alignItems: "center",
                            letterSpacing: "0.03em",
                            color: "#7B90FF",
                            justifyContent: "center",
                            marginBottom: "1rem",
                            gap: "0.5rem",
                            "@media (max-width:800px)": {
                                maxWidth: "100%",
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "1%",
                                paddingBottom: "2%",
                            },
                        }}
                    >
                        {stateLabels.map((label, index) => (
                            <FilterButton
                                key={index}
                                style={{ marginBottom: "0.5rem" }}
                                isActive={label === activeState}
                                onClick={() => handleStateSelect(label)}
                            >
                                {label}
                            </FilterButton>
                        ))}
                    </Box>
                </Box>
            </Box>
            <Box>
                <img
                    src={CollegePridictImg}
                    alt="@BharatTech"
                    style={{ width: "300px", height: "auto" }}
                />
            </Box>
        </Box>
    );
};

export default SelectButton;
