import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import CountryFilterButton from "../../components/Buttons/CountryFilterButton";
import { useLocation} from "react-router-dom";
import Btns from "./Data";

const CountryFilter = ({ onData }) => {
  const [activeButton, setActiveButton] = useState(null);
  const [showAllButtons, setShowAllButtons] = useState(false);

  const location = useLocation();
  

  const handleButtonClick = (country) => {
    if (activeButton === country) {
      setActiveButton(null);

      const searchParams = new URLSearchParams(location.search);
      searchParams.delete("selectedCountry");
      onData(''); // Clear the selected city
    } else {
      setActiveButton(country);
      handleFilterCountry(country);
      onData(country);
    }
  };

  const handleFilterCountry = (country) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("state", country);
    
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "auto",
        flexWrap: "wrap",
        gap: "1rem",
        width: "85%",
        border: "1px solid #edeff0",
        borderRadius: "1rem",
        flexDirection: "row",
        padding: "0.5rem",
        marginBottom: "0.75rem",
        justifyContent: "stretch",
        alignItems: "center",
        boxShadow: "0 0 5px 0 rgba(207,207,207,0.5)",
        "@media (max-width : 700px)": {
          flexDirection: "column",
        },
      }}
    >
      <Box sx={{ padding: "1rem" }}>
        <Typography sx={{ color: "#4C516D", fontWeight: 600 }}>
          Select city
        </Typography>
      </Box>
      <Box
        sx={{
          width: "85%",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        {Btns.slice(0, showAllButtons ? Btns.length : 5).map((btn,index) => (
          <CountryFilterButton
            key={index}
            name={btn.name}
            isActive={activeButton === btn.name}
            onClick={() => handleButtonClick(btn.name)}
          />
        ))}
        {!showAllButtons && (
          <Button
            sx={{
              background: "#E1EBEE",
              borderRadius: "8px",
              color: "#545AA7",
              padding: "5px 19px",
              fontWeight: "600",
              border: "1px solid lightgrey",
              "&:hover": {
                bgcolor: "white",
                textDecoration: "underline",
                color: "#FF5733",
              },
            }}
            onClick={() => setShowAllButtons(true)}
          >
            Show all
          </Button>
        )}
        {showAllButtons && (
          <Button
            sx={{
              background: "#E1EBEE",
              borderRadius: "8px",
              color: "#545AA7",
              padding: "5px 19px",
              fontWeight: "600",
              border: "1px solid lightgrey",
              "&:hover": {
                bgcolor: "white",
                textDecoration: "underline",
                color: "#FF5733",
              },
            }}
            onClick={() => setShowAllButtons(false)}
          >
            Hide
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default CountryFilter;
