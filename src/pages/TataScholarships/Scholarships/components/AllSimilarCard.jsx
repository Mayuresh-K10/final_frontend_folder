import React from "react";
import SimilarScholarships from "./SimilarScholarships";

export default function AllSimilarCard() {
  let data = [
    {
      heading: "Charles Wallace India Trust",
      point1: "International Student Eligible:",
      point2: "Amount:",
      point3: "Type:",
      point4: "Level Of Study:",
      point5: "Number Of Scholarships:",
      ans1: " Yes",
      ans2: "Variable Amount",
      ans3: "Awards",
      ans4: "N/A",
      ans5: "N/A",
    },

    {
      heading: "Charles Wallace India Trust",
      point1: "International Student Eligible:",
      point2: "Amount:",
      point3: "Type:",
      point4: "Level Of Study:",
      point5: "Number Of Scholarships:",
      ans1: " Yes",
      ans2: "Variable Amount",
      ans3: "Awards",
      ans4: "N/A",
      ans5: "N/A",
    },

    {
      heading: "Charles Wallace India Trust",
      point1: "International Student Eligible:",
      point2: "Amount:",
      point3: "Type:",
      point4: "Level Of Study:",
      point5: "Number Of Scholarships:",
      ans1: " Yes",
      ans2: "Variable Amount",
      ans3: "Awards",
      ans4: "N/A",
      ans5: "N/A",
    },
  ];

  return (
    <>
      {data.map(
        (
          {
            heading,
            point1,
            point2,
            point3,
            point4,
            point5,
            ans1,
            ans2,
            ans3,
            ans4,
            ans5,
          },
          index
        ) => (
          <SimilarScholarships
            heading={heading}
            point1={point1}
            point2={point2}
            point3={point3}
            point4={point4}
            point5={point5}
            ans1={ans1}
            ans2={ans2}
            ans3={ans3}
            ans4={ans4}
            ans5={ans5}
            key={index}
          />
        )
      )}
    </>
  );
}
