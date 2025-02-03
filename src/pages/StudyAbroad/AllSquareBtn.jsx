import { Stack } from "@mui/material";
import React from "react";
import SquareBtn from "../../components/Buttons/SquareBtn";
import { useNavigate } from "react-router-dom";
import img1business from "./images/futureBtn/business5.png";
import img2science from "./images/futureBtn/science2.png";
import img3accounting from "./images/futureBtn/accounting3.png";
import img4finance from "./images/futureBtn/finance3.png";
import img5humanities from "./images/futureBtn/humanities3.png";
import img6eco from "./images/futureBtn/eco3.png";
import img7env from "./images/futureBtn/env3.png";
import img8math from "./images/futureBtn/math2.png";
import img9history from "./images/futureBtn/history3.png";
import img10chemistary from "./images/futureBtn/chemistary3.png";
import computerscience from "./images/futureBtn/ComputerScienceandInformationSystems.png";
import anthropolgy from "./images/futureBtn/Anthropology.png";
import biologicalscience from './images/futureBtn/biologicalscience.png';
import english from "./images/futureBtn/EnglishLanguageandLiterature.png";
import liberty from './images/futureBtn/LibraryandInformationManagement.png';
import performingarts from './images/futureBtn/PerformingArts.png';

const AllSquareBtn = () => {

  const navigate = useNavigate();

  const data = [
    {
      image: img1business,
      name: "Business and Management Studies",
      noOfCollege: "1577 Colleges",
      link: "#",
    },
    {
      image: biologicalscience,
      name: "Biological Sciences",
      noOfCollege: "1369 Colleges",
      link: "#",
    },
    {
      image: computerscience,
      name: "Computer Science and Information Systems",
      noOfCollege: "1369 Colleges",
      link: "#",
    },
    {
      image: img4finance,
      name: "Finance",
      noOfCollege: "1577 Colleges",
      link: "#",
    },
    {
      image: performingarts,
      name: "Performing Arts",
      noOfCollege: "1256 Colleges",
      link: "#",
    },
    {
      image: english,
      name: "English Language and Literature",
      noOfCollege: "1242 colleges",
      link: "#",
    },
    {
      image: anthropolgy,
      name: "Anthropology",
      noOfCollege: "1577 Colleges",
      link: "#",
    },

    {
      image: img8math,
      name: "Mathematics",
      noOfCollege: "1577 Colleges",
      link: "#",
    },
    {
      image: img9history,
      name: "History",
      noOfCollege: "1256 Colleges",
      link: "#",
    },
    {
      image: img7env,
      name: "Sustainable Development",
      noOfCollege: "1242 colleges",
      link: "#",
    },
  ];

  const handleButtonClick = (subject) => {
    navigate(`/study-abroad/${subject}`);
  };

  return (
    <>
      <Stack
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        spacing={8}
        useFlexGap
        sx={{
          marginY: "20px",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
       {data.map((item, index) => (
        <SquareBtn
          key={index}
          image={item.image}
          name={item.name}
          onClick={() => handleButtonClick(item.name)}
        />
      ))}
      </Stack>
    </>
  );
};

export default AllSquareBtn;
