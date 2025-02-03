import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import Img1 from '../../assets/pana.png';
import Videos from './Videos';
import Photos from './Photos';
import TopCourses from './TopCourses';
import Notifications from './Notifications';
import News from './News';

const ApplySection = () => {
  return (
    <>
      <Button
        variant="contained"
        fullWidth
        height="54px"
        textCenter
        fontFamily="Poppins"
        sx={{backgroundColor: '#7B90FF', borderRadius: '12px', fontWeight: '700', fontStyle : 'bold', fontSize: '16px', marginTop: '1rem', textTransform: 'capitalize'}}
        disableElevation
      >Apply Now</Button>

      <Button
        fullWidth
        textCenter
        fontFamily="Poppins"
        sx={{color: '#210366', borderRadius: '12px', fontWeight: '700', fontStyle : 'bold', fontSize: '16px', marginTop: '1rem', textTransform: 'capitalize', boxShadow: '0px 0px 40px 0px #7B90FF26'}}
      >Download Brochure
      <FileDownloadOutlinedIcon style={{position: 'absolute', right: '0px'}} />
      </Button>

      <Box
        sx={{
          marginTop: '20px',
          borderRadius: '28px',
          padding: '10px', 
          alignItems: 'center', 
          justifyContent: 'center',
          boxShadow: '0px 0px 40px 0px #7B90FF26'
        }}
      >
      <img src={Img1} alt="School" style={{width: '80px', height: '50px', marginLeft: '8rem'}} />
      <Typography
        sx={{
          fontFamily: 'Poppins',
          fontStyle: 'bold',
          fontWeight: '500',
          fontSize: '16px',
          color: '#210366',
          marginLeft: '5rem'
        }}
      >Interested In This College ?</Typography>
      <Button
        sx={{fontFamily: 'Poppins', backgroundColor: '#FF7900', color: '#ffffff', width: '300px', borderRadius: '12px', fontWeight: '600', fontStyle : 'bold', marginTop: '1rem', marginLeft: '2rem', textTransform: 'capitalize'}}
        ><HelpOutlineIcon style={{marginRight: '0.5rem'}} /> Ask a Question
      </Button>
      </Box>

      <Box sx={{
        marginTop: '20px', 
        borderRadius: '28px', 
        padding: '20px', 
        alignItems: 'center', 
        justifyContent: 'center',
        boxShadow: '0px 0px 40px 0px #7B90FF26'
      }}>
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontStyle: 'bold',
            fontWeight: '600',
            fontSize: '13px',
            color: '#210366',
            marginLeft: '-0.3rem'
          }}
        >Follow & Share, To Get Information About Admission</Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '10px',
          }}
        >
          <Button variant='contained' sx={{backgroundColor: '#7B90FF', borderRadius: '10px 0px 0px 10px', fontSize: '14px', fontFamily: 'Poppins', textTransform: 'capitalize'}}><AddIcon />Follow</Button>
          <Button variant='contained' sx={{backgroundColor: '#210366', borderRadius: '0px 10px 10px 0px', fontSize: '14px', fontFamily: 'Poppins', textTransform: 'capitalize'}}><SendIcon />Share</Button>
        </Box>
      </Box>
      <Videos />
      <Photos />
      <TopCourses />
      <Notifications />
      <News />
    </>
  )
}

export default ApplySection;
