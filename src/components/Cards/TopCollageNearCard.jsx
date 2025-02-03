import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const TopCollageNearCard = ({ img, name, fees }) => {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    width: "300px",
                    height: "100px",
                    
                    overflow: "hidden",
                    borderRadius: "20px",
                    border: "2px solid lightgray",
                    marginX: "auto",
                    transition: "All 0.5s",
                    "&:hover": {
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.30);",
                    },
                }}>
                <img src={img} alt="@BharatTech"
                    style={{
                        width: "50px",
                        height: 'auto',
                        borderRadius: "50%",
                    }} />

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alginItems: "flex-start",
                        justifyContent: "center",
                        gap: "10px"
                    }}>
                    <Typography>
                        {name}
                    </Typography>
                    <Typography>
                        {fees} Per Year
                    </Typography>
                    <Typography>
                        View Details
                    </Typography>
                </Box>
            </Box>
        </>
    )
}

export default TopCollageNearCard