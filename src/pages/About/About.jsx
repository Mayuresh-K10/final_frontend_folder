import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  styled,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import jobs from "./images/collogecue_jobs.png";
import search from "./images/collogecue_search.png";
import travel from "./images/collogecue_abroad.png";
import course from "./images/collogecue_courses.png";
import target from "./images/collogecue_mission.png";
import news from "./images/collogecue_news.png";



const StyledCard = styled(Card)(({ theme }) => ({
  color: theme.palette.text.primary,
  background: theme.palette.background.paper,
  boxShadow: theme.shadows[3],
  transition: "box-shadow 0.3s ease",
  "&:hover": {
    boxShadow: theme.shadows[6],
  },
}));

const About = () => {
  const theme = useTheme();

  return (
    <>
      <Container
        maxWidth="lg"
        sx={{ py: 7.5, bgcolor: theme.palette.background.default }}
      >
        

        <h1
          style={{
            color: "#210366",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          About Collegecue.com
        </h1>
        <Typography variant="h5" paragraph sx={{ textAlign: "center" }}>
          Collegecue is your ultimate destination for simplifying the course and
          college selection process, whether you&apos;re a student seeking
          undergraduate (UG) or postgraduate (PG) degrees in India or beyond.
        </Typography>

        <Box sx={{ paddingY: "3.5rem" }}>
          <img
            src={target}
            alt="Target"
            style={{
              width: "120px",
              height: "auto",
              display: "block",
              margin: "0 auto",
            }}
          />
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              mt: 2,
              color: "#210366",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            Our Mission
          </Typography>
          <Typography variant="h5" paragraph sx={{ textAlign: "center" }}>
            At Collegecue, we aim to empower students and parents with
            comprehensive and reliable information about higher education
            choices, career options, admission processes, and more. We believe
            that making informed decisions about education is crucial for a
            successful career path.
          </Typography>
        </Box>

        <Box sx={{ paddingBottom: "3.5rem" }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              mt: 2,
              color: "#210366",
              fontWeight: "bold",
              textAlign: "center",
              marginY: "30px",
            }}
          >
            What We Offer
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <StyledCard>
                  <CardContent>
                    <img
                      src={search}
                      alt="College Search"
                      style={{
                        width: "15%",
                        height: "auto",
                        display: "block",
                        margin: "1rem auto",
                       
                      }}
                    />
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                        color: "#210366",
                        fontWeight: "bold",
                        textAlign: "center",
                        marginTop: "20px",
                      }}
                    >
                      College Search
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ textAlign: "center", fontSize: "17px" }}
                    >
                      Access detailed information about courses, exams,
                      colleges, career options, admission requirements,
                      eligibility, costs, placement data, rankings, reviews,
                      scholarships, and more.
                    </Typography>
                  </CardContent>
                </StyledCard>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <StyledCard>
                  <CardContent>
                    <img
                      src={travel}
                      alt="Study Abroad Services"
                      style={{
                        width: "15%",
                        height: "auto",
                        display: "block",
                        margin: "1rem auto",
                      }}
                    />
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                        color: "#210366",
                        fontWeight: "bold",
                        textAlign: "center",
                        marginTop: "20px",
                      }}
                    >
                      Study Abroad Services
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ textAlign: "center", fontSize: "17px" }}
                    >
                      Explore opportunities for studying abroad with guidance on
                      colleges, programs, exams, scholarships, and expert
                      counseling services for applications to universities and
                      colleges in 23+ countries.
                    </Typography>
                  </CardContent>
                </StyledCard>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <StyledCard>
                  <CardContent>
                    <img
                      src={jobs}
                      alt="CollegecueJobs"
                      style={{
                        width: "15%",
                        height: "auto",
                        display: "block",
                        margin: "1rem auto",
                      }}
                    />
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                        color: "#210366",
                        fontWeight: "bold",
                        textAlign: "center",
                        marginTop: "20px",
                      }}
                    >
                      Collegecue Jobs
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ textAlign: "center", fontSize: "17px" }}
                    >
                      Collegecue Careers connects job searchers, both students
                      and professionals, with potential employers. The program
                      provides personalized job opportunities based on
                      individual skills and objectives. Companies can easily
                      access a pool of talented people.
                    </Typography>
                  </CardContent>
                </StyledCard>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <StyledCard>
                  <CardContent>
                    <img
                      src={course}
                      alt="Collegecue Courses"
                      style={{
                        width: "15%",
                        height: "auto",
                        display: "block",
                        margin: "1rem auto",
                      }}
                    />
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{
                        color: "#210366",
                        fontWeight: "bold",
                        textAlign: "center",
                        marginTop: "20px",
                      }}
                    >
                      Collegecue Courses
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ textAlign: "center", fontSize: "17px" }}
                    >
                      Collegecue Courses is a platform that aids mentors and
                      prospective educators in their educational journey,
                      offering materials to enhance teaching skills and AI-based
                      tools for test preparation, ensuring applicants are
                      well-prepared for realistic scenarios.
                    </Typography>
                  </CardContent>
                </StyledCard>
              </motion.div>
            </Grid>
          </Grid>
        </Box>

        <img
          src={news}
          alt="News"
          style={{
            width: "120px",
            height: "auto",
            display: "block",
            margin: "20px auto",
          }}
        />
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            mt: 2,
            color: "#210366",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          Collegecue News
        </Typography>
        <Typography
          variant="body1"
          paragraph
          sx={{ textAlign: "center", fontSize: "17px" }}
        >
          Stay updated with the latest news and information on examinations,
          college applications, course releases, scholarships, placement
          reports, and more through our dedicated Education News section.
        </Typography>

        <Box sx={{ paddingY: "1rem" }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              mt: 2,
              color: "#210366",
              fontWeight: "bold",
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            Our Team
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ textAlign: "center", color: "#565A5C", fontSize: "17px" }}
          >
            Our team consists of experienced educators, industry experts, and
            dedicated professionals who are committed to supporting you in
            making the best education decisions.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default About;
