import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { RegisterModal } from "../../components/Modal/MultiModal";

const Card = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box
        sx={{
          cursor: "pointer",
          backgroundColor: "white",
          minWidth: "270px",
          width: "270px",
          height: "390px",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          marginX: "auto",
          paddingBottom: "1.5rem",
          overflow: "hidden",
          textAlign: "left",
          background: "transparent",
          position: "relative",
          transition: "background-color 0.3s ease, transform 0.2s ease",
          "&:hover": {
            transform: "scale(1.01)",
            transition: "all 0.5s",
            boxShadow: "rgb(38, 57, 77) 0px 20px 20px -10px",
            background: "#e3f3fa",
          },
          "@media (max-width:600px)": {
            marginTop: "0rem",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <img
          src={props.imag}
          alt="..."
          style={{
            width: "100%", // Width is 100% of the container
            height: "160px", // Fixed height            backgroundColor: "white",
            margin: "0rem",
            padding: "0rem",
            objectFit: "cover", // Ensures the image fills the container and maintains aspect ratio
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              margin: "0.5rem 1rem",
              padding: "3px",
            }}
          >
            <Typography
              sx={{
                textAlign: "left",
                fontFamily: "sans-serif",
                fontWeight: "700",
                letterSpacing: "0rem",
                fontSize: "0.7rem",
                lineHeight: "0.8rem",
                color: "#210366",
              }}
            >
              {props.course}
            </Typography>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <Typography
                sx={{
                  textAlign: "right",
                  fontFamily: "sans-serif",
                  fontWeight: "700",
                  letterSpacing: "0rem",
                  fontSize: "0.6rem",
                  lineHeight: "0.8rem",
                  color: "#210366",
                }}
              >
                {props.datee}
              </Typography>
            </Box>
          </Box>

          <Typography
            sx={{
              margin: "1rem",
              fontFamily: "sans-serif",
              fontWeight: "600",
              letterSpacing: "0.03rem",
              fontSize: "0.8rem",
              lineHeight: "1rem",
              color: "#210366",
            }}
          >
            {props.data}
          </Typography>
          <Typography
            sx={{
              margin: "0.5rem 1rem",
              fontFamily: "sans-serif",
              fontWeight: "600",
              letterSpacing: "0rem",
              fontSize: "0.7rem",
              lineHeight: "0.7rem",
              color: "#210366",
              padding: "3px",
            }}
          >
            {props.about}
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#7B90FF",
            borderRadius: "28px",
            height: "2rem",
            color: "white",
            marginTop: "2rem",
            alignSelf: "center",
            padding: "1rem 1.3rem",
            textAlign: "center",
            justifyContent: "center",
            fontFamily: "Poppins",
            fontSize: "0.8rem",
            fontWeight: "600",
            width: "fit",
            "&:hover": {
              backgroundImage: "#160048",
              backgroundColor: "white",
              color: "black",
              transform: "scale(1.125)",
              borderColor: "rgba(255, 255, 255, 0.9)",
              transition: "all 1s ease",
              boxShadow:
                "box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;",
            },
            position: "absolute",
            bottom: "1.5rem",
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
    </>
  );
};

export default Card;
