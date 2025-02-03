import React from 'react';
import CollegeArticleCard from '../Cards/CollegeArticleCard';
import { Box, Typography, Stack } from '@mui/material';
import CollegeArticle from '../Cards/CollegeArticle';

const Article = ({CollegeArticleData}) => {
  return (
    <>
      <Box sx={{
        paddingTop: "5rem",
      }}>
        <Typography sx={{
          fontFamily: 'Poppins',
          fontWeight: '700',
          fontStyle: 'bold',
          fontSize: '30px',
          color: '#41355D',
        }}>Article Section</Typography>
        <CollegeArticleCard />
      </Box>
      <Stack
        direction='row' flexWrap='wrap' justifyContent="center" alignItems="center" marginTop="2rem"
      >
        {CollegeArticleData.map((val, index) => {
          return (
            <CollegeArticle
              key={index}
              img={val.img}
              
              icon={val.icon}
              contents={val.contents}
              contents_body={val.contents_body}
              
            />
          );
        })}
      </Stack>
    </>
  )
}

export default Article;
