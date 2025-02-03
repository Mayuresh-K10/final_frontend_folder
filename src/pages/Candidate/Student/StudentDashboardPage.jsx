import React from "react";
import SideMenu from "../Candidate/sideMenu";
import Resume from "../Candidate/resume";
import Dashboard from "./dashboard";
import Profile from "../Candidate/profile";
import Messages from "../Candidate/messages";
import JobAlert from "../Candidate/jobAlert";
import JobSaved from "../Candidate/jobSaved";
import Settings from "../Candidate/settings";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/system";
import Education from "../Candidate/Education";
import WorkExperienceSkills from "../Candidate/WorkExperienceSkills";
import NewsSection from "../Candidate/NewsSection";
import ProjectandCourse from "../Candidate/ProjectNcourse";
import AwardandPublication from "../Candidate/AwardandPublication";
import NewsCollege from "../Student/NewsCollege";
import Studentloan from "../Student/Studentloan";
import Header from "../Candidate/header";
import JobSeekerdashboard from "../Candidate/JobSeekerdashboard";
import MyResume from "../Candidate/MyResume";
import Interview from "../Candidate/Interview";
import { useState, useEffect } from "react";
import axios from "axios";
import StudentHeader from "./StudentHeader";
import StudentSideMenu from "./StudentSideMenu";
import StudentProfile from "./StudentProfile";
import StudentDashboard from "./dashboard";
import StudentMessages from "./StudentMessage";
import StudentResume from "./StudentResume";
import StudentJobAlert from "./StudentJobAlert";
import StudentSetting from "./StudentSetting";
import StudentSavedJob from "./StudentSavedJob";

const StudentDashboardPage = () => {
    return (
        <>
            <Box
                sx={{
                    background: "#313893",
                    display: "grid",
                    gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
                    minHeight: "100vh",
                }}
            >
                <Box
                    sx={{
                        gridColumn: "span 1",
                        minHeight: "100vh",
                        display: "block",
                        "@media (max-width: 1300px)": {
                            display: "none",
                        },
                    }}
                >
                    <StudentSideMenu />
                </Box>
                <Box
                    sx={{
                        gridColumn: "span 4",
                        "@media(max-width:1300px)": { gridColumn: "span 5" },
                    }}
                >
                    <StudentHeader />
                    <Box
                        sx={{
                            marginTop: "80px",
                            "@media (max-width: 1300px)": {
                                paddingLeft: "0px",
                            },
                        }}
                    >
                        <Routes>
                            <Route
                                path="/*"
                                exact
                                element={<StudentDashboard />}
                            />
                            <Route
                                path="/myProfile"
                                element={<StudentProfile />}
                            />
                            <Route
                                path="/messages"
                                element={<StudentMessages />}
                            />
                            <Route
                                path="/jobAlert"
                                element={<StudentJobAlert />}
                            />
                            <Route
                                path="/accountSettings"
                                element={<StudentSetting />}
                            />
                            <Route path="/news" Component={NewsCollege} />
                            <Route path="/loan" Component={Studentloan} />
                            <Route path="/resume" element={<StudentResume />} />
                            <Route
                                path="/savedJob"
                                element={<StudentSavedJob />}
                            />
                        </Routes>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default StudentDashboardPage;
