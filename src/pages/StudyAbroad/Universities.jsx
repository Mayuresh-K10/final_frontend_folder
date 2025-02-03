import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import HeadText from "../../components/Headings/HeadText";
import img1 from "../../Assets/Yale_University_Shield_1.svg";
import img2 from "../../Assets/UniversityofPennsylvania.webp";
import img3 from "../../Assets/lse.webp";

import apply_now from "../../Assets/apply-3.webp";
import { RegisterModal } from "../../components/Modal/MultiModal";
import { Margin } from "@mui/icons-material";
// Sample data for demonstration
const universitiesData = [
    { name: "Yale University New Haven", logo: img1, rating: 4.7 },
    {
        name: "University of Pennsylvania",
        logo: img2,
        rating: 4.6,
    },
    {
        name: "London School of Economics and Political Science",
        logo: img3,
        rating: 4.4,
    },
];

function useScreenSize() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        const handleScreenSizeChange = (e) => setIsMobile(e.matches);
        handleScreenSizeChange(mediaQuery);
        mediaQuery.addEventListener("change", handleScreenSizeChange);
        return () => {
            mediaQuery.removeEventListener("change", handleScreenSizeChange);
        };
    }, []);

    return isMobile;
}

function Universities({ openModal }) {
    const isMobile = useScreenSize();

    const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOpen = () => {
        setOpen(true);
        openModal(false);
    };

    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                paddingY: "5rem",
            }}
        >
            <HeadText headText={`Apply to 1399 Universities`} />
            <Table sx={{ padding: "20px" }}>
                <TableHead>
                    <TableRow
                        style={{
                            background:
                                "linear-gradient(45deg, #f7edf8 30%, #fef1e8 90%)",
                        }}
                    >
                        <TableCell
                            align="center"
                            style={{ paddingLeft: "50px" }}
                        >
                            Universities
                        </TableCell>
                        <TableCell align="center">College Rating</TableCell>
                        <TableCell
                            align="center"
                            style={{ paddingRight: "25px" }}
                        >
                            Action
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {universitiesData.map((university, index) => (
                        <TableRow key={index}>
                            <TableCell align="center">
                                <Box
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    {!isMobile && (
                                        <img
                                            src={university.logo}
                                            alt={university.name}
                                            style={{
                                                width: 50,
                                                height: 50,
                                                marginRight: 10,
                                            }}
                                        />
                                    )}
                                    <div style={{ width: 210 }}>
                                        {university.name}
                                    </div>{" "}
                                </Box>
                            </TableCell>
                            <TableCell align="center">
                                {university.rating}
                            </TableCell>
                            <TableCell
                                align="center"
                                style={{ paddingRight: "25px" }}
                            >
                                {isMobile ? (
                                    <>
                                        <img
                                            src={apply_now}
                                            alt="applynow"
                                            onClick={handleOpen}
                                        />
                                        <RegisterModal
                                            open={open}
                                            handleClose={handleClose}
                                        />
                                    </>
                                ) : (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleOpen}
                                    >
                                        Apply Now
                                    </Button>
                                )}
                                <RegisterModal
                                    open={open}
                                    handleClose={handleClose}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Box>
    );
}

export default Universities;
