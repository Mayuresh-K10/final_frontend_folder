import React, { useState, useEffect } from "react";
import { Button, TextField, Typography, Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import backgroundImage from "./images/bg.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../../Assets/cc2.svg";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import "./ComingSoonPage.css";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const django_url = process.env.REACT_APP_BACKEND_DJANGO_URL;

const ComingSoonPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [email, setEmail] = useState("");
  const [csrfToken, setCsrfToken] = useState("");
  const navigate = useNavigate();

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
        `${django_url}/job_portal`,
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
        navigate("/");
        setEmail("");
      } else {
        // Show error message
        toast.error(response.data.error);
      }
    } catch (error) {
      // Show error message
      toast.error("An error occurred. Please try again later.");
    }
  };

  return (
    <Box
      className="coming-soon-container"
      sx={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6)), url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",

        color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: isSmallScreen ? "0 20px" : "0 100px",
      }}
    >
      <Box textAlign="center" width="100%" maxWidth="600px">
        <Link to="/">
          <img
            src={logo}
            alt="Collegecue logo"
            width={isSmallScreen ? "210px" : "420px"}
            style={{ marginBottom: "20px" }}
          />
        </Link>
      </Box>
      <Grid container justifyContent="center">
        <Grid item xs={12} sx={{ marginTop: "-4rem" }}>
          <Typography
            variant={isSmallScreen ? "h2" : "h1"}
            sx={{ margin: "3rem 0", color: "white",textAlign:"center" }}
          >
            Coming Soon
          </Typography>
          <br />
          <form onSubmit={handleSubmit}>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
              sx={{ marginTop: 2, maxWidth: "400px", width: "100%" }}
            >
              <Typography>Subscribe now to get the latest updates</Typography>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  placeholder="Enter your email"
                  fullWidth
                  required // Make email field required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={{
                    backgroundColor: "#fff",
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ height: "100%" }}
                >
                  Subscribe For More
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ComingSoonPage;
