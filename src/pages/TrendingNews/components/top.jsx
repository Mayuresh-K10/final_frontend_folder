// Top.js
import React from "react";
import { Box } from '@mui/material';

const Top = ({topData}) => {
  const { imgTop, imgTop2, author, updatedOn } = topData;

  return (
    <>
      <Box sx={{ display: 'flex', paddingTop: 3 }}>
        <Box>
          <img src={imgTop} alt="" />
        </Box>
        <Box sx={{ marginLeft: '9px', marginTop: 0 }}>
          <Box sx={{ display: 'flex', alignItems: 'stretch' }}>
            <Box
              sx={{ color: '#7B90FF', fontSize: 15, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>
              {author}
            </Box>
            <Box sx={{ marginTop: '5px', marginLeft: '9px' }}>
              <img src={imgTop2} alt="" />
            </Box>
          </Box>
          <Box sx={{ paddingTop: '2px', color: '#210366', fontSize: 10, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word' }}>
            Updated On - {updatedOn}
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Top;
