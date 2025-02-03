import React from 'react';
import { Button, Container, Grid, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import image1 from '../Image/image4.png'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
const Notification = () => {
    const notify = [
        "Category-wise Expected Cut off of NEET 2023 available here. Check qualifying cut off, passing marks, and NEET Cut off ranks for top MBBS/ BDS colleges."
    ];
    return (
        <Container>
            <Typography sx={{
                color: '#2F1370', fontSize: '1.25rem',
                fontStyle: 'normal',
                fontWeight: 600
            }}>NEET NOTIFICATION</Typography>
            <Box
                sx={{
                    background: "#ffffff",
                    boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
                    borderRadius: "1rem",
                    padding: "1rem",
                    fontSize: "0.9rem",
                    color: "#2f1370",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1.5rem",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "auto",
                        gap: "1rem",
                        marginBottom: "2rem",
                    }}
                >
                    <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }} >

                        <Grid item xs={12} md={10} sx={{ display: 'flex', }}>
                            <Grid item xs={2} md={1} >
                                <img src={image1} alt="Trulli" width="50" height="50"></img>
                            </Grid>
                            <Grid item xs={10} md={8} sx={{ display: 'flex', alignItems: 'center', color: '#2F1370' }}>

                                <Typography sx={{
                                    color: '#2F1370', fontSize: '1.25rem',
                                    fontStyle: 'normal',
                                    fontWeight: 400
                                }}>Category-wise Expected Cut off of NEET 2023, </Typography>
                                <Button sx={{
                                    color: '#2F1370', fontSize: '1.25rem',
                                    fontStyle: 'normal',
                                    fontWeight: 400
                                }}>
                                    Check Here
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={6} md={2} sx={{ display: 'flex', gap: 2, }}>
                            <Box >
                                <AccessTimeOutlinedIcon sx={{ color: '#FF7900' }} />
                            </Box>
                            <Box>
                                <Typography>
                                    May 09, 2023
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box sx={{ display: 'flex', gap: 6, }}>
                        {
                            notify.map((Notification, index) => {
                                return <Typography sx={{
                                    display: 'flex', flexDirection: "row",
                                    fontFamily: "Poppins, sans-serif",
                                    fontStyle: "normal",
                                    fontSize: '0.875rem',
                                    fontWeight: 400,
                                }} key={index}>{Notification}</Typography>;
                            })
                        }
                    </Box>
                    <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }} >
                        <Grid item xs={6} md={10} sx={{ display: 'flex', gap: 2, }}>
                            <Typography sx={{
                                fontFamily: "Poppins, sans-serif",
                                fontStyle: "normal",
                                fontSize: '0.875rem',
                                fontWeight: 400,
                            }}>
                                NEET -2023
                            </Typography>
                            <Typography sx={{
                                fontFamily: "Poppins, sans-serif",
                                fontStyle: "normal",
                                fontSize: '0.875rem',
                                fontWeight: 400,
                            }}>
                                NEET
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={2} sx={{ display: 'flex', gap: 2, }}>
                            <Button sx={{
                                fontFamily: "Poppins, sans-serif",
                                fontStyle: "normal",
                                fontSize: '0.875rem',
                                fontWeight: 400,
                                color: '#FF7900'
                            }}>
                                Read more
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};
export default Notification;