import React from 'react';
import One from './components/one';
import { Box, Container } from '@mui/material'
import Latest from './components/Latest';
import Content from './components/contents';

import Top from './components/top';
import {topData,OneData ,partsData, contentsData} from "../InstitutePage/TrendingNews"

function TrendingNews() {

  return (
    <>
      <Container >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ width: "100%", paddingRight: 2, }}>
            <Top topData={topData} />
            <One oneData={OneData}/>
            <Latest partsData={partsData}/>
            <Content contentsData={contentsData} />
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default TrendingNews
