import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Box } from '@mui/material';



const SocialMediaLinks = () => {
  return (
    <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem",
        fontSize:20,
        marginLeft:100
       

    }}>
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faInstagram}  />
    </a>
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faFacebook}  />
    </a>
    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faLinkedin}  />
    </a>
    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faTwitter}  />
    </a>
    <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon icon={faYoutube} className="social-icon" />
    </a>
  </Box>
  );
};

export default SocialMediaLinks;