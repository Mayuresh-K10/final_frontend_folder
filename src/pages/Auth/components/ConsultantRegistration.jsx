import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FormControlLabel,
  Card,
  CardContent,
  Box,
  Typography,
  Button,
  Checkbox,
  CircularProgress,
  Backdrop,
  Select,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import countryCodes from "./countryCode.json";

const django_url = process.env.REACT_APP_BACKEND_DJANGO_URL;


axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const CustomInput = styled("input")({
  padding: "10px",
  border: "1px solid #ccc",
  borderRadius: "12px",
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
  fontFamily: "inherit",
  fontSize: "1rem",
});

const ConsultantRegistration = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [csrfToken, setCsrfToken] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleChangeCountry = (event) => {
    setSelectedCountry(event.target.value);
  };

  useEffect(() => {
    async function fetchCsrfToken() {
      try {
        const response = await axios.get(`${django_url}/get-csrf-token`);
        setCsrfToken(response.data.csrf_token);
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
      }
    }

    fetchCsrfToken();
    setSelectedCountry(countryCodes[0].dial_code); 
  }, []);

  const validatePassword = (pwd) => {
    const minLength = /.{8,}/;
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;
    const number = /[0-9]/;
    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;

    if (!minLength.test(pwd)) return "Password must be at least 8 characters long.";
    if (!specialChar.test(pwd)) return "Password must contain at least one special character.";
    if (!number.test(pwd)) return "Password must contain at least one number.";
    if (!upperCase.test(pwd)) return "Password must contain at least one uppercase letter.";
    if (!lowerCase.test(pwd)) return "Password must contain at least one lowercase letter.";

    return "";
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleAgreeTermsChange = (event) => {
    setAgreeTerms(event.target.checked);
  };

  const handleInputChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 10) {
      value = value.slice(0, 10);
    }
    e.target.value = value;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    const validationError = validatePassword(newPassword);
    setPasswordError(validationError);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    if (data.mobileNumber.length !== 10) {
      toast.error("Mobile number must be exactly 10 digits");
      return;
    }
    if (passwordError) {
      toast.error(passwordError);
      return;
    }

    try {
      const response = await axios.post(
        `${django_url}/register/consultant/`,
        {
          consultant_name: data.universityName,
          official_email: data.email,
          country_code: selectedCountry,
          mobile_number: data.mobileNumber,
          password: data.password,
          linkedin_profile: data.linkedin,
          consultant_person_name: data.college,
        },
        {
          headers: {
            "X-CSRFToken": csrfToken,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        toast.success("Registration successful!");
        navigate("/");
      } else {
        toast.error("Registration unsuccessful. Please try again!");
      }
    } catch (error) {
      // console.error("Error during registration:", error);
      toast.error("Oops, something went wrong. Please try again!");
    }
    setLoading(false)
  };

  const AnimatedButton = styled(Button)({
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": {
      backgroundColor: "#FF7900",
      color: "#fff",
    },
  });

  return (
    <motion.div
      initial={{ x: -300 }} 
      animate={{ x: 0 }}
      exit={{ x: 300 }}
      transition={{ duration: 0.5 }}
    >
      <ToastContainer />
      <Card
        sx={{
          marginLeft: "auto",
          width: "330px",
          background: "#f9f9f9",
          borderRadius: "20px",
          padding: "1rem",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            padding: "0px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontWeight: "bold",
                fontSize: "1.5rem",
                color: "#210366",
              }}
            >
              Register if you are:
            </Typography>
            <Typography sx={{ fontWeight: "600", color: "#210366" }}>
              A Marketing Manager Of This Institute
            </Typography>
          </Box>

          <form
            onSubmit={handleSubmit}
            style={{
              width: "100%",
              color: "#210366",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <CustomInput
                type="text"
                name="universityName"
                placeholder="Consultant Name"
                required
              />
              <CustomInput
                type="email"
                name="email"
                placeholder="Official Email"
                required
              />
              <Box
                sx={{ display: "flex", gap: "1rem", alignItems: "flex-end" }}
              >
                <Select
                  value={selectedCountry}
                  onChange={handleChangeCountry}
                  sx={{
                    width: "100px",
                    height: "45px",
                    backgroundColor: "white",
                    borderRadius: "12px",
                  }}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: 200,
                      },
                    },
                  }}
                >
                  {countryCodes.map((country) => (
                    <MenuItem key={country.code} value={country.dial_code}>
                      {`${country.emoji} (${country.dial_code})`}
                    </MenuItem>
                  ))}
                </Select>
                <CustomInput
                  type="tel"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  required
                  sx={{ flex: 1 }}
                  
                  onChange={handleInputChange}
                  
                />
              </Box>
              <CustomInput
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={handlePasswordChange}
              />
              {passwordError && (
                <Typography
                  variant="body2"
                  color="error"
                  sx={{ marginTop: "-1rem", fontSize: "0.9rem" }}
                >
                  {passwordError}
                </Typography>
              )}
              <CustomInput
                type="text"
                name="linkedin"
                placeholder="LinkedIn Profile"
                required
              />
              <CustomInput
                type="text"
                name="college"
                placeholder="Name of the Consultant"
                required
              />
            </Box>

            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={agreeTerms}
                    onChange={handleAgreeTermsChange}
                  />
                }
                label="I agree to the terms and conditions"
              />
            </Box>
            <AnimatedButton
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#FF7900",
                borderRadius: "15px",
                padding: "0.5rem 1.5rem",
                color: "#fff",
              }}
            >
              Submit
            </AnimatedButton>
          </form>
        </CardContent>
      </Card>
      <Backdrop
    sx={{
      color: "#fff",
      zIndex: (theme) => theme.zIndex.drawer + 1,
    }}
    open={loading}
  >
    <CircularProgress color="inherit" />
    <Typography sx={{ marginLeft: "1rem" }}>
      Please wait, we are verifying your details...
    </Typography>
  </Backdrop>
    </motion.div>
  );
};

export default ConsultantRegistration;
