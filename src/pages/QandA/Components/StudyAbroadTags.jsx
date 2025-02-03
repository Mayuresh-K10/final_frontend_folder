import { useLocation, useNavigate } from "react-router-dom";

import React, { useState } from "react";
import { Box } from "@mui/material";
import MyButton from "./MyButton";
import Typography from "@mui/material/Typography";

const StudyAbroadTags = () => {
    const buttons = [
        {
            label: "NEW ZEALAND",
            link: "/study-abroad/new-zealand",
        },
        {
            label: "UK",
            link: "/study-abroad/uk",
        },
        {
            label: "CANADA",
            link: "/study-abroad/canada",
        },
        {
            label: "USA",
            link: "/study-abroad/usa",
        },
        {
            label: "HONGKONG",
            link: "/study-abroad/hong-kong",
        },
        {
            label: "SWEDEN",
            link: "/study-abroad/sweden",
        },
        {
            label: "FRANCE",
            link: "/study-abroad/france",
        },
        {
            label: "GERMANY",
            link: "/study-abroad/germany",
        },
        {
            label: "NETHERLANDS",
            link: "/study-abroad/netherlands",
        },
        {
            label: "ITALY",
            link: "/study-abroad/italy",
        },
        {
            label: "AUSTRALIA",
            link: "/study-abroad/australia",
        },
        {
            label: "IRELAND",
            link: "/study-abroad/ireland",
        },
        {
            label: "MALAYSIA",
            link: "/study-abroad/malaysia",
        },
        {
            label: "SINGAPORE",
            link: "/study-abroad/singapore",
        },
    ];

    const [activeButton, setActiveButton] = useState(null);

    const location = useLocation();
    const navigate = useNavigate();

    const handleButtonClick = (country) => {
        if (activeButton === country) {
            setActiveButton(null); // Deactivate if already active
        } else {
            setActiveButton(country); // Activate if not already active
            handleFilterCountry(country); // Handle filtering here
        }
    };

    const handleFilterCountry = (country) => {
        const searchParams = new URLSearchParams(location.search);
        searchParams.set("selectedCountry", country);
        navigate(`/qa/?${searchParams.toString()}`);
    };
    return (
        <Box
            sx={{
                width: "100%",
                height: "auto",
                alignItems: "center",
                "@media (max-width: 768px)": {
                    flexDirection: "column",
                    overflowX: "hidden",
                    marginX: "auto",
                },
                display: "flex",
                flexDirection: "column",
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    height: "auto",
                    padding: "0.7rem",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    borderRadius: "10px",
                    border: "1px solid lightgrey",
                }}
            >
                <Typography
                    sx={{
                        color: "#7f29cf",
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        wordWrap: "break-word",
                    }}
                >
                    Study Abroad Countries
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        marginTop: "8px",
                        height: "90%",
                        width: "100%",
                        alignItems: "flex-start",
                    }}
                >
                    {buttons.map((button, index) => (
                        <MyButton
                            key={index}
                            label={button.label}
                            link={button.link}
                            isActive={activeButton === button.label} // Set active state based on activeButton value
                            onClick={() => handleButtonClick(button.label)} // Pass the click handler
                        />
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default StudyAbroadTags;
