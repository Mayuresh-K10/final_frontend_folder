import React, {useState, useEffect} from 'react';
import {USAFAQsData} from './Data';
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/material";

const FAQs = () => {
    const [expanded, setExpanded] = useState(false);
    const [currentQ, setCurrentQ] = useState(null);
  
    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    useEffect(() => {
      setCurrentQ(USAFAQsData);
    }, []);

  return (
    <>
      <Box sx={{marginTop: '20px'}}>
        <Typography sx={{
        fontFamily: 'Poppins',
        fontStyle: 'bold',
        fontWeight: '700',
        fontSize: '30px',
        color: '#41355D'
        }}>Study In USA FAQs</Typography>
        <Box sx={{marginTop: '1rem', marginBottom: '2rem'}}>
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
                
                flexShrink: 0,
                color: "#2F1370",
                fontSize: "1rem",
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
    </>
  )
}

export default FAQs;
