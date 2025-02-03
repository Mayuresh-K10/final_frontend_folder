import { Box, Typography } from "@mui/material";
import React from "react";
const CountryCard = (props) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "0.9rem",
                width: "100%",
                maxWidth: "15rem", // Adjust card width as needed
                border: "2px solid lightgray",
                borderRadius: "12px",
                gap: "10px",
            }}
        >
            <Box>
                <img
                    src={props.countryImage}
                    alt={props.countryName}
                    style={{
                        objectFit: "cover",
                        width: "6rem",
                        height: "3.7rem",
                        border: "2px solid black",
                        borderRadius: "10px",
                    }}
                />
            </Box>
            <Typography
                sx={{
                    fontWeight: 600,
                    fontSize: 16,
                    textAlign: "center",
                    textTransform: "uppercase",
                    color: "#3F51B5",
                    maxWidth: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                }}
            >
                {props.countryName}
            </Typography>
        </Box>
    );
};

export default CountryCard;
