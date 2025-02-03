import React from "react";
import LevelCard from "../../components/Cards/LevelCard";
import { Box } from "@mui/material";
import img1 from "./images/banner/img1.jpg";
import img2 from "./images/banner/img2.jpg";
import img3 from "./images/banner/img3.jpg";
import img4 from "./images/banner/img4.jpg";
import img5 from "./images/banner/img5.jpg";
import img6 from "./images/banner/img6.jpg";
import { useState } from "react";
import ViewMoreButton from "../../components/Buttons/ViewMoreButton";

const LevelAllCards = () => {
  const data = [
    {
      imagePath: img1,
      levelHeading: "After 10th Courses",
      btn: [
        {
          courseName: "ITI",
          link: "/top-universities",
        },
        {
          courseName: "Arts",
          link: "/top-universities",
        },
        {
          courseName: "Dental",
          link: "/top-universities",
        },
        {
          courseName: "Animation",
          link: "/top-universities",
        },
        {
          courseName: "Vocational courses",
          link: "/top-universities",
        },
        {
          courseName: "Hotel management",
          link: "/top-universities",
        },
      ],
      exploreAllCourseLink: "/top-universities",
    },
    {
      imagePath: img2,
      levelHeading: "Graduation Courses",
      btn: [
        {
          courseName: "Engineering",
          link: "/top-universities",
        },
        {
          courseName: "Arts",
          link: "/top-universities",
        },
        {
          courseName: "Commerce",
          link: "/top-universities",
        },
        {
          courseName: "Management",
          link: "/top-universities",
        },
        {
          courseName: "Medical ",
          link: "/top-universities",
        },
        {
          courseName: "Design",
          link: "/top-universities",
        },
        {
          courseName: "Education",
          link: "/top-universities",
        },
        {
          courseName: "Paramedical",
          link: "/top-universities",
        },
        {
          courseName: "Science",
          link: "/top-universities",
        },
      ],
      exploreAllCourseLink: "/top-universities",
    },
    {
      imagePath: img3,
      levelHeading: "Diploma Courses",
      btn: [
        {
          courseName: "Management",
          link: "/top-universities",
        },
        {
          courseName: "Design",
          link: "/top-universities",
        },
        {
          courseName: "Medical",
          link: "/top-universities",
        },
        {
          courseName: "Engineering",
          link: "/top-universities",
        },
        {
          courseName: "Science",
          link: "/top-universities",
        },
        {
          courseName: "Paramedical",
          link: "/top-universities",
        },
        {
          courseName: "Law",
          link: "/top-universities",
        },
        {
          courseName: "Hotel management",
          link: "/top-universities",
        },
        {
          courseName: "Arts",
          link: "/top-universities",
        },
      ],
      exploreAllCourseLink: "/top-universities",
    },
    {
      imagePath: img4,
      levelHeading: "Certification Courses",
      btn: [
        {
          courseName: "Science",
          link: "/top-universities",
        },
        {
          courseName: "Management",
          link: "/top-universities",
        },
        {
          courseName: "Education",
          link: "/top-universities",
        },
        {
          courseName: "Agriculture",
          link: "/top-universities",
        },
        {
          courseName: "Design",
          link: "/top-universities",
        },
        {
          courseName: "Engineering",
          link: "/top-universities",
        },
        {
          courseName: "Computer application",
          link: "/top-universities",
        },
        {
          courseName: "Arts",
          link: "/top-universities",
        },
        {
          courseName: "Law",
          link: "/top-universities",
        },
      ],
      exploreAllCourseLink: "/top-universities",
    },
    {
      imagePath: img5,
      levelHeading: "Masters Courses",
      btn: [
        {
          courseName: "Management",
          link: "/top-universities",
        },
        {
          courseName: "Engineering",
          link: "/top-universities",
        },
        {
          courseName: "Law",
          link: "/top-universities",
        },
        {
          courseName: "Commerce",
          link: "/top-universities",
        },
        {
          courseName: "Dental",
          link: "/top-universities",
        },
        {
          courseName: "Medical",
          link: "/top-universities",
        },
        {
          courseName: "Science",
          link: "/top-universities",
        },
        {
          courseName: "Veterinary science",
          link: "/top-universities",
        },
        {
          courseName: "Arts",
          link: "/top-universities",
        },
      ],
      exploreAllCourseLink: "/top-universities",
    },
    {
      imagePath: img6,
      levelHeading: "Ph.d Research Courses",
      btn: [
        {
          courseName: "Pharmacy",
          link: "/top-universities",
        },
        {
          courseName: "Arts",
          link: "/top-universities",
        },
        {
          courseName: "Management",
          link: "/top-universities",
        },
        {
          courseName: "Engineering",
          link: "/top-universities",
        },
        {
          courseName: "Agriculture",
          link: "/top-universities",
        },
        {
          courseName: "Law",
          link: "/top-universities",
        },
        {
          courseName: "Science",
          link: "/top-universities",
        },
        {
          courseName: "Commerce",
          link: "/top-universities",
        },
        {
          courseName: "Medical",
          link: "/top-universities",
        },
      ],
      exploreAllCourseLink: "/top-universities",
    },
  ];
  const [displayedCards, setDisplayedCards] = useState(6);
  const [showAll, setShowAll] = useState(false);
  const handleViewMore = () => {
    setDisplayedCards(data.length);
    setShowAll(true);
  };

  const handleViewLess = () => {
    setDisplayedCards(6);
    setShowAll(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
          overflow: "hidden",
          padding: "15px 15px",
          flexDirection: "row",
          "@media (max-width: 800px)": {
            minWidth: "300px",
            flexDirection: "column",
            padding: "0rem",
            margin: "0rem",
          },
        }}
      >
        {data.slice(0, displayedCards).map((item, index) => (
          <LevelCard {...item} key={index} />
        ))}
      </Box>
      {!showAll && displayedCards < data.length && (
        <ViewMoreButton onClick={handleViewMore} heading="Show more Streams" />
      )}
      {showAll && (
        <ViewMoreButton onClick={handleViewLess} heading="Show less Streams" />
      )}
    </Box>
  );
};

export default LevelAllCards;
