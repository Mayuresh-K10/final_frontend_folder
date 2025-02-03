import { Box, Button, Typography } from '@mui/material'
import React, {useContext} from 'react'
import { FormContext } from './FormContext'


const SubmitJobForm1 = () => {
  const { formData, updateFormData, goToNextStep } = useContext(FormContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData(name, value);  // Update context with form data
  };

  return (
    <Box sx={{
        width:'500px',
        height:'auto',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignContent:'center ',
        borderRadius:'28px',
        padding:'24px',
        background:'white',
        '@media(max-width:600px)':{
          width:'100%'
        },
    }}>
      <Typography sx={{fontSize:'32px', fontWeight:'500', color:'black', textAlign:'left'}}>Post a job for free</Typography>
      <Typography sx={{fontSize:'14px', color:'gray', textAlign:'left'}}>Increase the quality of your hire</Typography>
      <Box sx={{display:'flex', flexDirection:'column', marginTop:'20px', marginBottom:'20px'}}>
        <Typography sx={{color:'lightgray', fontSize:'16px'}}>Job Title</Typography>
        <input
        type='text'
        placeholder='Enter job title'
        style={{width:'100%', height:'3rem',outline:'none',borderRadius:'16px', border:'1px solid black', paddingLeft:'16px'}} />
      </Box>
      <Box sx={{display:'flex', flexDirection:'column', marginTop:'20px', marginBottom:'20px'}}>
        <Typography sx={{color:'lightgray', fontSize:'16px'}}>Company</Typography>
        <input
        type='text'
        placeholder='Enter job title'
        style={{width:'100%', height:'3rem',outline:'none',borderRadius:'16px', border:'1px solid black', paddingLeft:'16px'}} />
      </Box>
      <Box sx={{display:'flex', flexDirection:'column', marginTop:'20px', marginBottom:'20px'}}>
        <Typography sx={{color:'lightgray', fontSize:'16px'}}>Work Place Type</Typography>
        <select style={{width:'100%', height:'3rem',outline:'none',borderRadius:'16px', border:'1px solid black', paddingLeft:'16px'}}>
          <option>Remote</option>
          <option>Hybrid</option>
          <option>Onsite</option>
        </select>
      </Box>
      <Box sx={{display:'flex', flexDirection:'column', marginTop:'20px', marginBottom:'20px'}}>
        <Typography sx={{color:'lightgray', fontSize:'16px'}}>Employee Location</Typography>
        <input
        type='text'
        placeholder='Enter job title'
        style={{width:'100%', height:'3rem',outline:'none',borderRadius:'16px', border:'1px solid black', paddingLeft:'16px'}} />
      </Box>
      <Box sx={{display:'flex', flexDirection:'column', marginTop:'20px', marginBottom:'20px'}}>
        <Typography sx={{color:'lightgray', fontSize:'16px'}}>Job Type</Typography>
        <select style={{width:'100%', height:'3rem',outline:'none',borderRadius:'16px', border:'1px solid black', paddingLeft:'16px'}}>
          <option>Internship</option>
          <option>FullTime</option>
          <option>Contract</option>
          <option>Freelance</option>
        </select>
      </Box>
      <Button sx={{width:'100%',height:'3rem', borderRadius:'32px',background:'#0a66c2', color:'white','&:hover':{background:'orange'},
    marginTop:'20px', marginBottom:'20px'}} onClick={goToNextStep}>
        Get Started
      </Button>
    </Box>
  )
}

export default SubmitJobForm1