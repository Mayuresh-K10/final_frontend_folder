import React, { useState } from "react";
import {
  Card, Box, FormControl, InputLabel, Select, MenuItem, Accordion, AccordionSummary, Typography,
  AccordionDetails, Chip, Button, TextField, OutlinedInput
} from "@mui/material";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ProjectAndCourse = () => {
  
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
  ];

  const allSkills = [
    "HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "Java", "C++",
  ];

  // Project state
  const [projects, setProjects] = useState([
    { title: "", link: "", from: "", to: "", skills: [], description: "" },
  ]);

  // Course and Certification state
  const [courses, setCourses] = useState([
    { certificationName: "", from: "", to: "" },
  ]);

  // Skill search state for projects
  const [skillSearch, setSkillSearch] = useState("");
  const [filteredSkills, setFilteredSkills] = useState(allSkills);

  // Handle changes in input fields
  const handleInputChangepro = (index, field, value, isProject = true) => {
    const updatedEntries = isProject
      ? projects.map((project, i) =>
        i === index ? { ...project, [field]: value } : project
      )
      : courses.map((course, i) =>
        i === index ? { ...course, [field]: value } : course
      );
    isProject ? setProjects(updatedEntries) : setCourses(updatedEntries);
  };

  // Add new project or course
  const handleAddEntry = (isProject = true) => {
    if (isProject) {
      setProjects([...projects, { title: "", link: "", from: "", to: "", skills: [], description: "" }]);
    } else {
      setCourses([...courses, { certificationName: "", from: "", to: "" }]);
    }
  };

  // Delete project or course
  const handleDeleteEntry = (index, isProject = true) => {
    const updatedEntries = isProject
      ? projects.filter((_, i) => i !== index)
      : courses.filter((_, i) => i !== index);
    isProject ? setProjects(updatedEntries) : setCourses(updatedEntries);
  };

  // Handle skill addition/removal in projects
  const handleAddSkill = (skill, index) => {
    const updatedProjects = projects.map((project, i) =>
      i === index ? { ...project, skills: [...project.skills, skill] } : project
    );
    setProjects(updatedProjects);
  };

  const handleRemoveSkill = (skill, index) => {
    const updatedProjects = projects.map((project, i) =>
      i === index
        ? { ...project, skills: project.skills.filter((s) => s !== skill) }
        : project
    );
    setProjects(updatedProjects);
  };

  // Handle skill search
  const handleSkillSearchChange = (event) => {
    const query = event.target.value;
    setSkillSearch(query);
    setFilteredSkills(allSkills.filter(skill => skill.toLowerCase().includes(query.toLowerCase())));
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
              <Typography sx={{ fontSize: '24px', fontWeight: '600', color: '#313893' }}>PROJECTS</Typography>
            </Box>
            {projects.map((project, index) => (
              <Accordion key={index} sx={{ bgcolor: "#e6e3e8", marginBottom: '1rem' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', color:'#313893' }}>
                    Add Project
                    <DeleteOutlinedIcon onClick={() => handleDeleteEntry(index, true)} sx={{color:'#313893'}}/>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  {/* Project Fields */}
                  <CustomOutlinedInput
                    fullWidth
                    
                    label="Title*"
                    placeholder="Project Title"
                    value={project.title}
                    sx={{ background: 'white', margin:'10px 0' }}
                    onChange={(e) => handleInputChangepro(index, "title", e.target.value, true)}
                  />
                  <CustomOutlinedInput
                    fullWidth
                    
                    label="Link*"
                    placeholder="Project Link"
                    value={project.link}
                    sx={{ background: 'white', margin:'10px 0' }}
                    onChange={(e) => handleInputChangepro(index, "link", e.target.value, true)}
                  />
                  <Box sx={{ display: 'flex', gap: '20px', margin:'10px 0' }}>
                    <FormControl fullWidth>
                      <InputLabel>From</InputLabel>
                      <Select
                        value={project.from}
                        onChange={(e) => handleInputChangepro(index, "from", e.target.value)}
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
                        value={project.to}
                        onChange={(e) => handleInputChangepro(index, "to", e.target.value)}
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
                  {/* Skills */}
                  <CustomOutlinedInput
                    fullWidth
                    
                    label="Search Skills"
                    placeholder="Search Skills"
                    value={skillSearch}
                    onChange={handleSkillSearchChange}
                    sx={{ background: 'white', margin:'10px 0' }}
                  />
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                    {filteredSkills.map(skill => (
                      <Chip key={skill} label={skill} onClick={() => handleAddSkill(skill, index)} />
                    ))}
                  </Box>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
                    {project.skills.map(skill => (
                      <Chip key={skill} label={skill} onDelete={() => handleRemoveSkill(skill, index)} sx={{ background: '#313893', color: 'white' }} />
                    ))}
                  </Box>
                  <CustomOutlinedInput
                    fullWidth
                    
                    label="Description*"
                    placeholder="Project Description"
                    multiline
                    rows={4}
                    value={project.description}
                    sx={{ background: 'white' }}
                    onChange={(e) => handleInputChangepro(index, "description", e.target.value, true)}
                  />
                </AccordionDetails>
              </Accordion>
            ))}
            <Button
              variant="contained"
              sx={{
                marginTop: '10px', backgroundColor: '#313893', color: 'white',
                '&:hover': { backgroundColor: 'orange' }
              }}
              onClick={() => handleAddEntry(true)}
            >
              Add more
            </Button>
          </Box>
          <Box sx={{ marginBottom: '2rem' }}>
          <Box sx={{ margin: '2rem 0rem 3rem 0rem', borderBottom: '1px solid lightgray', width: '100%' }}>
              <Typography sx={{ fontSize: '24px', fontWeight: '600', color: '#313893' }}>COURSES AND CERTIFICATION</Typography>
            </Box>
            {courses.map((course, index) => (
              <Accordion key={index} sx={{ bgcolor: "#e6e3e8", marginBottom: '1rem' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index}-content`}
                >
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', color:'#313893' }}>
                    Add Course/Certification
                    <DeleteOutlinedIcon onClick={() => handleDeleteEntry(index, false)} sx={{color:'#313893'}} />
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <CustomOutlinedInput
                    fullWidth
                    
                    label="Certification Name*"
                    placeholder="Certification Name"
                    value={course.certificationName}
                    sx={{ background: 'white', margin:'10px 0' }}
                    onChange={(e) => handleInputChangepro(index, "certificationName", e.target.value, false)}
                  />
                  <Box sx={{ display: 'flex', gap: '20px' }}>
                    <FormControl fullWidth>
                      <InputLabel>From</InputLabel>
                      <Select
                        value={course.from}
                        onChange={(e) => handleInputChangepro(index, "from", e.target.value)}
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
                        onChange={(e) => handleInputChangepro(index, "to", e.target.value)}
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
              onClick={() => handleAddEntry(false)}
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

export default ProjectAndCourse;
