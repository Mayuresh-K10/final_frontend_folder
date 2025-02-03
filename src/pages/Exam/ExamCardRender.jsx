import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import CardComponent from "../../components/Cards/ExamComponentCard";
import { Box, Stack } from "@mui/system";
import { Pagination } from "@mui/material";
import { useParams } from "react-router-dom";

const ExamCard = ({ setModal }) => {
    const [examCards, setExamCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const cardsPerPage = 12;

    const authToken = process.env.REACT_APP_BACKEND_BEARER_TOKEN;
    const url = process.env.REACT_APP_BACKEND_SERVER_URL;

    const containerRef = useRef(null);

    const { filter: urlFilter } = useParams();

    const getExamCards = useCallback(
        async (filterValue = "") => {
            try {
                const response = await axios.get(`${url}/api/exam-details`, {
                    params: {
                        "pagination[page]": currentPage,
                        "pagination[pageSize]": cardsPerPage,
                        "filters[full_form][$contains]":
                            filterValue || urlFilter, // Use provided filter or URL filter
                        populate: "*", // Assuming populate is a valid parameter for your API
                    },
                    headers: {
                        Authorization: `Bearer ${authToken}`,
                    },
                });
                const data = response.data;
                if (data) {
                    setExamCards(data.data);
                    setTotalPages(data.meta.pagination.pageCount);
                    if (containerRef.current) {
                        containerRef.current.scrollIntoView({
                            behavior: "smooth",
                        });
                    }
                } else {
                    console.error("Unexpected response format:", data);
                }
            } catch (error) {
                console.error("Error fetching Exam Cards Data:", error);
            }
        },
        [currentPage, cardsPerPage, authToken, urlFilter, url]
    ); // Add dependencies

    useEffect(() => {
        getExamCards(); // Initial fetch
    }, [getExamCards]); // Only re-run effect if getExamCards changes

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };

    // Helper function to split examCards into pairs
    const splitIntoPairs = (array) => {
        const pairs = [];
        for (let i = 0; i < array.length; i += 2) {
            pairs.push(array.slice(i, i + 2));
        }
        return pairs;
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                padding: "20px",
            }}
        >
            <div ref={containerRef} />
            {splitIntoPairs(examCards).map((pair, index) => (
                <Stack
                    key={index}
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        width: "100%",
                    }}
                >
                    {pair.map((item) => (
                        <Box
                            key={item.id}
                            width={{ xs: "100%", sm: "calc(50% - 16px)" }}
                        >
                            <CardComponent
                                setModal={setModal}
                                name={
                                    item.attributes.Exam_name?.data.attributes
                                        .Exam_Name || "No data found"
                                }
                                title={
                                    item.attributes.full_form || "No data found"
                                }
                                mode={
                                    item.attributes.Mode_of_exam ||
                                    "No data found"
                                }
                                examDate={
                                    item.attributes.examination_date
                                        ? item.attributes.examination_date
                                        : "Unavailable"
                                }
                                applicationDate={
                                    item.attributes.application_form_date
                                        ? item.attributes.application_form_date
                                        : "Unavailable"
                                }
                                announceDate={
                                    item.attributes.result_date
                                        ? item.attributes.result_date
                                        : "Unavailable"
                                }
                                img={`${url}${item.attributes.Logo_Img_links?.data.attributes.url}`}
                                sx={{
                                    marginBottom: "20px", // Adjust this value as needed
                                }}
                            />
                        </Box>
                    ))}
                </Stack>
            ))}

            <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                sx={{ alignSelf: "center", marginTop: "1rem" }}
            />
        </Box>
    );
};

export default ExamCard;
