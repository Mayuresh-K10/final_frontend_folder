import React from 'react';
import NotificationCard from './NotificationCard';
import {HostelNotificationData} from './Data';
import { Box, Typography } from '@mui/material';
import "@fontsource/poppins";

const Notification = () => {
  return (
    <>
      <Box sx={{
        marginTop: '2rem', 
        boxShadow: '0px 0px 40px 0px #7B90FF26',
        borderRadius: '28px'
      }}>
        <Box
          sx={{
            boxSizing: 'border-box',
            height: '57px',
            background: '#FF7900',
            borderRadius: '28px 28px 0px 0px'
          }}
        >
          <Box>
            <Typography sx={{
              fontFamily: 'Poppins',
              fontStyle: 'bold',
              fontWeight: '700',
              fontSize: '20px',
              color: '#FFFFFF',
              padding: '12px',
              marginLeft: '0.5rem'
            }}
            >Notifications</Typography>
          </Box>
        </Box>
        <Box sx={{
          height: '480px',
          borderRadius: "0px 0px 28px 28px",
          marginBottom: '2rem'
        }}>
          {HostelNotificationData.map((item, id) => {
            return (
              <NotificationCard
                key={id}
                {...item}
              />
            );
          })}
        </Box>
      </Box>
    </>
  )
}

export default Notification;