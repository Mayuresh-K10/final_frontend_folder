import React from "react";
import { Typography, Box, Button } from "@mui/material";

import jobman from "../Assets/jobman.png";
import qualityJob from "../Assets/qualityJob.png";
import topCompany from "../Assets/topCompany.png";
import extraCharge from "../Assets/extraCharge.png";
import interntional from "../Assets/international.webp";
import shield from "../Assets/shield.png";
import star1 from "../Assets/star1.svg";
import './CSS/JobPortal.css';
import '../components/CSS/JobPortal.css';

const GetTheJob = () => {
  return (
    <section
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "0rem 1.25rem 9rem",
        boxSizing: "border-box",
        width: "100%",
        textAlign: "left",
        fontSize: "2.25rem",
        color: "#131517",
        marginTop: "8.5rem",
      }}
    >
      <Box
        sx={{
          width: "70rem",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "3.938rem",
          '@media (max-width:600px)': {
            flexDirection: 'column',
            width: "100%"
          },
          '@media (max-width:128px)': {
            width: "fit-content"
          },
        }}
      >
        <Box
          sx={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            padding: "5.063rem 0rem 0rem",
            boxSizing: "border-box",
            minWidth: "22.438rem",
            maxWidth: "100%",
            '@media (max-width:600px)': {
              width: "fit-content",
              minWidth: '100%'
            },
          }}
        >
          <div
            style={{
              alignSelf: "stretch",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              gap: "3rem",
              maxWidth: "100%",
            }}
          >
            <div
              style={{
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "1rem",
                maxWidth: "100%",
              }}
            >
              <Typography
                sx={{
                  margin: "0",
                  width: "27.813rem",
                  position: "relative",
                  // fontSize: "inherit",
                  letterSpacing: "0.04em",
                  fontSize: "50px",
                  fontWeight: "300",
                  fontFamily: "inherit",
                  display: "flex",
                  alignItems: "center",
                  maxWidth: "100%",
                  '@media (max-width:600px)': {
                    fontSize: "30px",
                    textAlign: 'center',
                    fontWeight: "500"
                  },
                  '@media (max-width:1280px)': {
                    fontSize: "30px",
                    textAlign: 'center',
                    fontWeight: "500"
                  }
                }}
              >
                Why are we the most well-liked?
              </Typography>
              <Typography
                sx={{
                  alignSelf: "stretch",
                  position: "relative",
                  fontSize: "1rem",
                  letterSpacing: "0.04em",
                  lineHeight: "1.5rem",
                  color: "#24282d",
                  '@media (max-width:600px)': {
                    fontSize: "14px"
                  }
                }}
              >
                Collegecue Careers connects job seekers and employers through personalized and efficient job connections that cater directly to the needs of job seekers and employers. We help students and professionals find roles where they can thrive by focusing on individual skills, goals, and career aspirations. We facilitate firms in the faster hiring process so that they get the perfect fit to match their specific requirements; therefore, college cue careers becomes the one place most of the students would want to apply through and on the flip side, most firms have been seeking employees to be part of them.
              </Typography>
            </div>
            <div
              style={{
                width: "30.75rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "1rem",
                maxWidth: "100%",
              }}
            >
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "1rem",
                }}
              >
                <Button
                  startIcon={
                    <img alt="" src={qualityJob} className="qualityjob" />
                  }
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#24282d",
                    fontSize: "16",
                    background: "#fff",
                    borderRadius: "8px",
                    "&:hover": { background: "#fff" },
                    height: "4.5rem",
                    flex: "0.8324",
                    minWidth: "9.688rem",
                    '@media (max-width:600px)': {
                      height: "40px",
                      minWidth: "60px",
                      fontSize: '14px'
                    }
                  }}
                >
                  Quality Job
                </Button>
                <Button
                  startIcon={
                    <img className="qualityjob" alt="" src={topCompany} />
                  }
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#24282d",
                    fontSize: "16",
                    background: "#fff",
                    borderRadius: "8px",
                    "&:hover": { background: "#fff" },
                    height: "4.5rem",
                    flex: "1",
                    minWidth: "9.688rem",
                    '@media (max-width:600px)': {
                      height: "40px",
                      minWidth: "60px",
                      fontSize: '14px'
                    }
                  }}
                >
                  Top Companies
                </Button>
              </div>
              <div
                style={{
                  alignSelf: "stretch",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  gap: "1rem",
                }}
              >
                <Button
                  startIcon={
                    <img className="qualityjob" alt="" src={extraCharge} />
                  }
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#24282d",
                    fontSize: "16",
                    background: "#fff",
                    borderRadius: "8px",
                    "&:hover": { background: "#fff" },
                    height: "4.5rem",
                    flex: "1",
                    minWidth: "9.688rem",
                    '@media (max-width:600px)': {
                      height: "40px",
                      minWidth: "60px",
                      fontSize: '14px'
                    }
                  }}
                >
                  No Extra Charge
                </Button>
                <Button
                  startIcon={
                    <img className="qualityjob" alt="" src={interntional} />
                  }
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#24282d",
                    fontSize: "16",
                    background: "#fff",
                    borderRadius: "8px",
                    "&:hover": { background: "#fff" },
                    height: "4.5rem",
                    flex: "1",
                    minWidth: "9.688rem",
                    '@media (max-width:600px)': {
                      height: "40px",
                      minWidth: "60px",
                      fontSize: '14px'
                    }
                  }}
                >
                  International Job
                </Button>
              </div>
            </div>
          </div>
        </Box>
        <Box
          sx={{
            width: "31.563rem",
            borderRadius: "16px",
            backgroundColor: "#f3f7fa",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end",
            justifyContent: "flex-start",
            padding: "3rem 2rem 0.031rem 26.688rem",
            boxSizing: "border-box",
            rowGap: "20px",
            maxWidth: "100%",
            minWidth: "31.563rem",
            '@media (max-width:600px)': {
              width: 'auto',
              minWidth: "100%",
              flexDirection: 'column',
              padding: "2rem 0rem 0rem 2rem",
            },
            '@media (max-width:1280px)': {
              width: 'auto',
              maxWidth: '0%',
              flexDirection: 'column',
              padding: "-2rem -10rem 0rem 2rem",
            }
          }}
        >
          <Box
            sx={{
              marginLeft: "-30.187rem",
              height: "31.094rem",
              width: "30.188rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              padding: "1.188rem 0rem",
              boxSizing: "border-box",
              position: "relative",
              flexShrink: "0",
              debugCommit: "f6aba90",
              '@media (max-width:600px)': {
                height: "auto",
                width: "fit-content",
                marginLeft: "0rem",
              },
              '@media (max-width:1280px)': {
                height: "auto",
                width: "fit-content",
                marginLeft: "0rem",
              }

            }}
          >
            <Button
              startIcon={<img width="24px" height="24px" alt="" src={shield} />}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#131517",
                fontSize: "18",
                background: "#fff",
                borderRadius: "12px",
                "&:hover": { background: "#fff" },
                width: "200px",
                height: "60px",
                zIndex: "1",
                '@media (max-width:600px)': {
                  marginLeft: "-20rem",
                  marginTop: "-2rem",
                  fontSize: "12px",
                  height: '40px',
                  width: '140px'
                },
                '@media (max-width:1280px)': {
                  marginLeft: "-20rem",
                  marginTop: "-2rem",
                  fontSize: "12px",
                  height: '40px',
                  width: '140px'
                }
              }}
            >
              100% Trusted
            </Button>
            <Box
              sx={{
                width: "21.313rem",
                height: "100%",
                position: "absolute",
                margin: "0",
                top: "0rem",
                right: "0rem",
                bottom: "0rem",
              }}
            >
              <img
                className="jobman"
                alt=""
                src={jobman}
              />
              <img className="starone" loading="lazy" alt="" src={star1} />
            </Box>
            <img
              style={{
                width: "2.25rem",
                height: "2.25rem",
                position: "absolute",
                margin: "0",
                bottom: "2.906rem",
                left: "5.438rem",
              }}
              loading="lazy"
              alt=""
              src={star1}
            />
          </Box>
          <Box
            sx={{
              height: "13.781rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
            }}
          >
            <img
              style={{
                width: "2.875rem",
                height: "2.875rem",
                position: "relative",
                flexShrink: "0",
                debugCommit: "f6aba90",
              }}
              loading="lazy"
              alt=""
              src={star1}
            />
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default GetTheJob;