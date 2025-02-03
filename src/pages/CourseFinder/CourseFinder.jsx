import React from "react";
import MainPageLayout from "./components/MainPage/MainPageLayout";
import Login from "./components/LoginPage/Login";
import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

function CourseFinder() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Search and compare courses offered by different universities, including details like duration, fees, curriculum, and career prospects." />
        <meta name="google-adsense-account" content="ca-pub-3919517798801147"></meta>
      </Helmet>
      <Routes>
        <Route path="/" element={<MainPageLayout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default CourseFinder;
