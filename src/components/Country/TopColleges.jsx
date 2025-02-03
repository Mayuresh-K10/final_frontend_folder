import React from "react";
import {CollegesCards} from "../Cards/CollegesCards";
import { Link } from "react-router-dom";
import { Box, Typography, Stack } from "@mui/material";

const TopColleges = ({ topCollegesCard,countryName }) => {
  return (
    <Box sx={{paddingY:"3.5rem"}}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          margin: "0px",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            fontStyle: "bold",
            fontSize: "30px",
            color: "#41355D",
            marginLeft: "1rem",
            textTransform: "capitalize",
          }}
        >
          Top college collection of {countryName}
        </Typography>
      </Box>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
        marginTop="2rem"
      >
        {topCollegesCard.map((val, index) => {
          return (
  
            <CollegesCards
              key={index}
              img={val.img}
              icon={val.icon}
              bgColor={val.bgColor}
              titles={val.titles}
              contents={val.contents}
              contents_body={val.contents_body}  
              countryName={countryName}
              degreeName={val.titles}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default TopColleges;
