import { Container, Typography, Box, Grid } from "@mui/material";
import React from "react";
import Cards from "./Cards";



export default function AllCards() {
  let data = [
    { headings: "JEE Mains", attempts: "5344 Attempted" },
    { headings: "JEE-Advanced ", attempts: "5062 Attempted" },
    { headings: "NEET", attempts: "5994 Attempted" },
    { headings: "CLAT", attempts: "6861 Attempted" },
    { headings: "Defence Service Exam", attempts: "6970 Attempted" },
    { headings: "MBA-CAT", attempts: "5213 Attempted" },
    { headings: "UPSC", attempts: "6513 Attempted" },
    
  ];

 

 
  return (
    
    <Container maxWidth="xl" sx={{paddingY:"3.5rem"}}>
      <Box>
        <Typography
          sx={{
            fontSize: "2.5rem",
            fontWeight: "600",
            textAlign: "left",
            
            color: "#210366",
            marginY: "1rem"
            
          }}
        >
          Popular Tests
        </Typography>
      </Box>
      <Grid container spacing={3} justifyContent="center" alignItems="center" paddingY="2rem" marginRight="2.5rem" >
        {data.map(({ headings, attempts }, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Cards headings={headings} attempts={attempts} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
