import React from "react";

import { Typography, Stack } from "@mui/material";

const FootBottom = () => {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <Stack>
                <Typography
                    variant="body1"
                    component="div"
                    sx={{
                        color: "white",
                        marginLeft: "2rem",
                        marginY: "1rem",
                        "@media (max-width:800px)": {
                            marginLeft: "0rem",
                            textAlign: "center",
                        },
                    }}
                >
                    &copy; {currentYear} BHARATTECH TECHECOSYSTEM PVT. LTD. All
                    Rights Reserved.
                </Typography>
            </Stack>
        </>
    );
};

export default FootBottom;
