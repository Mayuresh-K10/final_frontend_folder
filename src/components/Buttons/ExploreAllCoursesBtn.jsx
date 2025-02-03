import { Button } from '@mui/material'
import React from 'react'
import ArrowCircleRightRoundedIcon from '@mui/icons-material/ArrowCircleRightRounded';

const ExploreAllCoursesBtn = ({ exploreAllCourseLink , isHovered}) => {
    return (
        
            <Button
               startIcon={<ArrowCircleRightRoundedIcon  sx={{ width: "40px" , height:"40px", color:isHovered ? "#EC5800":"#7f29cf" }} />}
                sx={{
                    display: "block",
                    
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    fontStyle: "bold",
                    lineHeight: "1.2rem",
                    letterSpacing: "0.02em",
                    textAlign: "center",
                    textDecoration: "underline",
                    textTransform: "none",
                    margin: "auto auto",
                    '&:hover': {
                        backgroundColor: 'transparent', // Prevent background color change on hover
                    },
                }}
                href={exploreAllCourseLink}
            >
            </Button>
      
    )
}

export default ExploreAllCoursesBtn
