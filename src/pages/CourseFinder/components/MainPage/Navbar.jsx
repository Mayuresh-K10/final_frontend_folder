import React from 'react'
import { Stack, Button } from '@mui/material';
import NavbarLinks from './NavbarLinks';
import { useNavigate } from "react-router-dom";



const Navbar = () => {
const navigate = useNavigate();
  const content = [
    "Top Colleges & Universities", "Top Courses", "Exams", "Study Abroad", "Reviews", "News", "Admission 2023",
    "Write A Review", "More"
  ];
  
  return (
    <>
      <Stack
      width={"100%"}
        direction='row'
        flexWrap='wrap'
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: "#160048"
        }}>
        {
          content.map((val, index) => {
              return (
                <NavbarLinks
                  key={index}
                  content={val}
                />
              );
          })}

        <Button
          variant='contained'
          sx={{
            backgroundColor: "#7B90FF",
            color: "white",
            paddingX: "1rem",
            marginLeft: "0.5rem",
          }} onClick={() => navigate("/login")}>

          Login
        </Button>
      </Stack>
    </>



  )
}

export default Navbar