import React from 'react';
import TopPlacesInUSA from '../../components/Cards/TopPlacesInCanadaCard';
import {TopPlacesData} from './Data';
import { Box, Typography, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import {AiFillLeftCircle} from 'react-icons/ai';
import {AiFillRightCircle} from 'react-icons/ai';

const TopPlaces = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const itemsPerPage = 6;
  const totalPages = TopPlacesData.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % totalPages);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + totalPages) % totalPages);
  };

  const displayedItems = [];
  for (let i = 0; i < itemsPerPage; i++) {
    displayedItems.push(TopPlacesData[(activeStep + i) % totalPages]);
  }

  return (
    <>
    <Box sx={{marginTop: '2rem'}}>
      <Typography sx={{
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontStyle: 'bold',
        fontSize: '30px',
        color: '#210366',
        marginLeft: '1rem',
        textTransform: 'capitalize'
        }}>Top places to study in USA</Typography>
        
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          marginTop: '20px',
        }}>
          <Button size="small" onClick={handleBack}>
            {theme.direction === 'rtl' ? <AiFillLeftCircle size={32} /> : <AiFillLeftCircle size={32} />}
          </Button>
          <Stack spacing={3} direction='row' flexWrap='wrap' justifyContent='center'>
          {displayedItems.map((item, id) => {
              return (
              <TopPlacesInUSA
                  key={id}
                  {...item}
              />
              )
            })}
          </Stack>
          <MobileStepper
            variant="none"
            steps={totalPages} 
            position="static"
            activeStep={activeStep}
            nextButton={
              <Button size="small" onClick={handleNext}>
                {theme.direction === 'rtl' ? <AiFillRightCircle size={32} /> : <AiFillRightCircle size={32} />}
              </Button>
            }
            backButton={null}
          />
        </Box>
      </Box>
    </>
  )
}

export default TopPlaces;
