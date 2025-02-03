import React, { useState, useEffect } from "react";
import {
  Card, Box, FormControl, InputLabel, Select, MenuItem, Accordion, AccordionSummary, AccordionDetails, Chip, IconButton, List,
  ListItem, ListItemText, InputBase, Typography, TextField, Button, Modal, OutlinedInput
} from "@mui/material";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';


const WorkExperienceSkills = () => {
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
  // Year dropdowns
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

  const allSkills = [
    "HTML",
    "CSS",
    "Redux",
    "Next.JS",
    "TypeScript",
    "spring",
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Django",
    "Java",
    "C++",
    // Add more skills as needed
  ];

  const [skills, setSkills] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredSkills, setFilteredSkills] = useState(allSkills);
  const [isExpanded, setIsExpanded] = useState(false);

  const [workEntries, setWorkEntries] = useState([
    { jobTitle: "", company: "", from: "", to: "", description: "" },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedEntries = workEntries.map((entry, i) =>
      i === index ? { ...entry, [field]: value } : entry
    );
    setWorkEntries(updatedEntries);
  };

  const handleAddWork = () => {
    setWorkEntries([
      ...workEntries,
      { jobTitle: "", company: "", from: "", to: "", description: "" },
    ]);
  };

  const handleDeleteWork = (index) => {
    const updatedEntries = workEntries.filter((_, i) => i !== index);
    setWorkEntries(updatedEntries);
  };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearch(query);
    setFilteredSkills(allSkills.filter(skill => skill.toLowerCase().includes(query.toLowerCase())));
  };

  const handleAddSkill = (skill) => {
    if (skill && !skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
    setSearch(''); // Clear the search input
    setIsExpanded(false); // Collapse the list
  };

  const handleRemoveSkill = (skill) => {
    setSkills(skills.filter(s => s !== skill));
  };

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleCloseModal = () => {
    setIsExpanded(false);
  };

  useEffect(() => {
    if (search === '') {
      setFilteredSkills(allSkills);
    }
  }, [search]);

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
          <Box className="skills-wrapper" sx={{ borderRadius: "16px", position: "relative" }}>
            <Box sx={{ margin: '2rem 0rem 3rem 0rem', borderBottom: '1px solid lightgray', width: '100%' }}>
              <Typography sx={{ fontSize: '24px', fontWeight: '600', color: '#313893' }}>SKILLS</Typography>
            </Box>
            <input
              placeholder="Search Skills"
              value={search}
              onChange={handleSearchChange}
              onClick={handleExpandToggle}
              style={{
                backgroundColor: "white",
                borderRadius: "20px",
                paddingLeft: "20px",
                width: "100%",
                height: "3rem",
                marginBottom: "10px",
                outline: "none",
                border: "1px solid lightgray",
              }}
            />

            <Modal
              open={isExpanded}
              onClose={handleCloseModal}
              sx={{ display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1300 }}
            >
              <Box sx={{ maxWidth: "600px", width: "100%", backgroundColor: "white", borderRadius: "10px", padding: 2 }}>
                <List sx={{ maxHeight: "450px", overflowY: "auto", borderRadius: "10px" }}>
                  {filteredSkills.length > 0 ? (
                    filteredSkills.map((skill, index) => (
                      <ListItem button key={index} onClick={() => handleAddSkill(skill)}>
                        <ListItemText primary={skill} />
                      </ListItem>
                    ))
                  ) : (
                    <ListItem>
                      <ListItemText primary="No skills found" />
                    </ListItem>
                  )}
                </List>
              </Box>
            </Modal>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mt: 2 }}>
              {skills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  onDelete={() => handleRemoveSkill(skill)}
                  deleteIcon={<CloseIcon sx={{ color: 'white' }} />}
                  sx={{
                    backgroundColor: "#313893",
                    color: "white",
                    ":hover": { backgroundColor: "orange" },
                  }}
                />
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              marginTop: '40px',
            }}
          >
            <Box sx={{ margin: '2rem 0rem 3rem 0rem', borderBottom: '1px solid lightgray', width: '100%' }}>
              <Typography sx={{ fontSize: '24px', fontWeight: '600', color: '#313893' }}>WORK EXPERIENCE</Typography>
            </Box>
            <Box>
              {workEntries.map((entry, index) => (
                <Accordion key={index} sx={{ bgcolor: "#e6e3e8", marginBottom: '20px', }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index}-content`}
                    id={`heading${index}`}
                    sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <Typography sx={{ flexGrow: 1, color: '#313893' }}>Add Experience*</Typography>
                    <IconButton onClick={() => handleDeleteWork(index)}>
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
                      <Box sx={{ display: 'flex', gap: '20px' }}>
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
                            sx={{ background: 'white', height:'3rem', border:'none', outline:'none' }}
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
              onClick={handleAddWork}
              sx={{ marginTop: '20px', backgroundColor: '#313893', textTransform: 'none' }}
              startIcon={<AddIcon />}
            >
              Add more link
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

export default WorkExperienceSkills;
