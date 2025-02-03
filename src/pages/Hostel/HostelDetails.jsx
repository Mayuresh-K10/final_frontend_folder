import React from 'react';

import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const HostelDetails = ({ HostelDetailsData, HostelDetail, name }) => {
  return (
    <>
      <Box>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '20px',
            color: '#210366',
            paddingTop: '2%',
            marginY: "1rem"
          }}
        >
          {name} Hostel Details
        </Typography>
        <TableContainer component={Paper} sx={{ backgroundColor: 'transparent' }}>
          <Table sx={{ minWidth: 650, width: '100%', marginX: "auto"}}>
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ backgroundColor: '#210366', color: '#EEECFE', fontWeight: '700', fontSize: '15px' }}>
                  Hostel Component
                </TableCell>
                <TableCell align="center" sx={{ backgroundColor: '#210366', color: '#EEECFE', fontWeight: '700', fontSize: '15px' }}>
                  Availability (in number)
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {HostelDetail.map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{row.component}</TableCell>
                  <TableCell align="center">{row.availability}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      <Box
        sx={{
          marginTop: '1rem',
          marginLeft: '2vw',
          width: '95%',
          marginY: '1rem',
          padding: '1rem',
          backgroundColor: "transparent",
        }}
      >
        {HostelDetailsData.map((item) => (
          <Box key={item.id} sx={{ marginBottom: '1rem' }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#210366' }}>{item.heading}</Typography>
            <Typography variant="body1" sx={{ color: '#210366' }}>{item.content}</Typography>
            {item.link && (
              <Typography variant="body2" sx={{ color: '#7B90FF', textDecoration: 'underline', cursor: 'pointer' }}>
                {item.link}
              </Typography>
            )}
          </Box>
        ))}
      </Box>
    </>
  );
};

export default HostelDetails;
