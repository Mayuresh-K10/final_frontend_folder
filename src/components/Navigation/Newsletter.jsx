import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #210366;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  padding-top : 5vh;
  text-transform: uppercase;
  text-align: center;
  width: 80%;
  margin-bottom: 10px;
  color: #fff;
`;

const Description = styled.p`
  font-size: 0.8rem;
  text-align: center;
  font-weight: bold;
  width: 80%; 
  text-transform: uppercase;
  color: #4FB8DD;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    & > span {
      margin: 0.5rem 0;
    }
  }
`;

const Separator = styled.span`
  margin: 0 0.5rem; 
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Subscribe to our Newsletter</Title>
      <Description>
        <Separator>&bull; College Notification </Separator>
        <Separator>&bull; Exam Notification </Separator>
        <Separator>&bull; News Update </Separator>
      </Description>
    </Container>
  );
};

export default Newsletter;