import React from "react";
import { Box } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Question from "../../../Assets/images/question sbi loan.png"


const Faq = ({ faqs }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" }, // Column layout for small screens, row layout for medium and larger screens
        marginY: "2rem",
        gap: "2rem",
        alignItems: "center",
        justifyContent: "space-evenly",
      }}
    >
      <Box sx={{ width: { xs: "100%", md: "70%" } }}>
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            sx={{
              width: "100%", // Expand the Accordion to full width
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              <Typography
                sx={{
                  color: "#210366",
                  fontSize: 20,
                  fontFamily: "Inter",
                  fontWeight: "700",
                }}
              >
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography
                sx={{
                  color: "#210366",
                  fontSize: 18,
                  fontFamily: "Inter",
                  fontWeight: "600",
                }}
              >
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
      <Box>
        <img src={Question} alt="question" style={{
          width: "50%", height: "auto"
        }} />
      </Box>
    </Box>
  );
};

export default Faq;
