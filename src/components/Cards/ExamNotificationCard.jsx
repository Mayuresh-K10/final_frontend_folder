import * as React from "react";
import { Avatar, Box, Link, Typography} from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

export default function ExamNotifications(props) {
  return (
    <div style={{ backgroundColor: "" }}>
      <style>
      
        @import
        url(&apos;https://fonts.googleapis.com/css2?family=Inter&display=swap&apos;);
      </style>

      <Box
        sx={{
          width: "300px",
          height: "auto",
          display: "flex",
          flexDirection: "row",
          borderBottom: "1.5px solid rgba(123, 144, 255, 0.4)",
          marginLeft: "16px",
        }}
      >
       
        <Avatar
          src={props.img}
          sx={{
            position: "absolute",
            width: "45px",
            height: "45px",
            borderRadius: "12px",
            marginTop: "8px",
            marginBottom: "13px",
          }}
        ></Avatar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link
            href={props.link}
            target="_blank"
            underline="none"
          >
          <Typography
            // variant="h5"
            sx={{
              width: "230px",
              // paddingLeft: "40px",
              marginLeft: "74px",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontSize: "14px",
              color: "#210366",
              fontWeight: "500",
              lineHeight: "18px",
              marginTop: "8px",
            }}
          >
            {props.name}
          </Typography>
          </Link>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <CalendarTodayOutlinedIcon
              color="primary"
              fontSize="small"
              sx={{
                // position: "absolute",
                fontSize: 15,
                marginLeft: "75.25px",
                marginTop: "5.92px",
                marginBottom: "5.92px"

               
              }}
            />
            <Typography
              // variant="h5"
              sx={{
                marginTop: "5.29px",
                marginLeft: "5.25px",
                fontFamily: "Inter",
                fontStyle: "normal",
                fontSize: "10px",
                color: "#7B90FF",
                fontWeight: "400",
                lineHeight: "16px",
                marginBottom: "6.29px"
              }}
            >
              {props.date}
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
