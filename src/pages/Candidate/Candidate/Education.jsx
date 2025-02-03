import React, { useState } from "react";
import {
  Card,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import { styled } from '@mui/material/styles';
import { OutlinedInput } from '@mui/material'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Education = () => {


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
  // year dropdowns
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

  const [educationEntries, setEducationEntries] = useState([
    { title: "", academy: "", from: "", to: "", description: "" },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedEntries = educationEntries.map((entry, i) =>
      i === index ? { ...entry, [field]: value } : entry
    );
    setEducationEntries(updatedEntries);
  };

  const handleAddEducation = () => {
    setEducationEntries([
      ...educationEntries,
      { title: "", academy: "", from: "", to: "", description: "" },
    ]);
  };

  const handleDeleteEducation = (index) => {
    const updatedEntries = educationEntries.filter((_, i) => i !== index);
    setEducationEntries(updatedEntries);
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
              borderRadius: '12px', backgroundColor: 'white', padding: '2rem 3rem 5rem 3rem', width:'100%'
            }}>
              <Box sx={{ margin: '2rem 0rem 3rem 0rem', borderBottom: '1px solid lightgray', width: '100%' }}>
            <Typography sx={{ fontSize: '24px', fontWeight: '600', color: '#313893' }}>EDUCATION</Typography>
          </Box>
             <Box>
                {educationEntries.map((entry, index) => (
                  <Accordion key={index} sx={{ bgcolor: "#e6e3e8", marginBottom: '20px', color: 'white' }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel${index}-content`}
                      id={`heading${index}`}
                      sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    >
                      <Typography sx={{ flexGrow: 1, color: '#313893' }}>Add Education</Typography>
                      <IconButton onClick={() => handleDeleteEducation(index)}>
                        <DeleteOutlinedIcon sx={{ color: '#313893' }} />
                      </IconButton>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <CustomOutlinedInput
                          placeholder="Product Designer (Google)"
                          value={entry.title}
                          onChange={(e) => handleInputChange(index, "title", e.target.value)}
                          fullWidth
                          sx={{ background: 'white', margin:'10px 0' }}
                        />

                        <CustomOutlinedInput
                          placeholder="Google Arts College & University"
                          value={entry.academy}
                          onChange={(e) => handleInputChange(index, "academy", e.target.value)}
                          fullWidth
                          sx={{ background: 'white', margin:'10px 0' }}
                        />

                        <Box sx={{ display: 'flex', gap: '20px', margin:'10px 0' }}>
                          <FormControl fullWidth>
                            <InputLabel>From</InputLabel>
                            <Select
                              value={entry.from}
                              onChange={(e) => handleInputChange(index, "from", e.target.value)}
                              sx={{ background: 'white', height:'3rem', border:'none', outline:'none' }}
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
                              value={entry.to}
                              onChange={(e) => handleInputChange(index, "to", e.target.value)}
                              sx={{ background: 'white',height:'3rem', border:'none', outline:'none' }}
                            >
                              {years.map((year) => (
                                <MenuItem key={year.value} value={year.value}>
                                  {year.label}
                                </MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Box>

                        <CustomOutlinedInput
                          placeholder="Description"
                          value={entry.description}
                          onChange={(e) => handleInputChange(index, "description", e.target.value)}
                          fullWidth
                          multiline
                          rows={3}
                          sx={{ background: 'white', margin:'10px 0' }}
                        />
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
              <Button
                variant="contained"
                onClick={handleAddEducation}
                sx={{ marginTop: '20px', backgroundColor: '#313893', textTransform: 'none' }}
                startIcon={<AddIcon />}
              >
                Add more link
              </Button>
            <Box sx={{
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

export default Education;
