import React from "react";
import {
  TopPlacesData,
  TopCollegesData,
  CollegeArticleData,
  AcadCounsellor,
  CollegeChooseData,
  FCCard,
  CollegeRankingData,
  ApplicationDatesData,
  ScholarshipData,
  ExamsData,
  IrelandFAQsData,
} from "./Data";
import Country from "../../components/Country/Country";

const IrelandPage = () => {
  const countryName = "Ireland";

  return (
    <>
      <Country
        countryName={countryName}
        topPlaces={TopPlacesData}
        topCollages={TopCollegesData}
        Articles={CollegeArticleData}
        Counsellor={AcadCounsellor}
        CollageChoose={CollegeChooseData}
        FC={FCCard}
        Ranking={CollegeRankingData}
        ApplicationDate={ApplicationDatesData}
        Scholarship={{ScholarshipData, countryName}}
        Exam={ExamsData}
        FAQs={IrelandFAQsData}
      />
    </>
  );
};

export default IrelandPage;
