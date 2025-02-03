import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Checkbox,
  Stack,
  Typography,
  Grid,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const CourseFilterComponentCard = ({ heading, options, onFilterChange, reset }) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const handleCheckboxClick = (option) => {
    const newSelectedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter((o) => o !== option)
      : [...selectedOptions, option];

    setSelectedOptions(newSelectedOptions);
    localStorage.setItem(
      `${heading}_selectedOptions`,
      JSON.stringify(newSelectedOptions)
    );
    onFilterChange(newSelectedOptions, heading); // Notify parent component of filter change
  };

  useEffect(() => {
    const storedOptions = JSON.parse(
      localStorage.getItem(`${heading}_selectedOptions`)
    );
    if (storedOptions) {
      setSelectedOptions(storedOptions);
    }
  }, [heading]);

  useEffect(() => {
    setSelectedOptions([]);
  }, [reset]);

  return (
    <Accordion
      expanded={expanded}
      onChange={handleToggleExpand}
      sx={{
        background: "#FFFFFF",
        borderRadius: "1rem",
        fontSize: "0.9rem",
        boxShadow: "none",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12}>
            <Typography
              variant="h6"
              sx={{
                width: "100%",
                color: "#210366",
                fontSize: 15,
                fontWeight: "600",
                wordWrap: "break-word",
              }}
            >
              {heading}
            </Typography>
          </Grid>
        </Grid>
      </AccordionSummary>

      <AccordionDetails>
        <Stack sx={{ width: "100%" }}>
          {options.map((option, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "0.6rem",
              }}
            >
              <Checkbox
                sx={{ marginRight: "8px" }}
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxClick(option)}
              />
              <Typography>{option}</Typography>
            </Box>
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default CourseFilterComponentCard;
