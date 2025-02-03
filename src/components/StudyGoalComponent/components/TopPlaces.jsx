import React from 'react';
import TopPlacesInCanada from '../Cards/TopPlacesInCanadaCard';
import { Box, Typography, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { AiFillLeftCircle } from 'react-icons/ai';
import { AiFillRightCircle } from 'react-icons/ai';

const TopPlaces = ({ TopPlacesData, country }) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(6);
  const totalPages = TopPlacesData.length;

  React.useEffect(() => {
    const handleResize = () => {
      
      if (window.innerWidth < 600) {
        setItemsPerPage(2); 
      } else {
        setItemsPerPage(6);
      }
    };

    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
      <Box sx={{ marginTop: '2rem' }}>
        <Typography sx={{
          fontFamily: 'Poppins',
          fontWeight: '700',
          fontStyle: 'bold',
          fontSize: '30px',
          color: '#210366',
          marginLeft: '1rem',
          textTransform: 'capitalize'
        }}>Top places to study in {country}</Typography>
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
                <TopPlacesInCanada
                  key={id}
                  {...item}
                />
              )
            })}
          </Stack>
          <Button size="small" onClick={handleNext}>
            {theme.direction === 'rtl' ? <AiFillRightCircle size={32} /> : <AiFillRightCircle size={32} />}
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default TopPlaces;
