import React, { useState } from "react";
import { Container, Typography, TextField } from "@mui/material";
import StepThree from "./Step3"; // Import StepThree
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../../appStore/regSlice";

const StepTwo = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showError, setShowError] = useState(false);

  const reduxStep2 = useSelector((state) => state.register.step2);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= 200) {
      dispatch(actions.updateStep2({ ...reduxStep2, userInfo: value }));
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
    if (!reduxStep2.userInfo?.trim()) {
      setShowError(true);
    }
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 4
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: "#7B90FF", fontWeight: 600 }}
      >
        Q. How was the admission process? If you took any entrance exam, discuss
        the application process and cut off.
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: "#210366", fontSize: "14px", fontWeight: 600 }}
      >
        <span
          style={{ fontSize: "16px", marginRight: "3px", color: "#E4441A" }}
        >
          •
        </span>{" "}
        Eligibility of the Course
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: "#210366", fontSize: "14px", fontWeight: 600 }}
      >
        <span
          style={{ fontSize: "16px", marginRight: "3px", color: "#E4441A" }}
        >
          •
        </span>{" "}
        Where to Find the Application Form
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: "#210366", fontSize: "14px", fontWeight: 600 }}
      >
        <span
          style={{ fontSize: "16px", marginRight: "3px", color: "#E4441A" }}
        >
          •
        </span>{" "}
        Details of Reservation Benefits
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: "#210366", fontSize: "1rem", fontWeight: 600 }}
      >
        <span
          style={{ fontSize: "1rem", marginRight: "3px", color: "#E4441A" }}
        >
          •
        </span>{" "}
        Improvements for the Admission Process
      </Typography>
      <TextField
        variant="outlined"
        multiline
        minRows={5} // Adjust minRows for the desired visible rows
        fullWidth
        placeholder="Type your info (Minimum 200 characters)"
        value={reduxStep2.userInfo || ''}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        error={errorMessage !== ''}
        helperText={`${(reduxStep2.userInfo || '').length}/200 ${errorMessage}`}
        required
        inputProps={{ maxLength: 200 }} // Set maximum character limit
        sx={{
          marginBottom: 2,
          height: "100px", // Adjust height as needed
          minWidth: "250px",
          "& .MuiOutlinedInput-root": {
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            transition: "box-shadow 0.3s ease",
            borderRadius: "15px",
            "&:hover": {
              boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
            },
          },
        }}
      />
      {showError && (
        <div style={{ color: 'red', marginTop: '0.5rem', fontSize: '0.9rem' }}>
          Field is required.
        </div>
      )}
      <StepThree />
    </Container>
  );
};

export default StepTwo;
