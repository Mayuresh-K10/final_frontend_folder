import React, { useState } from "react";
import Container from "@mui/material/Container";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../../appStore/regSlice";

const StepThree = () => {
  const dispatch = useDispatch();

  // redux
  const reduxStep4 = useSelector((state) => state.register.step4);
  const [isFocused, setIsFocused] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value.length <= 200) {
      dispatch(
        actions.updateStep4({ ...reduxStep4, userInfo: value })
      )
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
    if (!reduxStep4.userInfo?.trim()) {
      setShowError(true);
    }
  };

  // Define your list items here
  const listItems = [
    "Your text goes here",
    "Name of Scholarship, Financial Assistance & Job you got on campus with stipend",
    "Name the annual fest & tech fest and month in which they are conducted",
    "Availability of books & journals in the library",
    "Amenities in classrooms",
    "Brief of sports & extra curricular activities on the campus",
    "Mention any social group, clubs or website for students run by students",
  ];

  return (
    <Container>
      <Box sx={{ marginBottom: "2rem", marginTop: "2rem" }}>
        <Typography
          variant="h3"
          color="#7B90FF"
          sx={{ fontSize: "1.5rem", fontWeight: 700 }}
        >
          How is the fees structure & discuss the opportunity of scholarship,
          financial assistance or campus jobs?
        </Typography>
        <Typography variant="subtitle2" color="initial" sx={{ marginTop: "1rem" }}>
          What to include?
        </Typography>
      </Box>

      {/* list */}
      <Box>
        <List>
          {listItems.map((item, index) => (
            <ListItem
              key={index}
              sx={{
                borderRadius: "1rem",
                bgcolor: "#ebefff",
                marginBottom: index === listItems.length - 1 ? 0 : "8px",
              }}
            >
              <ListItemText primary={<span style={{ fontSize: "1rem", fontWeight: 600, }}>{`• ${item}`}</span>} />
            </ListItem>
          ))}
        </List>
        {/* textarea */}
        <Box sx={{ width: "100%", marginX: "auto" }}>
          <TextField
            variant="outlined"
            multiline
            minRows={5}
            fullWidth
            placeholder="Type your info (Max 200 characters)"
            value={reduxStep4.userInfo || ''} // Ensure a default empty string if undefined
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleInputChange}
            error={errorMessage !== ''}
            helperText={`${(reduxStep4.userInfo || '').length}/200 ${errorMessage}`}
            sx={{
              marginBottom: 2,
              width: "100%",
              height: '250px', // Adjust this height as needed
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
        </Box>
      </Box>
    </Container>
  );
};

export default StepThree;
