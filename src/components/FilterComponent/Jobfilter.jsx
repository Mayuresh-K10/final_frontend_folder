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
import { useNavigate } from "react-router-dom";

const JobFilter = ({ stream, courses = [], program = [], Year = [] }) => {
  const [expanded, setExpanded] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const navigate = useNavigate();

  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const storedAnswer = localStorage.getItem("selectedAnswer");
    if (storedAnswer) {
      setSelectedAnswer(storedAnswer);
    }
  }, []);

  const handleCheckboxClick = (answer) => {
    const newSelectedAnswer = answer === selectedAnswer ? null : answer;
    setSelectedAnswer(newSelectedAnswer);
    localStorage.setItem("selectedAnswer", newSelectedAnswer || "");
    if (newSelectedAnswer) {
      navigate(`/course-finder/${newSelectedAnswer}`);
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
        <Typography variant="subtitle1" sx={{ marginBottom: "0.5rem" }}>
          Courses
        </Typography>
        <Stack sx={{ width: "100%" }}>
          {courses.map((course, index) => (
            <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                sx={{ marginRight: "8px" }}
                checked={course === selectedAnswer}
                onChange={() => handleCheckboxClick(course)}
              />
              <Typography variant="subtitle1">{course.course}</Typography>
            </Box>
          ))}
        </Stack>

        <Typography variant="subtitle1" sx={{ marginTop: "1rem" }}>
          Program Type
        </Typography>
        <Stack sx={{ width: "100%" }}>
          {program.map((prog, index) => (
            <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                sx={{ marginRight: "8px" }}
                checked={prog.Answer === selectedAnswer}
                onChange={() => handleCheckboxClick(prog.Answer)}
              />
              <Typography>{prog.Answer}</Typography>
            </Box>
          ))}
        </Stack>

        <Typography variant="subtitle1" sx={{ marginTop: "1rem" }}>
          Course Year
        </Typography>
        <Stack sx={{ width: "100%" }}>
          {Year.map((deg, index) => (
            <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
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

export default JobFilter;
