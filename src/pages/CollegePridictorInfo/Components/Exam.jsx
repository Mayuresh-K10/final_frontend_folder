import React from "react";
import Box from "@mui/material/Box";
import { useTheme } from '@mui/material/styles';
import ClassTen from "./../../components/Headings/ClassTen";
import ClassTwelve from "./../../components/Headings/ClassTwelve";
import CollegeCards from "./CollegeCards";
import CollegeCardstwo from "./CollegeCardstwo";
import ConceptRender from "./ConceptRender";
import Container from "@mui/material/Container";
import ExamButtonRender from "./ExamButtonRender";
import ExamCardRender from "./ExamCardRender";
import ExamJEEMainRender from "./ExamJEEMainRender";
import ExamNewsRender from "./ExamNewsRender";
import ExamNotificationsRender from "./ExamNotificationRender";
import ExamsCategory from "./ExamsCategory";
import SearchBar from "../../components/Cards/SearchBar";
import UpcomingExamRender from "./UpcomingExamRender";
import Subscribe from "../../components/SubscribeNews/Subscribe";
import img1 from "./images/exam_hero.svg";
import PageTitle from "../../components/Headings/PageTitle";
import { Grid, Typography,} from "@mui/material";
import BoldHeading from "../../components/Headings/BoldHeading";
import ExamSyllabusCard from "./ExamSyllabusCard";
import Faq from "../../components/Faq/Faq"
import { FaqData } from "./accordianData";
const Exam = () => {
  return (
    <Container
      Width="lg"
      sx={{
        overflow : "hidden",
        paddingTop: "4.5%",
        '@media (max-width: 900px)': {
          paddingTop: "12%"
        },
        '@media (max-width: 400px)': {
          paddingTop: "14%"
        }
      }}
    >
      <Box
        sx={{
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <Box>
        </Box>
        <Box sx={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          "@media (max-width: 600px)": {
            flexDirection: "column-reverse",
          },
        }}>
          <Box sx={{ flex: "1" }}>
            <Typography variant='h5' sx={{
              color: "#210366",
              fontSize: "2.25rem",
              paddingTop: '1rem',
              fontWeight: 700,
              paddingBottom: '5vh',
            }}>
              Entrance Exams In India
            </Typography>
            <SearchBar placeholder="Search Entrance Exams" />
          </Box>
          <Box
            sx={{
              flex: "1",
              display: "flex",
              justifyContent: "flex-end",
              "@media (max-width: 600px)": {
                justifyContent: "center"
              },
            }}>
            <img
              src={img1}
              alt="img1"
              style={{
                width: "300px",
                height: "300px",
                objectFit: "contain",
                aspectRatio: "video"
              }}
            />
          </Box>
        </Box>

        <Box>
          <ExamButtonRender />
        </Box>
        <ExamsCategory />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          '@media (min-width: 740px)': {
            flexDirection: "row",
          },
        }}
      >
        <ExamCardRender />
        <Box
          sx={{
            flex: "1",
            marginX: "auto",
            '@media (min-width: 740px)': {
              paddingLeft: '1vw',

            },
          }}
        >
          <ExamNewsRender />
          <Subscribe/>
          <ExamNotificationsRender />
          <UpcomingExamRender />
          <ExamSyllabusCard />
        </Box>
      </Box>
      <Box sx={{
        width: "auto"
      }}>
        <ConceptRender />
        <ClassTen />
        <CollegeCards />
        <ClassTwelve />
        <CollegeCardstwo />
        <ExamJEEMainRender />
        <BoldHeading textAlign="center" color="#1F305E">
          Frequently Asked Questions (FAQs)
        </BoldHeading>
        <Faq faqs={FaqData} />
      </Box>
    </Container>
  );
};

export default Exam;
