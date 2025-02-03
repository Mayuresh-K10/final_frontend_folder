import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, Button, Box, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { IoSend } from 'react-icons/io5';
import { toast } from 'react-toastify';
import icon from './message-icon.png';
import { Link } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";

const NewsletterCard = () => {
  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [csrfToken, setCsrfToken] = useState("");
  
  const django_url = process.env.REACT_APP_BACKEND_DJANGO_URL;

  useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        const response = await axios.get(`${django_url}/get-csrf-token`);
        setCsrfToken(response.data.csrfToken);
      } catch (error) {
        console.error("Error fetching CSRF token:", error);
      }
    };
    fetchCsrfToken();
  }, [django_url]);

  const handleSubscribeClick = () => {
    setShowForm(true);
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

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
        toast.success(response.data.message);
      } else {
        toast.error(response.data.error);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    }
    setEmail("");
    setShowForm(false); // Hide the form after submission
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card
        variant="outlined"
        sx={{
          width: '330px',
          backgroundColor: 'rgb(255,244,235)',
          borderRadius: '20px',
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
      >
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom fontWeight={700}>
            Subscribe to Newsletter
          </Typography>
          <Typography variant="body1" paragraph>
            Stay updated with our latest news and updates by subscribing to our newsletter.
          </Typography>
          
          {showForm ? (
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
                    width: "100%",
                    paddingX: "10px",
                  },
                }}
              >
                <input
                  value={email}
                  onChange={handleChange}
                  required
                  style={{
                    flex: 1,
                    height: "60px",
                    border: "none",
                    borderRadius: "16px",
                    outline: "none",
                    paddingLeft: "7px",
                  }}
                  type="email"
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
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubscribeClick}
              sx={{
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
              }}
            >
              Subscribe Now
            </Button>
          )}

{!showForm && (
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 1 }}>
              <img src={icon} alt="message icon" style={{ width: '50px', height: '50px', marginTop: '-50px', marginRight: '16px' }} />
            </Box>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default NewsletterCard;
