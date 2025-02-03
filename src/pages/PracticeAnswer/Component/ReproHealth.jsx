import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
function ReproHealth() {
    return (
        <Container>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                padding: "0px ",
                paddingTop: "1rem !important",
            }}>
                <Box sx={{
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
                    <Box>
                        <Typography sx={{
                            color: '#2F1370', fontSize: '1.25rem',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontFamily: "Poppins, sans-serif",
                        }} >
                            Concepts Used:
                        </Typography>
                        <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center' }} >
                            <Grid item xs={6} md={11} >
                                <Typography sx={{
                                    fontSize: '1.25rem',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    color: '#2F1370',
                                    fontFamily: "Poppins, sans-serif",
                                    paddingTop: '1rem'
                                }} >
                                    Reproductive Health
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={1} sx={{ color: '#FF7900' }}>

                                <ArrowDropDownCircleIcon />
                            </Grid>
                        </Grid>
                        <Typography sx={{ paddingTop: '1rem' }}>• The biological process by which a new individual or an
                            offspring is produced from a parent or parents that are biologically similar
                            or identical is known as reproduction. It is the elemental trait of all known
                            forms of life. In fact, each and every individual have life because of reproduction.</Typography>
                        <Typography sx={{ paddingTop: '1rem' }}>• The state or position of male and female reproductive systems
                            during their lifetime refers to their reproductive health. The system comprises organs and glands,
                            including the pituitary gland in our brain, which are responsible for the production and release of hormones.</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', paddingTop: '1rem' }}>
                            <Button sx={{
                                fontSize: '0.875rem',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                color: '#FF7900',
                                fontFamily: "Poppins, sans-serif",
                            }}>
                                Read more
                            </Button>
                            <Typography sx={{
                                fontSize: '0.875rem',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                color: '#2F1370',
                                fontFamily: "Poppins, sans-serif",
                            }}>
                                Reproductive Health
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}
export default ReproHealth;
