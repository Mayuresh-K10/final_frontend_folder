import React, { useState, useEffect } from "react";
import { Box, IconButton, Typography } from "@mui/material";
import axios from "axios";
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  LinkedIn,
} from "@mui/icons-material";
import { IoSend } from "react-icons/io5";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const django_url = process.env.REACT_APP_BACKEND_DJANGO_URL;

function CustomInput() {
  const [email, setEmail] = useState("");
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    // Fetch CSRF token
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get(`${django_url}/get-csrf-token`);
        setCsrfToken(response.data.csrfToken);
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
      }
    };

    fetchCsrfToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${django_url}/subscriber`,
        { email },
        {
          headers: {
            "X-CSRFToken": csrfToken,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      if (response.data.message) {
        // Show success message
        toast.success(response.data.message);
      } else {
        // Show error message
        toast.error(response.data.error);
      }
    } catch (error) {
      // Show error message
      toast.error("An error occurred. Please try again later.");
    }
    setEmail("");
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "flex-start",

        "@media (max-width : 770px)": {
          alignItems: "center",
          height: "250px",
        },
      }}
    >
      <ToastContainer />
      <Typography variant="h5" sx={{ color: "white" }}>
        Get in touch
      </Typography>
      <Typography sx={{ color: "white" }}>
        We don’t send spam so don’t worry
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: "16px",
            justifyContent: "center",
            width: "100%",
            "@media (max-width : 770px)": {
              width: "100%", // Full width on smaller screens
              paddingX: "10px", // Adjust padding for smaller screens
            },
          }}
        >
          <input
            value={email}
            onChange={handleChange}
            required
            style={{
              flex: 1, // Take remaining space
              height: "60px",
              border: "none",
              borderRadius: "16px",
              outline: "none",
              paddingLeft: "7px",
            }}
            type="email" // Change type to email for email validation
            placeholder="Enter your Email"
          />
          <IconButton
            aria-label="submit"
            type="submit"
            sx={{
              backgroundColor: "#FA4003",
              color: "white",
              borderRadius: "13px",
              marginX: "0.4rem",
              "&:hover": {
                backgroundColor: "#FA4003",
              },
            }}
          >
            <IoSend />
          </IconButton>
        </Box>
      </form>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "90%",
          alignItems: "center",
          alignContent: "center",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        <Link
          aria-label="Share on Facebook"
          to={
            "https://www.facebook.com/share/83yagY1k5qDRBUDj/?mibextid=JRoKGi"
          }
        >
          <Facebook sx={{ color: "white" }} />
        </Link>

        <Link
          aria-label="Visit our Instagram profile"
          to={"https://www.instagram.com/collegecue_com/"}
        >
          <Instagram sx={{ color: "white" }} />
        </Link>

        <Link
          aria-label="Visit our Twitter profile"
          to={"https://x.com/bharattech_in"}
        >
          <Twitter sx={{ color: "white" }} />
        </Link>

        <Link
          aria-label="Visit our YouTube profile"
          to={"https://youtube.com/@bharattech2980?si=o_udlDabR9IbjcB8"}
        >
          <YouTube sx={{ color: "white" }} />
        </Link>

        <Link
          aria-label="Visit our Linkedin profile"
          to={"https://www.linkedin.com/company/collegecue/"}
        >
          <LinkedIn sx={{ color: "white" }} />
        </Link>
      </Box>
    </Box>
  );
}

export default CustomInput;
