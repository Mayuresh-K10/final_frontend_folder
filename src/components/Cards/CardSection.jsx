import { React, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import {Image} from '../../utils/Image';

const CardSection = ({ logo, heading, description }) => {
  const [isExpanded, setExpanded] = useState(false);

  const handleReadMore = () => {
    setExpanded(true);
  };

    const handleReadLess = () => {
        setExpanded(false);
    };
    return (
        <>
            <Box
                sx={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "28px",
                    width: "370px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "1.5rem",
                    transition: "All 0.5s",
                    height:'400px',
                    "&:hover": {
                        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.30);",
                    },
                }}
            >
                <Box
                    sx={{
                        padding: "12px 12px",
                        display: 'flex',
                        height: '150px',
                        maxHeight: 'none',
                    }}
                >
                    <Image
    
                        src={logo}
                        alt="Logo"
                        style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            objectFit:'contain',                        
                            margin: '10px',
                        }}
                    />
                    <Typography
                        sx={{
                            fontFamily: "Poppins",
                            fontSize: "1.4rem",
                            fontWeight: 700,
                            lineHeight: "1.5rem",
                            letterSpacing: "0.03em",
                            textAlign: "left",
                            color: "#210366",
                            padding: "0px 0px 0.6rem",
                            marginLeft:'20px'
                        }}
                    >
                        {heading.slice(0, 50)}
                    </Typography>
                </Box>

        <Box
          sx={{ borderTop: "1px solid #7F56DA4D", paddingTop: "1rem" }}
        ></Box>

        <Box
          sx={{
            padding: "1.8rem 0.8rem",
            backgroundColor: "#7B90FF66",
            borderRadius: "28px",
            textAlign: "center",
            overflow: "hidden",
            alignItems: "center",
            maxHeight: isExpanded ? "none" : "200px",
            // textAlign: "justify",
          }}
        >
          <Typography
            sx={{
              color: "#210366",
              fontSize: "0.9rem",
              fontWeight: 600,
              fontFamily: "Poppins",
              lineHeight: "1.5rem",
              letterSpacing: "0.02em",
              textOverflow: "ellipsis",
            }}
          >
            {isExpanded ? description : description.slice(0, 100) + "..."}
          </Typography>
        </Box>
        <Box
          sx={{ borderTop: "1px solid #7F56DA4D", margin: "1rem 0 0" }}
        ></Box>
        {isExpanded ? (
          <Button
            onClick={handleReadLess}
            sx={{
              display: "block",
              color: "#210366",
              fontFamily: "Poppins",
              fontSize: "1rem",
              fontWeight: 600,
              lineHeight: "1.5rem",
              letterSpacing: "0.02em",
              textAlign: "center",
              textTransform: "none",
              margin: "0 auto",
            }}
          >
            Read Less
          </Button>
        ) : (
          <Button
            onClick={handleReadMore}
            sx={{
              display: "block",
              color: "#210366",
              fontFamily: "Poppins",
              fontSize: "1rem",
              fontWeight: 600,
              lineHeight: "1.5rem",
              letterSpacing: "0.02em",
              textAlign: "center",
              textTransform: "none",
              margin: "0 auto",
            }}
          >
            Read More
          </Button>
        )}
      </Box>
    </>
  );
};

export default CardSection;
