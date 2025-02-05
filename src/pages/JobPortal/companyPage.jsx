import React, { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CompanyDetailPagesScroll from "../JobPortal/CompanyDetailPagesScroll";

import CompanyDetailPages from "../JobPortal/CompanyDetailPages";

function CompanyPage() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;

      case "/company-detail-pages":
        title = "";
        metaDescription = "";
        break;

      default: 
        title = "";
        metaDescription = "";
        break;

    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/*" element={<CompanyDetailPages />} />

      <Route path="/jobs" element={<CompanyDetailPagesScroll />} />
    </Routes>
  );
}
export default CompanyPage;
