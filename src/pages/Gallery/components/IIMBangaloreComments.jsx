import React from 'react';
import {
  Container,
  Divider,
  Box,
  Typography,
  FilledInput,
} from '@mui/material';
import ViewAllButton from '../Button/ViewAllButton';
import OrangeButton from '../Button/OrangeButton';
import { Link } from 'react-router-dom';

function IIMBangaloreComments() {
  return (
    <Box
      sx={{
        marginTop: "-4rem",
        borderRadius: '1.75rem',
        boxShadow: '0px 2px 8px rgba(99, 99, 99, 0.2)',
        // margin: '1rem 0',
        padding: '1.5rem',
        backgroundColor: '#FFFFFF',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '1rem',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            color: '#210366',
            fontWeight: 'bold',
          }}
        >
          Comments
        </Typography>
        <ViewAllButton />
      </Container>
      <Divider />
      <Container sx={{ marginTop: '1rem' }}>
        <FilledInput
          disableUnderline
          fullWidth
          multiline
          minRows={5}
          sx={{
            borderRadius: '1.3rem',
            textTransform: 'none',
            borderColor: '#7B90FF',
            borderWidth: '0.2rem',
            borderStyle: 'solid',
            height: '146px',
            fontSize: '1rem',
            fontWeight: '500',
            lineHeight: '1.375rem',
            color: '#210366',
            backgroundColor: '#F6F6F6',
            padding: '1rem',
          }}
          placeholder="Write Your Comments"
          id="Comments"
        />
      </Container>
      <Container sx={{ textAlign: 'end', marginTop: '1rem' }}>
        <Link to={"/login"}>
        <OrangeButton buttonName="Login To Add Comments" />
        </Link>
        
      </Container>
    </Box>
  );
}

export default IIMBangaloreComments;
