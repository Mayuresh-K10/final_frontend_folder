import React from "react";
// import img1 from './images/button/findcourse.png'
import img1 from "./images/button/findco.png";
import img2 from "./images/button/testprep3.png";
import img3 from "./images/button/applica.png";
import img4 from "./images/button/fund.png";
import img5 from "./images/button/visa3.png";
import img6 from "./images/button/travel3.png";
import img7 from "./images/button/degree.png";
import { Stack } from "@mui/material";
import RoundBtn from "../../components/Buttons/RoundBtn";

const AllRoundeBtn = () => {
  const data = [
    {
      image: img1,
      name: "Find Course/ University",
      link: "#",
    },
    {
      image: img2,
      name: "TEST PREP",
      link: "#",
    },
    {
      image: img3,
      name: "Application ",
      link: "#",
    },
    {
      image: img4,
      name: "Funding",
      link: "#",
    },
    {
      image: img5,
      name: "Visa",
      link: "#",
    },
    {
      image: img6,
      name: "Travel and Stay",
      link: "#",
    },
    {
      image: img7,
      name: "Post Degree",
      link: "#",
    },
  ];
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      alignItems="center"
      useFlexGap
      flexWrap="wrap"
    >
      {data.map((item, index) => (
        <RoundBtn
          key={index}
          image={item.image}
          name={item.name}
          link={item.link}
        />
      ))}
    </Stack>
  );
};

export default AllRoundeBtn;
