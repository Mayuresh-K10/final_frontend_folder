import * as React from "react";
import { Avatar, Box, Typography, Stack } from "@mui/material";

export default function HostelNotification(props) {
  const containsReadMore = props.name.includes('...Read More');

  return(
    <Box sx={{marginBottom:"20px"}}>
      <Box sx={{
        boxSizing: "border-box",
        marginLeft: "20px",
        marginTop: "20px"
      }}>
        <Stack direction="row" spacing={2}>
          <Stack>
            <Avatar
              src={props.img}
              sx={{
                position: "absolute",
                width: "80px",
                height: "70px",
                borderRadius: "5px",
                marginTop: "8px",
              }}
            ></Avatar>
            <Typography sx={{
              width: "80px",
              marginTop: "80px",
              fontFamily: "Poppins",
              fontStyle: "bold",
              fontSize: "12px",
              color: "#210366",
              fontWeight: "500",
              lineHeight: "16px",
            }}>{props.date}</Typography>
          </Stack>
          <Stack sx={{
            width: "100%",
            fontFamily: "Poppins",
            fontStyle: "bold",
            fontSize: "12px",
            color: "#210366",
            fontWeight: "500",
            lineHeight: "18px",
            paddingTop: '10px',
            paddingLeft: "10px"
          }}>
            {props.src && <Typography variant="inherit" sx={{ fontSize: "13px", fontWeight: "600", marginTop: "-1rem", marginBottom: "1rem" }}>{props.src}</Typography>}
            <Typography variant="inherit">
              {containsReadMore ? (
                <>
                  {props.name.substring(0, props.name.indexOf("...Read More"))}
                  <span style={{color: "#7B90FF"}}>...Read More</span>
                </>
              ) : (
                props.name
              )}
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  )
}