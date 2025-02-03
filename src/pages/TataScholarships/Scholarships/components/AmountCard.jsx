import React from 'react'
import { Box, Card, CardContent, Typography, List, ListItem, Divider, } from '@mui/material'

export default function AmountCard({ heading, desc1, desc2, desc3, desc4, desc5, amount1, amount2, amount3, amount4, amount5 }) {
    return (
        <>
            <Box>

                <Box sx={{ paddingBottom: '30px' }}>
                    <Card variant="outlined" sx={{
                        width: '410px',
                        borderBottom: '1px solid #7B90FF33',
                        borderRadius: '26px',
                        boxShadow: '0px 4px 40px 0px #7B90FF26',
                        '@media (max-width:600px)':{
                            width:'70%'
                        }

                    }}>
                        <CardContent >
                            <Typography sx={{
                                fontFamily: 'Poppins',
                                fontSize: '16px',
                                fontWeight: '600',
                                letterSpacing: '0em',
                                marginLeft: '1rem',
                                marginBottom: '1rem',
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
                                    }}> {desc1}
                                    </Typography>
                                    <Typography sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: '12px',
                                        letterSpacing: '0em',
                                        textAlign: 'left',
                                        color: '#2F1370',
                                        width: '232px',
                                        height: '8px',
                                        top: '391px',
                                        left: '1311px',
                                        marginLeft: '0.3rem',
                                        '@media (max-width:600px)':{
                                            fontSize:"8px"  
                                          }

                                    }}>{amount1}</Typography>
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
                                    }}>  {desc2}  </Typography>
                                    <Typography sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: '12px',
                                        fontWeight: '400',
                                        letterSpacing: '0em',
                                        color: '#2F1370',
                                        width: '232px',
                                        height: '8px',
                                        top: '391px',
                                        left: '1311px',
                                        marginLeft: '0.3rem',
                                        '@media (max-width:600px)':{
                                            fontSize:"8px"  
                                          }
                                    }}>{amount2}</Typography>
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
                                    }}> {desc3}  </Typography>
                                    <Typography sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: '12px',
                                        fontWeight: '400',
                                        letterSpacing: '0em',
                                        textAlign: 'left',
                                        color: '#2F1370',
                                        width: '232px',
                                        height: '8px',
                                        top: '391px',
                                        left: '1311px',
                                        marginLeft: '0.3rem',
                                        '@media (max-width:600px)':{
                                            fontSize:"8px"  
                                          }
                                    }}>{amount3}</Typography>
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
                                    }}> {desc4} </Typography>
                                    <Typography sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: '12px',
                                        fontWeight: '400',
                                        letterSpacing: '0em',
                                        textAlign: 'left',
                                        color: '#2F1370',
                                        width: '232px',
                                        height: '8px',
                                        top: '391px',
                                        left: '1311px',
                                        marginLeft: '0.3rem',
                                        '@media (max-width:600px)':{
                                            fontSize:"8px"  
                                          }
                                    }}>{amount4}</Typography>
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
                                        borderWidth: '1px, 0px, 1px, 0px',
                                        borderStyle: 'solid',
                                        borderColor: '#FFFFFF',
                                        '@media (max-width:600px)':{
                                            fontSize:"12px"  
                                          }
                                    }}> {desc5} </Typography>
                                    <Typography sx={{
                                        fontFamily: 'Poppins',
                                        fontSize: '12px',
                                        fontWeight: '400',
                                        letterSpacing: '0em',
                                        color: '#2F1370',
                                        width: '232px',
                                        height: '8px',
                                        top: '391px',
                                        left: '1311px',
                                        marginLeft: '0.3rem',
                                        '@media (max-width:600px)':{
                                            fontSize:"8px"  
                                          }
                                    }}>{amount5}</Typography>
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </>
    )
}
