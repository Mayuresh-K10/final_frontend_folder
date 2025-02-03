import React from 'react';
import Typography from '@mui/material/Typography';
import { Box, Link, Avatar, Button, Stack, Rating } from '@mui/material';

export default function FoundingCollege(props) {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: "white",
                    marginY: "0.5rem",
                    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.15);',
                    borderRadius: '12px',
                }}>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: '900px',
                    maxWidth: "1080px",
                    '@media (max-width: 770px)': {
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: "center",
                        padding: '10px',
                        gap: '10px',
                        height: "auto",
                        width: 'auto',
                        paddingBottom: '20px'
                    },
                }}>
                    <Box sx={{
                        fontFamily: "Poppins",
                        fontSize: "1rem",
                        fontWeight: "700",
                        marginLeft: "1rem",
                        '@media (max-width: 760px)': {
                            marginLeft: "0rem",
                        }
                    }}>
                        {props.id}
                    </Box>
                    <Box sx={{
                        borderRadius: "50%",
                        margin: "1rem",
                        borderColor: "#7B90FF",
                        borderStyle: "solid",
                        borderWidth: "1.5px"

                    }}>
                        <Avatar sx={{
                            width: "120px",
                            height: "120px",
                            padding: "0.8rem"
                        }}
                            src={props.img}
                        />
                    </Box>
                    <Box sx={{
                        display: "flex",
                        width: '350px',
                        flexDirection: "column",
                        justifyContent: "center",
                    }}>
                        <Typography sx={{
                            textAlign: "left",
                            fontSize: "1rem",
                            fontFamily: "Poppins",
                            fontWeight: "700",
                            color: "#210366",
                            '@media (max-width: 770px)': {
                                textAlign: 'center'
                            }
                        }}>
                            {props.heading}
                        </Typography>
                        <Typography sx={{
                            textAlign: "left",
                            fontSize: "0.6rem",
                            fontFamily: "Poppins",
                            fontWeight: "500",
                            color: "#210366",
                            '@media (max-width: 770px)': {
                                textAlign: 'center'
                            }
                        }}>
                            {props.subheading}
                        </Typography>
                        <Box sx={{
                            display: "flex",
                            width: '100%',
                            flexDirection: "row",
                            '@media (max-width: 760px)': {
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: "center",
                            }
                        }}>
                            <Button variant="text" sx={{
                                backgroundColor: "#F6F6F6",
                                color: "#210366",
                                textTransform: "capitalize",
                                fontSize: "0.6rem",
                                fontFamily: "Poppins",
                                fontWeight: "700",
                                borderRadius: "0.5rem"

                            }}>
                                {props.btn1}
                            </Button>
                            <Button variant="text" sx={{
                                backgroundColor: "#F6F6F6",
                                color: "#210366",
                                textTransform: "capitalize",
                                fontSize: "0.6rem",
                                fontFamily: "Poppins",
                                fontWeight: "700",
                                marginLeft: "0.5rem",
                                borderRadius: "0.5rem"

                            }}>
                                {props.btn2}
                            </Button>
                            <Button variant="contained" sx={{
                                backgroundColor: "#7B90FF",
                                color: "white",
                                textTransform: "capitalize",
                                fontSize: "0.6rem",
                                fontFamily: "Poppins",
                                fontWeight: "400",
                                marginLeft: "0.5rem",
                                borderRadius: "0.5rem"

                            }}>
                                {props.btn3}
                            </Button>

                        </Box>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "row",
                            marginY: "0.3rem",
                            justifyContent: "center",
                            '@media (max-width: 760px)': {
                                flexDirection: 'column',
                                justifyContent: "center",
                                alignItems: "center",
                                gap: "10px"
                            }
                        }}>

                            <Typography sx={{
                                fontSize: "0.6rem",
                                fontFamily: "Poppins",
                                fontWeight: "700",
                                color: "#210366"
                            }}>
                                {props.body1}
                            </Typography>
                            <Typography sx={{
                                fontSize: "0.6rem",
                                fontFamily: "Poppins",
                                fontWeight: "600",
                                color: "#210366",
                                marginLeft: "0.5rem"
                            }}>
                                {props.body2}
                            </Typography>
                        </Box>

                    </Box>
                    <Typography
                        sx={{
                            fontFamily: "Poppins",
                            fontWeight: "500",
                            fontSize: "1rem",
                            color: "#210366",
                            marginLeft: "0.3rem",
                            paddingTop: "0.2rem",
                        }}
                    >
                        {props.rating}
                    </Typography>
                    <Rating
                        name="read-only"
                        value={props.rating}
                        sx={{ color: "#7B90FF" }}
                        precision={0.1}
                        readOnly
                    />
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        marginRight: "2rem",
                        alignItems: "flex-end",
                        '@media (max-width: 770px)': {
                            alignItems: "center",
                            marginRight: "0rem",

                        }
                    }}>
                        <Button variant="contained" sx={{
                            backgroundColor: "#FF7900",
                            color: "white",
                            textTransform: "capitalize",
                            fontSize: "0.8rem",
                            fontFamily: "Poppins",
                            fontWeight: "500",
                            marginLeft: "0.5rem",
                            borderRadius: "0.5rem",
                            paddingX: "2rem",
                            width: "155px",
                            '&:hover': {
                                backgroundColor: '#210366',
                            }
                        }}>
                            {props.brochure}
                        </Button>
                        <Button variant="contained" sx={{
                            backgroundColor: "#FF7900",
                            color: "white",
                            textTransform: "capitalize",
                            fontSize: "0.8rem",
                            fontFamily: "Poppins",
                            fontWeight: "500",
                            marginLeft: "0.5rem",
                            marginTop: "0.6rem",
                            borderRadius: "0.5rem",
                            paddingX: "2rem",
                            width: "155px",
                            '&:hover': {
                                backgroundColor: '#210366',
                            }
                        }}>
                            {props.enquire}
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}