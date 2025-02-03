import React from "react";
import InterestCard from "../../components/Cards/InterestCard";
import { Box } from "@mui/material";
import clogo from "./images/DEV/8.png";
import manage from "./images/DEV/7.png";
import arts from "./images/DEV/9.png";
import law from "./images/DEV/10.png";
import eng from "./images/DEV/1.png";
import logo4 from "../../Assets/HomePage/Computer.webp";
import logo5 from "../../Assets/HomePage/notebook.webp";
import med from "./images/DEV/4.png";
import sci from "./images/DEV/5.png";
import ViewMoreButton from "../../components/Buttons/ViewMoreButton";
import { useState } from "react";

const InterestAllCards = () => {
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

  const data = [
    {
      logo: clogo,
      heading: "Commerce",
      btn: [
        { courseName: "M.com", link: "/choose-courses/courselist" },
        { courseName: "B.com", link: "/choose-courses/courselist" },
        { courseName: "B.com(H)", link: "/choose-courses/courselist" },
      ],
      exploreAllCourseLink: "/choose-courses/courselist",
    },
    {
      logo: manage,
      heading: "Management",
      btn: [
        { courseName: "BBA/BBM", link: "/choose-courses/courselist" },
        { courseName: "MBA", link: "/choose-courses/courselist" },
        { courseName: "BHM", link: "/choose-courses/courselist" },
      ],
      exploreAllCourseLink: "/choose-courses/courselist",
    },
    {
      logo: arts,
      heading: "Arts",
      btn: [
        {
          courseName: "BA",
          link: "/choose-courses/courselist",
        },
        {
          courseName: "BFA",
          link: "/choose-courses/courselist",
        },
        {
          courseName: "MA",
          link: "/choose-courses/courselist",
        },
      ],
      exploreAllCourseLink: "/choose-courses/courselist",
    },
    {
      logo: logo4,
      heading: "Computer Application",
      btn: [
        {
          courseName: "BE/B.tech",
          link: "/choose-courses/courselist",
        },
        {
          courseName: "ME/M.tech",
          link: "/choose-courses/courselist",
        },
        {
          courseName: "Polytechnic",
          link: "/choose-courses/courselist",
        },
      ],
      exploreAllCourseLink: "/choose-courses/courselist",
    },
    {
      logo: logo5,
      heading: "Education",
      btn: [
        {
          courseName: "BE/B.tech",
          link: "/choose-courses/courselist",
        },
        {
          courseName: "ME/M.tech",
          link: "/choose-courses/courselist",
        },
        {
          courseName: "Polytechnic",
          link: "/choose-courses/courselist",
        },
      ],
      exploreAllCourseLink: "/choose-courses/courselist",
    },
    {
      logo: law,
      heading: "Law",
      btn: [
        {
          courseName: "BE/B.tech",
          link: "/choose-courses/courselist",
        },
        {
          courseName: "ME/M.tech",
          link: "/choose-courses/courselist",
        },
        {
          courseName: "Polytechnic",
          link: "/choose-courses/courselist",
        },
      ],
      exploreAllCourseLink: "/choose-courses/courselist",
    },
    {
      logo: eng,
      heading: "Engineering",
      btn: [
        {
          courseName: "BE/B.tech",
          link: "/choose-courses/courselist",
        },
        {
          courseName: "ME/M.tech",
          link: "/choose-courses/courselist",
        },
        {
          courseName: "Polytechnic",
          link: "/choose-courses/courselist",
        },
      ],
      exploreAllCourseLink: "/choose-courses/courselist",
    },
    {
      logo: med,
      heading: "Medical",
      btn: [
        {
          courseName: "BAMS",
          link: "/choose-courses/courselist",
        },
        {
          courseName: "B.Sc",
          link: "/choose-courses/courselist",
        },
        {
          courseName: "BHMS",
          link: "/choose-courses/courselist",
        },
      ],
      exploreAllCourseLink: "/choose-courses/courselist",
    },
    {
      logo: sci,
      heading: "Science",
      btn: [
        {
          courseName: "M.Sc",
          link: "/choose-courses/courselist",
        },
        {
          courseName: "B.Sc",
          link: "/choose-courses/courselist",
        },
        {
          courseName: "B.F.Sc",
          link: "/choose-courses/courselist",
        },
      ],
      exploreAllCourseLink: "/choose-courses/courselist",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        "@media (max-width: 800px)": {
          flexDirection: "column",
          padding: "0rem",
          margin: "0rem",
        },
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
          gap: "2rem",
          "@media (max-width: 600px)": {
            padding: "0rem",
            margin: "0rem",
          },
        }}
      >
        {data.slice(0, displayedCards).map((item, index) => (
          <InterestCard {...item} key={index} />
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

export default InterestAllCards;
