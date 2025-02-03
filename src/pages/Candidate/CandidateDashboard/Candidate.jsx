import React from "react";
import SideMenu from "../Candidate/sideMenu";
import Resume from "../Candidate/resume";
import Dashboard from "../Student/dashboard";
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
import axios from 'axios';
import SavedJobs from "../Candidate/SavedJobs";

const Candidate = () => {

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
        {/* Sidebar */}
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
          <SideMenu  />
        </Box>

        {/* Main Content */}
        <Box sx={{ gridColumn: "span 4", '@media(max-width:1300px)':{gridColumn:'span 5'} }}>
          
          <Header />
          <Box sx={{marginTop:'80px', "@media (max-width: 1300px)": {
              paddingLeft:'0px'
            },}}>
            <Routes>
 
                  <Route path="/*" exact Component={JobSeekerdashboard} />
                  <Route path="/myProfile" Component={Profile} />
                  <Route path="/messages" Component={Messages} />
                  <Route path="/jobAlert" Component={JobAlert} />
                  <Route path="/accountSettings" Component={Settings} />
                  <Route path="/news" Component={NewsSection} />
                  <Route path="/resume" Component={MyResume} />
                  <Route path="/interview" Component={Interview} />
                  <Route path="/savedJob" Component={SavedJobs} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Candidate;
