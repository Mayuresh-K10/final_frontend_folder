import React from "react";
import ExamNotifications from "../../../components/Cards/ExamNotificationCard";
import {ExamNotificationData} from "../Data";
import { Box, Typography } from "@mui/material";

const ExamNotificationsRender = () => {
  return (
    <>
      <Box
        sx={{
          marginTop: "40px",
          marginBottom: "40px",
          filter: "drop-shadow(0px 0px 40px rgba(123, 144, 255, 0.1))",
        }}
      >
      <Box
        sx={{

          boxSizing: "border-box",
          height: "57px",
          width: "330px",
          background: "#FFFFFF",
          borderBottom: "2.5px solid #7B90FF",
          borderRadius: "20px 20px 0px 0px",
          textAlign: "center",
          border: "1px solid grey",
          // borderBottom: "none"
        }}
      >      
      <Box
      sx={{
        boxSizing: "border-box",
        height: "66px",
        borderBottom: "1.5px solid rgba(123, 144, 255, 0.4)",
      }}
    >
        <Typography
          sx={{
          
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "24px",
            color: "#210366",
            textAlign: "center",
            paddingTop: "6px",
            marginTop: "16px",
          }}
        >
          Exams Notification
        </Typography>
        </Box>
      </Box>

        <Box
          sx={{
            // position: "fixed",
            width: "330px",
            height: "auto",
            background: "#FFFFFF",
            boxShadow: "0px 4px 40px rgba(123, 144, 255, 0.1)",
            borderRadius: "0px 0px 20px 20px",
            paddingY : "10px",
            border: "1px solid grey",
           
          }}
        >
          
          {ExamNotificationData.map((item, id) => {
            return (
              <ExamNotifications
                key={id}
                name={item.name}
                date={item.date}
                img={item.img}
              />
            );
          })}
        
        </Box>
      </Box>
    </>
  );
};

export default ExamNotificationsRender;
