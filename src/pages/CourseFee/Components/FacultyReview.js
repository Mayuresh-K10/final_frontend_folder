import React from 'react';
import { motion } from 'framer-motion';
import {
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Divider,
} from "@mui/material";
import Box from '@mui/material/Box';
import { Container } from "@mui/system";

function FacultyReview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Container sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "0px",
        paddingTop: "2rem !important",
      }}>
        <Box sx={{
          background: "#ffffff",
          boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
          borderRadius: "1rem",
          padding: "1.5rem",
          fontSize: "0.9rem",
          color: "#2f1370",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          fontFamily: "Poppins, sans-serif",
        }}>
          <Typography variant='h5' sx={{
            color: "#000080",
            fontWeight: "bold",
            fontSize: "1.5rem",
            paddingTop: "1rem",
            textAlign: "center",
          }} >IIM Bangalore Faculty Reviews</Typography>
          <Box sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: "1rem",
            flexWrap:'wrap'
          }}>
            <FormControl sx={{ minWidth: 120 }} >
              <InputLabel>Stream</InputLabel>
              <Select
                sx={{
                  width: "8rem",
                  borderRadius: "12px",
                  height: "3rem",
                  fontFamily: "Poppins",
                }}
              >
                <MenuItem value={1}>ECE</MenuItem>
                <MenuItem value={2}>CS</MenuItem>
                <MenuItem value={3}>ME</MenuItem>
                <MenuItem value={4}>EE</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 120 }} >
              <InputLabel>Course Tag</InputLabel>
              <Select
                sx={{
                  width: "8rem",
                  borderRadius: "12px",
                  height: "3rem",
                  fontFamily: "Poppins",
                }}
              >
                <MenuItem value={1}>ECE</MenuItem>
                <MenuItem value={2}>CS</MenuItem>
                <MenuItem value={3}>ME</MenuItem>
                <MenuItem value={4}>EE</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 120 }} >
              <InputLabel>Course</InputLabel>
              <Select
                sx={{
                  width: "8rem",
                  borderRadius: "12px",
                  height: "3rem",
                  fontFamily: "Poppins",
                }}
              >
                <MenuItem value={1}>ECE</MenuItem>
                <MenuItem value={2}>CS</MenuItem>
                <MenuItem value={3}>ME</MenuItem>
                <MenuItem value={4}>EE</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 120 }} >
              <InputLabel>Batches</InputLabel>
              <Select
                sx={{
                  width: "8rem",
                  borderRadius: "12px",
                  height: "3rem",
                  fontFamily: "Poppins",
                }}
              >
                <MenuItem value={1}>ECE</MenuItem>
                <MenuItem value={2}>CS</MenuItem>
                <MenuItem value={3}>ME</MenuItem>
                <MenuItem value={4}>EE</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box sx={{
            paddingTop: "1rem",
            cursor: "pointer"
          }}>
            <Divider />
          </Box>
        </Box>
      </Container>
    </motion.div>
  );
}

export default FacultyReview;
