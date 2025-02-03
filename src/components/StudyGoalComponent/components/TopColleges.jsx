import React from 'react'
import SuggestionCards from "../../../components/Cards/SuggestionCards";
import { Card2 } from "../../../data/DataLanding";
import { Box, Typography } from "@mui/material";
import SearchButton from "../../../components/Buttons/SearchButton";

const TopColleges = ({CourseName}) => {
    return (
        <Box sx={{ marginY: "2rem" }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    width: "100%",
                    justifyContent: "space-between",
                    marginBottom: "10px",
                }}
            >
                <Box
                    sx={{ width: "fit-content", marginBottom: "1rem" }}
                >
                    <Typography
                        sx={{
                            fontSize: "2rem",
                            fontWeight: 500,
                            lineHeight: "3rem",
                            letterSpacing: "0em",
                            textAlign: "left",
                            color: "#160048",
                            display: "inline",
                        }}
                    >Top colleges in {CourseName}
                    </Typography>
                    <Box
                        sx={{
                            borderTop: "6px solid #7B90FF", borderRadius: "10px", display: "flex", width: "100%",
                        }} />
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "0.4rem",
                    }}
                >
                    <SearchButton />
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "2rem",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    marginX: "auto",
                }}>
                {Card2.map((val, index) => {
                    return (
                        <Box key={index}>
                            <SuggestionCards
                                image={val.image}
                                review_icon={val.review_icon}
                                img_logo={val.img_logo}
                                card_title={val.card_title}
                                title_text={val.title_text}
                                review_rate={val.review_rate}
                                review_cnt={val.review_cnt}
                                btn_contents={val.btn_contents}
                                btn2={val.btn2}
                                btn3={val.btn3}
                                btn4={val.btn4}
                                img_title={val.img_title}
                                img_body={val.img_body}
                            />
                        </Box>
                    );
                })}
            </Box>
        </Box >
    )
}

export default TopColleges