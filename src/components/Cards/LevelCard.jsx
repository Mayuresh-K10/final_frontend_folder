import React, { useState, useEffect } from 'react'
import { Box, Typography } from '@mui/material'
import CourseNameBtn from '../Buttons/CourseNameBtn'
import ExploreAllCoursesBtn from '../Buttons/ExploreAllCoursesBtn'

const LevelCard = ({ imagePath, levelHeading, exploreAllCourseLink, btn }) => {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        setIsHovered(false); 
    }, []);

    return (
        <Box
            sx={{
                backgroundColor: "white",
                borderRadius: "28px",
                height: "450px",
                marginRight: "1rem",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                boxSizing: "border-box",
                overflow: "hidden",
                border: isHovered ? "2px solid #EC5800" : '1px solid #ddd',
                boxShadow: isHovered ? '0 8px 16px rgba(0,0,0,0.3)' : '0 1px 1px rgba(0,0,0,0.05)',
                position: "relative",
                marginBottom: "1.25rem",
                flex: "0 0 33.333%",
                width: "30.333%",
                '@media (max-width: 768px)': {
                    flex: '0 0 calc(100% - 1rem)',
                    maxWidth: '300px',
                    marginRight: '1rem',
                    width:'100%'
                },
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Box
                component="img"
                src={imagePath}
                alt="Banner Image"
                sx={{
                    borderBottom: "1px solid lightgrey",
                    width: "100%",
                    borderRadius: '28px',
                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    transition: 'transform 0.3s',
                }}
            />
            <Typography
                sx={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    lineHeight: "1.6rem",
                    textAlign: "left",
                    color: isHovered ? '#EC5800' : "#4C516D",
                    margin: '1rem',
                }}
            >
                {levelHeading}
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    gap: "10px",
                    marginX: "1.5rem",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {btn.map((btn, index) => (
                    <CourseNameBtn key={index} courseName={btn.courseName} link={btn.link} isHovered={isHovered} />
                ))}
            </Box>
            <ExploreAllCoursesBtn exploreAllCourseLink={exploreAllCourseLink} isHovered={isHovered} />
        </Box>
    )
}

export default LevelCard;
