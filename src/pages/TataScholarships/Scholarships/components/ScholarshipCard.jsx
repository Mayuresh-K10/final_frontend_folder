import React from 'react'

import { Box,  Card, CardContent, Typography, List, ListItem, Divider, } from '@mui/material'

export default function ScholarshipCard({ heading, heading1, heading2, heading3, heading4, heading5 }) {
    return (
        <>

            <Box sx={{ paddingBottom: '30px', }}>
                <Card variant="outlined" sx={{
                    width: '410px',
                    borderBottom: '1px solid #7B90FF33',
                    borderRadius: '26px',
                    boxShadow: '0px 4px 40px 0px #7B90FF26',
                    '@media (max-width:600px)':{
                        width:"fit-content",  
                    }
                }}>
                    <CardContent >
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '16px',
                            fontWeight: '600',
                            letterSpacing: '0em',
                            marginBottom: '1rem',
                            marginLeft: '1rem',
                            color: '#41355D',
                            '@media (max-width:600px)':{
                                fontSize:"12px"  
                              }
                        }}> {heading}</Typography>
                        <Divider />
                        <List sx={{
                            borderBottom: '2px solid #7B90FF33'
                        }}>
                            <ListItem sx={{
                                display: 'list-item',
                            }}>
                                <Typography sx={{
                                    color: '#2F1370', fontFamily: 'Poppins',
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    lineHeight: '20px',
                                    letterSpacing: '0em',
                                    borderWidth: '1px, 0px, 1px, 0px',
                                    borderStyle: 'solid',
                                    borderColor: '#FFFFFF',
                                    '@media (max-width:600px)':{
                                        fontSize:"12px"  
                                      }
                                }}>  {heading1}
                                </Typography>
                            </ListItem>
                        </List>

                        <List sx={{
                            borderBottom: '1px solid #7B90FF33'
                        }}>
                            <ListItem sx={{
                                display: 'list-item',
                            }}>
                                <Typography sx={{
                                    color: '#2F1370', fontFamily: 'Poppins',
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    lineHeight: '20px',
                                    letterSpacing: '0em',
                                    borderWidth: '1px, 0px, 1px, 0px',
                                    borderStyle: 'solid',
                                    borderColor: '#FFFFFF',
                                    '@media (max-width:600px)':{
                                        fontSize:"12px"  
                                      }
                                }}>  {heading2} </Typography>

                            </ListItem>
                        </List>



                        <List sx={{
                            borderBottom: '1px solid #7B90FF33'
                        }}>
                            <ListItem sx={{
                                display: 'list-item',
                                borderWidth: '1px, 0px, 1px, 0px',
                                borderColor: '#FFFFFF',
                            }}>
                                <Typography sx={{
                                    color: '#2F1370', fontFamily: 'Poppins',
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    lineHeight: '20px',
                                    letterSpacing: '0em',
                                    borderWidth: '1px, 0px, 1px, 0px',
                                    borderStyle: 'solid',
                                    borderColor: '#FFFFFF',
                                    '@media (max-width:600px)':{
                                        fontSize:"12px"  
                                      }
                                }}> {heading3}  </Typography>

                            </ListItem>
                        </List>
                        <List sx={{
                            borderBottom: '1px solid #7B90FF33'
                        }}>
                            <ListItem sx={{
                                display: 'list-item',
                                borderWidth: '1px, 0px, 1px, 0px',
                                borderColor: '#FFFFFF',
                            }}>
                                <Typography sx={{
                                    color: '#2F1370', fontFamily: 'Poppins',
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    lineHeight: '20px',
                                    letterSpacing: '0em',
                                    borderWidth: '1px, 0px, 1px, 0px',
                                    borderStyle: 'solid',
                                    borderColor: '#FFFFFF',
                                    '@media (max-width:600px)':{
                                        fontSize:"12px"  
                                      }
                                }}>{heading4} </Typography>

                            </ListItem>
                        </List>
                        <List>
                            <ListItem sx={{
                                display: 'list-item',
                                borderWidth: '1px, 0px, 1px, 0px',
                                borderColor: '#FFFFFF',
                            }}>
                                <Typography sx={{
                                    color: '#2F1370', fontFamily: 'Poppins',
                                    fontSize: '16px',
                                    fontWeight: '400',
                                    lineHeight: '20px',
                                    letterSpacing: '0em',
                                    textAlign: 'left',
                                    borderWidth: '1px, 0px, 1px, 0px',
                                    borderStyle: 'solid',
                                    borderColor: '#FFFFFF',
                                    '@media (max-width:600px)':{
                                        fontSize:"12px"  
                                      }
                                }}> {heading5} </Typography>

                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </Box>

        </>
    )
}
