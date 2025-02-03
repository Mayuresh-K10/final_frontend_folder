import React from "react";
import ViewedQues from "./ViewedQues";
import { Box, Typography } from "@mui/material";

export default function AllViewedQues() {
  let data = [
    {
      ques: "What marks do you need to get into NIT Trichy?",
      ans: "Applicants need at least 60% aggregate marks in 10+2, in order to get admission at NIT Trichy. This is the prerequisite for applying. For fina",
      name: "Vivek Goyal",
      avatar: "VG",
    },

    {
      ques: "What percentile do I need to get into IIM Lucknow?",
      ans: "Candidates need to score a minimum of 90 percentile in CAT to participate in the IIM Lucknow admission process for PGP courses. The",
      name: "Akash Vadera",
      avatar: "AV",
    },

    {
      ques: "What is the minimum score for NIT Trichy computer science in JEE (Main) 2021?",
      ans: "Rather than JEE Mains percentile, KJ Somaiya takes admission based on JEE Mains rank. For 2021, the required cutoff for KJ Somaiya",
      name: "Sayak Dasgupta",
      avatar: "SD",
    },

    {
      ques: "Is it worth it to join SRM University for a BTech in Computer Sciences. How is the scope at SRM?",
      ans: "Computer science in NIT Trichy is considered to be tough and the dream branch in one of the best colleges. For this, you will have to work",
      name: "Ayush Jain",
      avatar: "AJ",
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
            color: "#210366",
          }}
        >
          Most Viewed Questions
        </Typography>
        {data.map(({ ques, ans, name, avatar }, index) => (
          <ViewedQues
            ques={ques}
            ans={ans}
            name={name}
            avatar={avatar}
            key={index}
          />
        ))}
      </Box>
    </>
  );
}
