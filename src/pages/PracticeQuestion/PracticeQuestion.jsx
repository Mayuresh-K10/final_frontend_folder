import React from 'react';
import { Container } from '@mui/material';
import AllPracQues from './Component/AllPracQues.jsx';
import IIMBangaloreRating from './Component/IIMBangaloreRating.jsx';

const PracticeQuestion = () => {
  return (
    <Container maxWidth="xl" style={{ marginTop: '20px' }}> 
      <AllPracQues />
      <IIMBangaloreRating />
    </Container>
  );
}

export {PracticeQuestion};
