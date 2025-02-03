import React from "react";
import Country from "../../components/Country/Country";
import {
  TopPlacesData,
  topCollegesCard,
  CollegeArticleData,
  AcadCounsellor,
  CollegeChooseData,
  FCCard,
  CollegeRankingData,
  ApplicationDatesData,
  PopularScholarshipData,
  ExamsData,
  CanadaFAQsData,
} from "./Data";

const Canada = () => {
  const countryName = "Canada";

  return (
    <>
      <Country
        countryName={countryName}
        topPlaces={TopPlacesData}
        topCollages={topCollegesCard}
        Articles={CollegeArticleData}
        Counsellor={AcadCounsellor}
        CollageChoose={CollegeChooseData}
        FC={FCCard}
        Ranking={CollegeRankingData}
        ApplicationDate={ApplicationDatesData}
        Scholarship={{PopularScholarshipData,countryName}}
        Exam={ExamsData}
        FAQs={CanadaFAQsData}
      />
    </>
  );
};

export {Canada};
