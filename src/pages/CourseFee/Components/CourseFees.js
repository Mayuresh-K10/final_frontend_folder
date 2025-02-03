import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Typography, Box, Container, TableContainer } from '@mui/material';
import { useParams } from 'react-router-dom';

const SimpleTable = () => {
  const { id } = useParams();
  const [collegeInfo, setCollegeInfo] = useState(null);

  const url = process.env.REACT_APP_BACKEND_SERVER_URL;

  useEffect(() => {
    const fetchCollegeInfo = async () => {
      try {
        const response = await fetch(`${url}/api/institute-infos/${id}?populate=*`);
        if (!response.ok) {
          throw new Error("Failed to fetch college information");
        }
        const data = await response.json();
        setCollegeInfo(data.data); // Assuming response structure is { data: { ... } }
      } catch (error) {
        console.error("Error fetching college information:", error);
      }
    };
    fetchCollegeInfo();
  }, [url,id]);

  if (!collegeInfo) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container>
      <Box
        sx={{
          fontFamily: "Poppins, sans-serif",
          fontStyle: "normal",
          background: "#ffffff",
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
            color: "#210366",
            fontWeight: "bold",
            fontSize: "1.2rem",
            paddingTop: '1rem',
            fontFamily: "Poppins, sans-serif",
          }}
        >
          {collegeInfo.attributes.Institute_Name} Fees & Programs
        </Typography>

        <TableContainer
          sx={{
            display: "flex",
            paddingTop: '1rem',
            margin: "1rem 1rem 1rem 1rem",
            padding: "1rem 1rem 1rem 1rem",
            borderRadius: '1rem',
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            overflowX: 'scroll',
          }}
        >
          <Table
            sx={{ minWidth: 500 }}
            aria-label="caption table"
          >
            <TableHead>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: '#7B90FF',
                    color: 'white',
                    fontWeight: 800,
                    borderBottom: 'none',
                  }}
                >
                  Course
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: '#000080',
                    color: 'white',
                    fontWeight: 800,
                    borderBottom: 'none',
                  }}
                >
                  Fees
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    backgroundColor: '#7B90FF',
                    color: 'white',
                    fontWeight: 800,
                    borderBottom: 'none',
                  }}
                >
                  Program Type
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {collegeInfo.attributes.Institute_Courses.map((course, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  sx={{
                    backgroundColor: index % 2 === 0 ? '#D1EAF0' : '#FFFFFF',
                    '&:last-child td, &:last-child th': {
                      borderBottom: 'none',
                    },
                  }}
                >
                  <TableCell
                    align="center"
                    sx={{
                      color: '#000080',
                      fontFamily: "Poppins",
                    }}
                  >
                    {course["Course Name"]}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: '#000080',
                      fontFamily: "Poppins",
                    }}
                  >
                    {course["Course Fees"]}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      color: '#000080',
                      fontWeight: 'bold',
                      fontFamily: "Poppins",
                    }}
                  >
                    {course["Program Type"]}
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default SimpleTable;
