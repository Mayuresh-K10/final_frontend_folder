import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  TextField,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary, Divider,
} from "@mui/material";
import React, { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import SearchIcon from "@mui/icons-material/Search";

const FoundQues = () => {
  const FindExams = [
    "Manipur",
    "Manipur Board",
    "MET",
    "MGIMS Wardha",
    "MH CET",
    "MHT CET",
    "MP PMT",
  ];
  const FindSubjects = ["Biology", "Chemistry", "Mathematics", "Physics"];

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: "1rem",
          boxShadow: "0px 0px 2.5rem rgba(123, 144, 255, 0.15)",
          marginTop: "1rem",
          padding: "0.2rem",
          border: "3px solid lightGray",
        }}
      >
        <Container>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingTop: "1rem",
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{
                  color: "#000080",
                  fontWeight: "bold",
                  fontSize: "1rem",
                }}
              >
                Found 6715 Questions
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#000080",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  paddingTop: "0.5rem",
                }}
              >
                Set default
                
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              width: "auto",
              marginBottom: "1rem",
              marginTop: "1.5rem",
            }}
          >
            <Accordion sx={{ boxShadow:"none" }}>
              <AccordionSummary
                expandIcon={<ExpandLessIcon />}
                aria-controls="exams-content"
                id="exams-header"
                
              >
                <Typography>Exams</Typography>
               
              </AccordionSummary>
            
              <AccordionDetails sx={{ boxShadow: "none", }}>
                <Box sx={{}}>
                  <TextField
                    value={searchTerm}
                    onChange={handleChange}
                    sx={{
                      width: "auto",
                    }}
                    label="Find Exams "
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                <Box>
                  <FormGroup>
                    {FindExams.map((FindExam, index) => {
                      return (
                        <FormControlLabel
                          control={<Checkbox />}
                          key={index}
                          label={FindExam}
                        />
                      );
                    })}
                  </FormGroup>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Divider
                variant="fullWidth"
                orientation="horizontal"
              
                
              />
          <Box
            sx={{
              borderRadius: "0.75rem",
              background: "#7B90FF",
              width: "auto",
              marginBottom: "1rem",
            }}
          >
            <Accordion sx={{ boxShadow:"none" }}>
              <AccordionSummary
                expandIcon={<ExpandLessIcon />}
                aria-controls="subjects-content"
                id="subjects-header"
              >
                <Typography>Subjects</Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ border: "none" }}>
               

                <Box
                  sx={{
                    paddingTop: "1rem",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    value={searchTerm}
                    onChange={handleChange}
                    sx={{
                      width: "auto",
                      borderRadius: " 0.9375rem",
                      border:"none"
                    }}
                    label="Find Subjects "
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end" sx={{ marginRight: '0',border:"none" }}>
                          <SearchIcon sx={{ border: 'none' }} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>

                <Box>
                  <FormGroup>
                    {FindSubjects.map((Subjects, index) => {
                      return (
                        <FormControlLabel
                          control={<Checkbox />}
                          key={index}
                          label={Subjects}
                          sx={{ paddingLeft: "1rem", color: "#210366" }}
                        />
                      );
                    })}
                  </FormGroup>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default FoundQues;
