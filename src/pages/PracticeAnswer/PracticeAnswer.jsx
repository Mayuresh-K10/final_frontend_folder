import React from 'react';
import AllPracQues from './Component/AllPracQues.jsx';
import AllQuesNeet from './Component/AllQuesNeet.jsx';
import AllTopQues from './Component/AllTopQues.jsx';
import NeetNotify from './Component/NeetNotify.jsx';
import ReproHealth from './Component/ReproHealth.jsx';
import { Container } from '@mui/material';

const PracticeAnswer = () => {
  return (
    <Container maxWidth="xl" style={{ marginTop: '20px' }}> 
      <AllPracQues />
      <AllQuesNeet />
      <AllTopQues />
      <NeetNotify />
      <ReproHealth />
    </Container>
  );
}

export {PracticeAnswer};
