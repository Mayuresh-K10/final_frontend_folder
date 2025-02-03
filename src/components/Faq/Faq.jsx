import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { motion } from 'framer-motion';


const Faq = ({ faqs }) => {
    const [activeCollapse, setActiveCollapse] = useState(null);
    const toggleCollapse = (panel) => {
        setActiveCollapse(activeCollapse === panel ? null : panel);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: "wrap",
                alignItems: 'center',
                alignContent: 'center',
                justifyContent: 'center',
                
                paddingBottom:"5rem",
             
            }}>
            {faqs.map((faq, index) => (
                <motion.div
                    key={index}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      flexBasis: 'calc(50% - 2rem)',
                      margin: '1rem',
                      minWidth: '300px', // Set a minimum width for the Accordion
                      maxWidth: '600px', // Set a maximum width for the Accordion
                    }}
                >
                    <Accordion
                        key={index}
                        expanded={activeCollapse === `panel${index}`}
                        sx={{
                            border: '1px solid #e0e0e0',
                            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px',
                            overflow: 'hidden',
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<AddIcon />}
                            aria-controls={`panel${index}bh-content`}
                            id={`panel${index}bh-header`}
                            onClick={() => toggleCollapse(`panel${index}`)}
                        >
                            <Typography sx={{ fontWeight: 'bold' }}>
                            {faq.question || faq.attributes.Questions || faq.attributes.Question || 'Question Not Available'}
                            </Typography>

                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography> {faq.answer || faq.attributes.Answers || faq.attributes.Answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                </motion.div>
            ))}
        </Box>
    )
}

export default Faq;