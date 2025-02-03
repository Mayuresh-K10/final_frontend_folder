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
import { useNavigate } from "react-router-dom"; // Assuming you are using React Router


const FilterComponentCard = ({ stream, courses, program, Year }) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track the selected answer


  const navigate = useNavigate(); // Initialize navigate function


  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };


  useEffect(() => {
    // Load the selected answer from localStorage on component mount
    const storedAnswer = localStorage.getItem("selectedAnswer");
    if (storedAnswer) {
      setSelectedAnswer(storedAnswer);
    }
  }, []);


  const handleCheckboxClick = (answer) => {
    const newSelectedAnswer = answer === selectedAnswer ? null : answer
    setSelectedAnswer(newSelectedAnswer); // Toggle the selected answer
    // Assuming you want to navigate to a URL with the answer value
    localStorage.setItem("selectedAnswer", answer);
    if(newSelectedAnswer){
        navigate(`/course-finder/${answer}`);
    }


  };


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
              {stream}
            </Typography>
          </Grid>
        </Grid>
      </AccordionSummary>


      <AccordionDetails>
        {courses.map((course, index) => (
          <Box key={index} sx={{ marginBottom: "1rem" }}>
            <Box sx={{display:"flex", flexDirection:"row"}}>
            <Checkbox
              sx={{ marginRight: "8px" }}
              checked={course === selectedAnswer}
              onChange={() => handleCheckboxClick(course)}
            />
            <Typography variant="subtitle1" sx={{ marginTop: "0.5rem" }}>
              {course.course}
            </Typography>
            </Box>


            <Stack sx={{ width: "100%" }}>
              
            </Stack>
          </Box>
        ))}


        <Typography
          variant="subtitle1"
          sx={{ marginBottom: "0.5rem", marginTop: "1rem" }}
        >
          Program Type
        </Typography>
        <Stack sx={{ width: "100%" }}>
          {program.map((prog, index) => (
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
                checked={prog.Answer === selectedAnswer}
                onChange={() => handleCheckboxClick(prog.Answer)}
              />
              <Typography>{prog.Answer}</Typography>
            </Box>
          ))}
        </Stack>


        <Typography
          variant="subtitle1"
          sx={{ marginBottom: "0.5rem", marginTop: "1rem" }}
        >
          Course Year
        </Typography>
        <Stack sx={{ width: "100%" }}>
          {Year.map((deg, index) => (
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
                checked={deg.Answer === selectedAnswer}
                onChange={() => handleCheckboxClick(deg.Answer)}
              />
              <Typography>{deg.Answer}</Typography>
            </Box>
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};


export default FilterComponentCard;