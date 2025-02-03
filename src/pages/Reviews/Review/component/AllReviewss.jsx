import React from "react";
import Reviewss from "./Reviewss";

export default function AllReviewss() {
  let data = [
    {
      avatar: "MM",
      name: "Meghana Meenal Sohani",
      ans: "The Common Admission Test (CAT) can be taken by aspirants to get into the Indian Institute of Management, Bangalore. The application form can be found on their website (www.iimcat.ac.in). The exam consists of three sections - Verbal Ability, Quantitative Ability, Data Interpretation & Logical Reasoning. Basis the results of the exam, respective IIMs roll out shortlists - these may vary on the candidate's profile (gender, category, work experience, past academic performance, etc.). This email will contain the link for the form to be filled out separately for IIM Bangalore. The process involved submitting all your details along with a Statement Of Purpose. This is usually followed by a Written Ability Test and a Personal Interview.",
      overview:
        "IIM Bangalore acknowledges and deeply encourages the confluence of business, society, and governance. Especially being from a humanities background, this was valuable for me. IIM Bangalore also houses the NS Raghavan Center of Entrepreneurial Learning (NSRCEL), which is one of India's biggest start-up incubators, creating a strong culture and support for entrepreneurship. The courses are structured to be rooted in various teaching methodologies including cases, simulations, speaker series, theory, and projects.  This makesthe learning enriching and allows students to play to their strengths.",
      rating: "9.0",
      likes: "Likes: Infrastructure, Hostel and Mess facilities, Courses",
    },

    {
      avatar: "RK",
      name: "Rishabh Katroliya",
      ans: "The admission process started off with writing the CAT (Common Admission Test), which is admissible to all students with an undergraduate (bachelor's) degree. Once that is qualified, there is a detailed admission form that needs to be filled up, including a Statement of Purpose and recommendations. This is then followed by a Writing Assessment (WAT) and Personal Interview (PI).",
      overview:
        " I wanted to change my field from the core to the mainstream corporate world which I why I choose MBA. The course is robust with top-class faculty in the world making it the number 1 college for MBA in India. Exams are mid and end-term with quizzes in between with project submission.",
      rating: "9.7",
      likes: "Likes: Placements, Food, Facilities",
      dislikes: "Dislikes: Administration, Strict rules, Weather",
    },

    {
      avatar: "RR",
      name: "Risu Raj",
      ans: "The Common Admission Test (CAT) can be taken by aspirants to get into the Indian Institute of Management, Bangalore. The application form can be found on their website (www.iimcat.ac.in). The exam consists of three sections - Verbal Ability, Quantitative Ability, Data Interpretation & Logical Reasoning. Basis the results of the exam, respective IIMs roll out shortlists - these may vary on the candidate's profile (gender, category, work experience, past academic performance, etc.). This email will contain the link for the form to be filled out separately for IIM Bangalore. The process involved submitting all your details along with a Statement Of Purpose. This is usually followed by a Written Ability Test and a Personal Interview.",
      overview:
        "IIM Bangalore acknowledges and deeply encourages the confluence of business, society, and governance. Especially being from a humanities background, this was valuable for me. IIM Bangalore also houses the NS Raghavan Center of Entrepreneurial Learning (NSRCEL), which is one of India's biggest start-up incubators, creating a strong culture and support for entrepreneurship. The courses are structured to be rooted in various teaching methodologies including cases, simulations, speaker series, theory, and projects.  This makesthe learning enriching and allows students to play to their strengths.",
      rating: "9.0",
      place: "The Place to B",
    },
  ];
  return (
    <>
      {data.map(({ avatar, name, ans, likes, overview, rating }, index) => (
        <Reviewss
          avatar={avatar}
          name={name}
          ans={ans}
          likes={likes}
          overview={overview}
          rating={rating}
          key={index}
        />
      ))}
    </>
  );
}
