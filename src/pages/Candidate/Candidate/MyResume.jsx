import React, { useState } from "react";
import "./CSS/resume.css";
import {
  Card, Box, FormControl, InputLabel, Select, MenuItem, Accordion, AccordionSummary, AccordionDetails, Typography, Button, TextField,OutlinedInput
} from "@mui/material";



const MyResume = () => {


  return (
    <Box sx={{
      width: '100%', minHeight: '100vh', background: '#313893', borderTopLeftRadius: '50px', marginBottom: '3rem',
      '@media(max-width:1300px)': { borderTopLeftRadius: '0px' }
    }}>
      <Box sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5rem', marginRight: '25px',
        '@media(max-width:1300px)': { marginRight: '25px', marginLeft: '25px' }
      }}>
          <Card
            sx={{
               borderRadius: '12px', backgroundColor: 'white', padding: '2rem 3rem 5rem 3rem', width: '100%'
            }}>
                <Typography>Yuor Resume will display here</Typography>
          </Card>
        </Box>
      </Box>
  );
};

export default MyResume;