import React, { useState, useEffect } from "react";
import {
  Card, Box, Typography, Accordion, AccordionSummary, AccordionDetails, Button
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import dayjs from "dayjs";

// Utility function to calculate remaining time
const calculateTimeLeft = (date, time) => {
  const interviewDate = dayjs(`${date} ${time}`);
  const now = dayjs();
  const difference = interviewDate.diff(now);

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
  const [mediaStream, setMediaStream] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  // Upcoming and past interview data (separated)
  const upcomingInterviews = [
    { id: 1, title: 'Frontend Developer Interview', jobId: 'J123', company: 'Tech Corp', date: '2024-10-10', time: '10:00 AM', status: 'upcoming' },
    { id: 3, title: 'Fullstack Developer Interview', jobId: 'J125', company: 'NextGen Tech', date: '2024-10-15', time: '1:00 PM', status: 'upcoming' },
    { id: 5, title: 'Frontend Developer Interview', jobId: 'J1263', company: 'BharatTech', date: '2024-10-07', time: '2:14 PM', status: 'upcoming' },
  ];

  const pastInterviews = [
    { id: 2, title: 'Backend Developer Interview', jobId: 'J124', company: 'Innova Solutions', date: '2024-09-25', time: '2:00 PM', status: 'past' },
    { id: 4, title: 'Product Manager Interview', jobId: 'J126', company: 'Global Services', date: '2024-09-18', time: '3:30 PM', status: 'past' },
  ];

  // Request permission for media devices (camera, microphone)
  const joinInterviewCall = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setMediaStream(stream);
    } catch (error) {
      setErrorMessage("Camera and microphone permission denied.");
    }
  };

  return (
    <Box sx={{
      width: '100%', minHeight: '100vh', background: '#313893', borderTopLeftRadius: '50px', marginBottom: '3rem',
      '@media(max-width:1300px)': { borderTopLeftRadius: '0px' }
    }}>
      <Box sx={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5rem', marginRight: '25px',
        '@media(max-width:1300px)': { marginRight: '25px', marginLeft: '25px' }
      }}>
        <Card
          sx={{
            borderRadius: '12px', backgroundColor: 'white', padding: '2rem 3rem 5rem 3rem', width: '100%'
          }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2rem' }}>
            
            {/* Upcoming Interviews */}
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Upcoming Interviews</Typography>
            {upcomingInterviews.length > 0 ? (
              upcomingInterviews.map((interview) => (
                <UpcomingInterviewCard
                  key={interview.id}
                  interview={interview}
                  joinInterviewCall={joinInterviewCall}
                />
              ))
            ) : (
              <Typography>No upcoming interviews</Typography>
            )}

            {/* Past Interviews */}
            <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: '2rem' }}>Past Interviews</Typography>
            {pastInterviews.length > 0 ? (
              pastInterviews.map((interview) => (
                <Accordion key={interview.id} sx={{ width: '100%' }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{interview.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>Job ID: {interview.jobId}</Typography>
                    <Typography>Company: {interview.company}</Typography>
                    <Typography>Date: {interview.date}</Typography>
                    <Typography>Time: {interview.time}</Typography>
                  </AccordionDetails>
                </Accordion>
              ))
            ) : (
              <Typography>No past interviews</Typography>
            )}
          </Box>

          {/* Show Video if Permissions Granted */}
          {mediaStream && (
            <video
              style={{ width: "100%", height: "auto", marginTop: "20px" }}
              autoPlay
              playsInline
              muted
              ref={(video) => {
                if (video) {
                  video.srcObject = mediaStream;
                }
              }}
            />
          )}
          {errorMessage && <Typography sx={{ color: 'red' }}>{errorMessage}</Typography>}
        </Card>
      </Box>
    </Box>
  );
};

// Component for displaying upcoming interviews with countdown timer and join button
const UpcomingInterviewCard = ({ interview, joinInterviewCall }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(interview.date, interview.time));
  const [buttonEnabled, setButtonEnabled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft(interview.date, interview.time);
      setTimeLeft(updatedTimeLeft);

      // Enable the "Join Call" button when time hits zero
      if (Object.keys(updatedTimeLeft).length === 0) {
        setButtonEnabled(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [interview.date, interview.time]);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <Accordion sx={{ width: '100%' }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>{interview.title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>Job ID: {interview.jobId}</Typography>
        <Typography>Company: {interview.company}</Typography>
        <Typography>Date: {interview.date}</Typography>
        <Typography>Time: {interview.time}</Typography>

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
          onClick={joinInterviewCall}
        >
          Join Call
        </Button>
      </AccordionDetails>
    </Accordion>
  );
};

export default Interview;
