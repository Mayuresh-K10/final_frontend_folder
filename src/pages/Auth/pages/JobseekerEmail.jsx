import React from "react";
import { Box } from "@mui/material";
// import EmailCard from "../PageCards/EmailCard";
import JobseekerEmailCard from "../PageCards/JobseekerEmailCard";

const JobseekerEmail = () => {
    return (
        <Box
            sx={{
                display: "grid",
                placeItems: "center",
                borderRadius: "20px",
                width: "100%",
                height: "100%",
                position: "relative",
                padding: "2.5rem",
                "& *": {
                    fontSize: "0.8rem important",
                },
                "@media (max-width:800px)": {
                    padding: "1rem",
                },
            }}
        >
            <JobseekerEmailCard />
        </Box>
    );
};

export { JobseekerEmail };
