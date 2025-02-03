import React from 'react'
import { Box } from "@mui/system";
import { Routes, Route } from "react-router-dom";
import CollegeProfile from '../CollegeProfile';
import CollegeSubmitJob from '../CollegeJobSubmit';
import CollegeMessages from '../CollegeMessage';
import CollegeMembership from '../CollegeMembership';
import CollegeAccountSettings from '../CollegeAccountSetting';
import CollegeDashboard from '../CollegeDashboard';
import CollegeJobDescription from '../CollegeJobDescription';
import CollegeApplicants from '../CollegeApplicants';
import CollegeHeader from '../CollegeHeader';
import CollegeSideMenu from '../CollegeSideMenu';
import CollegeJobPost from '../CollegeJobPost';


const CollegeDashboardPage = () => {
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
              <CollegeSideMenu />
            </Box>
    
            {/* Main Content */}
            <Box sx={{ gridColumn: "span 4", '@media(max-width:1300px)': { gridColumn: 'span 5' } }}>
    
              <CollegeHeader />
              <Box sx={{
                marginTop: '80px', "@media (max-width: 1080px)": {
                  paddingLeft: '0px'
                },
              }}>
                <Routes>
                    <Route path="/*" element={<CollegeDashboard />} />
                    <Route path="collegeProfile" element={<CollegeProfile/>} />
                      <Route path="jobPost/*" element={<CollegeJobPost />} />
                      <Route path="collegemessage" element={<CollegeMessages />} />
                      <Route path="submitJob" element={<CollegeSubmitJob />} />
                      <Route path="Membership" element={<CollegeMembership />} />
                      <Route path="accountSettings" element={<CollegeAccountSettings />} />
                      <Route path="jobPost/:collegeId/:jobId" element={<CollegeJobDescription />} />
                      <Route path="jobPost/:collegeId/:jobId/:applicantId" element={<CollegeApplicants />} />
                </Routes>
              </Box>
            </Box>
          </Box>
        </>
  )
}

export default CollegeDashboardPage