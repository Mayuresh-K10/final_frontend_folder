import React, { useState, useEffect } from 'react';
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

const FAQ = ({FAQ}) => {
  const [expanded, setExpanded] = useState(false);
  const [currentQ, setCurrentQ] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    setCurrentQ(FAQ);
  }, []);

  return (
    <Box sx={{
      marginTop: '10vh', maxWidth: '90vw', marginBottom: '10vh', '@media (min-width: 600px)': {
        maxWidth: '90vw',
      },
    }}>
      <Typography sx={{
        color: "#210366",
        fontSize: "2.25rem",
        paddingTop: '1rem',
        fontWeight: 700,
        fontFamily: "Poppins, sans-serif"
      }}>Study In Canada FAQs</Typography>
      <Box sx={{ marginTop: '1rem', marginBottom: '2rem', marginLeft: '5vw' }}>
        {currentQ &&
          currentQ.map(({ title, answer }, index) => (
            <Accordion
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              key={index}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      backgroundColor: "#7B90FF",
                      color: "#fff",
                      borderRadius: "100%",
                    }}
                  />
                }
                aria-controls={`panel${index}bh-content`}
                id={`panel${index}bh-header`}
              >
                <Typography
                  sx={{
                    color: "#2F1370",
                    fontSize: "1.2rem",
                    fontWeight: "600"
                  }}
                >
                  {title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  borderTop: "1px solid #808080",
                  width: "98%",
                  margin: "0 auto",
                }}
              >
                <Typography
                  sx={{ color: "#2F1370", fontSize: "1rem", fontWeight: "500" }}
                >
                  {answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
      </Box>
    </Box>
  )
}

export default FAQ;