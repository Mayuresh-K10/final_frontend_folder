import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import "./CSS/JobPortal.css";
import "../components/CSS/JobPortal.css";

const JobListpage = () => {
    const [jobListings, setJobListings] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isMobile, setIsMobile] = useState(window.innerWidth > 750);
    const jobsPerPage = 5; // Set jobs per page

    useEffect(() => {
        // Fetch data from the API
        const fetchJobs = async () => {
            try {
                const response = await axios.get(
                    `${process.env.REACT_APP_BACKEND_DJANGO_URL}/jobs-showcase`
                );
                setJobListings(response.data);
            } catch (error) {
                console.error("Error fetching job listings:", error);
            }
        };

        fetchJobs();

        // Handle resizing
        const handleResize = () => {
            setIsMobile(window.innerWidth > 750);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    // Calculate the current jobs to display based on pagination
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobListings.slice(indexOfFirstJob, indexOfLastJob);

    // Total number of pages
    const totalPages = Math.ceil(jobListings.length / jobsPerPage);

    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div className="accordion-box list-style show">
            {currentJobs.map((job) => (
                <div
                    key={job.id}
                    className="job-list-one style-two position-relative border-style mb-20"
                >
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            gap: "50px",
                        }}
                    >
                        <div className="col-md-5">
                            <div className="job-title d-flex align-items-center">
                                <Link className="logo" to="/job-portal/company">
                                    {/* Company Logo or image can go here */}
                                </Link>
                                <div
                                    style={{
                                        width: "15vw",
                                        display: "flex",
                                        flexDirection: "column",
                                        marginLeft: "1rem",
                                    }}
                                    className="split-box1"
                                >
                                    <Link
                                        style={{
                                            width: "7.5vw",
                                            display: "flex",
                                            justifyContent: "center",
                                            color: "#7f29cf",
                                        }}
                                        className="positiondev"
                                    >
                                        {formatDate(job.published_at)}
                                    </Link>
                                    <Link
                                        style={{ width: "15vw" }}
                                        className="positiondev"
                                    >
                                        {job.job_title}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{ width: "15vw" }}
                            className="col-md-4 col-sm-6 "
                        >
                            <div className="jobcategorys">
                                <Link>{job.location}</Link>
                            </div>
                            <div className="jobcategorys">
                                <span className="fw-500 text-dark">
                                    {job.stipend}
                                </span>{" "}
                                {job.job_type} . {job.experience}
                            </div>
                        </div>
                        <div
                            style={{ width: "12vw", marginTop: "-12px" }}
                            className="col-lg-2 col-md-4"
                        >
                            <div className="btn-group d-flex align-items-center justify-content-md-end sm-mt-20">
                                <button>
                                    <Link to="/login" className="applybtn">
                                        APPLY
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Material UI Pagination Component */}
            <div
                className="pagination"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                }}
            >
                <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    variant="outlined"
                    shape="rounded"
                />
            </div>
        </div>
    );
};

export default JobListpage;
