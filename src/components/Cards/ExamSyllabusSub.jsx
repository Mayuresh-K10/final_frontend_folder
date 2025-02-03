import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function ExamSyllabusSub({
    pattern,
    analysis,
    syllabus,
    img,
    name,
    mode,
    onChevronClick,
}) {
    return (
        <Stack
            direction="column"
            spacing={1}
            sx={{
                paddingY: "10px",
                paddingX: "15px",
            }}
        >
            <Stack direction="row" spacing={2}>
                <Avatar
                    src={img}
                    sx={{
                        width: "45px",
                        height: "45px",
                        borderRadius: "12px",
                        marginTop: "5px",
                    }}
                />
                <Box>
                    <Typography
                        fontWeight={400}
                        sx={{
                            fontSize: "1.2rem",
                        }}
                    >
                        {name}
                    </Typography>
                    <Typography
                        fontWeight={300}
                        sx={{
                            fontSize: "0.9rem",
                        }}
                    >
                        {mode}
                    </Typography>
                </Box>
            </Stack>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
                spacing={1}
            >
                <Box
                    component={Link}
                    to={pattern}
                    sx={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        color: "#210366",
                        fontSize: "1rem",
                        textDecoration: "none",
                    }}
                    onClick={onChevronClick}
                >
                    <Typography>Pattern</Typography>
                    <ChevronRightIcon /> {/* Trigger modal when clicked */}
                </Box>
                <Box
                    component={Link}
                    to={analysis}
                    sx={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        color: "#210366",
                        fontSize: "1rem",
                        textDecoration: "none",
                    }}
                    onClick={onChevronClick}
                >
                    <Typography>Analysis</Typography>
                    <ChevronRightIcon onClick={onChevronClick} />{" "}
                    {/* Trigger modal when clicked */}
                </Box>
                <Box
                    component={Link}
                    to={syllabus}
                    sx={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        color: "#210366",
                        fontSize: "1rem",
                        textDecoration: "none",
                    }}
                    onClick={onChevronClick}
                >
                    <Typography>Syllabus</Typography>
                    <ChevronRightIcon onClick={onChevronClick} />{" "}
                    {/* Trigger modal when clicked */}
                </Box>
            </Stack>
        </Stack>
    );
}

export default ExamSyllabusSub;
