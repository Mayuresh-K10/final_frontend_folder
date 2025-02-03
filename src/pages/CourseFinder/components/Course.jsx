import React from "react";
import { Box, Stack } from "@mui/material";
// import SearchBar from "../SearchBar";
import CourseButton from "./Course/CourseButton";
import writebook from "./assets/writebook.jpg";

const Course = () => {
    return (
        <Box>
            <Stack
                direction="row"
                display={"flex"}
                flexWrap={"wrap"}
                justifyContent={"space-between"}
                sx={{
                    width: "93%",
                    marginX: "3rem",
                    "@media (max-width:800px)": {
                        marginX: "0",
                    },
                }}
            >
                <Box>
                    <Box
                        sx={{
                            color: "#210366",
                            fontSize: 30,
                            fontWeight: "700",
                            wordWrap: "break-word",
                            marginBottom: "0.5rem",
                        }}
                    >
                        List of Top courses in Indian Colleges 2025
                    </Box>
                    {/* <SearchBar placeholder="Search Goals" /> */}
                    <CourseButton />
                </Box>
                <Box>
                    <img
                        src={writebook}
                        alt="bharat-tech"
                        style={{
                            maxWidth: "100%", // Ensures the image doesn't exceed its container's width
                            height: "auto", // Allows the image to scale proportionally
                            maxHeight: "11rem", // Limits the maximum height
                            marginRight: "0.8rem",
                            borderRadius: "2rem 0 3rem  0rem ",
                        }}
                    />
                </Box>
            </Stack>
        </Box>
    );
};

export default Course;
