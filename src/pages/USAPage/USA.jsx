import React from "react";
import Country from "../../components/Country/Country";
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
  USAFAQsData,
} from "./Data";

const USA = () => {
  const countryName = "United State";

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
        Scholarship={{ScholarshipData,countryName}}
        Exam={ExamsData}
        FAQs={USAFAQsData}
      />
    </>
  );
};

export {USA};
