import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { exams, reservationCategories } from "../Data"; // Importing exam, degree, and reservation category options

const Prediction = () => {
  const [formData, setFormData] = useState({
    examRank: "",
    selectedExam: "",
    selectedDegree: "",
    selectedCategory: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",

          flexWrap:'wrap',
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "100%",
          padding: "3.5rem",
          "@media (max-width: 770px)": {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginY: "2rem",
            
          }}
        >
          <input
            name="examRank"
            placeholder="Exam Rank"
            type="text"
            onChange={handleChange}
            value={formData.examRank}
            style={{
              width: "calc(50% - 10px)",
              height: "55px",
              borderRadius: "10px",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginY: "2rem",
            
          }}
        >
          <FormControl sx={{ width: "calc(50% - 10px)"}}>
            <InputLabel sx={{ backgroundColor: "white", marginX: "5px" }}>
              Select Exam
            </InputLabel>
            <Select
              name="selectedExam"
              placeholder="Select Exam"
              value={formData.selectedExam}
              onChange={handleChange}
            >
              {exams.map((exam) => (
                <MenuItem key={exam.id} value={exam.id}>
                  {exam.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            marginY: "2rem",
          }}
        >
          <FormControl sx={{ width: "calc(50% - 10px)", outline: "none" }}>
            <InputLabel sx={{ backgroundColor: "white", marginX: "5px" }}>
              Select Reservation Category
            </InputLabel>
            <Select
              name="selectedCategory"
              placeholder="Select Category"
              value={formData.selectedCategory}
              onChange={handleChange}
            >
              {reservationCategories.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </form>
      <Box sx={{ width: "100%", textAlign: "center" }}>
        <Button
          // href={`/collegePredictor/${id}/result`}
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            position:'relative',
            right:"100px",
            borderRadius: "20px",
          }}
        >
          Check Result
        </Button>
      </Box>
    </Box>
  );
};

export default Prediction;
