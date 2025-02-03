import { Avatar, Box, Container, Grid, Stack, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";
import Placementdata from "./Placementdata";
import image8 from "./image8.png";
import React from "react";

const Placement = () => {
    return (
        <>
            <Stack display={"flex"} flexDirection={"column"}>
                <Box
                    sx={{
                        width: "70%",
                        borderRadius: 4,
                        backgroundColor: "#EEECFE",
                        marginTop: "2",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                marginTop: "36px",
                            }}
                        >
                            <Avatar
                                sx={{
                                    bgcolor: yellow[600],
                                    width: "82px",
                                    height: "70px",
                                }}
                            >
                                RK
                            </Avatar>
                        </Box>
                        <Box
                            sx={{
                                marginTop: "40px",
                                marginLeft: "5px",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "Poppins",
                                    fontSize: "20px",
                                    fontWeight: 700,
                                    lineHeight: "18px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                    color: "#7B90FF",
                                }}
                            >
                                Mayank Badhwar
                            </Typography>
                            <Typography
                                sx={{
                                    fontFamily: "Inter",
                                    fontSize: "14px",
                                    fontWeight: 500,

                                    letterSpacing: "0em",
                                    textAlign: "left",
                                }}
                            >
                                Associate Content Manager | Updated on - May 25,
                                2023
                            </Typography>
                        </Box>
                    </Box>
                    <Stack
                        sx={{
                            backgroundColor: "#EEECFE",
                        }}
                    >
                        <Box
                            sx={{
                                marginTop: "38px",
                                fontFamily: "Poppins",
                                fontSize: "24px",
                                fontWeight: 700,
                                lineHeight: "21px",
                                letterSpacing: "0em",
                                textAlign: "left",

                                color: "#7B90FF",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "Poppins",
                                    fontSize: "24px",
                                    fontWeight: 700,
                                    lineHeight: "21px",
                                    letterSpacing: "0em",
                                    textAlign: "left",
                                    color: "#7B90FF",
                                }}
                            >
                                What's New in IIM Bangalore?
                            </Typography>

                            <Typography
                                sx={{
                                    fontSize: "16px",
                                    fontWeight: 500,
                                    lineHeight: "23px",
                                    letterSpacing: "0em",
                                    color: "#210366",
                                    marginTop: "1.5em",
                                    wordWrap: "break-word",
                                    padding: 2,
                                }}
                            >
                                IIM Bangalore Placements concluded with 100%
                                placements. IIM Bangalore average package stood
                                at INR 35.31 LPA. For EPGP batch of 2023, the
                                average package offered was INR 33.07 LPA.
                                <ul
                                    style={{
                                        marginTop: "0px",
                                        marginBottom: "0px",
                                        wordWrap: "break-word",
                                    }}
                                >
                                    <li>
                                        {" "}
                                        16 May, 2023 : Uncovering MBA’s CTC
                                        components : Know how much one makes
                                        after MBA
                                    </li>

                                    <li>
                                        {" "}
                                        06 May, 2023 : Top 50 MBA Colleges in
                                        India Based on 2022 Rankings: Check Here
                                    </li>
                                    <li>
                                        {" "}
                                        03 May, 2023 : Written Ability Test
                                        (WAT) for IIMs and Other Top MBA
                                        Clileges - Tips & WAT Topics
                                    </li>
                                    <li>
                                        {" "}
                                        27 April, 2023 : MBA in Finance &
                                        Investment Banking: In-Depth Guide For
                                        All Your Questions
                                    </li>
                                    <li>
                                        10 April, 2023 : A Comprehensive Guide
                                        to Product Management: Roles and
                                        Responsibilities
                                    </li>
                                </ul>
                                IIM Bangalore placements 2023 concluded with
                                100% placements. For the PGP + PGPBA batch of
                                2021-23, a total of 606 offers were made by 164
                                recruiters to 512 participating students among
                                which 14 were International offers. During the
                                2023 placements 82 lateral placements offers
                                were accepted out of 94. During the final week
                                of the placement drive, 221 offers were made. A
                                total of 291 Pre-placement offers were made
                                among which 209 were accepted. IIM Bangalore
                                average package stood at INR 35.31 LPA whereas
                                IIM Bangalore median package stood at INR 33 LPA
                                for the batch 2023. The maximum percentage of
                                students were placed in the Consulting sector
                                (40%) followed by IT/Product Management (14%).
                                IIM Bangalore EPGP placements 2023 concluded
                                with 100% placements. IIM Bangalore EPGP average
                                package stood at INR 33.07 LPA whereas IIM
                                Bangalore EPGP median package stood at INR 32.21
                                LPA. The maximum number of offers were made from
                                the IT Industry (27) followed by Consulting
                                Industry (17). Accenture recruited the maximum
                                number of students (18) followed by Nucleus
                                Software (4). IIM Bangalore has also released
                                the Summer Internship report for the PGP + PGPBA
                                batch of 2022-24. 539 offers were made to 529
                                participating students. Accenture Capability
                                Network made the maximum number of Internships
                                (30) followed by Amazon (23) and Mckinsey & Co.
                                (22).
                                <Typography
                                    sx={{
                                        color: "#FF7900",
                                    }}
                                >
                                    Check IIM Bangalore Courses & Fees
                                </Typography>
                            </Typography>
                        </Box>
                    </Stack>
                </Box>

                <Box
                    sx={{
                        marginTop: 3,
                        width: " 70%",
                        padding: "28px 0px 28px 0px",
                        borderRadius: "28px",
                        boxShadow: "0px 0px 40px 0px #7B90FF26",
                        background: "#EEECFE",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Poppins",
                            fontSize: " 24px",
                            fontWeight: 700,
                            letterSpacing: " 0em",
                            textAlign: "left",
                            color: "#7B90FF",
                        }}
                    >
                        Table of Content
                    </Typography>

                    <Box
                        sx={{
                            gap: "19px",
                        }}
                    >
                        <Stack>
                            <Typography
                                sx={{
                                    color: "#210366",
                                    fontFamily: "Poppins",
                                    fontSize: " 16px",
                                    fontWeight: 500,
                                    lineHeight: "24px",
                                    letterSpacing: " 0em",
                                    textAlign: "left",
                                    marginTop: "21px",
                                }}
                            >
                                <ol>
                                    <li>
                                        {" "}
                                        IIM Bangalore Placements 2023 Report
                                    </li>
                                    <li>IIM Bangalore Placements Analysis</li>
                                    2.1 IIM Bangalore Consulting Sector
                                    Placements
                                    <br />
                                    2.2 IIM Bangalore IT & Analytics Sector
                                    Placements
                                    <br />
                                    2.3 IIM Bangalore Finance Sector Placements
                                    <br />
                                    2.4 IIM Bangalore E-Commerce Sector
                                    Placements
                                    <br />
                                    2.5 IIM Bangalore Sales & Marketing Sector
                                    Placements
                                    <br />
                                    2.6 IIM Bangalore General Management
                                    Placements
                                    <br />
                                    2.7 IIM Bangalore Operations Sector
                                    Placements
                                    <br />
                                    <li>
                                        {" "}
                                        IIM Bangalore Placements 2023 Sector
                                        Wise
                                    </li>
                                    <li>
                                        IIM Bangalore Placements 2023 Company
                                        Wise
                                    </li>
                                    <li>
                                        IIM Bangalore Placements Year Wise
                                        Trends
                                    </li>
                                    <li>
                                        {" "}
                                        IIM Bangalore Placements 2023 Course –
                                        Wise
                                    </li>
                                    <li>
                                        {" "}
                                        IIM Bangalore EPGP Placements 2023
                                        Industry Wise
                                    </li>
                                    <li>
                                        IIM Bangalore EPGP Placements 2023
                                        Company Wise
                                    </li>
                                    <li>
                                        IIM Bangalore Summer Internship
                                        Placements 2024 Report
                                    </li>
                                    <li>
                                        IIM Bangalore Summer Internship
                                        Placements 2024 Sector Wise
                                    </li>
                                    <li>
                                        IIM Bangalore Summer Internship
                                        Placements 2024 Company Wise
                                    </li>
                                    <li>IIM Bangalore Alumni Network</li>
                                    <li>
                                        IIM Bangalore Placements FAQsTable of
                                        Content
                                    </li>
                                </ol>
                            </Typography>
                        </Stack>
                    </Box>
                </Box>

                <Box
                    sx={{
                        marginTop: "40px",
                        width: " 70%",
                        borderRadius: "28px",
                        background: "#EEECFE",
                    }}
                >
                    <Typography
                        sx={{
                            color: "#7B90FF",
                            fontFamily: "Inter",
                            fontSize: " 24px",
                            fontWeight: 700,
                            lineHeight: "21px",
                            letterSpacing: " 0em",
                            textAlign: "left",
                            padding: "10px",
                        }}
                    >
                        IIM Bangalore Placements 2023{" "}
                    </Typography>

                    <Box
                        sx={{
                            marginTop: "40px",
                            width: "70%",
                            height: "50%",
                            padding: " 1px 1px 1px 40px",
                            display: "flex",
                            gap: "147px",
                            alignItems: "flex-start",
                        }}
                    >
                        <Box
                            sx={{
                                width: "40%",
                                height: "620px",
                                display: "flex",
                            }}
                        >
                            <Stack spacing={2}>
                                <Placementdata />
                                <Placementdata />
                                <Placementdata />
                                <Placementdata />
                                <Placementdata />

                                <Box
                                    sx={{
                                        width: "70%",
                                        height: "50px",
                                        borderRadius: "28px",
                                        border: "1px",
                                        border: "1px solid #210366",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-evenly",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            borderRadius: "20px",
                                            border: "1px",
                                            gap: "8px",
                                            border: "1px solid #FFFFFF",
                                            background:
                                                "linear-gradient(0deg, #FF7900, #FF7900)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                textAlign: "center",
                                                fontFamily: "Inter",
                                                fontSize: " 13px",
                                                fontWeight: 500,
                                                lineHeight: "16px",
                                                lineWidth: "64px",
                                                letterSpacing: " 0em",
                                                textAlign: "center",
                                                color: "#FFFFFF",
                                            }}
                                        >
                                            Top <br />
                                            Recruiters
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            width: "181px",
                                            height: "30px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <img
                                            src={image8}
                                            alt="image"
                                            style={{
                                                width: "90%",
                                                height: "100%",
                                                objectFit: "contain",
                                            }}
                                        />
                                    </Box>
                                </Box>
                            </Stack>
                        </Box>

                        <Box
                            sx={{
                                width: "388px",
                                height: "620px",
                                display: "flex",
                            }}
                        >
                            <Stack gap={2}>
                                <Placementdata />
                                <Placementdata />
                                <Placementdata />
                                <Placementdata />
                                <Placementdata />

                                <Box
                                    sx={{
                                        width: "70%",
                                        height: "50px",
                                        borderRadius: "28px",
                                        border: "1px",
                                        border: "1px solid #210366",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "space-evenly",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: "44%",
                                            height: "35px",
                                            borderRadius: "16px",
                                            border: "1px",
                                            gap: "8px",
                                            marginRight: "-8px",
                                            border: "1px solid #FFFFFF",
                                            background:
                                                "linear-gradient(0deg, #FF7900, #FF7900)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: "Inter",
                                                fontSize: " 13px",
                                                fontWeight: 500,
                                                lineHeight: "16px",
                                                letterSpacing: " 0em",
                                                textAlign: "center",
                                                color: "#FFFFFF",
                                            }}
                                        >
                                            Management <br />
                                            Consulting
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            width: "118px",
                                            height: "36px",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Typography sx={{}}>
                                            Major Sector
                                        </Typography>
                                    </Box>
                                </Box>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Stack>
        </>
    );
};

export default Placement;
