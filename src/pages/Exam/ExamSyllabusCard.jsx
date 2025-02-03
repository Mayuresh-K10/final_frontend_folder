import React, { useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { ExamSyllabus } from "./Data";
import ExamSyllabusSub from "../../components/Cards/ExamSyllabusSub";
import { RegisterModal } from "../../components/Modal/MultiModal";

function ExamSyllabusCard({ setModal }) {
    const [openModal, setOpenModal] = useState(false);

    // Function to handle opening the modal
    const handleOpenModal = () => {
        setOpenModal(true);
        setModal(false);
    };

    // Function to handle closing the modal
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <>
            <Box
                sx={{
                    marginBottom: "40px",
                    height: "auto",
                    paddingY: "7px",
                    paddingX: "5px",
                    filter: "drop-shadow(0px 0px 40px rgba(123, 144, 255, 0.1))",
                }}
            >
                <Box
                    sx={{
                        border: "1px solid grey",
                        boxSizing: "border-box",
                        height: "57px",
                        width: "330px",
                        background: "#FFFFFF",
                        borderBottom: "2.5px solid #7B90FF",
                        borderRadius: "20px 20px 0px 0px",
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: "Poppins",
                            fontStyle: "normal",
                            fontWeight: "700",
                            fontSize: "24px",
                            color: "#210366",
                            paddingTop: "6px",
                            textAlign: "center",
                        }}
                    >
                        Exam Syllabus 2023
                    </Typography>
                </Box>

                <Box
                    sx={{
                        border: "1px solid grey",
                        borderTop: "none",
                        width: "330px",
                        background: "#FFFFFF",
                        paddingBottom: "10px",
                        borderRadius: "0px 0px 20px 20px",
                    }}
                >
                    {ExamSyllabus.map((data, index) => (
                        <>
                            <ExamSyllabusSub
                                key={index}
                                name={data.examName}
                                mode={data.modeOfExam}
                                pattern={data.examPattern}
                                analysis={data.examPattern} // Assuming analysis uses the same pattern
                                syllabus={data.syllabusLink}
                                img={data.img}
                                onChevronClick={handleOpenModal} // Pass the modal opening function here
                            />
                            <Divider
                                sx={{
                                    marginX: "10px",
                                    marginY: "7px",
                                    height: "2px",
                                    backgroundColor: "rgba(123, 144, 255, 0.2)",
                                    width: "auto",
                                    color: "#7B90FF",
                                }}
                            />
                        </>
                    ))}
                </Box>
            </Box>

            {/* RegisterModal component */}
            <RegisterModal
                open={openModal}
                handleClose={handleCloseModal}
                headingText=" "
                // Optional props for the modal
            />
        </>
    );
}

export default ExamSyllabusCard;
