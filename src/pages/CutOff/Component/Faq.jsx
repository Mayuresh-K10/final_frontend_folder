import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/material";
import ExpandCircleDownIcon from "@mui/icons-material/ExpandCircleDown";
import { QuestAns } from "../Data";

export default function Faq() {
  return (
    <Container>
      <Box
        sx={{
          fontStyle: "normal",
          padding: "1rem",
          fontSize: "0.9rem",
          color: "#2f1370",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <Typography
          sx={{
            color: "#210366",
            fontSize: "1.25rem",
            fontStyle: "normal",
            fontWeight: 600,
          }}
        >
          IIM Bangalore Cutoff FAQs
        </Typography>
        {QuestAns.map((qa) => (
          <Accordion key={qa.id} sx={{ borderRadius: "0.75rem" }}>
            <AccordionSummary
              expandIcon={<ExpandCircleDownIcon sx={{ color: "#7B90FF" }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{ backgroundColor: "#EEECFE", borderRadius: "0.75rem" }}
            >
              <Typography
                sx={{
                  color: "#210366",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: 500,
                }}
              >
                Ques. {qa.ques}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#210366",
                  fontSize: "1rem",
                  fontStyle: "normal",
                  fontWeight: 500,
                  borderRadius: "0.75rem",
                }}
              >
                Ans. {qa.ans}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
}
