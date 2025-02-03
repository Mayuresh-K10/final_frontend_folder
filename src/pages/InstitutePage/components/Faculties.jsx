import React from "react";
import { Box, Button, Typography, Stack } from "@mui/material";
import HostelFaculties from "../../../components/Cards/HostelFacultiesCard";
import { HostelFacultiesData } from "../../Hostel/Data";

const Faculties = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: "2rem",
          boxShadow: "0px 0px 40px 0px #7B90FF26",
          borderRadius: "28px",
          padding: "20px",

          "@media (max-width: 600px)": {
            padding: "10px",
            marginTop: "1rem",
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: "700",
            fontSize: "20px",
            color: "#210366",

            "@media (max-width: 600px)": {
              fontSize: "18px",
            },
          }}
        >
          Faculties
        </Typography>
        <Stack spacing={4}>
          {HostelFacultiesData.map((item, id) => {
            return <HostelFaculties key={id} {...item} />;
          })}
        </Stack>
        <Button
          sx={{
            padding: "8px 28px",
            fontFamily: "Poppins",
            fontWeight: "600",
            fontSize: "14px",
            textTransform: "capitalize",
            color: "#FFFFFF",
            backgroundColor: "#FF7900",
            borderRadius: "12px",
            marginTop: "1rem",
            marginLeft: "3.5rem",

            "@media (max-width: 600px)": {
              marginLeft: "0",
              marginTop: "0.5rem",
            },
            "&:hover": {
              background: "#ffffff",
              color: "#FF7900",
            },

            "@media (max-width: 600px)": {
              width: "100%",
            },
          }}
        >
          View All Faculties (39)
        </Button>
      </Box>
    </>
  );
};

export default Faculties;
