import React from "react";
import banner1 from "./images/banner/australia.png";
import banner2 from "./images/banner/banner1.png";
import banner3 from "./images/banner/canada.png";
import banner4 from "./images/banner/hongcong.png";
import banner5 from "./images/banner/hongcong.png";
import banner6 from "./images/banner/germany.png";
import BlogCard from "../../components/Cards/BlogCard";
import { Box } from "@mui/material";

const AllBlogCard = () => {
  const data = [
    {
      image: banner1,
      date: "",
      title:
        "Study in France: Study Destination Guide for International Student...",
      description:
        "France, the 6th largest economy in the world, and among the largest host countries for international students. In 2020, France welcomed 358,000 students from across the world, with a substantial number being from India.",
      readMoreLink: "#",
    },
    {
      image: banner2,
      date: "",
      title: "Study in Canada: Complete Guide for Indian Students...",
      description:
        "Canada has been one of the favorite destinations for students across the globe. The reasons for studying in Canada are numerous however, the major one being the quality of education along-side the welcoming culture.",
      readMoreLink: "#",
    },
    {
      image: banner3,
      date: "",
      title:
        "Australia to Recognize Higher Education Degrees from Indian Insti...",
      description:
        "New Delhi: India and Australia to sign a mutual framework today, March 2, 2023 allowing the later country to recognize higher education degrees from institutes in India. Engineering, medicine, law and other professional courses have been excluded from the framework..",
      readMoreLink: "#",
    },
    {
      image: banner4,
      date: "",
      title:
        "India and Germany form bilateral partnership to facilitate two-wa...",
      description:
        "India and Germany will soon sign a migration and mobility agreement, facilitating the two-way movement of students, professionals and researchers, and also addressing the challenges of illegal migration. Prime Minister Narendra Modi and German Chancellor Olaf Scholz.......",
      readMoreLink: "#",
    },
    {
      image: banner5,
      date: "",
      title: "Why study in Hong Kong?...",
      description:
        "As an emerging student hub, Hong Kong welcomes all international students to come and study in Hong Kong. More than 30,123 international students are present in Hong Kong as per the data released by UNESCO. The country ranks 8th on the list of best student cities in the world.",
      readMoreLink: "#",
    },
    {
      image: banner6,
      date: "",
      title: "Why study in Hong Kong?...",
      description:
        "When compared to other colleges and universities in Europe and the United Kingdom, Ireland's colleges and universities are leading the way in this sector, since they provide non-traditional education through a distinct and diverse teaching methodology.",
      readMoreLink: "#",
    },
  ];

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "start",
          height: "auto",
          flexWrap: "wrap",
          margin: "1rem 0",
        }}
      >
        {data.map((item, index) => (
          <BlogCard key={index} {...item} />
        ))}
      </Box>
    </>
  );
};

export default AllBlogCard;
