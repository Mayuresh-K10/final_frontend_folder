import React from "react";
//import ForgotCard from "../PageCards/ForgotCard";
import { Box } from "@mui/material";
import JobseekerForgotCard from "../PageCards/JobseekerForgotCard";

const JobseekerForgotPassword = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "100%",
                height: "100%",
                position: "relative",
                padding: "2.5rem",
                backgroundColor: "#ffffff",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                borderRadius: "0px",
            }}
        >
            <JobseekerForgotCard />
        </Box>
    );
};

export { JobseekerForgotPassword };
