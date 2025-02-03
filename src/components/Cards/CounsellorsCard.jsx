import { Box, Button, Typography, IconButton } from "@mui/material";
import React, { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { RegisterModal } from "../Modal/MultiModal";

const CounsellorsCard = (props) => {
  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "5px",
        borderRadius: "1rem",
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
          "& img": {
            filter: "brightness(0.7)",
          },
          "& h5": {
            marginTop: "70px",
          },
        },
      }}
      onMouseEnter={() => setShowSocialLinks(true)}
      onMouseLeave={() => {
        setShowSocialLinks(false);
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "18%",
          left: 0,
          width: "100%",
          height: "80%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "20px",
          zIndex: 2,
        }}
      >
        {showSocialLinks && (
          <>
            <Box
              sx={{
                display: "flex",
              }}
            >
              <IconButton sx={iconButtonStyles}>
                <LinkedInIcon sx={iconStyles} />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexWrap: "wrap",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  marginBottom: "5px",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  textTransform: "capitalize",
                }}
              >
                {props.designation}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  marginBottom: "20px",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  textTransform: "capitalize",
                }}
              >
                {props.exp}
              </Typography>
              <Button
              onClick={handleOpen}
                variant="contained"
                sx={{
                  borderRadius: "12px",
                  textTransform: "capitalize",
                  fontWeight: "600",
                  padding: "10px 30px",
                  color: "#FFFFFF",
                  backgroundColor: "#7B90FF",
                  "&:hover": {
                    backgroundColor: "#FF6347",
                  },
                }}
                
              >
                Fix an Appointment
              </Button>
              <RegisterModal
        open={open}
        handleClose={handleClose}
      />
            </Box>
          </>
        )}

        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="h5"
            sx={{
              color: "#000",
              fontWeight: 600,
              textTransform: "capitalize",
              marginTop: "250px",
            }}
          >
            {props.name}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          maxWidth: "350px",
          width: "500px",
          height: "400px",
        }}
      >
        <img
          src={props.image}
          alt="@Bharat-Tech"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "80%",
            transition: "filter 0.3s",
          }}
        />
      </Box>
    </Box>
  );
};

export default CounsellorsCard;

// Styles for the icon button
const iconButtonStyles = {
  backgroundColor: "#4285F4",
  borderRadius: "50%", // Rounded corners
  padding: "10px", // Added padding
};

// Styles for the icon
const iconStyles = {
  fontSize: 30,
  color: "#FFFFFF",
};
