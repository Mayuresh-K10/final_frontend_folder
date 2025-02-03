import React from "react";
import { Box } from "@mui/material";
import LeftCard from "../components/LeftCard";
import CollegeForgot from "../components/CollegeForgot";
const CollegeForgotCard = () => {
    return (
        <Box
            sx={{
                display: "flex",
                maxWidth: "1000px",
                backgroundColor: "#fff",
                padding: "10px",
                flexDirection: "row",
                borderRadius: "1rem",
                gap: "1rem",
                "@media (max-width :770px)": {
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                },
            }}
        >
            <LeftCard />
            <CollegeForgot />
        </Box>
    );
};

export default CollegeForgotCard;
