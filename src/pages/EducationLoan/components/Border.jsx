import React from "react";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";
import BankdetailCard from "./BankdetailCard";
import AdSenseComponent from "../../../utils/AdSenseComponent";

const Border = () => {
  return (
    <>
      <Stack
        maxWidth="xl"
        width={"100%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        >
        <AdSenseComponent />
        <Typography
          variant="h1"
          sx={{
            fontWeight: 600,
            marginTop:'-2rem',
            color: "#160048",
            fontSize:'2rem'
          }}
        >
          Bank Details
        </Typography>
        <Box
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}>

          <BankdetailCard />
        </Box>
         <AdSenseComponent />
      </Stack>
    </>
  );
};

export default Border;
