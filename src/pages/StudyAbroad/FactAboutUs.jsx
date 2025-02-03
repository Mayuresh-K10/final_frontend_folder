import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const FactAboutUs = (props) => {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "260px",
                    height: "240px",
                    borderRadius: "0.8rem",
                    backgroundColor: "#7B90FF",
                    margin: "1rem",
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.15);',
                }}
            >
                <img
                    width="100px"
                    height="80px"

                    src={props.img} />

                <Typography sx={{
                    color: "white",
                    fontFamily: "Poppins",
                    fontWeight: "700",
                    fontSize: "1rem",
                    marginTop: "0.7rem"
                }}>
                    {props.title}
                </Typography>
                <Typography sx={{
                    color: "white",
                    fontFamily: "Poppins",
                    fontWeight: "500",
                    fontSize: "0.8rem",
                    marginTop: "0.2rem"
                }}>
                    {props.content}
                </Typography>
            </Box>
        </>
    )
}

export default FactAboutUs;
