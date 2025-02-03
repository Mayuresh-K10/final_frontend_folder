import * as React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function HostelLearnCourses(props) {
    const navigate = useNavigate();
    return (
        <Box>
            <Box
                sx={{
                    boxSizing: "border-box",
                    marginLeft: "20px",
                    marginTop: "20px",
                }}
            >
                <Grid
                    container
                    alignItems="center"
                    spacing={10}
                    sx={{
                        fontFamily: "Poppins",
                        fontStyle: "bold",
                        fontWeight: "600",
                        fontSize: "14px",
                        color: "#210366",
                        cursor: "pointer",
                    }}
                    onClick={() => {
                        navigate("/choose-courses");
                        console.log("Icon clicked");
                    }}
                >
                    <Grid item xs={8}>
                        <Typography
                            variant="inherit"
                            sx={{
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                console.log("Course clicked");
                                navigate("/choose-courses");
                            }}
                        >
                            {props.course}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography
                            variant="inherit"
                            sx={{
                                cursor: "pointer",
                            }}
                            onClick={() => {
                                navigate("/choose-courses");
                                console.log("Icon clicked");
                            }}
                        >
                            {props.icon}
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
