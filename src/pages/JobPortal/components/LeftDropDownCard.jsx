import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Typography,
} from "@mui/material";
import { Headings } from './LeftCardData';

const CheckboxExample = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [expandedItems, setExpandedItems] = useState(
    Headings.reduce((acc, heading) => {
      acc[heading.index] = true;
      return acc;
    }, {})
  );

  const handleCheckboxChange = (event) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  const toggleExpand = (index) => {
    setExpandedItems((prevExpandedItems) => ({
      ...prevExpandedItems,
      [index]: !prevExpandedItems[index],
    }));
  };

  return (
    <Box sx={{
      '@media (max-width:800px)': {
        paddingBottom : '2vh',
      },
    }}>
      {
        <FormGroup>
          {Headings.map((heading) => (
            <Box key={heading.index} sx={{
              '@media (max-width:800px)': {
                paddingBottom : '1vh',
              },
            }}>
              <Box
                sx={{
                  backgroundColor: "#7B90FF",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  borderRadius: "12px",
                  marginBottom: "0.5rem",
                  padding: "1%",
                  cursor: "pointer",
                  '@media (max-width:800px)': {
                    marginBottom : '1vh',
                  },
                }}
                onClick={() => toggleExpand(heading.index)}
              >
                <Typography
                  variant="h6"
                  sx={{
                    color: "#FFFFFF",
                    fontFamily: "Poppins",
                    fontWeight: "600",
                    fontSize: "1rem",
                    marginLeft: "0.5rem",
                  }}
                >
                  {heading.name}
                </Typography>
                <span>{expandedItems[heading.index] ? "▼" : "►"}</span>
              </Box>
              {expandedItems[heading.index] &&
                heading.checkBoxData.map((checkbox) => (
                  <FormControlLabel
                    key={checkbox.name}
                    control={
                      <Checkbox
                        checked={checkedItems[checkbox.name]}
                        onChange={handleCheckboxChange}
                        name={checkbox.name}
                        sx={{
                          display : 'flex',
                          textAlign : 'center',
                          color: "#210366",
                          marginLeft: "0.5rem",
                          "&.Mui-checked": {
                            color: "#210366",
                          },
                        }}
                      />
                    }
                    label={checkbox.name}
                    sx={{
                      "& .MuiTypography-root": {
                        fontFamily: "Poppins",
                        fontSize: "0.9rem",
                        color: "#210366",
                        whiteSpace: "wrap",
                        fontWeight: "600",
                        paddingBottom : '1%',
                      },
                    }}
                  />
                ))}
            </Box>
          ))}
        </FormGroup>
      }
    </Box>
  );
};

export default CheckboxExample;
