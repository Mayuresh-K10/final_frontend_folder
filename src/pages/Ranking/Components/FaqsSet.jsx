import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

const FaqsSet = () => {
  return (
    <>
      <Box
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontStyle: "normal",
          background: "#ffffff",
          borderRadius: "1rem",
          padding: "1rem",
          fontSize: "0.9rem",
          marginTop: 2 ,
          color: "#2f1370",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <Box>
          <Accordion
            sx={{
              width: 1090,
              background: "#EEECFE",
              marginTop: 1,
              borderRadius: "12px",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    background: "#7B90FF",
                    color: "#FFFFFF",
                    borderRadius: 6,
                  }}
                />
                }
              aria-controls="panel1a-content"
              id="panel1a-header"
                
            >
              <Typography
                sx={{
                  width: 683,
                  height: 23,
                  color: "#210366",
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                Ques.What is the NIRF Rank of IIM Bangalore in 2022
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#210366",
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Ans.IIM Bangalore has stood at 2nd position among top B-Schools
                in NIRF 2022 Ranking.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              width: 1090,
              background: "#EEECFE",
              marginTop: 1.5,
              borderRadius: "12px",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    background: "#7B90FF",
                    color: "#FFFFFF",
                    borderRadius: 6,
                  }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                sx={{
                  width: 683,
                  height: 23,
                  color: "#210366",
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                Ques. What place has IIM Bangalore stood in FT Global Rankings
                2023?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#210366",
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Ans. IIM B has achieved 52nd position in FT Global MBA Ranking
                2023 considering the one-year full-time Executive Post Graduate
                Programme in Management (EPGP).
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              width: 1090,
              background: "#EEECFE",
              marginTop: 1.5,
              borderRadius: "12px",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    background: "#7B90FF",
                    color: "#FFFFFF",
                    borderRadius: 6,
                  }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{
                  width: 683,
                  height: 23,
                  color: "#210366",
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                Ques. What is the latest QS University Ranking for IIM
                Bangalore?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#210366",
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Ans.It is ranked #=61 in QS WUR Ranking By Subject 2023.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              width: 1090,
              background: "#EEECFE",
              marginTop: 1.5,
              borderRadius: "12px",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    background: "#7B90FF",
                    color: "#FFFFFF",
                    borderRadius: 6,
                  }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                sx={{
                  width: 683,
                  height: 23,
                  color: "#210366",
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                Ques. What has been the overall ranking achieved by IIM
                Bangalore in 2023?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#210366",
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Ans.IIM Bangalore ranked 2nd according to the NIRF rankings 2023
                and 3rd by Business Today B-School Ranking 2023
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              width: 1090,
              background: "#EEECFE",
              marginTop: 1.5,
              borderRadius: "12px",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    background: "#7B90FF",
                    color: "#FFFFFF",
                    borderRadius: 6,
                  }}
                />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                sx={{
                  width: 683,
                  height: 23,
                  color: "#210366",
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                Ques. What are the other rankings achieved by IIM Bangalore in
                the recent year?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#210366",
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Ans.It is the 2 best Management institute in India, according to
                NIRF ranking 2023. The flagship programme of IIM Bangalore is
                MBA.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              width: 1090,
              background: "#EEECFE",
              marginTop: 1.5,
              borderRadius: "12px",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  sx={{
                    background: "#7B90FF",
                    color: "#FFFFFF",
                    borderRadius: 6,
                  }}
                />
              }
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography
                sx={{
                  width: 683,
                  height: 23,
                  color: "#210366",
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                Ques. What is FT Executive Education Custom Ranking for IIM
                Bangalore in 2022?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#210366",
                  fontSize: 16,
                  fontFamily: "Poppins",
                  fontWeight: "400",
                  wordWrap: "break-word",
                }}
              >
                Ans.The Indian Institute of Management Ahmedabad (IIMA), has
                been ranked 62 nd in the FT (Financial Times) Global MBA Ranking
                2022 in its top 100 list of B-Schools, announced in February
                2022
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </>
  );
};

export default FaqsSet;
