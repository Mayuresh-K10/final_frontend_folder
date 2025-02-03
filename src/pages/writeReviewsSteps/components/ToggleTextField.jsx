import React, { useState } from "react";
import Switch from "@mui/material/Switch";

import { Box, Typography } from "@mui/material";

const ToggleTextField = ({ title, label, initialValue }) => {
  const [isEnabled, setIsEnabled] = useState(initialValue);
  const [inputValue, setInputValue] = useState("");

  const handleSwitchChange = (event) => {
    setIsEnabled(event.target.checked);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <React.Fragment>
      <Typography>{title}</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Typography>No</Typography>
        <Switch checked={isEnabled} onChange={handleSwitchChange} />
        <Typography>Yes</Typography>
      </Box>
      <input
        value={inputValue}
        onChange={handleInputChange}
        disabled={!isEnabled}
        placeholder={label}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{
          padding: "10px",
          width: "100%",
          minWidth: "150px",
          borderRadius: "12px",
          fontSize: "1.2rem",
          outline: isFocused ? "1px solid #7B90FF" : "1px solid #D0D0D0",
          border: isFocused ? "1px solid white" : "1px solid #D0D0D0",
          transition: "all 0.1s ease-in-out",
        }}
      />
    </React.Fragment>
  );
};

export default ToggleTextField;
