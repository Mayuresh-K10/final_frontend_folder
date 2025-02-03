import React, { useState } from "react";
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

const Card = ({ heading, find, reviews }) => {
  const [expanded, setExpanded] = useState(false);
  const handleToggleExpand = () => {
    setExpanded(!expanded);
  };

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Accordion
      expanded={expanded}
      onChange={handleToggleExpand}
      sx={{
        background: "white",
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
          {reviews.map(({ Answer }, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "1vh",
              }}
            >
              <Checkbox sx={{ marginRight: "8px" }} />
              <Typography>{Answer}</Typography>
            </Box>
          ))}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
};

export default Card;
