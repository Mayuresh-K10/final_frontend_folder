import React from 'react';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography, Box, Container, TableContainer } from '@mui/material';
import { motion } from 'framer-motion';

function AvgFees(college, avgfees) {
  return { college, avgfees };
}

const rows = [
  AvgFees('Indian Institute of Management-[IIMC],Kolkata', '₹11,50,000 '),
  AvgFees('Indian School of Business-[ISB], Hyderabad', '₹36,29,620 '),
  AvgFees('Indian Institute of Management-[IIM],Indore', '₹10,57,111'),
  AvgFees('FMS Delhi, New Delhi', '₹96,000 '),
];

const SimpleTable = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "0px ",
        paddingTop: "2rem !important",
      }}
    >
      <Box
        sx={{
          fontStyle: "normal",
          background: "rgb(235,237,252)",
          boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
          borderRadius: "1rem",
          padding: "1rem",
          fontSize: "0.9rem",
          color: "#2f1370",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <Typography
          variant='h5'
          sx={{
            color: "#000080",
            fontWeight: "bold",
            fontSize: "1.2rem",
            paddingTop: '1rem',
          }}
        >
          Popular colleges compared with IIM Bangalore
        </Typography>

        <TableContainer>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="center"
                    sx={{
                      backgroundColor: '#90E0EF',
                      color: 'white',
                      fontWeight: 'bold',
                    }}
                  >
                    College
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      backgroundColor: '#000080',
                      color: 'white',
                      fontWeight: 800
                    }}
                  >
                    AVG Fees/Year
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    sx={{ backgroundColor: '#D1EAF0' }}
                  >
                    <TableCell
                      align="center"
                      sx={{ color: '#000080', fontFamily: "Poppins", fontWeight: 800 }}
                    >
                      {row.college}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{ color: '#000080', fontFamily: "Poppins" }}
                    >
                      {row.avgfees}
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </motion.div>
        </TableContainer>
      </Box>
    </Container>
  );
};

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default SimpleTable;
