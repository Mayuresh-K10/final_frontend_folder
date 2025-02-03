import React, { useState } from "react";
import { Box, Card, CardActions, CardContent, Divider, Typography, Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import QuizIcon from "@mui/icons-material/Quiz";
import GuidelinesPopup from "./GuidelinesPopup";


export default function Cards({ headings, attempts }) {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleStartTest = () => {
    setShowPopup(true);
  };

  const handleAccept = () => {
    setShowPopup(false); // Close the popup
    const filter = headings;
    navigate(`/quiz/${filter}`); // Redirect to the quiz route
  };

  const handleCancel = () => {
    setShowPopup(false);
  };


  return (
    <>
      <Card
        sx={{
          width: "20rem",
          borderRadius: "2rem",
          boxShadow: "0px 0px 40px 0px #7B90FF26",
          backgroundColor: "#FFFFFF",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                textAlign: "left",
                color: "#210366",
              }}
            >
              {headings}
            </Typography>
          </Box>
        </CardContent>
        <Divider />
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <AccessAlarmIcon sx={{ color: "#7B90FF" }} />
            <Typography
              sx={{
                marginLeft: "1rem",
              }}
            >
              60 Min
            </Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            <QuizIcon sx={{ color: "#4285f4" }} />
            <Typography
              sx={{
                marginLeft: "1rem",
              }}
            >
              30 Ques
            </Typography>
          </Box>
        </CardContent>
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                textAlign: "left",
              }}
            >
              {attempts}
            </Typography>
          </Box>
        </CardContent>
        <CardActions
          sx={{
            justifyContent: "center",
          }}
        >
          <Button
            onClick={handleStartTest}
            sx={{
              height: "40px",
              backgroundColor: "#FB3F00",
              borderRadius: "12px",
              color: "#FFFFFF",
              '&:hover': {
                color: "black"
              },
            }}
          >
            <Typography
              sx={{
                width: "84px",
                height: "17px",
                textTransform: "capitalize",
                fontSize: "16px",
                fontWeight: "700",
                lineHeight: "17px",
                letterSpacing: "0em",
                textAlign: "center",
              }}
            >
              Start
            </Typography>
            <ArrowRightIcon
              sx={{
                width: "15px",
              }}
            />{" "}
          </Button>
          <Button
            sx={{
              height: "40px",
              backgroundColor: "#7B90FF",
              borderRadius: "12px",
              color: "#FFFFFF",
              '&:hover': {
                color: "black"
              },
            }}
          >
            <Link to={"/login"}>
            
            <Typography
              sx={{
                width: "84px",
                height: "17px",
                textTransform: "capitalize",
                fontSize: "16px",
                fontWeight: "700",
                lineHeight: "17px",
                letterSpacing: "0em",
                textAlign: "center",
              }}
            >
              Download
            </Typography>
            </Link>
            <SaveAltIcon
              sx={{
                width: "15px",
              }}
            />{" "}
            
          </Button>
        </CardActions>
      </Card>
      <GuidelinesPopup
        open={showPopup}
        onClose={handleCancel}
        onAccept={handleAccept}
      />
    </>
  );
}