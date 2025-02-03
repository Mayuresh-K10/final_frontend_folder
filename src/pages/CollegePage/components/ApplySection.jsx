import React from "react";
import { Button } from "@mui/material";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { RegisterModal } from "../../../components/Modal/MultiModal";

import TopCourses from "./TopCourses";
import LearnCourses from "./LearnCourses";

const ApplySection = ({ openModal }) => {
    const [open, setOpen] = React.useState(false);
    const [modalHeading, setModalHeading] = React.useState("");

    const handleOpen = (heading) => {
        setModalHeading(heading);
        setOpen(true);
        openModal(false);
    };

    const handleClose = () => {
        setOpen(false);
        setModalHeading(""); // Clear the heading when the modal closes
    };

    return (
        <>
            <Button
                onClick={() => handleOpen()} // Open modal without heading for "Apply Now"
                variant="contained"
                fullWidth
                height="54px"
                textCenter
                sx={{
                    backgroundColor: "#7B90FF",
                    borderRadius: "12px",
                    fontWeight: "700",
                    fontStyle: "bold",
                    fontSize: "16px",
                    marginTop: "1rem",
                    textTransform: "capitalize",
                }}
                disableElevation
            >
                Apply Now
            </Button>
            <Button
                fullWidth
                textCenter
                sx={{
                    color: "#210366",
                    borderRadius: "12px",
                    fontWeight: "700",
                    fontStyle: "bold",
                    fontSize: "16px",
                    marginTop: "1rem",
                    textTransform: "capitalize",
                    boxShadow: "0px 0px 40px 0px #7B90FF26",
                }}
                onClick={() => handleOpen("To Download")} // Open modal with "To Download" heading for "Download Brochure"
            >
                Download Brochure
                <FileDownloadOutlinedIcon
                    style={{ position: "absolute", right: "0px" }}
                />
            </Button>
            <RegisterModal
                headingText={modalHeading}
                open={open}
                handleClose={handleClose}
            />

            <TopCourses />
            <LearnCourses />
        </>
    );
};

export default ApplySection;
