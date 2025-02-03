import { Box } from "@mui/material";
import React from "react";
import HeadText from "../../components/Headings/HeadText";
import CardComponent from "../../components/Cards/StudyAbroadCard";
import { Abroad } from "../../data/DataFile";

const ChooseYourStudy = () => {
  return (
    <Box
    sx={{
      paddingY: "5rem",
    }}
    >
      <HeadText headText={`Choose Your Study Destination`} />
      
        <Box sx={{width:'100%', display:'flex', flexWrap:'wrap',justifyContent:'space-between',alignItems:'center',gap:'1rem'}}>
          {Abroad.map((val) => {
            return (
              <CardComponent
                img={val.imgg}
                name={val.cardName}
                check={val.check}
                no={val.no}
                fee={val.fee}
                rank={val.ranking}
                guide1={val.guide1}
                guide2={val.guide2}
                guide3={val.guide3}
                guide4={val.guide4}
                keyFact1={val.keyFact1}
                keyFact2={val.keyFact2}
                keyFact3={val.keyFact3}
                link={val.link}
                livingCost={val.avgLivingCost}
              ></CardComponent>
            );
          })}
        </Box>
    </Box>
  );
};

export default ChooseYourStudy;
