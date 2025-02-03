import React, { useState, useEffect } from 'react';
import { Card, Box, Typography, Grid, Button } from "@mui/material";

// Utility function to calculate remaining time in seconds
const calculateTimeLeft = (date) => {
  const interviewDate = new Date(date).getTime();
  const now = new Date().getTime();
  const difference = interviewDate - now;

  let timeLeft = {};
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

const Interview = () => {
  // Dummy data for upcoming and past interviews
  const upcomingCandidates = [
    {
      name: 'Prateek',
      role: 'Software Engineer',
      status: 'Pending',
      date: '2024-10-07T13:45:00',
      round: 'Technical Round 1'
    },
    {
      name: 'John Doe',
      role: 'Software Engineer',
      status: 'Pending',
      date: '2024-10-10T14:30:00',
      round: 'Technical Round 1'
    },
    {
      name: 'Jane Smith',
      role: 'UI/UX Designer',
      status: 'Pending',
      date: '2024-10-15T16:00:00',
      round: 'HR Round'
    }
  ];

  const pastCandidates = [
    {
      name: 'Alice Brown',
      role: 'Backend Developer',
      status: 'Selected',
      date: '2024-09-25T13:00:00',
      round: 'Technical Round 2'
    },
    {
      name: 'Bob Johnson',
      role: 'Data Scientist',
      status: 'Rejected',
      date: '2024-09-20T10:00:00',
      round: 'Technical Round 1'
    }
  ];

  // State to store permission request
  const [mediaStream, setMediaStream] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Request permission for media devices (camera, microphone)
  const startInterview = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setMediaStream(stream);  // Save the stream if permissions are granted
    } catch (error) {
      setErrorMessage("Camera and microphone permission denied.");
    }
  };

  return (
<Box sx={{
width: '100%', minHeight: '100vh', background: '#313893', borderTopLeftRadius: '50px', marginBottom: '3rem',
'@media(max-width:1300px)': { borderTopLeftRadius: '0px' }}}
>
<Box sx={{
  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5rem', marginRight: '25px',
  '@media(max-width:1300px)': { marginRight: '25px', marginLeft: '25px' }
}}>
  <Card
    sx={{
      borderRadius: '12px', backgroundColor: 'white', padding: '8rem 3rem 5rem 3rem', width: '100%'
    }}>
      <Typography sx={{fontSize:'72px'}}>Coming Soon</Typography>
      </Card></Box></Box>
  );
};

// Component for displaying upcoming interviews with countdown timer and start button
const UpcomingInterviewCard = ({ candidate, startInterview }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(candidate.date));
  const [buttonEnabled, setButtonEnabled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft(candidate.date);
      setTimeLeft(updatedTimeLeft);

      // Enable the "Start Interview" button when time hits zero
      if (Object.keys(updatedTimeLeft).length === 0) {
        setButtonEnabled(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [candidate.date]);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <Grid item xs={12} md={6}>
      <Card sx={{ padding: '1.5rem', backgroundColor: '#f9f9f9', borderRadius: '12px' }}>
        <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>{candidate.name}</Typography>
        <Typography sx={{ fontSize: '16px' }}>{candidate.role}</Typography>
        <Typography sx={{ fontSize: '16px', color: 'gray' }}>Date: {candidate.date}</Typography>
        <Typography sx={{ fontSize: '16px', color: 'gray' }}>Round: {candidate.round}</Typography>
        <Typography sx={{ fontSize: '16px', color: '#f39c12' }}>Status: {candidate.status}</Typography>

        {/* Timer */}
        {days || hours || minutes || seconds ? (
          <Typography sx={{ fontSize: '16px', color: 'gray' }}>
            Time Left: {days ? `${days}d ` : ''}{hours ? `${hours}h ` : ''}{minutes ? `${minutes}m ` : ''}{seconds}s
          </Typography>
        ) : (
          <Typography sx={{ fontSize: '16px', color: 'green' }}>Interview Ready to Start!</Typography>
        )}

        <Button
          variant="contained"
          sx={{ marginTop: '1rem' }}
          disabled={!buttonEnabled}
          onClick={startInterview}
        >
          Start Interview
        </Button>
      </Card>
    </Grid>
  );
};

export default Interview;




//<Box sx={{
//  width: '100%', minHeight: '100vh', background: '#313893', borderTopLeftRadius: '50px', marginBottom: '3rem',
//  '@media(max-width:1300px)': { borderTopLeftRadius: '0px' }
//}}>
//  <Box sx={{
//    display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5rem', marginRight: '25px',
//    '@media(max-width:1300px)': { marginRight: '25px', marginLeft: '25px' }
//  }}>
//    <Card
//      sx={{
//        borderRadius: '12px', backgroundColor: 'white', padding: '8rem 3rem 5rem 3rem', width: '100%'
//      }}>
//      
//
//      {/* Upcoming Interviews */}
//      <Box sx={{ margin: '3rem 0' }}>
//        <Typography sx={{ fontSize: '20px', fontWeight: '500', color: 'black' }}>Upcoming Interviews</Typography>
//        {upcomingCandidates.length > 0 ? (
//          <Grid container spacing={2} sx={{ marginTop: '1rem' }}>
//            {upcomingCandidates.map((candidate, index) => (
//              <UpcomingInterviewCard candidate={candidate} key={index} startInterview={startInterview} />
//            ))}
//          </Grid>
//        ) : (
//          <Typography sx={{ fontSize: '16px', fontWeight: '500', color: 'gray' }}>No upcoming interviews</Typography>
//        )}
//      </Box>
//
//      {/* Past Interviews */}
//      <Box sx={{ margin: '3rem 0' }}>
//        <Typography sx={{ fontSize: '20px', fontWeight: '500', color: 'black' }}>Past Interviews</Typography>
//        {pastCandidates.length > 0 ? (
//          <Grid container spacing={2} sx={{ marginTop: '1rem' }}>
//            {pastCandidates.map((candidate, index) => (
//              <Grid item xs={12} md={6} key={index}>
//                <Card sx={{ padding: '1.5rem', backgroundColor: '#f9f9f9', borderRadius: '12px' }}>
//                  <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>{candidate.name}</Typography>
//                  <Typography sx={{ fontSize: '16px' }}>{candidate.role}</Typography>
//                  <Typography sx={{ fontSize: '16px', color: 'gray' }}>Date: {candidate.date}</Typography>
//                  <Typography sx={{ fontSize: '16px', color: 'gray' }}>Round: {candidate.round}</Typography>
//                  <Typography
//                    sx={{ fontSize: '16px', color: candidate.status === 'Selected' ? '#2ecc71' : '#e74c3c' }}>
//                    Status: {candidate.status}
//                  </Typography>
//                </Card>
//              </Grid>
//            ))}
//          </Grid>
//        ) : (
//          <Typography sx={{ fontSize: '16px', fontWeight: '500', color: 'gray' }}>No past interviews</Typography>
//        )}
//      </Box>
//
//      {/* Show Video if Permissions Granted */}
//      {mediaStream && (
//        <video
//          style={{ width: "100%", height: "auto", marginTop: "20px" }}
//          autoPlay
//          playsInline
//          muted
//          ref={(video) => {
//            if (video) {
//              video.srcObject = mediaStream;
//            }
//          }}
//        />
//      )}
//      {errorMessage && <Typography sx={{ color: 'red' }}>{errorMessage}</Typography>}
//    </Card>
//  </Box>
//</Box>