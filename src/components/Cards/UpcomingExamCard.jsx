import * as React from "react";
import { Avatar, Box, Link, Typography } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

export default function UpcomingExams(props) {
  return (
    <div style={{ 
      backgroundColor: "",
      width: "330px",
      paddingY: "10px"
     }}>
      <style>
       
        @import url(&apos;https://fonts.googleapis.com/css2?family=Inter&display=swap&apos;);
      </style>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "300px",
          height: "auto",
          gap: "10px",
          marginX: "10px"
        }}
      >
        <Avatar
          src={props.img}
          sx={{
            width: "45px",
            height: "45px",
            borderRadius: "12px",
            marginTop: "8px",
            marginRight: "8px"
          }}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "280px",
            gap: '5px'
          }}
        >
          <Link
          href={props.link}
          target="_blank"
          underline="none"
          >
          <Typography
            sx={{
              width: "100%",
              
              fontFamily: "Inter",
              fontSize: "14px",
              color: "#210366",
              fontWeight: "500",
              lineHeight: "18px",
              marginTop: "8px"
            }}
          >
            {props.name}
          </Typography>
          </Link>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "4px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                gap: "4px",
                width: "auto",
              }}
            >
              <CalendarTodayOutlinedIcon
                color="primary"
                fontSize="small"
                sx={{
                  fontSize: "15px",
                }}
              />
              <Typography
                color="primary"
                sx={{
                  width: "auto",
                  fontFamily: "Inter",
                  fontSize: "10px",
                  fontWeight: "400",
                  lineHeight: "16px",
                }}
              >
                {props.date}
              </Typography>
            </Box>

            
          </Box>
        </Box>
      </Box>

    </div>
  );
}
