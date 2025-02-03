import React from "react";
import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    Divider,
} from "@mui/material";
// import "@fontsource/poppins";
import myImage2 from "./images/myImage2.png";
import cardimg from "./images/cardimg.png";
import { Link } from "react-router-dom";
const Latest = ({ partsData }) => {
    return (
        <>
            <Box>
                <Card
                    sx={{
                        marginTop: 4.5,
                        background: "white",
                        boxShadow: "0px 0px 40px rgba(123, 144, 255, 0.15)",
                        borderRadius: 8,
                    }}
                >
                    <CardContent>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <Box
                                sx={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Box>
                                    <img
                                        style={{
                                            width: 69,
                                            height: 56,
                                            background:
                                                "linear-gradient(0deg, white 0%, white 100%)",
                                            borderRadius: 5,
                                        }}
                                        src={myImage2}
                                        alt="myImage2"
                                    />
                                </Box>
                                <Box>
                                    <Typography
                                        sx={{
                                            color: "#210366",
                                            fontSize: 20,
                                            fontFamily: "Poppins",
                                            fontWeight: "700",
                                            textTransform: "uppercase",
                                            wordWrap: "break-word",
                                        }}
                                    >
                                        Latest Application Forms 2025
                                    </Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Link to="/course-finder">
                                    <Button
                                        sx={{
                                            width: 172,
                                            height: 44,
                                            background: "#FF7900",
                                            borderRadius: 12,
                                            alignItems: "center",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                textTransform: "none",
                                                textAlign: "center",
                                                color: "white",
                                                fontSize: 20,
                                                fontFamily: "Poppins",
                                                fontWeight: "600",
                                                wordWrap: "break-word",
                                            }}
                                        >
                                            Sponsored
                                        </Typography>
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                        <Divider sx={{ marginTop: 2 }} />
                        <Box
                            sx={{
                                marginLeft: "-27px",
                                display: "flex",
                                justifyContent: "space-between",
                                overflowY: "scroll",
                            }}
                        >
                            {partsData.map((part, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 331,
                                            marginTop: index === 2 ? 4 : 2,
                                            display: "inline-flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Box>
                                            <img
                                                src={part.image}
                                                alt={part.heading}
                                            />
                                        </Box>
                                        <Box>
                                            <Typography
                                                sx={{
                                                    margin: 1,
                                                    color: "#7B90FF",
                                                    fontSize: 14,
                                                    fontFamily: "Poppins",
                                                    fontWeight: "500",
                                                    wordWrap: "break-word",
                                                }}
                                            >
                                                {part.heading}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box sx={{ marginRight: 2 }}>
                                        <Box>
                                            <Typography
                                                sx={{
                                                    marginLeft: 4,
                                                    marginTop: 1,
                                                    color: "#210366",
                                                    fontSize: 14,
                                                    fontFamily: "Poppins",
                                                    fontWeight: "500",
                                                    wordWrap: "break-word",
                                                }}
                                            >
                                                {part.Description}
                                            </Typography>
                                        </Box>
                                        <Box>
                                            <Typography
                                                sx={{
                                                    marginLeft: 4,
                                                    marginTop: 0.8,
                                                    color: "#FF7900",
                                                    fontSize: 14,
                                                    fontFamily: "Poppins",
                                                    fontWeight: "500",
                                                    wordWrap: "break-word",
                                                }}
                                            >
                                                {part.SubDes}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    {index === 2 ? (
                                        <>
                                            <Box sx={{ display: "flex" }}>
                                                <Box
                                                    sx={{
                                                        marginBottom: 0,
                                                        marginTop: 2.8,
                                                        marginLeft: 2,
                                                        marginRight: 4,
                                                    }}
                                                >
                                                    <Link to={"/login"}>
                                                        <Button
                                                            sx={{
                                                                width: 149,
                                                                height: 44,
                                                                background:
                                                                    "#FF7900",
                                                                borderRadius: 12,
                                                            }}
                                                        >
                                                            <Typography
                                                                style={{
                                                                    textTransform:
                                                                        "none",
                                                                    textAlign:
                                                                        "center",
                                                                    color: "white",
                                                                    fontSize: 16,
                                                                    fontFamily:
                                                                        "Poppins",
                                                                    fontWeight:
                                                                        "600",
                                                                    wordWrap:
                                                                        "break-word",
                                                                }}
                                                            >
                                                                Avail Now
                                                            </Typography>
                                                        </Button>
                                                    </Link>
                                                </Box>
                                                <Box>
                                                    <img
                                                        src={cardimg}
                                                        alt="cardimg"
                                                    />
                                                </Box>
                                            </Box>
                                        </>
                                    ) : (
                                        <>
                                            <Box
                                                sx={{
                                                    marginTop: 2.5,
                                                    marginLeft: 7,
                                                    marginRight: 7,
                                                }}
                                            >
                                                <Link to={"/login"}>
                                                    <Button
                                                        sx={{
                                                            width: 149,
                                                            height: 44,
                                                            background:
                                                                "#FF7900",
                                                            borderRadius: 12,
                                                        }}
                                                    >
                                                        <Typography
                                                            sx={{
                                                                textTransform:
                                                                    "none",
                                                                textAlign:
                                                                    "center",
                                                                color: "white",
                                                                fontSize: 16,
                                                                fontFamily:
                                                                    "Poppins",
                                                                fontWeight:
                                                                    "600",
                                                                wordWrap:
                                                                    "break-word",
                                                            }}
                                                        >
                                                            Apply Now
                                                        </Typography>
                                                    </Button>
                                                </Link>
                                            </Box>
                                        </>
                                    )}
                                </Box>
                            ))}
                        </Box>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
};

export default Latest;
