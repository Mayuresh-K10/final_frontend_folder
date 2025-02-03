import { Box, List, ListItem, SvgIcon, Typography } from "@mui/material";
import React, { memo } from "react";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined";
import { Link } from "react-router-dom";
import { Image } from "../../utils/Image";

const StudyAbroadCard = (props) => {
    //console.log("studyaboradchild");

    return (
        <Box
            sx={{
                backgroundColor: "white",
                width: "300px",
                height: "auto",
                borderRadius: "28px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "left",
                padding: "1.5rem",
                marginX: "auto",
                textAlign: "left",
                border: "2px solid lightgray",
                "&:hover": {
                    boxShadow: "0px 0px 40px rgba(123, 144, 255, 0.15);",
                },
            }}
        >
            <Link to={`/study-abroad/${props.link}`}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Image
                        src={props.img}
                        style={{
                            height: "4.5rem",
                            width: "4.5rem",
                            backgroundColor: "white",
                            margin: "0rem",
                            padding: "0rem",
                            borderRadius: "50%",
                        }}
                    />
                    <Box
                        sx={{
                            backgroundColor: "rgba(123, 144, 255, 0.2);",
                            width: "100%",
                            borderRadius: "0 10px 10px 0",
                            overflow: "hidden",
                            display: "flex",
                            flexDirection: "column",
                            boxShadow:
                                "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.15);",
                            textAlign: "left",
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#210366",
                                fontFamily: "Poppins",
                                fontSize: "1.2rem",
                                fontWeight: "700",
                                lineHeight: "1.2rem",
                                letterSpacing: "0.03rem",
                                whiteSpace: "nowrap",
                                textAlign: "left",
                                padding: "0.5rem 0 0 0.5rem",
                            }}
                        >
                            {props.name}
                        </Typography>
                        <Typography
                            sx={{
                                color: "#210366",
                                fontSize: "0.6rem",
                                fontWeight: "700",
                                fontFamily: "Poppins",
                                letterSpacing: "0.00001em",
                                alignSelf: "left",
                                padding: "0.15rem 0 0.5rem 0.5rem  ",
                            }}
                        >
                            {props.check}
                        </Typography>
                    </Box>
                </Box>
            </Link>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "left",
                    width: "100%",
                    justifyContent: "space-between",
                    alignContent: "center",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "1rem",
                        alignItems: "center",
                    }}
                >
                    <SvgIcon
                        component={SchoolOutlinedIcon}
                        sx={{
                            color: "#210366",
                            marginRight: "1rem",
                            height: "1.25rem",
                            width: "1.2rem",
                        }}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            margin: "0rem",
                            padding: "0rem",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Poppins",
                                fontSize: "0.6rem",
                                fontWeight: "900",
                                color: "#210366",
                                paddingBottom: "0rem",
                                lineHeight: "0.5rem",
                                letterSpacing: "0rem",
                                width: "fit",
                                textWrap: "nowrap",
                            }}
                        >
                            {props.no}
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "Poppins",
                                fontSize: "0.5rem",
                                fontWeight: "900",
                                color: "#210366",
                                paddingBottom: "0rem",
                                lineHeight: "1rem",
                                letterSpacing: "0.02rem",
                            }}
                        >
                            No. of colleges
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "0.25rem",
                        alignItems: "center",
                    }}
                >
                    <SvgIcon
                        component={PaidOutlinedIcon}
                        sx={{
                            color: "#210366",
                            marginRight: "1rem",
                            height: "1.25rem",
                            width: "1.25rem",
                        }}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            margin: "0rem",
                            padding: "0rem",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Poppins",
                                fontSize: "0.6rem",
                                fontWeight: "900",
                                color: "#210366",
                                paddingBottom: "0rem",
                                lineHeight: "0.5rem",
                                letterSpacing: "0rem",
                                width: "fit",
                                textWrap: "nowrap",
                            }}
                        >
                            {props.fee}
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "Poppins",
                                fontSize: "0.5rem",
                                fontWeight: "700",
                                color: "#210366",
                                paddingBottom: "0rem",
                                lineHeight: "1rem",
                                letterSpacing: "0.02rem",
                            }}
                        >
                            Avg study cost
                        </Typography>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        marginTop: "1rem",
                        alignItems: "center",
                        width: "140px",
                    }}
                >
                    <SvgIcon
                        component={SchoolOutlinedIcon}
                        sx={{
                            color: "#210366",
                            marginRight: "1rem",
                            height: "1.25rem",
                            width: "1.25rem",
                        }}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            margin: "0rem",
                            padding: "0rem",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Poppins",
                                fontSize: "0.6rem",
                                fontWeight: "900",
                                color: "#210366",
                                paddingBottom: "0rem",
                                lineHeight: "0.5rem",
                                letterSpacing: "0rem",
                            }}
                        >
                            {props.livingCost}
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "Poppins",
                                fontSize: "0.5rem",
                                fontWeight: "900",
                                color: "#210366",
                                paddingBottom: "0rem",
                                lineHeight: "1rem",
                                letterSpacing: "0.02rem",
                            }}
                        >
                            Avg. Living Cost
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box>
                <Typography
                    sx={{
                        fontFamily: "Poppins",
                        fontSize: "0.7rem",
                        fontWeight: 1000,
                        color: "#210366",
                        paddingBottom: "",
                        lineHeight: "1rem",
                        letterSpacing: "0.02rem",
                        marginTop: "0.5rem",
                    }}
                >
                    Ranking
                </Typography>
                <List>
                    <ListItem
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "flex-start",
                        }}
                    >
                        <Typography
                            color="primary"
                            sx={{
                                fontSize: "1rem",
                                fontWeight: 700,
                                marginX: "10px",
                            }}
                        >
                            {props.rank}
                        </Typography>
                    </ListItem>
                </List>
            </Box>

            <Typography
                sx={{
                    fontFamily: "Poppins",
                    fontSize: "0.7rem",
                    fontWeight: 1000,
                    color: "#210366",
                    paddingBottom: "",
                    lineHeight: "1rem",
                    letterSpacing: "0.02rem",
                    marginTop: "0.5rem",
                }}
            >
                Key Facts
            </Typography>
            <Box
                sx={{
                    alignItems: "left",
                    marginTop: "0.5rem",
                    color: "#210366",
                }}
            >
                <List
                    sx={{
                        padding: 0,
                        fontSize: "0.7rem",
                        fontWeight: 500,
                    }}
                >
                    <ListItem disablePadding>
                        <Box
                            sx={{
                                backgroundColor: "#7B90FF",
                                borderRadius: "50%",
                                padding: "5px",
                                marginX: "5px",
                            }}
                        />
                        <Typography
                            sx={{
                                fontSize: "0.7rem",
                                fontWeight: 500,
                            }}
                        >
                            {props.keyFact1}
                        </Typography>
                    </ListItem>
                    <ListItem disablePadding>
                        <Box
                            sx={{
                                backgroundColor: "#7B90FF",
                                borderRadius: "50%",
                                padding: "5px",
                                marginX: "5px",
                            }}
                        />
                        <Typography
                            sx={{
                                fontSize: "0.7rem",
                                fontWeight: 500,
                            }}
                        >
                            {props.keyFact2}
                        </Typography>
                    </ListItem>
                    <ListItem disablePadding>
                        <Box
                            sx={{
                                backgroundColor: "#7B90FF",
                                borderRadius: "50%",
                                padding: "5px",
                                marginX: "5px",
                            }}
                        />
                        <Typography
                            sx={{
                                fontSize: "0.7rem",
                                fontWeight: 500,
                            }}
                        >
                            {props.keyFact3}
                        </Typography>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
};

export default memo(StudyAbroadCard);
