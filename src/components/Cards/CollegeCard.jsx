import { Avatar, Box, Rating, Typography } from "@mui/material";
import React, { memo } from "react";
import GrayButton from "../Buttons/GrayButton";
import OrangeButton from "../Buttons/OrangeButton";
import { Link } from "react-router-dom";
import { RegisterModal } from "../Modal/MultiModal";
import { Image } from "../../utils/Image";

const url = process.env.REACT_APP_BACKEND_SERVER_URL;

const CollegeCard = (props) => {
    const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOpen = () => {
        setOpen(true);
        props.openModal(false);
    };

    return (
        <Box
            sx={{
                border: "1px solid #553cdf",
                boxShadow: "0px 2px 40px rgba(123, 144, 255, 0.1)",
                borderRadius: "12px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                width: "800px",
                padding: "20px",
                marginBottom: "10px",
                backgroundColor: "#fff",
                "@media (max-width:800px)": {
                    flexDirection: "column",
                    paddingY: "0.5rem",
                    width: "320px",
                },
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "@media (max-width:800px)": {
                        justifyContent: "center",
                        marginBottom: "1rem",
                    },
                }}
            >
                <Avatar
                    sx={{
                        height: "100px",
                        width: "100px",
                        backgroundColor: "white",
                    }}
                >
                    <Image
                        src={props.img}
                        alt={props.alt || "Avatar"}
                        style={{
                            height: "100px",
                            width: "100px",
                            objectFit: "contain",
                            borderRadius: "50%",
                            border: "0.1px solid #7B90FF",
                        }}
                    />
                </Avatar>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    marginTop: "0.7rem",
                    width: "100%",
                    "@media (min-width:800px)": {
                        width: "47%",
                        marginLeft: "2vw",
                    },
                }}
            >
                <Link to={`/college-info/${props.id}/info`}>
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: "700",
                            fontSize: "1.1rem",
                            color: "#210366",
                            textAlign: { xs: "center", sm: "left" },
                        }}
                    >
                        {props.name}
                    </Typography>

                    <Typography
                        sx={{
                            fontWeight: "500",
                            fontSize: "1rem",
                            color: "#210366",
                            textAlign: { xs: "center", sm: "left" },
                        }}
                    >
                        {props.location}
                    </Typography>
                </Link>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "0.2rem",
                        "@media (max-width:800px)": {
                            flexDirection: "column",
                            alignItems: "center",
                        },
                    }}
                >
                    <GrayButton text="View Details" id={props.id} />
                    <GrayButton text="Placements" id={props.id} />
                </Box>
                <Typography
                    sx={{
                        fontWeight: "500",
                        fontSize: "0.8rem",
                        color: "#210366",
                        textAlign: { xs: "center", sm: "left" },
                    }}
                >
                    {props.courses}
                </Typography>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: { xs: "center", sm: "flex-end" },
                    marginTop: "0.7rem",
                    marginLeft: { sm: "3rem" },
                    gap: "0.5rem",
                    "@media (max-width:800px)": {
                        marginLeft: "0rem",
                    },
                }}
            >
                <Typography
                    sx={{
                        fontWeight: "500",
                        fontSize: "1rem",
                        color: "#210366",
                    }}
                >
                    {props.stars}
                </Typography>
                <Rating
                    name="read-only"
                    value={props.stars}
                    sx={{ color: "#7B90FF" }}
                    precision={0.1}
                    readOnly
                />
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: { xs: "center", sm: "flex-end" },
                        gap: "0.5rem",
                        marginTop: "0.5rem",
                    }}
                >
                    <OrangeButton text="Brochure" onClick={handleOpen} />
                    <OrangeButton text="Enquire" onClick={handleOpen} />
                    <RegisterModal
                        open={open}
                        showCollegeInfo={true}
                        collegeImage={props.img}
                        collegeName={props.name}
                        handleClose={handleClose}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default memo(CollegeCard);
