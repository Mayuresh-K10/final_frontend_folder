import React from "react";
import { Box, Container, Typography } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";

import { useDispatch } from "react-redux";
import { actions } from "../../../appStore/regSlice";

const StepSix = () => {
  const dispatch = useDispatch();
 

  const handleChange = (e) => {
    const files = e.target.files;
    dispatch(actions.updateStep7(files)); // Dispatch your Redux action with uploaded files
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
            paddingBottom: "1rem",
          }}
        >
          <VerifiedIcon
            sx={{
              fontSize: "6rem",
              color: "#038C09",
            }}
          />
          <Typography
            variant="subtitle1"
            color="#7B90FF"
            fontSize={"1.5rem"}
            fontWeight={600}
          >
            Upload Certificate and ID Card to help us verify your review
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography
            variant="inherit"
            color="initial"
            sx={{ textAlign: "center" }}
          >
            Thank you for Submitting the review. Upload your documents for more
            to get featured in leader board!!!
          </Typography>
          <Box sx={{ marginTop: "1rem" }}>
            <Typography variant="caption" color="initial">
              Upload Certificate/ID Card
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                flexWrap: "wrap",
              }}
            >
              <input
                accept="image/*"
                id="profile-pic-upload"
                multiple={false}
                type="file"
                style={{ display: "none" }}
                onChange={handleChange}
              />
              <label htmlFor="profile-pic-upload">
                <Box
                  sx={{
                    height: "13rem",
                    width: "13rem",
                    background: "#FFFFFF",
                    borderRadius: "2rem",
                    marginRight: "1rem",
                    border: "4px solid #4F5DE4",
                    borderStyle: "dotted",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "1rem",
                  }}
                >
                  <AddPhotoAlternateOutlinedIcon
                    sx={{
                      fontSize: "3rem",
                      color: "#FF7900",
                      cursor: "pointer",
                    }}
                  />
                  <Typography
                    variant="caption"
                    color="initial"
                    sx={{
                      fontWeight: 600,
                      fontSize: "1.2rem",
                      color: "#4F5DE4",
                    }}
                  >
                    Graduation
                  </Typography>
                  <Typography variant="caption" color="initial">
                    Click to Select File
                  </Typography>
                </Box>
              </label>

              {/* College Id Card */}
              <input
                accept="image/*"
                id="profile-pic-upload"
                multiple={false}
                type="file"
                style={{ display: "none" }}
                onChange={handleChange}
              />
              <label htmlFor="profile-pic-upload">
                <Box
                  sx={{
                    height: "13rem",
                    width: "13rem",
                    background: "#FFFFFF",
                    borderRadius: "2rem",
                    marginRight: "1rem",
                    border: "4px solid #4F5DE4",
                    borderStyle: "dotted",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "1rem",
                  }}
                  
                >
                  <AddPhotoAlternateOutlinedIcon
                    sx={{
                      fontSize: "3rem",
                      color: "#FF7900",
                      cursor: "pointer",
                    }}
                  />
                  <Typography
                    variant="caption"
                    color="#4F5DE4"
                    sx={{ fontWeight: 600, fontSize: "1.3rem" }}
                  >
                    College Id Card
                  </Typography>
                  <Typography variant="caption" color="initial">
                    Click to Select File
                  </Typography>
                </Box>
              </label>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default StepSix;
