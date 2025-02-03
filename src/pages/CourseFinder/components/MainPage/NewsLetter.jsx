import React from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #210366;
  padding: 40px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  width: 40%;
  margin-bottom: 10px;
  color: #fff;
`;

const Description = styled.p`
  font-size: 0.8rem;
  text-align: center;
  font-weight: bold;
  width: 40%;
  text-transform: uppercase;
  color : #4FB8DD;
`;

const Separator = styled.span`
  margin: 0 1.375rem;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Subscribe to our Newsletter</Title>
      <Description>
        College Notification
        <Separator>&bull;</Separator>
        Exam Notification
        <Separator>&bull;</Separator>
        News Update
      </Description>
    </Container>
  );
};

export default NewsLetter;