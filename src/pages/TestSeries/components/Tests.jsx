import { Box,  Container, Typography } from "@mui/material";
import React, {useState, useEffect} from "react";
import axios from "axios";




export default function Tests() {
  const [instructions, setInstructions] = useState([]);

  const cleanText = (text) => {
    // Replace or remove unwanted characters
    return text.replace(/�/g, "");
  };

  const authToken = process.env.REACT_APP_BACKEND_BEARER_TOKEN;
  const url = process.env.REACT_APP_BACKEND_SERVER_URL;

  const getInstructionsData = async () => {
    try {
      const response = await axios.get(
        `${url}/api/general-instructions`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      const data = response.data;

      if (data) {
        setInstructions(data.data)
      } else {
        console.error("Unexpected response format:", data.data);
      }
    } catch (error) {
      console.error("Error fetching Guidelines:", error);
    }
  };

  useEffect(() => {
    getInstructionsData();
  });

  return (
    <Container maxWidth="xl" >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          marginTop: "3rem",
          justifyContent: "space-between",
        }}
      >
        <Typography
        variant="h1"
          sx={{
            fontSize: "36px",
            fontWeight: "600",
            color: "#210366",
            marginY: "1rem",
            textAlign: "center"
          }}
        >
          Online Test Series
        </Typography>
      </Box>

      <Box
        sx={{
          width: "100%",
          height: "auto",
          borderRadius: "1rem",
          boxShadow: "0px 0px 40px 0px #7B90FF26",
          backgroundColor: "#FFFFFF",
          padding: "1rem",
          overflow: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginY: '2rem'
        }}
      >
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "600",
            color: "#210366",
          }}
        >
          Looking for a one-stop solution to practice online mock tests for
          entrance exams? Then you are at the right destination. Collegecue
          provides you with a wide range of test series to help you prepare
          online for any entrance exam with ease. Get online test series for JEE
          Mains, JEE Advanced, MAT, CAT, NEET and other exams. We provide the
          latest pattern & syllabus-based Online Mock Tests with elaborate
          solutions & performance analysis for all Entrance and Board
          Examinations.
        </Typography>
      </Box>
      {/* Map through the data array to render dynamic content */}
      <Box sx={{
        marginY: "3rem"
      }}>
        <Typography
          sx={{
            fontSize: "1.2rem",
            fontWeight: "500",
            color: "#210366",
            marginY: "1rem"
          }}
        >
          Instructions and GuideLines
        </Typography>
        <ul style={{listStyleType: "none", fontSize: "1rem", fontWeight: "450", color: "#210366",}}>
          {instructions.map((item) => (
            <li key={item.id} style={{margin: "1rem 0"}}>{cleanText(item.attributes.General_Instruction)}</li>
          ))}
        </ul>
      </Box>
      {/* <Box>
        <Typography
          sx={{
            fontSize: "36px",
            fontWeight: "600",
            color: "#210366",
            marginY: "1rem"
          }}
        >
          Select Your Exam Categories
        </Typography>
        <CollegeArticleCard />
      </Box> */}
    </Container >
  );
}
