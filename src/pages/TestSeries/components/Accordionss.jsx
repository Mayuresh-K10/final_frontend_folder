import { Container, Typography } from '@mui/material'
import React from 'react'

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

export default function Accordionss({ ques, ans }) {
    return (
        <Container>
            {/* .........ACCORDION.........*/}
            <Accordion sx={{
                borderRadius: '2rem',
                border: '1px solid rgba(33, 3, 102, 0.30)',
                display: 'flex',
                width: '100%',
                paddingRight: '24px',
                marginBottom:'0.2rem',
                flexDirection: 'column',
                alignItems: 'flex-start',
            }}>
                <AccordionSummary
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        alignSelf: 'stretch',
                    }}
                    expandIcon={<ExpandCircleDownIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography sx={{
                        color: '#210366',
                        fontSize: '1.2rem',
                        fontStyle: 'normal',
                        fontWeight: '700',
                        

                    }}>{ques}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{ fontSize: '1rem',}}>
                        {ans}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Container>


    )
}

