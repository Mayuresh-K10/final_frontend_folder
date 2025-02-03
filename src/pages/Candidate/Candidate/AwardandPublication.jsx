import React, { useState } from "react";
import {
  Card, Box, FormControl, InputLabel, Select, MenuItem, Accordion, AccordionSummary, AccordionDetails, Typography, Button, TextField,OutlinedInput
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { styled } from '@mui/material/styles';


const AwardandPublication = () => {
  const CustomOutlinedInput = styled((props) => <OutlinedInput {...props} />)(({ theme }) => ({
    // Styling for normal placeholder
    '& .MuiOutlinedInput-input::placeholder': {
      color: theme.palette.text.secondary,
      opacity: '0.8',
    },

    // Disabled placeholder styling
    '& .MuiOutlinedInput-input.Mui-disabled::placeholder': {
      color: theme.palette.text.secondary,
      opacity: '1',
    },

    // Input field styles
    '& .MuiOutlinedInput-input': {
      padding: '12px',  // Adjust input padding
      borderRadius: '20px',  // Round the input
      border: 'none',
      backgroundColor: theme.palette.background.default, // Background color
    },

    // Disabled input background
    '& .MuiOutlinedInput-root.Mui-disabled .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.action.disabled, // Disabled input border color
    },

    // Root container styles
    '& .MuiOutlinedInput-root': {
      borderRadius: '20px',  // Add border-radius
      borderColor: theme.palette.divider, // Default border color
      transition: 'border-color 0.3s',  // Smooth transition for border changes
    },

    // Focused state styling
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,  // Change border color on focus
    },

    // Outlined input's border
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.divider,  // Default border color
    },
  }));

  // Year dropdowns for date selection
  const years = [
    { value: 2024, label: "2024" },
    { value: 2023, label: "2023" },
    { value: 2022, label: "2022" },
    { value: 2021, label: "2021" },
    { value: 2020, label: "2020" },
    { value: 2019, label: "2019" },
    { value: 2018, label: "2018" },
    // Add more years as needed
  ];

  const [awardEntries, setAwardEntries] = useState([
    { title: "", publisher: "", date: "" },
  ]);

  const [publicationEntries, setPublicationEntries] = useState([
    { title: "", publisher: "", date: "" },
  ]);

  // Handle input changes for awards and achievements
  const handleAwardInputChange = (index, field, value) => {
    const updatedEntries = awardEntries.map((entry, i) =>
      i === index ? { ...entry, [field]: value } : entry
    );
    setAwardEntries(updatedEntries);
  };

  // Handle input changes for publications
  const handlePublicationInputChange = (index, field, value) => {
    const updatedEntries = publicationEntries.map((entry, i) =>
      i === index ? { ...entry, [field]: value } : entry
    );
    setPublicationEntries(updatedEntries);
  };

  // Add a new award entry
  const handleAddAward = () => {
    setAwardEntries([...awardEntries, { title: "", publisher: "", date: "" }]);
  };

  // Add a new publication entry
  const handleAddPublication = () => {
    setPublicationEntries([...publicationEntries, { title: "", publisher: "", date: "" }]);
  };

  // Delete award entry
  const handleDeleteAward = (index) => {
    const updatedEntries = awardEntries.filter((_, i) => i !== index);
    setAwardEntries(updatedEntries);
  };

  // Delete publication entry
  const handleDeletePublication = (index) => {
    const updatedEntries = publicationEntries.filter((_, i) => i !== index);
    setPublicationEntries(updatedEntries);
  };

  return (
    <Box sx={{
      width: '100%', minHeight: '100vh', background: '#313893', borderTopLeftRadius: '50px', marginBottom: '3rem',
      '@media(max-width:1300px)': { borderTopLeftRadius: '0px' }
    }}>
      <Box sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5rem', marginRight: '25px',
        '@media(max-width:1300px)': { marginRight: '25px', marginLeft: '25px' }
      }}>
          <Card
            sx={{
               borderRadius: '12px', backgroundColor: 'white', padding: '2rem 3rem 5rem 3rem', width: '100%'
            }}>
            <Box sx={{ marginBottom: '2rem' }}>
            <Box sx={{ margin: '2rem 0rem 3rem 0rem', borderBottom: '1px solid lightgray', width: '100%' }}>
              <Typography sx={{ fontSize: '24px', fontWeight: '600', color: '#313893' }}>AWARDS AND ACHEIVEMENTS</Typography>
            </Box>
              {awardEntries.map((course, index) => (
                <Accordion key={index} sx={{ bgcolor: "#e6e3e8", marginBottom: '1rem' }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index}-content`}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center',color:'#313893' }}>
                      Add Course/Certification
                      <DeleteOutlinedIcon onClick={() => handleDeleteAward(index, false)} sx={{color:'#313893'}} />
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <CustomOutlinedInput
                      fullWidth
                      margin="normal"
                      label="Certification Name*"
                      placeholder="Certification Name"
                      value={course.certificationName}
                      sx={{ background: 'white', margin:'10px 0' }}
                      onChange={(e) => handleAwardInputChange(index, "certificationName", e.target.value, false)}
                    />
                    <Box sx={{ display: 'flex', gap: '20px' }}>
                    <FormControl fullWidth>
                      <InputLabel>From</InputLabel>
                      <Select
                        value={course.from}
                        onChange={(e) => handleAwardInputChange(index, "from", e.target.value)}
                        sx={{ background: 'white', height: '3rem', border: 'none', outline: 'none' }}
                      >
                        {years.map((year) => (
                          <MenuItem key={year.value} value={year.value}>
                            {year.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl fullWidth>
                      <InputLabel>To</InputLabel>
                      <Select
                        value={course.to}
                        onChange={(e) => handleAwardInputChange(index, "to", e.target.value)}
                        sx={{ background: 'white', height: '3rem', border: 'none', outline: 'none' }}
                      >
                        {years.map((year) => (
                          <MenuItem key={year.value} value={year.value}>
                            {year.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                  </AccordionDetails>
                </Accordion>
              ))}
              <Button
                variant="contained"
                sx={{
                  marginTop: '10px', backgroundColor: '#313893', color: 'white',
                  '&:hover': { backgroundColor: 'orange' }
                }}
                onClick={() => handleAddAward(false)}
              >
                Add more
              </Button>
            </Box>
            <Box sx={{ marginBottom: '2rem' }}>
            <Box sx={{ margin: '2rem 0rem 3rem 0rem', borderBottom: '1px solid lightgray', width: '100%' }}>
              <Typography sx={{ fontSize: '24px', fontWeight: '600', color: '#313893' }}>PUBLICATION</Typography>
            </Box>
              {publicationEntries.map((course, index) => (
                <Accordion key={index} sx={{ bgcolor: "#e6e3e8", marginBottom: '1rem' }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index}-content`}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', color:'#313893' }}>
                      Add Course/Certification
                      <DeleteOutlinedIcon onClick={() => handleDeletePublication(index, false)} sx={{color:'#313893'}} />
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <TextField
                      fullWidth
                      margin="normal"
                      label="Certification Name*"
                      placeholder="Certification Name"
                      value={course.certificationName}
                      sx={{ background: 'white' ,margin:'10px 0' }}
                      onChange={(e) => handlePublicationInputChange(index, "certificationName", e.target.value, false)}
                    />
                    <Box sx={{ display: 'flex', gap: '20px' }}>
                    <FormControl fullWidth>
                      <InputLabel>From</InputLabel>
                      <Select
                        value={course.from}
                        onChange={(e) => handlePublicationInputChange(index, "from", e.target.value)}
                        sx={{ background: 'white', height: '3rem', border: 'none', outline: 'none' }}
                      >
                        {years.map((year) => (
                          <MenuItem key={year.value} value={year.value}>
                            {year.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <FormControl fullWidth>
                      <InputLabel>To</InputLabel>
                      <Select
                        value={course.to}
                        onChange={(e) => handlePublicationInputChange(index, "to", e.target.value)}
                        sx={{ background: 'white', height: '3rem', border: 'none', outline: 'none' }}
                      >
                        {years.map((year) => (
                          <MenuItem key={year.value} value={year.value}>
                            {year.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                  </AccordionDetails>
                </Accordion>
              ))}
              <Button
                variant="contained"
                sx={{
                  marginTop: '10px', backgroundColor: '#313893', color: 'white',
                  '&:hover': { backgroundColor: 'orange' }
                }}
                onClick={() => handleAddPublication(false)}
              >
                Add more
              </Button>
            </Box>
            <Box
              sx={{
                width: '100%', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2rem', marginTop: '2.5rem'
              }}>
              <Button
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0.5rem 2rem 0.5rem 2rem', color: 'white', background: '#313893', fontSize: '16px', borderRadius: '20px', '&:hover': { background: 'orange', color: 'white' } }}>
                Save
              </Button>
              <Button
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0.5rem 2rem 0.5rem 2rem', color: '#313893', fontSize: '16px', borderRadius: '20px', '&:hover': { background: 'orange', color: 'white' } }}>
                Cancel
              </Button>
            </Box>
          </Card>
        </Box>
      </Box>
  );
};

export default AwardandPublication;