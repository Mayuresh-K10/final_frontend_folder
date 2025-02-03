import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';

const Faq = ({ FaqData }) => {
    // Inline CSS
    const styles = `
        .faq-container {
            max-width: 660px;
            height: fit-content;
            border-radius: 12px;
            margin: 2rem auto;
            background-color: #f7f7f7;
            padding: 20px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }

        .faq-heading {
            font-size: 24px;
            font-weight: 600;
            line-height: 1.2;
            letter-spacing: 0em;
            text-align: left;
            margin-bottom: 20px;
            color: #333;
        }

        .faq-accordion {
            background: #fff;
            border-radius: 8px;
            box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
            margin-bottom: 10px;
        }

        .faq-question {
            font-size: 16px;
            font-weight: 600;
            color: #333;
        }

        .faq-answer {
            font-size: 14px;
            color: #555;
            padding: 10px 20px;
        }
    `;

    return (
        <>
            <style>{styles}</style>
            <Container>
                <Box className="faq-container">
                    <Typography className="faq-heading">FAQs</Typography>
                    <Box>
                        {FaqData.map((item, index) => (
                            <Accordion key={index} className="faq-accordion">
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls={`panel${index + 1}-content`}
                                    id={`panel${index + 1}-header`}
                                >
                                    <Typography className="faq-question">{item.question}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography className="faq-answer">{item.answer}</Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default Faq;
