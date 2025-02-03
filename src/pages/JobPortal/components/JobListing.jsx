import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { Box, Typography, Container } from "@mui/material";
import "./CSS/JobPortal.css";
import "../components/CSS/JobPortal.css";

import axios from "axios";


const JobListing = ({ isHome = false }) => {
  const [jobListings, setJobListings] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth > 750);

  useEffect(() => {
    // Fetch data from the API
    const fetchJobs = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_DJANGO_URL}/jobs-showcase`);
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
    return date.toLocaleDateString(); // or use any custom date formatting here
  };

  const containerStyle = {
    width: "100%",
    // maxWidth:"xl",
    margin: "0 auto",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "3.5rem",
  };

  const blurContentStyle = {
    maxWidth: "xl",

    filter: "blur(7.5px)",
  };

  const overlayTextStyle = {
    position: "relative",
    top: isMobile ? "-30rem" : "-40rem",
    left: isMobile ? "45rem" : "auto",
    marginLeft: isMobile ? "-15rem" : "10rem",
    zIndex: "99",
    transform: "translate(-50%, -50%)",
    color: "white",
    fontSize: "1rem",
    textAlign: "center",
    pointerEvents: "none",
  };

  return (
    <section
      style={{ paddingY: "3.5rem" }}
      className="job-listing-one mt-180 xl-mt-150 lg-mt-100"
    >
      {isHome ? (
        <Container maxWidth="xl">
          <Box
            sx={{
              width: "fit-content",
              marginY: "1rem",
            }}
          >
            <Typography
              sx={{
                fontSize: "2rem",
                fontWeight: 500,
                lineHeight: "3rem",
                letterSpacing: "0em",
                textAlign: "left",
                color: "#210366",
              }}
            >
              New job listing
            </Typography>
            <Box
              sx={{
                borderTop: "6px solid #7B90FF",
                borderRadius: "10px",
                display: "flex",
                width: "100%",
              }}
            />
          </Box>

          <Box sx={{ width: "100%" }}>
            <Box className="d-flex justify-content-lg-end">
              <Link to="/job-portal/job" className="btn-six d-lg-inline-block">
                Explore all jobs
              </Link>
            </Box>
          </Box>

          <div style={containerStyle}>
            <div
              className="job-listing-wrapper border-wrapper mt-80 lg-mt-40 wow fadeInUp"
              //style={blurContentStyle}
            >
              {jobListings.map((jobList, index) => (
                <div
                  key={index}
                  className="job-list-one position-relative bottom-border"
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <div className="col-xxl-3 col-lg-4">
                      <div className="job-title d-flex align-items-center">
                        <Link
                          // to="/coming-soon"
                          style={{ width: "20vw", marginLeft: "5px" }}
                          className="positiondev"
                        >
                          {jobList.job_title}
                        </Link>
                      </div>
                    </div>

                    <div
                      style={{ width: "15vw" }}
                      className="col-lg-3 col-md-4 col-sm-6 ms-auto"
                    >
                      <div className="positiondev">
                        <Link
                          // to="/coming-soon"
                          style={{ color: "#7f29cf" }}
                        >
                         {formatDate(jobList.published_at)}
                        </Link>

                        <div className="job-date">
                          <Link
                            // to="/coming-soon"
                            className="positiondev"
                          >
                            {jobList.job_type}
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div
                      style={{ width: "12vw" }}
                      className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 ms-auto xs-mt-10"
                    >
                      <div className="positiondev">
                        <Link
                        // to="/coming-soon"
                        >
                          {jobList.location ? jobList.location: 'NA'}
                        </Link>
                      </div>
                      <div className="jobcategorys">
                        <Link
                        //  to="/coming-soon"
                        >
                          {jobList.workplaceType}{" "}
                        </Link>
                        <Link
                        // to="/coming-soon"
                        >
                        </Link>
                      </div>
                    </div>

                    <div
                      style={{ width: "12vw", marginTop: "12px" }}
                      className="col-lg-2 col-md-4"
                    >
                      <div className="btn-group d-flex align-items-center justify-content-md-end sm-mt-20">
                        
                        <button>
                          <Link
                            to="/login"
                            className="applybtn"
                          >
                            APPLY
                          </Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/*<div style={overlayTextStyle}>
            <h1>Coming Soon</h1>
         </div>*/}
        </Container>
      ) : (
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <div className="title-one">
                <h2
                  className="text-dark wow fadeInUp"
                  data-wow-delay="0.3s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.3s",
                    fontSize: "50px",
                    fontWeight: "300",
                  }}
                >
                  New job listing
                </h2>
              </div>
            </div>

            <div>
              <Link to="/job-portal/job" className="btn-six d-lg-inline-block">
                Explore all jobs
              </Link>
            </div>
          </div>

          <div
            className="job-listing-wrapper border-wrapper mt-80 lg-mt-40 wow fadeInUp"
            style={{ visibility: "visible" }}
          >
            {jobListings.map((jobList, index) => (
              <div
                key={index}
                className="job-list-one position-relative bottom-border"
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div className="col-xxl-3 col-lg-4">
                    <div className="job-title d-flex align-items-center">
                      <div className="logoc">
                        
                      </div>
                      <Link
                        to="/job-portal"
                        style={{ width: "20vw" }}
                        className="positiondev"
                      >
                        {jobList.job_title}
                      </Link>
                    </div>
                  </div>

                  <div
                    style={{ width: "15vw" }}
                    className="col-lg-3 col-md-4 col-sm-6 ms-auto"
                  >
                    <div className="positiondev">
                      <Link to="/job-portal" style={{ color: "#7f29cf" }}>
                      {formatDate(jobList.published_at)}
                      </Link>
                      <div className="job-date">
                        <Link to="/job-portal/company" className="positiondev">
                          {jobList.job_type}
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div
                    style={{ width: "12vw" }}
                    className="col-xxl-2 col-lg-3 col-md-4 col-sm-6 ms-auto xs-mt-10"
                  >
                    <div className="positiondev">
                      <Link to="/job-portal">{jobList.location ? jobList.location: 'NA'}</Link>
                    </div>
                    <div className="jobcategorys">
                      <Link to="/job-portal">{jobList.workplaceType} </Link>
                    </div>
                  </div>

                  <div
                    style={{ width: "12vw", marginTop: "12px" }}
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
          </div>
        </div>
      )}
    </section>
  );
};

export default JobListing;
