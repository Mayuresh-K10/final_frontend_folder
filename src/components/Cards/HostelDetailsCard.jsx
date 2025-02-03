import * as React from "react";
import { Box, Typography, Stack } from "@mui/material";

export default function HostelDetails(props) {
  return (
    <Box sx={{ marginBottom: "20px" }}>
      <Box sx={{
        boxSizing: "border-box",
        marginLeft: "10px",
        marginTop: "20px"
      }}>
        <Stack sx={{
            fontStyle: "bold",
            fontWeight: "600",
            fontSize: "14px",
            color: "#7B90FF"
        }}>
          <Typography variant="inherit">{props.heading}</Typography>
          <Typography variant="inherit" sx={{ color: "#210366" }}>{props.content}</Typography>
          {props.link && <Typography variant="inherit" sx={{ color: "#7B90FF", display: "flex" }}><Typography variant="inherit" sx={{color: "#FF7900", marginRight: "4px"}}>To know more click here</Typography>{props.link}</Typography>}
        </Stack>
      </Box>
    </Box>
  )
}
