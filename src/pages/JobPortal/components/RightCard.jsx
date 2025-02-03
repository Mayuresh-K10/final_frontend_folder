import React, { useState } from "react";
import {
    Box,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Pagination,
} from "@mui/material";
import "./CSS/JobPortal.css";
import "../components/CSS/JobPortal.css";
import jobListings from "./RightCardData";
import JobListpage from "./jobListPage";

const RightCard = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const jobsPerPage = 5;
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobListings.slice(indexOfFirstJob, indexOfLastJob);
    const totalPages = Math.ceil(jobListings.length / jobsPerPage);

    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
    };

    const [sortby, setSortby] = useState("");
    const [sortAction] = useState([
        { value: 1, sortBy: "Latest" },
        { value: 2, sortBy: "Oldest" },
        // { value: 3, sortBy: "High To Low" },
    ]);

    const handleSortbychange = (e) => {
        setSortby(e.target.value);
    };

    return (
        <div className="col-xl-9 col-lg-8">
            <div
                style={{ width: "100%", marginTop: "85px" }}
                className="job-post-item-wrapper ms-xxl-5 ms-xl-3"
            >
                <div className="upper-filter d-flex justify-content-between align-items-center mb-20">
                    <div className="total-job-found">
                        All{" "}
                        <span style={{ color: "black", fontWeight: "bold" }}>
                            {jobListings.length}
                        </span>{" "}
                        jobs found
                    </div>
                    <div className="d-flex align-items-center">
                        <div className="short-filter d-flex align-items-center">
                            <Box
                                sx={{ minWidth: 120, marginTop: "25px" }}
                                className="dash-input-wrapper mb-25"
                            >
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Sort By:
                                    </InputLabel>
                                    <Select
                                        className="list"
                                        role="menubar"
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={sortby}
                                        label="SortBy"
                                        onChange={handleSortbychange}
                                    >
                                        {sortAction.map((sortBy) => (
                                            <MenuItem
                                                key={sortBy.value}
                                                value={sortBy.value}
                                                className="option"
                                            >
                                                {sortBy.sortBy}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>
                        </div>
                    </div>
                </div>
                <Box>
                    <JobListpage />
                </Box>
            </div>
        </div>
    );
};

export default RightCard;
