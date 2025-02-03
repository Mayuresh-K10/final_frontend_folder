import React, { useState, useEffect } from "react";
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
  Modal
} from "@mui/material";
import countryCodes from "./countryCode.json";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const django_url = process.env.REACT_APP_BACKEND_DJANGO_URL;

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

const CompanyRegistration = () => {
  const [csrfToken, setCsrfToken] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false); // Modal visibility state


  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get(`${django_url}/get-csrf-token`);
        setCsrfToken(response.data.csrf_token);
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
      }
    };

    fetchCsrfToken();
    setSelectedCountry(countryCodes[0].dial_code);
  }, []);

  const validatePassword = (pwd) => {
    const minLength = /.{8,}/;
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/;
    const number = /[0-9]/;
    const upperCase = /[A-Z]/;
    const lowerCase = /[a-z]/;

    if (!minLength.test(pwd))
      return "Password must be at least 8 characters long.";
    if (!specialChar.test(pwd))
      return "Password must contain at least one special character.";
    if (!number.test(pwd)) return "Password must contain at least one number.";
    if (!upperCase.test(pwd))
      return "Password must contain at least one uppercase letter.";
    if (!lowerCase.test(pwd))
      return "Password must contain at least one lowercase letter.";

    return "";
  };

  const handleChangeCountry = (event) => {
    setSelectedCountry(event.target.value);
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
    setLoading(true);
  
    if (!agreeTerms) {
      toast.error("You must agree to the terms and conditions");
      setLoading(false);
      return;
    }
    
    const formData = new FormData(e.target);
    const data = {
      company_name: formData.get("universityName"),
      official_email: formData.get("email"),
      mobile_number: formData.get("mobileNumber"),
      country_code: selectedCountry,
      password: formData.get("password"),
      linkedin_profile: formData.get("linkedin"),
      company_person_name: formData.get("company"),
    };
  
    if (data.mobile_number.length !== 10) {
      toast.error("Mobile number must be exactly 10 digits");
      setLoading(false);
      return;
    }
    if (passwordError) {
      toast.error(passwordError);
      setLoading(false);
      return;
    }
  
    try {
      const response = await axios.post(
        `${django_url}/register/company/`,
        data,
        {
          headers: {
            "X-CSRFToken": csrfToken,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
  
      if (response.data.success) {
        setIsSuccessModalOpen(true); // Open modal upon success
        toast.success("Registration successful!");
      } else {
        toast.error("Registration unsuccessful. Please try again!!");
      }
    } catch (error) {
      console.error("Error during Registration:", error.response?.data || error.message);
      toast.error("Oops, something went wrong. Please try again!!");
    }
    setLoading(false);
  };
  

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false); // Close modal
    navigate("/"); // Redirect to homepage
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
              A person in-charge of this Company
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
                placeholder="Company Name"
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
                  onChange={handleInputChange}
                />
              </Box>
              <CustomInput
                type={showPassword ? "text" : "password"}
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
                name="company"
                placeholder="Name of the Company Person"
                required
              />
            </Box>

            <Box>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={agreeTerms}
                    onChange={handleAgreeTermsChange}
                    color="primary"
                  />
                }
                label="I agree to the terms and conditions"
              />
            </Box>

            <AnimatedButton
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#FF7900",
                color: "#fff",
                borderRadius: "12px",
                height: "45px",
                fontSize: "1.1rem",
                "&:hover": {
                  backgroundColor: "#FF6200",
                },
              }}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: "#fff" }} />
              ) : (
                "Register"
              )}
            </AnimatedButton>
          </form>
        </CardContent>
      </Card>
      <Backdrop open={loading} sx={{ zIndex: 9999 }}>
        <CircularProgress color="inherit" />
      </Backdrop>

      {/* Success Modal */}
      <Modal
        open={isSuccessModalOpen}
        onClose={handleCloseSuccessModal}
        aria-labelledby="success-modal-title"
        aria-describedby="success-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            borderRadius: "12px",
            boxShadow: 24,
            p: 4,
            textAlign: "center",
          }}
        >
          <Typography id="success-modal-title" variant="h6" component="h2" gutterBottom>
            Registration Successful!
          </Typography>
          <Typography id="success-modal-description" sx={{ mt: 2 }}>
            You have successfully registered. Click below to continue.
          </Typography>
          <Button
            variant="contained"
            onClick={handleCloseSuccessModal}
            sx={{
              mt: 3,
              backgroundColor: "#FF7900",
              color: "#fff",
              "&:hover": { backgroundColor: "#FF6200" },
            }}
          >
            Go to Homepage
          </Button>
        </Box>
      </Modal>
    </motion.div>
  );
};

export default CompanyRegistration;
