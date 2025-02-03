import * as React from "react";
import { Box, Typography, Stack } from "@mui/material";

export default function Hostelfaculties(props) {
  return(
    <Box sx={{
      boxSizing: "border-box",
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      marginTop: "10px"
    }}>
      <Stack sx={{
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontStyle: 'bold',
        fontSize: '12px',
        color: '#210366',
      }}>
        <Typography variant='inherit'>{props.heading}</Typography>
        <Typography variant='inherit' sx={{fontWeight: '400', color: '#7B90FF'}}>{props.content}</Typography>
      </Stack>
    </Box>
  );
}