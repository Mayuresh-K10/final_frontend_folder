import React, { useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import BlueButton from "../Buttons/BlueButton";

const FoundCollegeHeading = ({ onData, collegecount }) => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (country) => {
    if (activeButton === country) {
      setActiveButton(null); // Deactivate if already active
      onData(''); // Clear the selected city
    } else {
      setActiveButton(country); // Activate if not already active
      onData(country); // Pass the selected city
    }
  };

  

  return (
    <Container
      maxWidth="lg"
      sx={{
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center",
        marginTop: "2rem",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "500",
          fontSize: "2rem",
          color: "#41355D",
          marginBottom: "1rem",
        }}
      >
        Found <span style={{ color: "#FA4003" }}>{collegecount}</span> Colleges
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        {["IIT", "IIIT", "NIT", "IIM"].map((item, index) => (
          <BlueButton 
            key={index} 
            text={item}
            isActive={activeButton === item} // Pass isActive prop based on activeButton state
            onClick={() => handleButtonClick(item)}
          />
        ))}
      </Box>
    </Container>
  );
};

export default FoundCollegeHeading;
