import React, { useLayoutEffect } from "react";
import HeroSection from "./components/HeroSection";
import InnerTextSection from "./components/InnerTextSection";
import GetTheJob from "./components/GetTheJob";
import JobListing from "./components/JobListing";
import TrustedBy from "./components/TrustedBy";
import FooterButtons from "./components/FooterButtons";
import SearchJob from "./components/searchJob";
import TrustedCompany from "./components/trustedCompany";
const JobPortal = () => {
    useLayoutEffect(() => {
        // window.scrollTo(0, 0);
    });
    return (
        <>
            <HeroSection />
            {/*<SearchJob />*/}
            <TrustedCompany />
            <InnerTextSection />
            <GetTheJob />
            <JobListing />
            <TrustedBy />
            <FooterButtons isStarted={true} />
        </>
    );
};

export default JobPortal;
