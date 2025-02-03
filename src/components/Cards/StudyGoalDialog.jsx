import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  IconButton,
  Typography,
  Box,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import {  cityData } from "../../data/DataLocation";
import {  useLocation, useNavigate } from "react-router-dom";

const SecondPopup = ({ onClose }) => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const location = useLocation();
  const navigate = useNavigate();

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    handleFilterCity(city.city);
  };

  const handleFilterCity = (cityName) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("selectedCity", cityName);
    navigate(`/coming-soon`);
  };

 

  const handleResetClick = () => {
    navigate('/', { replace: true }); // Navigate to the root URL without parameters and replace the current entry in the history stack
  };

  const filteredCities = cityData.filter((city) =>
    city.city.toLowerCase().includes(searchValue.toLowerCase())
  );



  return (
    <Dialog open={true} onClose={onClose} fullWidth maxWidth="xs">
      <DialogTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          Select Your Study Preference
          <IconButton edge="end" color="inherit" onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ marginBottom: "1rem" }}>
          <input
            style={{
              width: "100%",
              outline: "none",
              border: "none",
            }}
            placeholder="Search / Select Your Preferred City"
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </Box>

        <Typography variant="h6">Popular Cities</Typography>

        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
          {filteredCities.map((cityInfo) => (
            <Box
              key={cityInfo.city}
              sx={{
                width: ["50%", "33%", "33%"],
                cursor: "pointer",
                padding: "1rem 1.5rem",
                borderRadius: "4px",
                border: "1px solid rgb(19, 162, 228 , 0)",
                ":hover": {
                  backgroundColor: "rgb(236, 249, 255)",
                  color: "rgb(19, 162, 228)",
                  border: "1px solid rgb(19, 162, 228)",
                },
              }}
              onClick={() => handleCitySelect(cityInfo)}
            >
              
                <span>
                  <img src={cityInfo.img} alt={cityInfo.city} />
                </span>
                <Typography sx={{ textAlign: "center" }} >{cityInfo.city}</Typography>
            </Box>
          ))}
        </Box>
        
        <Button
          variant="outlined"
          onClick={handleResetClick}
          sx={{
            backgroundColor: "#E4441A",
            marginX: "auto",
            borderRadius: "20px",
            color: "white",
            '&:hover': {
              color: "black"
            }
          }}
        >
          Reset</Button>
      </DialogTitle>
    </Dialog>
  );
};

const StudyGoalDialog = ({ isOpen, onClose, data }) => {

  const location = useLocation();
  const navigate = useNavigate();

  const [showSecondPopup, setShowSecondPopup] = useState(false);

  const handleCourseClick = (course) => {
    setShowSecondPopup(true);
    updateURLWithCourse(course);
  };

  const updateURLWithCourse = (course) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("course", course);
    navigate(`/top-universities?${searchParams.toString()}`);
  };

  const handleResetClick = () => {
    navigate('/', { replace: true }); // Navigate to the root URL without parameters and replace the current entry in the history stack
  };

  return (
    <>
      <Dialog
        open={isOpen && !showSecondPopup}
        onClose={onClose}
        fullWidth
        maxWidth="xs"
        sx={{
          "& .MuiDialog-paper": {
            overflowY: "visible",
            borderRadius: "2rem",
            padding: "1rem 0 0",
            border: "10px solid #553cdf",
          },
          "& .MuiDialogTitle-root": {
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
          },
          "& .MuiTypography-h4": {
            marginBottom: "1rem",
            display: "flex",
          },
          "& .MuiTypography-h6": {
            marginBottom: "0.5rem",
            display: "flex",
            justifyContent: "space-between",
          },
        }}
      >
        <DialogTitle>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            Select Your Study Preference
            <IconButton edge="end" color="inherit" onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: "flex" }}>
            <span>
              <img
                src={data?.imagePath}
                alt={data?.label}
                style={{ marginRight: "8px" }}
                width={60} height={60}
              />
            </span>

            <Typography sx={{ padding: "7px 0" }} variant="h5">
              {data?.label}
            </Typography>
          </Box>

          <Typography
            variant="h6"
            onClick={() => handleCourseClick(data.course1)}
            sx={{
              cursor: "pointer",
              padding: "1rem 0.5rem",
              borderRadius: "4px",
              border: "1px solid rgb(19, 162, 228 ,0)",
              ":hover": {
                backgroundColor: "rgb(236, 249, 255)",
                color: "rgb(19, 162, 228)",
                border: "1px solid rgb(19, 162, 228)",
              },
            }}
          >
            {data?.course1}
            <ArrowRightIcon />
          </Typography>
          {data?.course2 && (
            <Typography
              variant="h6"
              onClick={() => handleCourseClick(data.course2)}
              sx={{
                cursor: "pointer",
                padding: "1rem 0.5rem",
                borderRadius: "4px",
                border: "1px solid rgb(19, 162, 228 ,0)",
                ":hover": {
                  backgroundColor: "rgb(236, 249, 255)",
                  color: "rgb(19, 162, 228)",
                  border: "1px solid rgb(19, 162, 228)",
                },
              }}
            >
              {data?.course2}
              <ArrowRightIcon />
            </Typography>
          )}
          {data?.course3 && (
            <Typography
              variant="h6"
              onClick={() => handleCourseClick(data.course3)}
              sx={{
                cursor: "pointer",
                padding: "1rem 0.5rem",
                borderRadius: "4px",
                ":hover": {
                  backgroundColor: "rgb(236, 249, 255)",
                  color: "rgb(19, 162, 228)",
                  border: "1px solid rgb(19, 162, 228)",
                },
              }}
            >
              {data?.course3}
              <ArrowRightIcon />
            </Typography>
          )}
          <Button
            variant="outlined"
            onClick={handleResetClick}
            sx={{
              backgroundColor: "#E4441A",
              borderRadius: "20px",
              marginX: "auto",
              color: "white",
              '&:hover': {
                color: "black"
              },
            }}
          >
            Reset</Button>
        </DialogTitle>
      </Dialog>

      {showSecondPopup && (
        <SecondPopup onClose={() => setShowSecondPopup(false)} />
      )}
    </>
  );
};

export default StudyGoalDialog;