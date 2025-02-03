import React from 'react';
import HostelNews from '../../../components/Cards/HostelNewsCard';
import {HostelNewsData} from '../../Hostel/Data';
import { Box, Typography } from '@mui/material';

const News = () => {
  return (
    <>
    <Box sx={{
        paddingY: '3.5rem', 
        boxShadow: '0px 0px 40px 0px #7B90FF26',
        borderRadius: '28px'
      }}>
        <Box
          sx={{
            boxSizing: 'border-box',
            height: '57px',
            background: '#FF7900',
            borderRadius: '28px 28px 0px 0px'
          }}
        >
          <Box>
            <Typography sx={{
              fontFamily: 'Poppins',
              fontStyle: 'bold',
              fontWeight: '700',
              fontSize: '20px',
              color: '#FFFFFF',
              padding: '12px',
              marginLeft: '0.5rem'
            }}
            >News</Typography>
          </Box>
        </Box>
        <Box sx={{
          height: '270px',
          borderRadius: "0px 0px 28px 28px",
          marginBottom: '2rem'
        }}>
          {HostelNewsData.map((item, id) => {
            return (
              <HostelNews
                key={id}
                {...item}
              />
            );
          })}
        </Box>
      </Box>
    </>
  )
}

export default News;
