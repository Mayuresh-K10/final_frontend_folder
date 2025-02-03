import * as React from "react";
import { Avatar, Box, Typography, Stack } from "@mui/material";

export default function HostelNews(props) {
  return (
    <Box sx={{ marginBottom:"20px" }}>
      <Box sx={{
        boxSizing: "border-box",
        marginLeft: "20px",
        marginTop: "20px"
      }}>
        <Stack direction="row" spacing={2}>
          <Avatar
            src={props.img}
              sx={{
                position: "absolute",
                width: "70px",
                height: "50px",
                borderRadius: "5px",
                marginTop: "8px",
              }}
          ></Avatar>
          <Stack spacing={0.5} sx={{
            width: "100%",
            fontFamily: "Poppins",
            fontStyle: "bold",
            fontSize: "12px",
            color: "#210366",
            fontWeight: "600",
            paddingTop: "10px",
            paddingLeft: "60px"
          }}>
            <Typography variant="inherit">{props.name}</Typography>
            <Typography variant="inherit" sx={{ fontWeight: "500", paddingLeft: "20px" }}>{props.date}</Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}