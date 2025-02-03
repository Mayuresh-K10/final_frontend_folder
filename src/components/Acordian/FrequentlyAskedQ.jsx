import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Button, Pagination } from "@mui/material";


export default function FrequentlyAskedQ({ askedQ }) {
    const [expanded, setExpanded] = useState(false);
    const [page, setPage] = useState(1);
    const [currentQ, setCurrentQ] = useState(null);

    // for the accordian
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const getPageData = (page) => {
        const startIndex = (page - 1) * 10;
        const endIndex = startIndex + 10;
        return askedQ.slice(startIndex, endIndex);
    };

    useEffect(() => {
        setCurrentQ(getPageData(page));
    }, [page]);

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const handleNextPage = () => {
        const totalPages = Math.ceil(askedQ.length / 10);
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const handlePageChange = (e, value) => {
        setPage(value);
    };

    return (
        <Box>

            {currentQ &&
                currentQ.map(({ title, answer }, index) => (
                    <Accordion
                        expanded={expanded === `panel${index}`}
                        onChange={handleChange(`panel${index}`)}
                        key={index}
                    >
                        <AccordionSummary
                            expandIcon={
                                <ExpandMoreIcon
                                    sx={{
                                        backgroundColor: "#7B90FF",
                                        color: "#fff",
                                        borderRadius: "100%",
                                    }}
                                />
                            }
                            aria-controls={`panel${index}bh-content`}
                            id={`panel${index}bh-header`}
                        >
                            <Typography
                                sx={{
                                    width: "33%",
                                    flexShrink: 0,
                                    color: "#2F1370",
                                    fontSize: "1rem",
                                }}
                            >
                                {title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails
                            sx={{
                                borderTop: "1px solid #808080",
                                width: "98%",
                                margin: "0 auto",
                            }}
                        >
                            <Typography
                                sx={{ color: "#2F1370", fontSize: "1rem", fontWeight: "500" }}
                            >
                                {answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            <Box sx={{ width: "fit-content", margin: "auto", padding: "1rem" }}>

                <Pagination
                    count={
                        askedQ.length % 10 === 0
                            ? askedQ.length / 10
                            : Math.ceil(askedQ.length / 10)
                    }
                    page={page}
                    onChange={handlePageChange}
                    color="primary"
                />
            </Box>
        </Box>
    );
}
