import React from "react";
import CollegeCourseFees from "./Components/CollegeCourseFees";
import CourseSelect from "./Components/CourseSelect";
import CourseFinderTag from "./Components/CourseFinderTag";
import Ratings from "../Reviews/Review/component/CollegeRating";




import AllQuesAns from "./ReviewComponent/AllQuesAns";


function CollegeFees({ collegeInfo }) {
  return (
    <>
    <CollegeCourseFees collegeInfo={collegeInfo} />
    <CourseSelect collegeInfo={collegeInfo} />
    <CourseFinderTag collegeInfo={collegeInfo} />
    <Ratings collegeInfo={collegeInfo} />
    <AllQuesAns collegeInfo={collegeInfo} />
    </>
  );
}
export default CollegeFees;
