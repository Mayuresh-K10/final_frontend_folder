import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ExamFaqData } from "./Data";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Faq from "../../components/Faq/Faq";
import { FaqData } from "./accordianData";
import { Box } from "@mui/material";
const ExamFaqRender = () => {
  const [expanded, setExpanded] = useState(false);
  const [currentQ, setCurrentQ] = useState(null);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    setCurrentQ(ExamFaqData);
  }, []);

  return (
    <Box
      sx={{
        marginTop: "10vh",
        maxWidth: "90vw",
        marginBottom: "10vh",
        "@media (min-width: 600px)": {
          maxWidth: "90vw",
        },
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "#210366",
          fontSize: "2.25rem",
          paddingTop: "1rem",
          fontWeight: 700,
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Frequently Asked Questions
      </Typography>
      <Box sx={{ marginTop: "1rem", marginBottom: "2rem", marginLeft: "5vw" }}>
        {currentQ &&
          currentQ.map(({ ques, ans }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ marginBottom: "1rem" }}
            >
              <Accordion
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}bh-content`}
                  id={`panel${index}bh-header`}
                  sx={{
                    backgroundColor: "#f0f0f0",
                    borderRadius: "8px",
                    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#2F1370",
                      fontSize: "1.2rem",
                      fontWeight: "600",
                    }}
                  >
                    {ques}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    borderTop: "1px solid #808080",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#2F1370",
                      fontSize: "1rem",
                      fontWeight: "500",
                    }}
                  >
                    {ans}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
      </Box>
    </Box>
  );
};
export default ExamFaqRender;
