import React, { useState } from 'react';
import { Container, Typography, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../../appStore/regSlice';

const StepThree = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showError, setShowError] = useState(false);

  const reduxStep3 = useSelector((state) => state.register.step3);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= 200) {
      dispatch(actions.updateStep3({ ...reduxStep3, userInfo: value }));
    }

    if (value.length < 200) {
      setErrorMessage('');
    } else if (value.length > 200) {
      setErrorMessage('Maximum 200 characters allowed');
    } else {
      setErrorMessage('Maximum 200 characters allowed');
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    setShowError(false);
  };
  const handleBlur = () => {
    setIsFocused(false);
    if (!reduxStep3.userInfo?.trim()) {
      setShowError(true);
    }
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 4,
        pt: 3,
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: '#7B90FF', fontWeight: 600, marginLeft: "-1.5rem" }}
      >
        Q. How is the Course Curriculum and Faculty Members?
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: '#210366', fontSize: '14px', fontWeight: 600 }}
      >
        <span style={{ fontSize: '16px', marginRight: '3px', color: '#E4441A', marginLeft: '-1rem' }}>•</span> What to include?
      </Typography>
      <TextField
        variant="outlined"
        multiline
        minRows={5}
        fullWidth
        placeholder="Type your info (Minimum 200 characters)"
        value={reduxStep3.userInfo || ''} // Ensure a default empty string if undefined
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        error={errorMessage !== '' || showError}
        helperText={`${(reduxStep3.userInfo || '').length}/200 ${errorMessage}`}
        required
        inputProps={{ maxLength: 200 }}
        sx={{
          marginBottom: 2,
          marginLeft: "-1.5rem",
          width: '106%',
          minWidth: "250px",
          height: '200px', // Adjust this height as needed
          '& .MuiOutlinedInput-root': {
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
            transition: 'box-shadow 0.3s ease',
            borderRadius: '15px',
            '&:hover': {
              boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.2)',
            },
          },
        }}
      />
      {showError && (
        <div style={{ color: 'red', marginTop: '0.5rem', fontSize: '0.9rem' }}>
          Field is required.
        </div>
      )}
    </Container>
  );
};

export default StepThree;
