import React from "react";
//import ForgotCard from "../PageCards/ForgotCard";
import { Box } from "@mui/material";
import CollegeForgotCard from "../PageCards/CollegeForgotCard";

const CollegeForgotPassword = () => {
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
            <CollegeForgotCard />
        </Box>
    );
};

export { CollegeForgotPassword };
