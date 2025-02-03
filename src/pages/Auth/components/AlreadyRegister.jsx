import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  Input,
  InputLabel,
  CircularProgress,
  Backdrop,
  Link,
  Select,
  MenuItem,
} from "@mui/material";

const AlreadyRegister = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = () => {
    navigate("/otp");
  };

  return (
    <Card
      sx={{
        maxWidth: "430px",
        fontFamily: "Poppins, sans-serif",
        fontStyle: "normal",
        background: "#ffffff",
        boxShadow: "none",
        border: "none",
        padding: "1rem",
        "& *": {
          fontSize: "0.75rem",
          color: "#210366",
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          padding: "0px",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: "bold", fontSize: "1.4rem !important" }}
          >
            Continue With Phone
          </Typography>
          <Typography sx={{ fontWeight: "600" }}>
            You will receive a four digit code to verify next
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              flex: 1,
            }}
          >
            <InputLabel htmlFor="phoneNumber" sx={{ color: "#210366" }}>
              Number
            </InputLabel>
            <Box
              sx={{
                display: "flex",
                gap: "0.5rem",
              }}
            >
              <Select
                id="countryCode"
                value={selectedOption}
                required
                onChange={handleChange}
                sx={{
                  border: "1px solid gray",
                  borderRadius: "0.625rem", // 10px in rem
                  padding: "0.3125rem 1.1875rem", // 5px 19px in rem
                  "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                    {
                      width: "1.875rem", // 30px in rem
                      padding: "0px 0.625rem !important", // 0px 10px in rem
                    },
                }}
              >
                <MenuItem value="+1">+1</MenuItem>
                <MenuItem value="+91">+91</MenuItem>
              </Select>

              <Input
                id="phoneNumber"
                type="text"
                required
                disableUnderline
                sx={{
                  border: "1px solid gray",
                  borderRadius: "0.625rem", // 10px in rem
                  padding: "0.3125rem 1.1875rem", // 5px 19px in rem
                }}
              />
            </Box>
          </Box>
        </Box>

        <form
          onSubmit={handleSubmit}
          style={{
            width: "90%",
            color: "#210366",
            display: "flex",
            flexDirection: "column",
            gap: "0.7rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              gap: "0.5rem",
            }}
          ></Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                maxWidth: "11.375rem",
                backgroundColor: "#FF7900",
                borderRadius: "0.625rem !important",
                padding: "0.5rem 1rem",
                color: "#fff",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#2f1370",
                  backgroundColor: "#fff",
                  transition: "color 0.3s ease",
                },
              }}
            >
              Request Otp
            </Button>
            <Link
              href="/register"
              sx={{
                fontSize: "0.7rem",
                textDecoration: "none",
                cursor: "pointer",
                fontWeight: "600",
                color: "#210366",
              }}
            >
              New to Collegecue ?
              <span style={{ color: "#FF7900" }}> Create an account</span>
            </Link>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default AlreadyRegister;
