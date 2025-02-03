import React from "react";
import RankQuestion from "./RankQuestion";

export default function AllRankQues() {
  let data = [
    {
      ques: "My JEE  main rank is 1000. Can I get computer Science in NIT Trichy? ",
      ans: "I know I might sound blunt, but you cannot get into NIT Trichy CSE unless you belong to a reserved category. The expected opening and closing rank for the B.Tech CSE course at NIT Trichy for the academic session 2022 was around 400 to 5300. This year there might be only a slight difference. However, your rank of 10000 has no chance",
      name: "Chandan Kumar",
      avatar: "CK",
      clg: "Banaras Hindu University - [BHU]MBA",
      post: "February 27th, 2023",
      comment: "1 Comment",
    },

    {
      ques: "How much marks should one score in JEE mains to get CSE at NIT Trichy?",
      ans: "I know I might sound blunt, but you cannot get into NIT Trichy CSE unless you belong to a reserved category. The expected opening and closing rank for the B.Tech CSE course at NIT Trichy for the academic session 2022 was around 400 to 5300. This year there might be only a slight difference. However, your rank of 10000 has no chance",
      name: "Chandan Kumar",
      avatar: "CK",
      clg: "Banaras Hindu University - [BHU]MBA",
      post: "February 27th, 2023",
      comment: "1 Comment",
    },

    {
      ques: "What is the cutoff for CSE at NIT Trichy?",
      ans: "I know I might sound blunt, but you cannot get into NIT Trichy CSE unless you belong to a reserved category. The expected opening and closing rank for the B.Tech CSE course at NIT Trichy for the academic session 2022 was around 400 to 5300. This year there might be only a slight difference. However, your rank of 10000 has no chance",
      name: "Chandan Kumar",
      avatar: "CK",
      clg: "Banaras Hindu University - [BHU]MBA",
      post: "February 27th, 2023",
      comment: "1 Comment",
    },
  ];

  return (
    <>
      {data.map(({ ques, ans, name, avatar, clg, post, comment }, index) => (
        <RankQuestion
          ques={ques}
          ans={ans}
          name={name}
          avatar={avatar}
          clg={clg}
          post={post}
          comment={comment}
          key={index}
        />
      ))}
    </>
  );
}
