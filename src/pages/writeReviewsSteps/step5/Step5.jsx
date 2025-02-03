import React, { useState,useEffect } from 'react';
import { Typography, Grid, Box, Button, Checkbox, FormControlLabel, Container } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../appStore/regSlice';

const StepFive = ({ onValidationChange }) => {
  const dispatch = useDispatch();
  const [agree, setAgree] = useState(false);
  const [files, setFiles] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const reduxStep6 = useSelector((state) => state.register.step6);

  useEffect(() => {
    onValidationChange(agree);

  }, [ agree, onValidationChange]);

  const handleAgreeChange = (event) => {
    const isChecked = event.target.checked;
   
    setAgree(isChecked);
    dispatch(actions.updateStep6({agree: isChecked }));
  };

  const handleChange = (e) => {
    const selectedFiles = e.target.files;
    // console.log("Selected Files:", selectedFiles); // Log selected files
    if (selectedFiles.length > 0) {
      setFiles(selectedFiles);
      setErrorMessage("");
      dispatch(actions.updateStep6({ ...reduxStep6, files: selectedFiles }));
    } else {
      setFiles([]);
      setErrorMessage("Please upload at least one photo.");
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    setShowError(false);
  };
  const handleBlur = () => {
    setIsFocused(false);
    if (!reduxStep6.agree) {
      setShowError(true);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 3, '@media (max-width:800px)': { marginX: 'auto', maxWidth: '100%' } }}>
      <Typography variant="h5" sx={{ 
        marginLeft: "12rem", 
        fontWeight: "bold", 
        fontSize: "30px", 
        color: "#7B90FF",
        '@media (max-width:800px)': { marginLeft: '0rem' } 
        }}>
        Upload Photos
      </Typography>
      <Typography variant="body1" sx={{ 
        marginLeft: "12rem", 
        marginTop: "3px", 
        color: "#210366", 
        fontWeight: "bold",
        '@media (max-width:800px)': { marginLeft: '0rem' } 
        }}>
        Maximum limit: 5MB per image. Upload photos of the college, campus, hostels, events photos, etc.
      </Typography>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        {/* Profile Pic Upload */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              marginLeft: '12rem',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '250px',
              width: '70%',
              cursor: 'pointer',
              border: '2px dashed #210366',
              borderRadius: '4px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              '&:hover': { backgroundColor: "#EEECFE" },
              '@media (max-width:800px)': { marginLeft: '0rem', width: '100%' }
            }}
          >
            <input
              accept="image/*"
              id="profile-pic-upload"
              multiple={false}
              type="file"
              style={{ display: 'none' }}
              onChange={handleChange}
            />
            <label htmlFor="profile-pic-upload">
              <AccountCircleOutlinedIcon style={{ fontSize: '80px', color: '#210366' }} />
            </label>
            <Typography sx={{ fontSize: "10px", fontWeight: "bold", color: "#210366" }}>
              Upload your profile photo and get a chance to feature on the Collegecue Leaderboard
            </Typography>
            <Button
              variant="outlined"
              component="label"
              htmlFor="profile-pic-upload"
              sx={{ textTransform: 'none', color: '#1976D2', marginTop: '10px' }}
            >
              Upload Profile Pic
            </Button>
          </Box>
        </Grid>

        {/* Photos Upload */}
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: 'flex',
              marginLeft: "3.5rem",
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '250px',
              width: '70%',
              cursor: 'pointer',
              border: '2px dashed #210366',
              borderRadius: '4px',
              boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
              '&:hover': { backgroundColor: "#EEECFE" },
              '@media (max-width:800px)': { marginLeft: '0rem', width: '100%' }
            }}
          >
            <input
             accept="image/*"
             id="photos-upload"
             multiple
             type="file"
             style={{ display: 'none' }}
             onChange={handleChange}
            />
            <label htmlFor="photos-upload">
              <AddPhotoAlternateOutlinedIcon style={{ fontSize: '80px', color: '#210366' }} />
            </label>
            <Typography sx={{ fontSize: "10px", fontWeight: "bold", color: "#210366" }}>
              Drag & drop files here or
            </Typography>
            <Button
              variant="outlined"
              component="label"
              htmlFor="photos-upload"
              sx={{ textTransform: 'none', color: '#1976D2', marginTop: '10px' }}
            >
              Upload Photos
            </Button>
          </Box>
        </Grid>
      </Grid>

      {/* Additional Paragraphs */}
      <Box sx={{ 
        mt: 5, 
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;", 
        width: "75%", 
        marginLeft: "12rem", 
        borderRadius: "12px",
        '@media (max-width:800px)': { marginLeft: '0rem', width: '100%' }
        }}>
        <Typography sx={{ padding: "1rem", color: "#210366", fontSize: "20px" }}>
          Your photos might get rejected
        </Typography>
        <Typography sx={{ padding: "1rem", color: "#210366", marginTop: "-2rem" }}>
          Do not share personal photographs. Share Photos of Campus, Fests, Sports and Academic Infrastructure etc
        </Typography>
      </Box>

      {/* Terms & Conditions Checkbox */}
      <Box sx={{ mt: 5, marginLeft: "12rem", color: "#210366", '@media (max-width:800px)': { marginLeft: '0rem' } }}>
        <FormControlLabel 
        onFocus={handleFocus}
        onBlur={handleBlur}
        error={errorMessage !== showError}
          control={<Checkbox checked={agree} onChange={handleAgreeChange} color="primary" />}
          label="I Agree with Above mentioned T&C"
        />
      </Box>
      {showError && (
            <div style={{ color: 'red', marginTop: '0.5rem', fontSize: '0.9rem' }}>
              Need to agree to terms and Conditions.
            </div>
          )}

      {/* Terms & Conditions Text */}
      <Box sx={{ 
        mt: 5, 
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", 
        padding: "1rem", 
        width: "75%", 
        marginLeft: "12rem", 
        borderRadius: "15px",
        '@media (max-width:800px)': { marginLeft: '0rem', width: '100%' }
        }}>
        <Typography variant="body1" sx={{ color: "#210366" }}>
          Before uploading, please ensure that you agree to the following:
        </Typography>
        <ul>
          <li>
            <Typography variant="body1" sx={{ color: "#210366" }}>
              Impersonate another person or his or her email address, or misrepresent your current or former affiliation with an institution.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" sx={{ color: "#210366" }}>
              Create user accounts under false or fraudulent pretences, create or use an account for anyone other than yourself.
            </Typography>
          </li>
          <li>
            <Typography variant="body1" sx={{ color: "#210366" }}>
              Post content that is defamatory, libelous or fraudulent, that you know to be false or misleading or that does not reflect your honest.
            </Typography>
          </li>
        </ul>
      </Box>
    </Container>
  );
};

export default StepFive;
