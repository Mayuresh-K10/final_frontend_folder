import React from 'react'
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
  GermanyFAQsData,
} from "./Data";

const EcuadorPage = () => {
  const countryName ="Ecuador";
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
      FAQs={GermanyFAQsData}
    />
  </>
  )
}

export default EcuadorPage