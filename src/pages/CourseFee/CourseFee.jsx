import React from "react";
import CourseFees from "./Components/CourseFees";
import CourseSelect from "./Components/CourseSelect";
import CourseFinderTag from "./Components/CourseFinderTag";
import Ratings from "../Reviews/Review/component/CollegeRating";
import AllQuesAns from "./ReviewComponent/AllQuesAns";

function CourseFee({ collegeInfo }) {
  return (
    <>
    <CourseFees collegeInfo={collegeInfo} />
    <CourseSelect collegeInfo={collegeInfo} />
    <CourseFinderTag collegeInfo={collegeInfo} />
    <Ratings collegeInfo={collegeInfo} />
    <AllQuesAns collegeInfo={collegeInfo} />
    </>
  );
}
export default CourseFee;
