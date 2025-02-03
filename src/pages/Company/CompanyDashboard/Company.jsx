import React from "react";
import { Routes, Route } from "react-router-dom";
import JobPost from "../Company/jobPost";
import CompanyDashboard from "../Company/companyDashboard";
import CompanyProfile from "../Company/companyProfile";
import CompanyMessages from "../Company/companyMessages";
import SubmitJob from "../Company/submitJob";
import SavedProfile from "../Company/savedProfile";
import Membership from "../Company/membership";
import Settings from "../../Candidate/Candidate/settings";
import ComingSoonPage from "../Company/commingSoon";
import CollegeProfile from "../Collegesuniversity/CollegeProfile";
import CompanySideMenu from "../Company/companySidemenu";
import CollegeMessages from "../Collegesuniversity/CollegeMessage";
import CollegeJobSubmit from "../Collegesuniversity/CollegeJobSubmit";
import JobDescription from "../Company/JobDescription";
import CompanyApplicants from "../Company/CompanyApplicants";
import CompanyHeader from "../Company/companyHeader";
import { Box } from "@mui/system";
import CollegeDashboard from "../Collegesuniversity/CollegeDashboard";
import Interview from "../Company/Interview";
import CompanyAccountSettings from "../Company/CompanyAccountSetting";

function Company({ isCompany }) {
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
          <CompanySideMenu isCompany={isCompany} />
        </Box>

        {/* Main Content */}
        <Box sx={{ gridColumn: "span 4", '@media(max-width:1300px)': { gridColumn: 'span 5' } }}>

          <CompanyHeader isCompany={isCompany} />
          <Box sx={{
            marginTop: '80px', "@media (max-width: 1080px)": {
              paddingLeft: '0px'
            },
          }}>
            <Routes>

              <Route path="/*" element={<CompanyDashboard />} />
              <Route path="companyProfile" element={<CompanyProfile />} />
              <Route path="companyMessages" element={<CompanyMessages />} />
              <Route path="submitJob" element={<SubmitJob />} />
              <Route path="savedProfile" element={<SavedProfile />} />
              <Route path="Membership" element={<Membership />} />
              <Route path="profileEvaluator" element={<ComingSoonPage />} />
              <Route path="accountSettings" element={<CompanyAccountSettings />} />
              <Route path="jobPost/*" element={<JobPost />} />
              <Route path="jobPost/:companyId/:jobId" element={<JobDescription />} />
              <Route path="jobPost/:companyId/:jobId/:applicantId" element={<CompanyApplicants />} />
              <Route path="interview" element={<Interview />} />


            </Routes>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Company;




