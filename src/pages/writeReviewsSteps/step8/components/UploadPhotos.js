import React from "react";
import {
  Box,
  Typography,
  Button,
} from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
export default function MainHead() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        flexDirection: "row",
        gap: "2rem",
        marginTop: "4rem",
        "@media (max-width: 600px)": {
          flexDirection: "column",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "centre",
          flexDirection: "column",
          width: "100%",
          bgcolor: "#D9E4EC",
          gap: "2.5rem",
          border: "dashed 2px black",
          paddingLeft: "5rem",
          paddingTop: "4rem",
          paddingRight: "5rem",
          paddingBottom: "4rem",
        }}
      >
        <Box display="flex" width="100%" justifyContent="centre" >
          <AccountCircleOutlinedIcon

            sx={{
              width: "120px",
              height: "120px", margin
                            left: "7rem", color: "#210366"
            }}
          />
        </Box>
        <Typography
          sx={{
            color: "#210366",
            fontSize: "15px",
            fontWeight: "500",
            flexWrap: "wrap",

          }}
        >
          Upload Your Photo and Get a chance to feature on Collegecue
          leaderboard
        </Typography>
        <Button
          variant="contained"
          sx={{
            width: "250px",
            height: "45px",
            borderRadius: "12px",
            bgcolor: "#FFA500",
            color: "white",
            marginLeft: "6rem"
          }}
        >
          Upload Profile Pic
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "centre",
          flexDirection: "column",
          width: "100%",
          bgcolor: "#D9E4EC",
          gap: "2.5rem",
          border: "dashed 2px black",
          paddingLeft: "5rem",
          paddingTop: "4rem",
          paddingRight: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <Box display="flex" width="100%" justifyContent="centre" >
          <AddPhotoAlternateOutlinedIcon

            sx={{
              width: "120px",
              height: "120px", margin
                            left: "7rem", color: "#210366"
            }}
          />
        </Box>
        <Typography
          sx={{
            color: "#210366",
            fontSize: "15px",
            fontWeight: "500",
            flexWrap: "wrap",
            marginBottom: "1rem",
            marginLeft: "6rem",
          }}
        >
          Drag and drop files to upload or
        </Typography>
        <Button
          variant="contained"
          sx={{
            marginTop: "10px",
            width: "250px",
            height: "45px",
            borderRadius: "12px",
            bgcolor: "#FFA500",
            color: "white",
            marginLeft: "6rem"
          }}
        >
          Upload photo
        </Button>
      </Box>


    </Box>
  );
}
