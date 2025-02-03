import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Step1',
  'Step2',
  'Step3',
  'Step4',
  'Step5',
  'Step6',
  'step7',
  'step8'

];

export default function Stepp() {
  return (
    <Box sx={{ width: '100%'}}>
      <Stepper activeStep={7} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
