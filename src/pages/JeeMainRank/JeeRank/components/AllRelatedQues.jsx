import React from "react";
import RelatedQues from "./RelatedQues";
import { Box, Typography } from "@mui/material";
export default function AllRelatedQues() {
  let data = [
    {
      ques: "What is the minimum score for NIT Trichy computer science in JEE (Main) 2021?",
      ans: "Computer science in NIT Trichy is considered to be tough and the dream branch in one of the best colleges. For this, you will have to work",
      name: "Karthik Tanwar",
      avatar: "KT",
      avcolor: "#000",
    },

    {
      ques: "How much marks should one score in JEE mains to get CSE at NIT Trichy?",
      ans: "The cutoff marks required to get CSE at NIT Trichy through JEE Mains can vary from year to year depending on various factors such as th",
      name: "Satyaki Roy",
      avatar: "SR",
      avcolor: "#74DD4F",
    },

    {
      ques: "What is the cutoff for CSE at NIT Trichy?",
      ans: "NIT Trichy was placed as the top 9th institution by the NIRF in 2020. You can expect the cutoffs high. The closing rank for CSE at NIT Trichy",
      name: "Shamshree Prusty",
      avatar: "SP",
      avcolor: "#0074D9",
    },

    {
      ques: "Can I get into NIT Trichy CSE with 99.9058580 in the JEE Main 2021?",
      ans: "Yes, you have a good chance of becoming eligible at NIT Trichy. Since your score is what you have mentioned above, it translates to your",
      name: "Abhimanyu Roy",
      avatar: "AR",
      avcolor: "#FF7900",
    },
  ];
  return (
    <>
      <Box sx={{ background: "#FFFFFF", padding: "1rem" }}>
        <Typography
          sx={{
            fontSize: "1.5rem",
            fontWeight: "600",
            textAlign: "left",
            marginBottom: "1rem",
            color: "#210366",
          }}
        >
          Related Questions
        </Typography>
       
        {data.map(({ ques, ans, name, avatar, avcolor }, index) => (
          <RelatedQues
            ques={ques}
            ans={ans}
            name={name}
            avatar={avatar}
            avcolor={avcolor}
            key={index}
          />
        ))}
        
      </Box>
    </>
  );
}
