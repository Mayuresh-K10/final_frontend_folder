import { Avatar, Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import FlagIcon from "@mui/icons-material/Flag";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import FilterButton from "../../../components/Buttons/FilterButton";

const ReviewCard = ({
    avatar,
    user,
    institution,
    date,
    rating,
    reviews,
    heading,
    getbgColor,
}) => {
    const [show, setShow] = useState(false);
    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);
    const handleClick = () => {
        setShow(!show);
    };
    return (
        <Box
            sx={{
                fontStyle: "normal",
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

                    gap: "1rem",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    fontSize: "0.8rem !important",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        gap: "1rem",
                        fontSize: "0.8rem !important",
                    }}
                >
                    <Avatar
                        src={avatar}
                        name={user}
                        sx={{
                            bgcolor: getbgColor(user[0].toUpperCase()),
                            textTransform: "uppercase",
                        }}
                    >
                        {user[0]}
                    </Avatar>
                    <Box>
                        <Typography
                            id="name"
                            sx={{
                                fontWeight: "bold",
                                color: "#2f1370",
                                fontSize: "0.8rem",
                                textTransform: "capitalize",
                            }}
                        >
                            {user}
                        </Typography>
                        <Box sx={{ display: "flex", gap: "1rem" }}>
                            <Typography id="intitution" sx={{ fontSize: "0.8rem" }}>
                                {institution}
                            </Typography>
                            <Typography
                                id="date"
                                sx={{
                                    fontSize: "0.8rem",
                                    color: "#FF7900",
                                    fontWeight: "bold",
                                }}
                            >
                                {date}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Typography sx={{ color: "#FF7900", fontWeight: "bold" }}>
                        <span style={{ color: "#000" }}>{rating}</span>/10
                    </Typography>
                </Box>
            </Box>

            <Box
                sx={{
                    height: `${show ? "fit-content" : "5.8rem"}`,
                    overflow: "hidden",
                    transition: "height 0.3s ease-in-out",
                }}
            >
                <Typography
                    id="review_haeding"
                    sx={{ color: "#7B90FF", fontsize: "1rem !important" }}
                >
                    {heading}
                </Typography>
                {reviews.map(({ heading, review }, index) => {
                    return (
                        <Box key={index}>
                            <span style={{ color: "#7B90FF" }}>{heading} : </span>

                            {review}
                        </Box>
                    );
                })}
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Button
                    onClick={handleClick}
                    sx={{
                        display: `${show ? "none" : "block"}`,
                        color: "#FF7900",
                        padding: "0",
                        background: "none",
                        Border: "none",
                        "&:hover": {
                            background: "none",
                            border: "none",
                        },
                    }}
                >
                    Read more...
                </Button>
                <Button
                    onClick={handleClick}
                    sx={{
                        display: `${!show ? "none" : "block"}`,
                        color: "#FF7900",
                        padding: "0",
                        background: "none",
                        Border: "none",
                        "&:hover": {
                            background: "none",
                            border: "none",
                        },
                    }}
                >
                    Readless...
                </Button>
                <Box sx={{ display: "flex", gap: "1rem" }}>
                    <FilterButton>
                        <FlagIcon sx={{ color: "#000", fontSize: "1.3rem" }} /> Report
                    </FilterButton>
                    <FilterButton onClick={() => setLike(like + 1)}>
                        <ThumbUpIcon sx={{ color: "#7B90FF", fontSize: "1.3rem" }} /> {like}
                    </FilterButton>
                    <FilterButton onClick={() => setDislike(dislike + 1)}>
                        <ThumbDownIcon sx={{ color: "#FF7900", fontSize: "1.3rem" }} />{" "}
                        {dislike}
                    </FilterButton>
                </Box>
            </Box>



        </Box>


    );
};

export default ReviewCard;