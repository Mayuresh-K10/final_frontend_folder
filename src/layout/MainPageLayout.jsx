import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navigation/Navbar";
import Footer from "../components/Navigation/Footer";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const MainPageLayout = () => {
  const location = useLocation();
  const isNavbarExcluded =
    location.pathname === "/coming-soon" ||
    location.pathname.startsWith("/job-portal/dashboard/") ||
    location.pathname === "/admin-dashboard" ||
    location.pathname === "/company-dashboard" ||
    location.pathname ===  "/dashboard/candidate-dashboard" ||
    location.pathname ===  "/dashboards/modern";

  //  Navbar will be shown on all pages except: /coming-soon, /job-portal/dashboard/ and /admin-dashboard

  const isFooterExcluded = location.pathname === "/" || isNavbarExcluded;

  // Footer will be shown on all pages except: homepage ("/"), /coming-soon, /job-portal/dashboard/ and /admin-dashboard,

  return (
    <>
      {!isNavbarExcluded && (
        <Box>
          <Navbar />
        </Box>
      )}
      <Box>
        <Outlet />
      </Box>
      {!isFooterExcluded && !isNavbarExcluded && (
        <Box>
          <Footer />
        </Box>
      )}
    </>
  );
};

export { MainPageLayout };
