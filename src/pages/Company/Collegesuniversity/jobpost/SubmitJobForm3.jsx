import { Checkbox, Box, Typography, Button, IconButton, Chip, Divider, Modal } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import React, { useState , useContext } from 'react'
import { FormContext } from './FormContext';


const SubmitJobForm3 = () => {
    const [questions, setQuestions] = useState([
        { skill: "Human Resources (HR)", experience: 1, mustHave: false, questionPrompt: "How many years of work experience do you have with Human Resources (HR)?" },
        { skill: "Communication", experience: 1, mustHave: false, questionPrompt: "How many years of work experience do you have with Communication?" },
        { skill: "Organization Skills", experience: 1, mustHave: false, questionPrompt: "How many years of work experience do you have with Organization Skills?" }
    ]);

    // Predefined questions with custom prompts for chips
    const { formData, updateFormData, goToNextStep,  goToPrevStep, submitForm,resetForm } = useContext(FormContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = () => {
        submitForm();  // Call the submit form function from context
        setIsModalOpen(true);  // Show modal
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        resetForm();
    };

    const predefinedQuestions = {
        "Education": {
            skill: "Education",
            experience: "",
            mustHave: false,
            questionPrompt: "Have you completed the required or Bachelor's level of education?"
        },
        "Driver's License": {
            skill: "Driver's License",
            experience: "",
            mustHave: false,
            questionPrompt: "Do you have a valid driver's license?"
        },
        "Background Check": {
            skill: "Background Check",
            experience: "",
            mustHave: false,
            questionPrompt: "Are you willing to undergo a background check?"
        },
        "Drug Test": {
            skill: "Drug Test",
            experience: "",
            mustHave: false,
            questionPrompt: "Are you ready to undergo a drug test?"
        },
        "Expertise with Skill": {
            skill: "Expertise with Skill",
            experience: "",
            mustHave: false,
            questionPrompt: "How many years of expertise do you have with this skill?"
        },
        "Hybrid Work": {
            skill: "Hybrid Work",
            experience: "",
            mustHave: false,
            questionPrompt: "Are you comfortable working in a hybrid environment?"
        },
        "Industry Experience": {
            skill: "Industry Experience",
            experience: "",
            mustHave: false,
            questionPrompt: "How many years of experience do you have in this industry?"
        },
        "Work Authorization": {
            skill: "Work Authorization",
            experience: "",
            mustHave: false,
            questionPrompt: "Are you authorized to work in this country?"
        }
    };

    // Add a new custom or predefined question
    const addQuestion = (question = { skill: "", experience: "", mustHave: false, questionPrompt: "How many years of work experience do you have with this skill?" }) => {
        setQuestions([...questions, question]);
    };

    // Handle adding predefined questions from Chips
    const handleAddPredefinedQuestion = (label) => {
        const questionToAdd = predefinedQuestions[label];
        if (questionToAdd) {
            addQuestion(questionToAdd);
        }
    };

    // Update individual questions
    const handleQuestionChange = (index, field, value) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index][field] = value;
        setQuestions(updatedQuestions);
    };

    // Delete a question
    const deleteQuestion = (index) => {
        const updatedQuestions = questions.filter((_, i) => i !== index);
        setQuestions(updatedQuestions);
    };

    return (
        <Box sx={{
            width: '800px',
            height: 'auto',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            borderRadius: '28px',
            padding: '24px',
            background: 'white',
            '@media(max-width:1100px)': {
                width: '100%'
            }
        }}>
            <Typography sx={{ fontSize: '24px', fontWeight: '500', marginBottom: '10px', textAlign: 'left' }}>2 of 2: Receive Qualified Component</Typography>
            <Divider sx={{ width: '96%', color: 'gray' }} />
            <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop: '20px', marginBottom: '20px', flexBasis: 'wrap', gap: '4rem' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '30%' }}>
                    <Typography>Receive applicants</Typography>
                    <select style={{ width: '100%', height: '3rem', outline: 'none', borderRadius: '16px', border: '1px solid black', paddingLeft: '16px' }}>
                        <option>By email</option>
                        <option>....</option>
                    </select>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', width: '70%' }}>
                    <input
                        type='text'
                        placeholder='email'
                        style={{ width: '100%', height: '3rem', outline: 'none', borderRadius: '16px', border: '1px solid black', paddingLeft: '16px' }}
                    />
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px', marginBottom: '20px' }}>
                <Typography sx={{ fontSize: '24px', fontWeight: '500', textAlign: 'left' }}>Screening questions</Typography>
                <Typography>We recommend adding 3 or more questions. Applicant must answer each question.</Typography>
                {questions.map((question, index) => (
                    <Box
                        key={index}
                        sx={{ width: '100%', height: "auto", borderRadius: '12px', overflow: 'hidden', margin: '20px 0', border: "1px solid lightgray" }}
                    >
                        <Box sx={{
                            width: '100%', background: '#f8fafd', justifyContent: "space-between", alignItems: 'center', display: 'flex', padding: '10px 16px'
                        }}>
                            <Box sx={{ textWrap: 'wrap', flexWrap: 'wrap', justifyContent: "flex-start", alignItems: 'center', display: 'flex', gap: '1rem' }}>
                                {index < 3
                                    ? `How many years of work experience do you have with ${question.skill}?`
                                    : question.questionPrompt
                                }
                                <Button sx={{ background: 'green', color: 'white', padding: "0.5rem 1rem 0.5rem 1rem", fontWeight: '600' }}>Recommended</Button>
                            </Box>
                            <IconButton
                                size="small"
                                onClick={() => deleteQuestion(index)}
                            >
                                <ClearIcon sx={{ color: 'black' }} />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-evenly', gap: '1.5rem', padding: '50px 20px' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography sx={{ color: 'lightgray' }}>Skill</Typography>
                                <input
                                    type='text'
                                    value={question.skill}
                                    onChange={(e) => handleQuestionChange(index, "skill", e.target.value)}
                                    placeholder=''
                                    style={{ width: '200px', height: '3rem', border: '1px solid black', paddingLeft: '1rem', outline: 'none' }} />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Typography sx={{ color: 'lightgray' }}>Ideal Answer</Typography>
                                <input
                                    type='text'
                                    value={question.experience}
                                    onChange={(e) => handleQuestionChange(index, "experience", e.target.value)}
                                    placeholder=''
                                    style={{ width: '200px', height: '3rem', border: '1px solid black', paddingLeft: '1rem', outline: 'none' }} />
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <Checkbox
                                    checked={question.mustHave}
                                    onChange={(e) => handleQuestionChange(index, "mustHave", e.target.checked)}
                                />
                                <Typography>Must have qualification</Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}

                <Button variant="contained" onClick={() => addQuestion()} sx={{ mt: 2 }}>
                    Add Custom Screening Question
                </Button>

                <Typography variant="body2" sx={{ mt: 3 }}>
                    Add screening options:
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {Object.keys(predefinedQuestions).map((label, index) => (
                        <Chip key={index} label={label} clickable onClick={() => handleAddPredefinedQuestion(label)} />
                    ))}
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '20px', marginBottom: '20px' }}>
                <Typography sx={{ fontSize: '24px', fontWeight: '500', textAlign: 'left' }}>Qualification setting</Typography>
                <Typography sx={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', textWrap: 'wrap', gap: '1rem', textAlign: 'left' }}>
                    <input type='checkbox' />
                    Filter out and send rejections to applicants who don't meet any must-have qualification
                </Typography>
                <Typography sx={{ marginTop: '20px' }}>Preview</Typography>
                <textarea
                    type='text'
                    placeholder='Thank you for your interest in the Human Resources Intern position at BharatTech in India. 
                        Unfortunately, BharatTech did not select your application to move forward in the hiring process.
                        Regards, BharatTech'
                    rows={6}
                    style={{ width: '100%', outline: 'none', borderRadius: '8px', border: '1px solid black', paddingLeft: '8px' }}>
                </textarea>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px', marginBottom: '20px', alignContent: 'center', gap: '1.5rem' }}>
                <Button onClick={goToPrevStep} 
                sx={{ borderRadius: '16px', background: 'transparent', color: 'black', padding: '8px 20px 8px 20px', border: '1px solid black' }}>
                    Back
                </Button>
                <Button onClick={handleSubmit}
                sx={{ borderRadius: '16px', background: '#0a66c2', color: 'white', padding: '8px 20px 8px 20px', '&:hover': { background: 'orange' } }}>Submit</Button>
            </Box>
            <Modal open={isModalOpen} onClose={handleCloseModal}>
                <Box sx={{ ...modalStyles }}>
                    <Typography variant="h6">Job Submitted Successfully!</Typography>
                    <Typography>Your job post has been submitted and will be promoted.</Typography>
                    <Button variant="contained" color="primary" onClick={handleCloseModal}>
                        OK
                    </Button>
                </Box>
            </Modal>
        </Box>
    );
};

const modalStyles = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    textAlign: "center",
};

export default SubmitJobForm3;
