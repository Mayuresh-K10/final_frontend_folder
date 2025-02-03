import React from "react";
import { Box } from "@mui/material";
import LeftCard from "../components/LeftCard";
//import ForgotOtp from "../components/ForgotOtp";
import JobseekerForgotOtp from "../components/JobseekerForgotOtp";
const JobseekerRequestForgotOtp = () => {
    return (
        <Box
            sx={{
                display: "flex",
                maxWidth: "900px",
                backgroundColor: "#fff",
                padding: "10px",
                borderRadius: "1rem",
                gap: "1rem",
                "@media (max-width:800px)": {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "0",
                    maxWidth: "100%",
                },
            }}
        >
            <LeftCard />
            <JobseekerForgotOtp />
        </Box>
    );
};

export default JobseekerRequestForgotOtp;
