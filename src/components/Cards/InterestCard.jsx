import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import CourseNameBtn from '../Buttons/CourseNameBtn';
import ExploreAllCoursesBtn from '../Buttons/ExploreAllCoursesBtn';
import { Link } from 'react-router-dom';

const InterestCard = ({ logo, heading, btn, exploreAllCourseLink }) => {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <Box
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{
                backgroundColor: "white",
                borderRadius: '14px',
                height: '330px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                boxSizing: 'border-box',
                overflow: 'hidden',
                border: isHovered ? "2px solid #EC5800" : '1px solid #ddd',
                boxShadow: isHovered ? '0 8px 16px rgba(0,0,0,0.3)' : '0 1px 1px rgba(0,0,0,0.05)',
                position: 'relative',
                marginBottom: '1.25rem',
                flex: '1 1 33.333%',
                width: '33.333%',
                transition: 'box-shadow 0.3s, transform 0.3s',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                '@media (max-width: 800px)': {
                    flex: '1 1 100%',
                    width: '100%',
                    flexDirection: "column",
                    margin: "1rem",
                },
                '@media (min-width: 1200px)': {
                    flex: '1 1 calc(33.333% - 1rem)',
                    maxWidth: 'calc(33.333% - 6rem)',
                    marginRight: '1rem',
                },
            }}
        >
            <Box sx={{ padding: '1rem', display: 'flex' }}>
                <Box
                    component="img"
                    src={logo}
                    alt="Logo"
                    sx={{
                        width: '120px',
                        height: '120px',
                    }}
                />
            </Box>
            <Box
                sx={{
                    marginTop: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '1.3rem',
                        fontWeight: 700,
                        lineHeight: '1.6rem',
                        textAlign: 'left',
                        color: isHovered ? '#EC5800' : '#4C516D',
                        marginLeft: '0.6rem',
                        transition: 'color 0.3s',
                    }}
                >
                    {heading}
                </Typography>
            </Box>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                padding={'0.6rem'}
                sx={{ marginTop: '1rem', flexWrap: 'wrap', gap: '5px' }}
            >
                {btn.map((btn, index) => (
                    <CourseNameBtn key={index} courseName={btn.courseName} link={btn.link} isHovered={isHovered} />
                ))}
            </Stack>
            <Box sx={{ borderTop: '1px solid #7B90FF1A', margin: '0.5rem 2rem 0' }}></Box>
            <ExploreAllCoursesBtn
                exploreAllCourseLink={exploreAllCourseLink}
                isHovered={isHovered}
                sx={{
                    display: 'block',
                    color: isHovered ? '#FF5733' : '#41355D',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    fontStyle: 'bold',
                    lineHeight: '1.2rem',
                    letterSpacing: '0.02em',
                    textAlign: 'center',
                    textDecoration: 'underline',
                    textTransform: 'none',
                    margin: 'auto auto',
                    transition: 'color 0.3s',
                }}
            />
        </Box>
    );
};

export default InterestCard;
