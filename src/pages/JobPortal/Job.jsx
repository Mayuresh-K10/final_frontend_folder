import React, { useLayoutEffect } from "react";
import { Box } from "@mui/material";
import LeftCard from "./components/LeftCard";
import RightCard from "./components/RightCard";
import FooterButtons from "./components/FooterButtons";
import JobHeroSection from "./components/JobHeroSection";

function Job() {
    useLayoutEffect(() => {
        // window.scrollTo(0, 0);
    });

    return (
        <container>
            <JobHeroSection />

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "1vw",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    padding: "2%",
                    "@media (max-width:800px)": {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                    },
                }}
            >
                {/*<Box
          sx={{
            width: "25%",
            "@media (max-width:800px)": {
              width: "90%",
            },
          }}
        >
          <LeftCard />
        </Box>*/}
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        "@media (max-width:800px)": {
                            width: "90%",
                        },
                    }}
                >
                    <RightCard />
                </Box>
            </Box>
            <FooterButtons />
        </container>
    );
}

export default Job;
