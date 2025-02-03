import React, { memo } from "react";
import { Box, Typography, Avatar } from "@mui/material";
import ApplyNowButton from "../Buttons/ApplyNow";
import { RegisterModal } from "../Modal/MultiModal";

const NewApplicationCard = (props) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                width: "auto",
                gap: "1rem",
                marginTop: "1rem",
                padding: "10px",
                justifyContent: "flex-start",
                alignItems: "center",
                boxShadow: "0px 2px 40px rgba(123, 144, 255, 0.1)",
                borderRadius: "12px",
                border: "2px solid #7f29cf",
                "@media (max-width:800px)": {
                    justifyContent: "center",
                    marginLeft: "0vw",
                    padding: "2%",
                    width: "auto",
                },
            }}
        >
            <Avatar
                src={props.img}
                sx={{
                    height: "60px",
                    width: "60px",

                    backgroundColor: "#FFFFFF",
                    border: "0.1px solid #7B90FF",
                }}
            />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    "@media (max-width:800px)": {
                        paddingBottom: "2%",
                        textAlign: "center",
                        justifyContent: "center",
                        alignItems: "center",
                    },
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontFamily: "Poppins",
                        fontWeight: "700",
                        fontSize: "1.3rem",
                        color: "#210366",
                        // whiteSpace: "nowrap",
                        "@media (max-width:800px)": {
                            whiteSpace: "wrap",
                            textAlign: "center",
                        },
                    }}
                >
                    {props.name}
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        fontSize: "0.8rem",
                        color: "#210366",
                        "@media (max-width:800px)": {
                            paddingBottom: "2%",
                            textAlign: "center",
                        },
                    }}
                >
                    {props.recruits}
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        fontSize: "0.8rem",
                        color: "#210366",
                        "@media (max-width:800px)": {
                            paddingBottom: "2%",
                            textAlign: "center",
                        },
                    }}
                >
                    Highest CTC - {props.ctc}
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "Poppins",
                        fontWeight: "600",
                        fontSize: "0.7rem",
                        color: "#210366",
                        display: "flex",
                        alignItems: "center",
                        paddingBottom: "2%",
                        "@media (max-width:800px)": {
                            paddingBottom: "4%",
                            textAlign: "center",
                        },
                    }}
                >
                    {props.about}
                </Typography>
            </Box>
            <ApplyNowButton onClick={handleOpen} />
            <RegisterModal
                open={open}
                showCollegeInfo={true}
                collegeImage={props.img}
                collegeName={props.name}
                handleClose={handleClose}
            />
        </Box>
    );
};

export default memo(NewApplicationCard);
