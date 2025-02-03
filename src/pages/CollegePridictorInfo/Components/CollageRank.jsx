import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, TableContainer, Typography } from '@mui/material';

const CollageRank = () => {


    const collegeRank = [
        {
            college: 'IIT Roorkee - Indian Institute of Technology - [IITR], Roorkee',
            ranking: 'Closing rank 2023 - 14',
            fees: '₹ 209,550 (1st Year Fees)'
        },
        {
            college: 'School of Planning and Architecture - [SPA], New Delhi',
            ranking: 'Closing rank 2023 - 1544',
            fees: '₹ 209,550 (1st Year Fees)'
        },
        {
            college: 'School of Planning and Architecture - [SPAV], Vijayawada',
            ranking: 'Closing rank 2023 - 244',
            fees: '₹ 209,550 (1st Year Fees)'
        },
        {
            college: 'Sir JJ College of Architecture - [SJJCA], Mumbai',
            ranking: 'Closing rank 2023 - 344',
            fees: '₹ 209,550 (1st Year Fees)'
        },
        {
            college: 'Jamia Millia Islamia University-[JMI], New Delhi',
            ranking: 'Closing rank 2023 - 104',
            fees: '₹ 209,550 (1st Year Fees)'
        },
        {
            college: 'School of Planning and Architecture - [SPA], Bhopal',
            ranking: 'Closing rank 2023 - 54',
            fees: '₹ 209,550 (1st Year Fees)'
        }
    ];

    return (
        <>
            <Box sx={{ width: '100%', paddingY: '3.5rem' }}>
                <Typography
                    sx={{
                        fontSize: "1.5rem",
                        color: "#160048",
                        marginY: "1rem",
                        fontWeight: 700
                    }}>
                    List of Colleges Accepting Application
                </Typography>
                <TableContainer sx={{ borderRadius: '10px', border: '1px solid #ccc', boxShadow: "none" }}>
                    <Table sx={{ minWidth: 650 }} aria-label="caption table" >
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" sx={{
                                    backgroundColor: '#7B90FF', color: 'white', fontWeight: 700, fontSize: '1rem', borderRight: "1px solid white",
                                }}>College</TableCell>
                                <TableCell align="center" sx={{ color: 'white', fontWeight: 600, fontSize: '1rem', backgroundColor: '#210366', borderRight: "1px solid white" }}>Cut off</TableCell>
                                <TableCell align="center" sx={{ color: 'white', fontWeight: 600, fontSize: '1rem', backgroundColor: '#210366' }}>Fees</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {collegeRank.map((college, index) => (
                                <TableRow key={index}
                                    sx={{
                                        backgroundColor: index % 2 === 0 ? '#EEECFE' : '#FFFFFF',
                                    }}>
                                    <TableCell align="center" sx={{ color: '#000080', fontWeight: 600, fontSize: '0.8rem', display: "flex", alignItems: "center", marginLeft: "2rem" }}>
                                        {college.college}
                                    </TableCell>
                                    <TableCell align="center" sx={{ color: '#000080', fontWeight: 600, fontSize: '0.8rem' }}>{college.ranking}</TableCell>
                                    <TableCell align="center" sx={{ color: '#000080', fontWeight: 600, fontSize: '0.8rem' }}>{college.fees}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </>
    )
}

export default CollageRank