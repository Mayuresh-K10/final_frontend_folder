import { Box, Divider, Typography, Chip, Button } from '@mui/material'
import React, { useState, useContext} from 'react'
import { FormContext } from './FormContext';

const SubmitJobForm2 = () => {
    const [skills, setSkills] = useState([
        "Interpersonal Skills",
        "HR Management",
        "Communication",
        "HR Policies",
        "Human Resources (HR)",
        "Interpersonal Communication",
        "Organization Skills",
        "Problem Solving",
        "Employee Relations",
        "Presentation Skills",
    ]);

    const [newSkill, setNewSkill] = useState("");

    const { formData, updateFormData, goToNextStep,  goToPrevStep } = useContext(FormContext);

    const handleChange = (e) => {
      const { name, value } = e.target;
      updateFormData(name, value);  // Update context with form data
    };

    const handleDelete = (skillToDelete) => () => {
        setSkills((skills) => skills.filter((skill) => skill !== skillToDelete));
    };

    const handleAddSkill = () => {
        if (newSkill.trim() && skills.length < 10) {
            setSkills([...skills, newSkill.trim()]);
            setNewSkill("");
        }
    };

    return (
        <Box sx={{
            width: '800px',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center ',
            borderRadius: '28px',
            padding: '24px',
            background: 'white',
            '@media(max-width:1100px)': {
                width: '100%'
            }
        }}>
            <Typography sx={{ fontSize: '24px', fontWeight: '500', marginBottom: '10px', textAlign: 'left' }}>1 of 2: Tell us about role</Typography>
            <Divider sx={{ width: '96%', color: 'gray' }} />
            <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px', marginBottom: '20px' }}>
                <Typography sx={{ fontSize: '24px', fontWeight: '500', textAlign: 'left' }}>Description</Typography>
                <textarea
                    type='text'
                    rows={6}
                    placeholder='description...'
                    style={{ width: '100%', outline: 'none', borderRadius: '8px', border: '1px solid black', paddingLeft: '16px' }} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px', marginBottom: '20px' }}>
                <Typography sx={{ fontSize: '24px', fontWeight: '500', textAlign: 'left' }}>
                    Skills
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                    Add skill keywords (max 10) to make your job more visible to the right candidates.
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                    {skills.map((skill) => (
                        <Chip
                            key={skill}
                            label={skill}
                            onDelete={handleDelete(skill)}
                            color="primary"
                            variant="outlined"
                        />
                    ))}
                </Box>
                <input
                    type='text'
                    placeholder='Enter skill'
                    style={{ width: '100%', height: '3rem', outline: 'none', borderRadius: '16px', border: '1px solid black', paddingLeft: '16px' }}
                    onChange={(e) => setNewSkill(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAddSkill()}
                />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px', marginBottom: '20px' }}>
                <Typography sx={{ color: 'lightgray', fontSize: '16px' }}>How do you hear about linkedin job post</Typography>
                <select style={{ width: '100%', height: '3rem', outline: 'none', borderRadius: '16px', border: '1px solid black', paddingLeft: '16px' }}>
                    <option>indeed</option>
                    <option>Linkedin</option>
                    <option>other</option>
                </select>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', marginBottom: '20px', alignContent: 'center', gap: '1.5rem' }}>
                <Button onClick={goToPrevStep}
                sx={{ borderRadius: '16px', background: 'transparent', color: 'black', padding: '8px 20px 8px 20px', border: '1px solid black' }}>
                    Back
                </Button>
                <Button onClick={goToNextStep} 
                sx={{ borderRadius: '16px', background: '#0a66c2', color: 'white', padding: '8px 20px 8px 20px', '&:hover': { background: 'orange' } }}>Next</Button>
            </Box>
        </Box>
    )
}

export default SubmitJobForm2