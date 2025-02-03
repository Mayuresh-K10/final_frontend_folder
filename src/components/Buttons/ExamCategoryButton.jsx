import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const ExamCategoryButton = ({ label, onClick }) => {

  const nav = useNavigate();

  const applyfilter = () => {
    const filter = label
    nav(`/exam/${filter}`)
  }


  return (
    <Button
      variant="div"
      sx={{
        fontSize: "1.1rem",
        textTransform: "none",
        fontWeight: 600,
        lineHeight: "1.3rem",
        letterSpacing: "0em",
        textAlign: "center",
        borderRadius: "15px",
        padding: "0.5rem 2rem",
        margin: ".5rem 0.5rem 0 0 ",
        borderColor: "#7B90FF",
        borderWidth: "0.1rem",
        borderStyle: "solid",
        color: "#210366",
        backgroundColor: "white",
        "&:hover": {
          backgroundColor: "rgb(251,168,98)",
          color: "white",
          boxShadow: "0 2px 8px 2px rgba(178,178,178,0.048)",
        },
      }}
      onClick={applyfilter}
    >
      {label}
    </Button>
  );
};

export default ExamCategoryButton;
