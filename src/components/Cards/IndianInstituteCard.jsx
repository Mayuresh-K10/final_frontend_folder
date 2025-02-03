import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Rating,
  Typography,
  Card,
  CardContent,
  Button,
  
} from "@mui/material";
import GrayButton from "../../components/Buttons/GrayButtonInstitute";

import BlueButton from "../../components/Buttons/BlueButton";
import { Link } from "react-router-dom";

import { RegisterModal } from "../Modal/MultiModal";

const IndianInstituteCard = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const card = document.getElementById(
      `card-${props.name.replace(/\s/g, "")}`
    );
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [props.name]);

  return (
    <>
      <Card
        id={`card-${props.name.replace(/\s/g, "")}`}
        sx={{
          border: "2px solid lightGray",
          borderRadius: "20px",
          width: "350px",
          transition:
            "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
          "&:hover": {
            transform: "scale(1.02)", // Zoom out slightly on hover
          },
          "@media (max-width: 350px)": {
             
                width:'300px'
              },
         
        }}
      >
        
        <Link to={`#`} style={{ textDecoration: "none" }}>
          <Box
            sx={{
              padding: "1rem",
             
              height: "250px",
              width:'350px',
              transition: "300ms ease",
              bgcolor: "#F0F8FF",
              borderBottom: "1px solid lightgrey",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "1.5rem",
              "@media (max-width: 350px)": {
                flexDirection: "column",
                height: "auto",
                width:'300px'
              },
            }}
          >
            
            <Avatar
              src={props.img}
              sx={{
                height: "100px",
                width: "100px",
                border: "1px solid black",
                flexShrink: 0, 
                objectFit:'fill'
              }}
            />

            
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between", 
                alignItems: "flex-end",
              }}
            >
              
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "700",
                  fontSize: "1.1rem",
                  color: "#210366",
                  textAlign: "right", 
                  marginBottom: "0.5rem",
                  
                }}
              >
                {props.name}
              </Typography>
              
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "700",
                  fontSize: "0.9rem",
                  color: "#210366",
                  textAlign: "right", 
                  marginBottom: "0.5rem",
                }}
              >
                {props.AcedemyName}
              </Typography>
              
              <Typography
                variant="body2"
                sx={{
                  fontWeight: "500",
                  fontSize: "0.9rem",
                  color: "#210366",
                  textAlign: "right", 
                  marginBottom: "0.5rem",
                }}
              >
                Centers: {props.CenterName}
              </Typography>

              
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end", 
                  gap: "0.5rem",
                }}
              >
                
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: "1rem",
                    color: "#210366",
                  }}
                >
                  {props.stars}/10
                </Typography>
                
                <Rating
                  name="read-only"
                  value={props.stars}
                  precision={0.1}
                  readOnly
                />
                
                <Button
                  variant="outlined"
                  onClick={handleOpen}
                  sx={{
                    fontSize: "0.7rem",
                    alignSelf: "flex-end", 
                    "&:hover": {
                      bgcolor: "#FFFFFF",
                      border: "1px solid lightgrey",
                      color: "#F05E23",
                    },
                  }}
                >
                  Request Call
                </Button>
              </Box>
            </Box>
          </Box>
        </Link>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "0.5rem",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: "1vh",
              paddingTop: "1vh",
              height: "auto",
            }}
          >
            {props.BlueBoxes &&
              props.BlueBoxes.map((item) => {
                return <BlueButton text={item.name} link={item.link} />;
              })}
            <Box>
              
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              width: "100%",
              justifyContent: "center",
              alignContent: "center",
              whiteSpace: "nowrap",
              "@media (max-width:800px)": {
                flexDirection: "column",
                whiteSpace: "wrap",
                height: "auto",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                gap: "0.5rem",
                width: "100%",
                "@media (min-width:800px)": {
                  width: "100%",
                },
                "@media (max-width:800px)": {
                  justifyContent: "center",
                  alignItems: "center",
                  paddingBottom: "1vh",
                  paddingTop: "1vh",
                  height: "auto",
                  flexDirection: "column",
                },
              }}
            >
              <GrayButton text="Info" id={props.id}/>
              <GrayButton text="Courses & Fees" id={props.id} />
              <Typography
                sx={{
                  fontWeight: "500",
                  fontSize: "1rem",
                  color: "#004792",
                  paddingTop: "0.2rem",
                  "@media (max-width:800px)": {
                    textAlign: "center",
                    height: "auto",
                    flexDirection: "column",
                  },
                }}
              >
                {props.CoursesFee}
              </Typography>
            </Box>
          </Box>
        </CardContent>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "1.5rem",
            
            padding: "1rem",
            
            "@media (max-width:800px)": {
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "0",
              marginBottom: "2vh",
              height: "auto",
            },
          }}
        >
          <Button
            sx={{
              height: "35px",
              width: "150px",
              borderRadius: "10px",
              color: "white",
              padding: "1rem",
              textAlign: "center",
              backgroundColor: "#F05E23",
              justifyContent: "center",
              fontSize: "1rem",
              fontWeight: "600",
              border: "1px solid lightgrey",
              textTransform: "none",
              "&:hover": {
                bgcolor: "#FFFFFF",
                border: "1px solid lightgrey",
                color: "#F05E23",
              },
            }}
            onClick={handleOpen}
          >
            Brochure
          </Button>
          <Button
            sx={{
              height: "35px",
              width: "150px",
              borderRadius: "10px",
              color: "white",
              padding: "1rem",
              textAlign: "center",
              backgroundColor: "#F05E23",
              justifyContent: "center",
              fontSize: "1rem",
              fontWeight: "600",
              border: "1px solid lightgrey",
              textTransform: "none",
              "&:hover": {
                bgcolor: "#FFFFFF",
                border: "1px solid lightgrey",
                color: "#F05E23",
              },
            }}
            onClick={handleOpen}
          >
              Apply Now
        
          
          </Button>
          <RegisterModal
            open={open}
            showCollegeInfo={true}
            collegeImage={props.img}
            collegeName={props.name}
            handleClose={handleClose}
          />
        </Box>
      </Card>
    </>
  );
};

export default IndianInstituteCard;
