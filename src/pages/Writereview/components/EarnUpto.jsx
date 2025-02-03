import { Box, Typography,  Button, Modal } from "@mui/material";
import React from "react";

import BoldHeading from "../../../components/Headings/BoldHeading";
import Orangespan from "../../../components/Headings/Orangespan";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import border from "../images/border.png";
import mg from "../images/Write_review_image.png";
import Steps from "../../writeReviewsSteps/Steps";
import GuidelinesModal from "./GuidelinesModal"

const EarnUpto = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [guideopen, setGuideOpen] = React.useState(false);
  const handleGuideOpen = () => setGuideOpen(true);
  const handleGuideClose = () => setGuideOpen(false);

  return (
    <Box
      sx={{
        display: "flex",
        gap: "1rem",
        color: "#2F1370",
        width: "100%",
        bgcolor: "white",
        "@media (max-width:800px)": {
         
        },
      }}
    >

      <Box
        sx={{
          marginBottom: "2rem",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: "2rem",
          maxWidth:"100vw",
          marginRight: "-1rem",
          '@media (max-width : 770px)': {
            flexDirection: "column",
          }
        }}
      >
        <Box
          sx={{
            marginBottom: "2rem",
            display: "flex",
            width: "100%",
            padding: "2rem",
          }}
        >
          <img
            src={mg}
            alt=""
            style={{
              width: "100%",
              height: "auto",
              verticalAlign: "middle",
              maxWidth:"100vw",
            }}
          />
        </Box>
        <Box
          sx={{
            marginBottom: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            padding: "2rem",
            "@media (max-width:800px)": {
              paddingLeft: "-2rem",
            },
          }}
        >
          <BoldHeading color="black">Write a Review</BoldHeading>
          <img
            src={border}
            alt=""
            style={{
              marginTop: "-4rem",
              marginBottom: "4.5rem",
            }}
          />
          <Button
            sx={{
              background: "#160048",
              color: "#ff9e00",
              border: "1px solid white",
              borderRadius: "15px",
              padding: "15px 29px",
              fontWeight: "800",
              textTransform: "capitalize",
              width: "fit-content",
              display: "inline-flex",
              gap: "0.5rem",
              fontSize: "20px",
              alignItems: 'center',
              "&:hover": {
                color: "#cc5500",
                border: "1px solid #cc5500",
              },
            }}
            onClick={handleOpen}
          >
            Start Writing
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: "20px"
            }}
          >
            <Box sx={{
              backgroundColor: 'white',
              padding: '2rem',
              outline: 'none',
              maxHeight: '80vh', // Set max height for scrollability
              overflowY: 'auto', // Enable vertical scrolling
              width: '80%',
               // Adjust width as needed
               '@media (max-width:800px)':{padding:'1rem'}
            }}>
              <Steps />
            </Box>
          </Modal>
          {/* modal for start Writing  end*/}
          <Box
            sx={{
              marginTop: "2rem",
              padding: "1rem",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              gap: "2rem",
            }}
          >

            <Button onClick={handleGuideOpen}
              sx={{
                textDecoration: "underline",
                curser: "pointer",
                fontSize: "1.5rem",
              }}>
              <Orangespan>Read Guidelines</Orangespan>
            </Button>

            <Box sx={{ display: "flex", gap: "1%" }}>
              <Box sx={{ padding: "1rem", textAlign: "center", flexDirection: "row", }}>
                <Typography
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    color: "black",
                    fontSize: "1.5rem",
                    
                  }}
                >
                  <RateReviewOutlinedIcon
                    sx={{ color: "#FFA500", marginRight: "1rem" }}
                  />
                  13.1k+ Reviews

                </Typography>

              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              textAlign: "center",
              padding: "2rem",
              color: "black",
            }}
          >
            <Typography variant="h5" sx={{ wordSpacing: "0.3rem" }}>
              We have <Orangespan>400+</Orangespan> courses and{" "}
              <Orangespan>15k+ </Orangespan>registered Students
            </Typography>
            <Typography variant="body1">
              Share your experiences and insights about colleges and institutes you&apos;ve attended or interacted with. Your reviews can guide and support fellow students in their academic endeavors.Let your voice be heard! Write a review and contribute to the vibrant community of learners at CollegeCue.
            </Typography>
          </Box>
        </Box>
      </Box>
      <GuidelinesModal open={guideopen} handleGuideClose={handleGuideClose} />

    </Box>
  );
};

export default EarnUpto;