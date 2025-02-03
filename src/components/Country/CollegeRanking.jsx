import React from "react";
import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";

const CollegeRanking = ({ CollegeRankingData }) => {
    return (
        <>
            <Box
                sx={{
                    paddingY: "3.5rem",
                    overflowX: "auto",
                }}
            >
                <Typography
                    sx={{
                        fontStyle: "bold",
                        fontWeight: "700",
                        fontSize: "30px",
                        color: "#41355D",
                    }}
                >
                    Colleges Ranking 2025
                </Typography>

                <TableContainer component={Paper} sx={{ mt: 2 }}>
                    <Table
                        sx={{ minWidth: 650 }}
                        aria-label="college ranking table"
                    >
                        <TableHead
                            sx={{
                                background:
                                    "linear-gradient(45deg, #f7edf8 30%, #fef1e8 90%)",
                            }}
                        >
                            <TableRow>
                                <TableCell align="center">College</TableCell>
                                <TableCell align="center">Ranking</TableCell>
                                <TableCell align="center">Streams</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {CollegeRankingData.map((row, index) => (
                                <TableRow key={index}>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            fontWeight: 500,
                                            fontSize: "14px",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "5px",
                                            }}
                                        >
                                            <Box>
                                                <img
                                                    src={row.img}
                                                    alt={row.college}
                                                    style={{
                                                        width: "100%",
                                                        objectFit: "contain",
                                                    }}
                                                />
                                            </Box>
                                            <Typography variant="body1">
                                                {row.college}
                                            </Typography>
                                        </Box>
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            fontWeight: 500,
                                            fontSize: "14px",
                                        }}
                                    >
                                        {row.ranking}
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{
                                            fontWeight: 500,
                                            fontSize: "14px",
                                        }}
                                    >
                                        {row.streams}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    );
};

export default CollegeRanking;
