import React from 'react';
import CollegeArticleCard from '../../components/Cards/CollegeArticleCard';
import CollegeArticle from '../../components/Cards/CollegeArticle';
import {CollegeArticleData} from './Data';
import { Box, Typography, Stack } from '@mui/material';

const Article = () => {
  return (
    <>
      <Box sx={{marginTop: '2rem'}}>
        <Typography sx={{
        fontFamily: 'Poppins',
        fontWeight: '700',
        fontStyle: 'bold',
        fontSize: '30px',
        color: '#41355D',
        
        }}>Article Section</Typography>
        <CollegeArticleCard />
      </Box>
      <Stack direction='row' flexWrap='wrap' justifyContent="center" alignItems="center" marginTop="2rem">
        {CollegeArticleData.map((val,index)=>{
          return(
            <CollegeArticle
                key={index}
                img={val.img}
                date={val.date}
                icon={val.icon}
                contents={val.contents}
                contents_body={val.contents_body}
                content_link={val.content_link}
            />
            );
        })}
      </Stack>
    </>
  )
}

export default Article;
