import { Box, Button } from "@mui/material";
import React from "react";

const HowWork = (props) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          //   alignItems: "center",
          width: "310px",
          // height: "240px",
          borderRadius: "1rem",
          backgroundColor: "white",
          margin: "1rem",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.15);",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "180px",
            borderRadius: "1rem",
            // backgroundColor: white,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            width="100%"
            height="100%"
            style={{ objectFit: "contain" }}
            src={props.img}
          />
        </Box>
        <Button
          variant="contained"
          sx={{
            borderRadius: "0.6rem",
            backgroundColor: "#7B90FF",
            color: "white",
            paddingY: "0.7rem",
            textTransform: "capitalize",
            //  textAlign: "center"
          }}
        >
          {props.name}
        </Button>
      </Box>
    </>
  );
};

export default HowWork;
